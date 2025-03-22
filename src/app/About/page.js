"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-pink-200 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-pink-700 mb-4">
          About BakeLikeAChef 🍰
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          At BakeLikeAChef, we believe every cake tells a story. Our passion for
          baking started in a small home kitchen and has grown into a thriving
          bakery, delivering happiness in every bite!
        </p>
      </section>

      {/* About Us Content */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://source.unsplash.com/600x400/?bakery,cakes"
            alt="Bakery Image"
            className="rounded-2xl shadow-lg w-full"
          />
          <div>
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Our Story</h2>
            <p className="text-gray-700">
              Founded in 2015, BakeLikeAChef started with a dream to bring
              high-quality, handcrafted cakes to every home. Our bakers use
              only the finest ingredients, and every cake is baked with love.
            </p>
            <h2 className="text-3xl font-bold text-pink-600 mt-6 mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>🍰 Freshly baked with premium ingredients</li>
              <li>🎨 Custom cake designs for special occasions</li>
              <li>🚚 Fast & reliable delivery</li>
              <li>🌿 100% organic and locally sourced ingredients</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Meet Our Team</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://source.unsplash.com/150x150/?chef"
              alt="Chef"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Aqeedah Goodwin</h3>
            <p className="text-gray-600">Head Baker & Cake Artist</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://source.unsplash.com/150x150/?pastry-chef"
              alt="Pastry Chef"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Emmanuel Mwambota</h3>
            <p className="text-gray-600">Pastry Specialist</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://source.unsplash.com/150x150/?baker"
              alt="Baker"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Antony Oloo</h3>
            <p className="text-gray-600">Cake Designer</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
