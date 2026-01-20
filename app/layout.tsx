import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Canonical from "./components/Canonical";
import Footer from "./components/Footer";
const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Yana Packaging Solution | Custom Packaging & Eco-Friendly Solutions",
  description:
    "Discover Yana Packaging Solution, your trusted partner for custom, sustainable, and innovative packaging solutions.",
  alternates: {
    canonical: "https://www.yanapackaging.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">     
      <body className={`${kanit.variable} antialiased`}>
        <TopHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
