"use server";

import { redirect } from "next/navigation";

export const searchByTerm = async (formData: FormData) => {
  const term = formData.get("term");

  if (!term || typeof term !== "string" || !term.length) {
    redirect("/");
  }

  redirect(`/search?term=${term}`);
};
