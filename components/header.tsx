import Link from "next/link";
import { FaChessKnight } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex min-h-20 flex-wrap items-center justify-center bg-zinc-950 text-base font-semibold text-zinc-200 sm:text-lg">
      <Link href="/">
        <FaChessKnight className="mx-2.5 mb-1.5 inline-block text-xl sm:text-2xl" />
        <span className="inline-block">Chess Memory Game</span>
      </Link>
    </header>
  );
}
