import Link from "next/link";

const SnippetNotFoundPage = () => (
  <div className="flex flex-col justify-center items-center h-screen text-xl bold">
    Sorry, but we couldn&apos;t find that snippet that particular snippet.
    <Link href="/" className="underline">
      Go Home
    </Link>
  </div>
);

export default SnippetNotFoundPage;
