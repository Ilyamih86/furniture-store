import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Providers } from "@/lib/providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Мебельная фабрика — производство мебели на заказ",
    template: "%s | Мебельная фабрика",
  },
  description:
    "Производство кухонь, шкафов-купе и корпусной мебели на заказ. Индивидуальные проекты, натуральные материалы, европейская фурнитура. Доставка и сборка.",
  keywords: ["мебель на заказ", "кухни на заказ", "шкафы-купе", "производство мебели", "корпусная мебель"],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Мебельная фабрика",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${playfairDisplay.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
