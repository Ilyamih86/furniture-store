import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Мебельная фабрика Краснодар — мебель на заказ",
    short_name: "Мебельная фабрика",
    description:
      "Производство кухонь, шкафов-купе и корпусной мебели на заказ в Краснодаре",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6f5539",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}