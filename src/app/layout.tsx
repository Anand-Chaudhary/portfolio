import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageLoader from "@/components/shared/PageLoader";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "Anand Chaudhary | Portfolio",
  description: "Full-stack developer portfolio of Anand Chaudhary showcasing scalable web applications, DevOps projects, AI-powered tools, and modern MENN stack development with React, Next.js, TypeScript, Docker, and cloud technologies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} scroll-smooth antialiased`}
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <body className="flex flex-col min-h-screen">
        <PageLoader />
        <Navbar />
        <main className="grow pt-16 md:pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
