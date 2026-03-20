"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Workspaces", href: "/workspaces" },
  { name: "Amenities", href: "/amenities" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-primary text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <a href="tel:+919999999999" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            <span>+91-999-999-9999</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Delhi & Gurgaon</span>
          </div>
        </div>
      </div>
      
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/fumenewlogo.png"
                alt="Fume Coworking logo"
                width={40}
                height={40}
                className="w-10 h-10"
                priority
              />
              <span className="font-bold text-xl text-gray-900">Fume</span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium">
                Book Now
              </Link>
            </div>

            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <div className="container mx-auto px-4 space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-primary font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="block bg-primary text-white px-6 py-2 rounded-md text-center font-medium" onClick={() => setMobileMenuOpen(false)}>
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
