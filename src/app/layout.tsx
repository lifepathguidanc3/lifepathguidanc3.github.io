import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LifePathGuidanc3",
  description: "Explore the concept of Eternal Existence, where every being seeks freedom and happiness beyond the material world. Join us on a transformative journey toward self-discovery and lasting joy.",
  keywords: "Eternal Existence, Freedom, Happiness, Spiritual Journey, Self-Discovery, Inner Peace",
  authors: [{ name: "The Cosmic Monkey", url: "https://lifepathguidanc3.github.io/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
