"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1>SaveaRepo</h1>
      <nav>
        <Link href={"/cities"}>Cities</Link>
      </nav>
    </header>
  );
}
