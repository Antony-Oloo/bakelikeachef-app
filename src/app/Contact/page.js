"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-pink-200 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-pink-700 mb-4">Contact Us 📞</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Got a question? Want to order a custom cake? Reach out to us!
        </p>
      </section>

      {/* Contact Section */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Our Contact Details</h2>
            <p className="text-gray-700">
              📍 123 Baker Street, Cape Town, CT 10210 <br />
              📧 Email: <a href="mailto:info@bakelikeachef.com" className="text-pink-500 hover:underline">info@bakelikeachef.com</a> <br />
              📞 Phone: <a href="tel:+44 7797 822054" className="text-pink-500 hover:underline">+44 7797 822054</a>
            </p>

            {/* Google Map Embed (Optional) */}
            <iframe
              className="mt-4 w-full h-64 rounded-xl shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.1234567890123!2d18.391234567890123!3d-33.91234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6789abcdef01%3A0x23456789abcdef01!2s123+Main+Rd%2C+Sea+Point%2C+Cape+Town%2C+8005%2C+South+Africa!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Send Us a Message</h2>

            {submitted ? (
              <p className="text-green-600 font-semibold">Thank you! We will get back to you soon. 🎉</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}