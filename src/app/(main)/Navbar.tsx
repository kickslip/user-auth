import UserButton from "@/components/UserButton";
import Link from "next/link";

export default function Navbar() {
    return (
      <header className="sticky top-0 z-10 bg-card shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3">
          <Link href="/" className="text-2xl font-bold text-primary">
            Codeeza
          <UserButton className="sm:ms-auto"/>
          </Link>
        </div>
      </header>
    );
  }