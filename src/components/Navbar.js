"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-pink-600 tracking-tight">
          BakeLikeAChef 🍰
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-md mx-4">
          <input
            type="text"
            placeholder="Search cakes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* Cart */}
        <Link href="/cart" className="relative">
          <ShoppingCart className="w-6 h-6 text-pink-600 hover:text-pink-800" />
          {/* Cart item badge (can be dynamic later) */}
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </Link>
      </div>
    </nav>
  );
}
