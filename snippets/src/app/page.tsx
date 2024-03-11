import { db } from "@/db";
import Link from "next/link";

const HomePage = async () => {
  const snippets = await db.snippet.findMany();

  return (
    <div className=" flex flex-col gap-2">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Snippets</h1>
          <Link
            className="border border-gray-400 rounded py-1 px-2 text-lg font-semibold"
            href="snippets/new"
          >
            Add New
          </Link>
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        {snippets.map(({ id, title }) => (
          <li
            key={id}
            className="border border-gray-400 rounded p-2 text-lg font-semibold"
          >
            <Link href={`/snippets/${id}`} className="flex justify-between ">
              <span>
                Snippet {id}: {title}
              </span>
              <span>View</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
