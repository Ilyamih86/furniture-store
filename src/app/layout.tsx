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

const SITE_URL =
  process.env.SITE_URL || "https://furniture-store-ilyamih-s-projects.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Мебельная фабрика Краснодар — производство мебели на заказ",
    template: "%s | Мебельная фабрика Краснодар",
  },
  description:
    "Производство кухонь, шкафов-купе и корпусной мебели на заказ в Краснодаре. Индивидуальные проекты, натуральные материалы, европейская фурнитура. Доставка и сборка по Краснодару и краю. Замер бесплатно.",
  keywords: [
    "мебель на заказ Краснодар",
    "кухни на заказ Краснодар",
    "шкафы-купе Краснодар",
    "производство мебели Краснодар",
    "корпусная мебель Краснодар",
    "мебель по индивидуальным размерам Краснодар",
    "кухня под заказ Краснодар",
    "мебельная фабрика Краснодар",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Мебельная фабрика Краснодар",
    title: "Мебельная фабрика Краснодар — производство мебели на заказ",
    description:
      "Производство кухонь, шкафов-купе и корпусной мебели на заказ в Краснодаре. Замер бесплатно.",
    url: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Добавьте сюда коды верификации после регистрации в сервисах
    // yandex: "ваш_яндекс_код",
    // google: "ваш_google_код",
  },
};

import { Analytics } from "@/components/shared/Analytics";

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
      <head>
        <link rel="manifest" href="/manifest" />
        <meta name="theme-color" content="#6f5539" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
