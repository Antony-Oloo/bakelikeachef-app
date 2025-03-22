"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Birthday", "Wedding", "Cupcake", "Vegan"];

export default function Home() {
  const [cakes, setCakes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/api/cakes")
      .then((res) => res.json())
      .then((data) => {
        setCakes(data);
        setFiltered(data); // default view
      });
  }, []);

  const filterCakes = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFiltered(cakes);
    } else {
      const result = cakes.filter((cake) => cake.category === category);
      setFiltered(result);
    }
  };

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="bg-pink-100 py-12 text-center">
        <h1 className="text-4xl font-bold text-pink-700">
          Discover Delicious Cakes for Every Occasion 🍰
        </h1>
        <p className="text-gray-600 mt-2">
          Handcrafted | Beautiful | Baked with Love
        </p>
      </section>

      {/* Categories */}
      <div className="container mx-auto px-4 py-6 flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterCakes(category)}
            className={`px-4 py-2 rounded-full border ${
              activeCategory === category
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-white text-pink-500 border-pink-300"
            } hover:bg-pink-600 hover:text-white transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cake Listings */}
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((cake) => (
          <motion.div
            key={cake.id}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl shadow-lg bg-white"
          >
            <img
              src={cake.image}
              alt={cake.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-pink-700">{cake.name}</h3>
              <p className="text-gray-600">${cake.price}</p>
              <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600">
                Order Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
