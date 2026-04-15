import type { Metadata } from "next";
import { Lora, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteDescription =
  "Thương hiệu mỹ phẩm thuần chay Việt Nam đầu tiên đạt chứng nhận Leaping Bunny, PETA và The Vegan Society. Nguyên liệu tự nhiên từ khắp dải đất hình chữ S."

export const metadata: Metadata = {
  title: "Cocoon Skin Routine — Mỹ phẩm thuần chay từ thiên nhiên Việt Nam",
  description: siteDescription,
  openGraph: {
    title: "Cocoon Skin Routine — Mỹ phẩm thuần chay từ thiên nhiên Việt Nam",
    description: siteDescription,
    type: "website",
    locale: "vi_VN",
    siteName: "Cocoon Skin Routine",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cocoon Skin Routine — Mỹ phẩm thuần chay từ thiên nhiên Việt Nam",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${lora.variable} ${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
