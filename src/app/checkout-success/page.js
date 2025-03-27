"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

export default function CheckoutSuccess() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart(); // clear cart when arriving at success page
  }, [clearCart]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-20 text-center px-4">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">🎉 Thank you for your order!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Your delicious cakes are being prepared. We'll notify you when they're ready!
        </p>
        <Link
          href="/"
          className="inline-block mt-6 bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
