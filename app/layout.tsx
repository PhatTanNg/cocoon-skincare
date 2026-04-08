import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cocoon Vietnam — Mỹ phẩm thuần chay từ thiên nhiên Việt Nam",
  description:
    "Thương hiệu mỹ phẩm thuần chay Việt Nam đầu tiên đạt chứng nhận Leaping Bunny, PETA và The Vegan Society. Nguyên liệu tự nhiên từ khắp dải đất hình chữ S.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
