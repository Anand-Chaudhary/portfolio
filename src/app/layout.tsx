import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navbar";
import { ThemeProvider } from "next-themes";
import { ParticleBackground } from "@/components/particles";
import { CursorDot } from "@/components/CursorDot";

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
  title: "Anand Chaudhary | Portfolio",
  description: "Personal portfolio website of Anand Chaudhary - Full Stack Developer",
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
          <CursorDot />
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
