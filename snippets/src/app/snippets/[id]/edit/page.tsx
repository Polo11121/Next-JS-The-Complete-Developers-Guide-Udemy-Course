import { SnippetEditForm } from "@/components";
import { notFound } from "next/navigation";
import { db } from "@/db";

type SnippetPageProps = {
  params: {
    id: string;
  };
};

const SnippetEditPage = async ({ params }: SnippetPageProps) => {
  const snippet = await db.snippet.findUnique({
    where: { id: Number(params.id) },
  });

  if (!snippet) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold h-[42px] flex items-center">
        Edit snippet: {snippet.title}
      </h1>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
