import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-pink-400">About BakeLikeAChef</h3>
          <p className="text-sm text-gray-300">
            BakeLikeAChef is a Cape Town-based artisan cake studio delivering handcrafted cakes made with love and premium ingredients.
          </p>
          <Link
            href="/About"
            className="inline-block mt-2 text-pink-300 hover:underline text-sm"
          >
            Read more →
          </Link>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-pink-400">Contact Us</h3>
          <p className="text-sm text-gray-300">
            Got a question, need a custom order, or just want to say hi? We’d love to hear from you!
          </p>
          <Link
            href="/Contact"
            className="inline-block mt-2 text-pink-300 hover:underline text-sm"
          >
            Contact us →
          </Link>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-pink-400">Opening Hours</h3>
          <ul className="text-sm text-gray-300">
            <li>Monday – Saturday: 9:00 AM – 6:00 PM</li>
            <li className="text-pink-300 font-semibold">Closed on Sundays and Public Hollidays</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-pink-400">Connect with Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} BakeLikeAChef. All rights reserved.
      </div>
    </footer>
  );
}
