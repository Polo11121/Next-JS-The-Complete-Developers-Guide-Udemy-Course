import { notFound } from "next/navigation";
import { db } from "@/db";
import { Snippet } from "@/components";
import { deleteSnippet } from "@/actions/snippets";
import Link from "next/link";

type SnippetPageProps = {
  params: {
    id: string;
  };
};

const SnippetPage = async ({ params }: SnippetPageProps) => {
  const snippet = await db.snippet.findUnique({
    where: { id: Number(params.id) },
  });

  if (!snippet) {
    notFound();
  }

  const deleteHandler = deleteSnippet.bind(null, snippet.id);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Snippet: {snippet.title}</h1>
        <div className="flex gap-2">
          <Link
            href={`${snippet.id}/edit`}
            className="p-2 border border-gray-400 rounded"
          >
            Edit
          </Link>
          <form action={deleteHandler}>
            <button className="p-2 border border-gray-400 rounded">
              Delete
            </button>
          </form>
        </div>
      </div>
      <Snippet code={snippet.code} />
    </div>
  );
};

export default SnippetPage;

export const generateStaticParams = async () => {
  const snippets = await db.snippet.findMany();

  return snippets.map(({ id }) => ({ id: id.toString() }));
};
