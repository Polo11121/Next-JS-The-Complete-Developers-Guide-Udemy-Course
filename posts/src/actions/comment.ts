"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { paths } from "@/lib/paths";
import { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import * as z from "zod";

const createCommentSchema = z.object({
  content: z.string().min(3),
});

type FormState = {
  success?: boolean;
  errors: {
    content?: string[];
    _form?: string[];
  };
};

export const createComment = async (
  {
    postId,
    parentId,
  }: {
    postId: string;
    parentId?: string;
  },
  _formState: FormState,
  formData: FormData
): Promise<FormState> => {
  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be logged in to create a post"],
      },
    };
  }

  let topic: Topic | null;

  try {
    const content = formData.get("content") as string;

    const validatedData = createCommentSchema.safeParse({ content });

    if (!validatedData.success) {
      return {
        errors: validatedData.error.flatten().fieldErrors,
        success: false,
      };
    }

    await db.comment.create({
      data: {
        content: validatedData.data.content,
        postId: postId,
        parentId: parentId,
        userId: session.user.id,
      },
    });

    topic = await db.topic.findFirst({
      where: { posts: { some: { id: postId } } },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    }

    return {
      errors: {
        _form: ["Something went wrong"],
      },
    };
  }

  if (!topic) {
    return {
      errors: {
        _form: ["Failed to revalidate topic"],
      },
    };
  }

  revalidatePath(paths.postShow(topic.slug, postId));

  return {
    errors: {},
    success: true,
  };
};
