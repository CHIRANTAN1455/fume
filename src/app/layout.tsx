import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fume | Top Coworking & Shared Office Spaces in India",
  description:
    "Flexible workspace solutions for every stage of your business. Built across India for productivity, convenience, and community.",
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
      <body className={`${inter.className} antialiased bg-background`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
