"use client";

import { searchByTerm } from "@/actions/search";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

export const Search = () => {
  const params = useSearchParams();
  const term = params.get("term") || "";

  return (
    <form action={searchByTerm}>
      <Input name="term" placeholder="Search posts..." defaultValue={term} />
    </form>
  );
};
