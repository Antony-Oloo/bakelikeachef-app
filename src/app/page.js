"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = ["All", "popcakes", "cakesicles", "Cupcakes", "Vegan", "Normal Cakes"];

const normalCakeSubcategories = [
  "Wedding Cakes",
  "Birthday Cakes",
  "Anniversary Cakes",
  "Gender Reveal Cakes",
  "Graduation Cakes",
  "Character Cakes",
];

export default function Home() {
  const [cakes, setCakes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch("/api/cakes")
      .then((res) => res.json())
      .then((data) => {
        setCakes(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filterCakes = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setFiltered(cakes);
    } else if (category.startsWith("Normal - ")) {
      const sub = category.replace("Normal - ", "");
      const result = cakes.filter((cake) => cake.category === sub);
      setFiltered(result);
    } else {
      const result = cakes.filter((cake) => cake.category === category);
      setFiltered(result);
    }
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-pink-100 py-12 text-center">
        <h1 className="text-4xl font-bold text-pink-700">
          Discover Delicious Cakes for Every Occasion 🍰
        </h1>
        <p className="text-gray-600 mt-2">
          Handcrafted | Beautiful | Baked with Love
        </p>
      </section>

      {/* Category Filters */}
      <div className="container mx-auto px-4 py-6 flex flex-wrap gap-4 justify-center">
        {categories.map((category) =>
          category !== "Normal Cakes" ? (
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
          ) : null
        )}

        {/* Normal Cakes Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`px-4 py-2 rounded-full border ${
              activeCategory.startsWith("Normal -")
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-white text-pink-500 border-pink-300"
            } hover:bg-pink-600 hover:text-white transition`}
          >
            Normal Cakes ▼
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 shadow-xl rounded-xl z-50">
              {normalCakeSubcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => {
                    filterCakes(`Normal - ${sub}`);
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-pink-100 text-gray-700"
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Cake Grid */}
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((cake) => (
          <motion.div
            key={cake.id}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl overflow-hidden relative shadow-lg"
          >
            {/* Full Image */}
            <img
              src={cake.image}
              alt={cake.name}
              className="w-full h-80 object-cover"
            />

            {/* Overlay with Name + Button */}
            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4 flex flex-col md:flex-row items-center justify-between">
              <h3 className="text-lg font-semibold">{cake.name}</h3>
              <Link
                href={`/cakes/${cake.id}`}
                className="mt-2 md:mt-0 bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600 transition text-sm"
              >
                View Cake
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
