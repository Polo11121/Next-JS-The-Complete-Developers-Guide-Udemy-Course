"use server";

export const createTopic = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
};
