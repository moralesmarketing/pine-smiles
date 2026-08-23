import type { Metadata } from "next";
import { Madimi_One, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

const madimiOne = Madimi_One({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chino Hills Pediatric Dentist & Orthodontist | Pine Smiles",
  description:
    "Pine Smiles Orthodontics & Pediatric Dentistry in Chino Hills, CA. Gentle, kid-focused dental care and orthodontics for the whole family. Call (909) 393-4800.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${madimiOne.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
