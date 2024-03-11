import Link from "next/link";

export const Header = () => (
  <header className="text-white flex justify-between items-center py-3 px-10 w-full absolute z-10">
    <Link href="/" className="font-bold text-3xl">
      CORP
    </Link>
    <nav className="flex items-center gap-5 text-lg font-semibold">
      <Link href="/">Home</Link>
      <Link href="/performance">Performance</Link>
      <Link href="/reliability">Reliability</Link>
      <Link href="/scale">Scale</Link>
    </nav>
  </header>
);
