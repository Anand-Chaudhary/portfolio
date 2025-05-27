import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navbar";
import { ThemeProvider } from "next-themes";
import { ParticleBackground } from "@/components/particles";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const satoshi = Inter({
  subsets: ["latin"],
  variable: "--font-satoshi",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "For Anand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${satoshi.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ParticleBackground />
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
