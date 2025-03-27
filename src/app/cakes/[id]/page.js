"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCartStore } from "@/store/cartStore";

export default function CakeDetail() {
  const { id } = useParams();
  const [cake, setCake] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetch("/api/cakes")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((c) => c.id.toString() === id);
        setCake(selected);
      });
  }, [id]);

  if (!cake) return <div className="text-center py-20">Loading...</div>;

  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Cake Image */}
        <div className="bg-white h-96 flex items-center justify-center p-6 rounded-xl shadow-md mb-6">
          <img
            src={cake.image}
            alt={cake.name}
            className="max-h-full object-contain"
          />
        </div>

        {/* Cake Info */}
        <h1 className="text-4xl font-bold text-pink-600 mb-4">{cake.name}</h1>
        <p className="text-xl text-gray-700 mb-2">Price: ${cake.price}</p>

        <button
          onClick={() => addToCart(cake)}
          className="mt-4 bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition"
        >
          Add to Cart
        </button>

        <div className="mt-8 text-gray-700">
          <h3 className="font-semibold text-lg">Description</h3>
          <p className="mb-2">
            A rich and moist handcrafted cake, perfect for celebrations. Delicious and made with love.
          </p>

          <h3 className="font-semibold text-lg mt-4">Ingredients</h3>
          <ul className="list-disc list-inside">
            <li>Flour</li>
            <li>Eggs</li>
            <li>Milk</li>
            <li>Chocolate / Vanilla / Berries</li>
          </ul>

          <h3 className="font-semibold text-lg mt-4">Allergy Info</h3>
          <p className="text-red-500">
            Contains dairy, eggs, gluten, and may contain traces of nuts.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
