"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { paths } from "@/lib/paths";
import { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as z from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Name can only contain lowercase letters and dashes",
    }),
  description: z.string().min(10),
});

type FormState = {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
};

export const createTopic = async (
  _formState: FormState,
  formData: FormData
): Promise<FormState> => {
  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be logged in to create a topic"],
      },
    };
  }

  let topic: Topic;

  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    const validatedData = createTopicSchema.safeParse({ name, description });

    if (!validatedData.success) {
      return { errors: validatedData.error.flatten().fieldErrors };
    }

    topic = await db.topic.create({
      data: {
        slug: validatedData.data.name,
        description: validatedData.data.description,
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

  revalidatePath(paths.home());
  redirect(paths.topicShow(topic.slug));
};
