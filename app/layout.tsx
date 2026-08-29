import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AdBanner from "@/components/AdBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.className} antialiased bg-[#171717] text-white flex flex-col min-h-screen`}>
        <Header />

        {/* Top Leaderboard Ad Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
          <AdBanner format="leaderboard" slotName="Top Header Leaderboard" />
        </div>

        {/* Center container holding main content and absolute side ad gutters */}
        <div className="relative flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {/* Left Sticky Ad Gutter (outside the left edge of container) */}
          <div className="hidden 2xl:block absolute -left-28 top-6 bottom-0 w-32">
            <div className="sticky top-24 h-[500px]">
              <AdBanner format="side-sticky" slotName="Left Gutter Skyscraper" className="!absolute !top-0 !left-0" />
            </div>
          </div>

          <main className="w-full py-6">
            {children}
          </main>

          {/* Right Sticky Ad Gutter (outside the right edge of container) */}
          <div className="hidden 2xl:block absolute -right-28 top-6 bottom-0 w-32">
            <div className="sticky top-24 h-[500px]">
              <AdBanner format="side-sticky" slotName="Right Gutter Skyscraper" className="!absolute !top-0 !right-0" />
            </div>
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
