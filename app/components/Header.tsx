

"use client";

import Link from "next/link";
import { doctorConfig } from "../../lib/doctorConfig";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">Dr</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                {doctorConfig.name}
              </h1>
              <p className="text-sm text-gray-600">{doctorConfig.title}</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600">
              Services
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${doctorConfig.contact.phone}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
