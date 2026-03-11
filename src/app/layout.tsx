import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Menu } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fume Coworking | Your Home Office, Away From Home",
  description:
    "Premium coworking spaces in Delhi & Gurgaon. Day passes, meeting rooms, private cabins, and virtual offices available.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-zinc-50`}>
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
          <div className="container mx-auto">
            <div className="flex items-center justify-between h-16 px-4">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/fumelogo.png"
                  alt="Fume Coworking logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                  priority
                />
                <span className="font-bold text-xl text-zinc-50">Fume</span>
              </Link>
              
              <nav className="hidden md:flex items-center gap-8">
                <Link href="/locations" className="text-zinc-300 hover:text-white transition-colors">Locations</Link>
                <Link href="/workspaces" className="text-zinc-300 hover:text-white transition-colors">Workspaces</Link>
                <Link href="/amenities" className="text-zinc-300 hover:text-white transition-colors">Amenities</Link>
                <Link href="/events" className="text-zinc-300 hover:text-white transition-colors">Events</Link>
                <Link href="/contact" className="text-zinc-300 hover:text-white transition-colors">Contact</Link>
              </nav>

              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <MapPin className="w-4 h-4" />
                  <span>Delhi & Gurgaon</span>
                </div>
                <Button className="bg-blue-700 hover:bg-blue-600 text-white">Book Now</Button>
              </div>

              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>
        
        <main>{children}</main>

        <footer className="bg-black text-zinc-400 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/fumelogo.png"
                    alt="Fume Coworking logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <span className="font-bold text-xl text-white">Fume</span>
                </div>
                <p className="text-sm">Your home office, away from home. Premium coworking spaces in Delhi & Gurgaon.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4">Locations</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/locations" className="hover:text-white transition-colors">Netaji Subhash Palace, Delhi</Link></li>
                  <li><Link href="/locations" className="hover:text-white transition-colors">Udyog Vihar, Gurgaon</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4">Workspaces</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/workspaces" className="hover:text-white transition-colors">Day Pass</Link></li>
                  <li><Link href="/workspaces" className="hover:text-white transition-colors">Dedicated Desk</Link></li>
                  <li><Link href="/workspaces" className="hover:text-white transition-colors">Private Cabin</Link></li>
                  <li><Link href="/workspaces" className="hover:text-white transition-colors">Meeting Room</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 98765 43210</span>
                  </li>
                  <li>hello@fumecoworking.in</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-zinc-800 mt-12 pt-8 text-sm text-center">
              <p>&copy; 2026 Fume Coworking. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
