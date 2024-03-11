"use client";

import { useEffect } from "react";
import Link from "next/link";

type GlobalErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
const GlobalErrorPage = ({ error, reset }: GlobalErrorPageProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const resetHandler = () => reset();

  return (
    <div className="flex flex-col justify-center items-center h-screen text-xl bold">
      <h2>Something went wrong!</h2>
      <button className="underline" onClick={resetHandler}>
        Try again
      </button>
      or
      <Link href="/" className="underline">
        Go Home
      </Link>
    </div>
  );
};

export default GlobalErrorPage;
