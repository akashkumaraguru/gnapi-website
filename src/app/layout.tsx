import type { Metadata } from "next";
import { Geist, Inter, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gnapi Technologies | Software Engineering & Geospatial Solutions",
  description:
    "We build intelligent geospatial, software, and digital solutions that help businesses transform operations, accelerate growth, and create lasting impact.",
  icons: {
    icon: "/assets/gnapi-logo.svg",
    shortcut: "/assets/gnapi-logo.svg",
    apple: "/assets/gnapi-logo.svg",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#131315]">
        {children}
        {modal}
      </body>
    </html>
  );
}
