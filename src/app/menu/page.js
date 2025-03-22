"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Menu() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    fetch("/api/cakes") // Fetching cakes from API
      .then((res) => res.json())
      .then((data) => setCakes(data));
  }, []);

  return (
    <div>
      <Navbar />
      <section className="bg-pink-200 py-12 text-center">
        <h1 className="text-5xl font-extrabold text-pink-700 mb-4">
          Our Cake Menu 🍰
        </h1>
        <p className="text-lg text-gray-700">
          Choose from our delicious handcrafted cakes.
        </p>
      </section>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cakes.map((cake) => (
            <div key={cake.id} className="rounded-2xl shadow-lg bg-white">
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{cake.name}</h2>
                <p className="text-gray-600">${cake.price}</p>
                <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
