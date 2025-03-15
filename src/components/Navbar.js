"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-pink-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">BakeLikeAChef 🍰</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/menu" className="hover:underline">
            Menu
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
