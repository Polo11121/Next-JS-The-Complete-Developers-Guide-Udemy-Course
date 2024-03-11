"use server";

import { db } from "@/db";
import { Snippet } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type SnippetWithoutId = Omit<Snippet, "id">;

export const createSnippet = async (
  code: string,
  _formState: { message: string },
  formData: FormData
) => {
  try {
    const title = formData.get("title") as string;

    if (title.length < 3) {
      return {
        message: "Title must be at least 3 characters long",
      };
    }
    if (code.length < 10) {
      return {
        message: "Code must be at least 10 characters long",
      };
    }

    const data = {
      code,
      title,
    };
    const snippet = await db.snippet.create({ data });

    revalidatePath(`/`);
    redirect(`/snippets/${snippet.id}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    }
    return {
      message: "Failed to create snippet",
    };
  }
};

export const editSnippet = async (id: number, data: SnippetWithoutId) => {
  const snippet = await db.snippet.update({
    where: { id },
    data,
  });

  revalidatePath(`/snippets/${snippet.id}`);
  redirect(`/snippets/${snippet.id}`);
};

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: { id },
  });

  revalidatePath(`/`);
  redirect(`/`);
};
