"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { paths } from "@/lib/paths";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as z from "zod";

const createTopicSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

type FormState = {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
};

export const createPost = async (
  topicName: string,
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

  let post: Post;

  try {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const validatedData = createTopicSchema.safeParse({ title, content });

    if (!validatedData.success) {
      return { errors: validatedData.error.flatten().fieldErrors };
    }

    const topic = await db.topic.findUnique({
      where: { slug: topicName },
    });

    if (!topic) {
      return {
        errors: {
          _form: ["Topic not found"],
        },
      };
    }

    post = await db.post.create({
      data: {
        ...validatedData.data,
        topicId: topic.id,
        userId: session.user.id,
      },
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

  revalidatePath(paths.topicShow(topicName));
  redirect(paths.postShow(topicName, post.id.toString()));
};
