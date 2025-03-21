import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const barlowFont = Barlow({
  weight: ["400", "500", "600", "900", "700"],
  variable: "--font-barlow",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Startseite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={`${barlowFont.variable} ${barlowFont.className} antialiased flex flex-col min-h-[100dvh]`}
      >
        {children}
        <div className="flex-grow" />
        <Footer />
      </body>
    </html>
  );
}
