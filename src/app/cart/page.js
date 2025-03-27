"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const router = useRouter();

  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-pink-600">Your Cart 🛒</h1>

        {cart.length === 0 ? (
          <p>
            Your cart is empty.{" "}
            <Link href="/" className="text-pink-500 underline">
              Start shopping →
            </Link>
          </p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 text-right">
              <p className="text-xl mb-2">
                Total:{" "}
                <span className="font-bold text-pink-600">${total}</span>
              </p>

              <button
               onClick={() => router.push("/checkout-success")}
                  className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
                    >
                  Checkout
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
