import { PropsWithChildren } from "react";
import Link from "next/link";

const SnippetsLayout = ({ children }: PropsWithChildren) => (
  <>
    <Link href="/"> &larr; Home</Link>
    {children}
  </>
);

export default SnippetsLayout;
