import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Precastapedia",
  description: "Your ultimate resource for precast concrete products, news, and insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen relative`}>
        {/* Left Sticky Skyscraper Ad (2XL screens) */}
        <AdBanner format="side-sticky" slotName="Left Gutter Skyscraper" className="left-4" />
        
        {/* Right Sticky Skyscraper Ad (2XL screens) */}
        <AdBanner format="side-sticky" slotName="Right Gutter Skyscraper" className="right-4" />

        <Header />

        {/* Top Leaderboard Ad Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
          <AdBanner format="leaderboard" slotName="Top Header Leaderboard" />
        </div>

        <main className="flex-grow max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
