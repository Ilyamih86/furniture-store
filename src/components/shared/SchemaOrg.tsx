// ============================================================
// Schema.org JSON-LD structured data for SEO
// ============================================================

const SITE_URL =
  process.env.SITE_URL || "https://furniture-store-ilyamih-s-projects.vercel.app";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Мебельная фабрика",
    description:
      "Производство кухонь, шкафов-купе и корпусной мебели на заказ в Краснодаре.",
    url: SITE_URL,
    telephone: "+78001234567",
    email: "info@mebelfabrika.ru",
    areaServed: "Краснодар и Краснодарский край",
    priceRange: "₽₽₽",
    image: `${SITE_URL}/images/projects/page-009-kuhnya.png`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Краснодар",
      addressCountry: "RU",
    },
    sameAs: [
      "https://t.me/mebel_fabrika_krd",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Мебель на заказ",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Кухни на заказ",
            description: "Индивидуальные кухонные гарнитуры любых размеров и стилей",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Шкафы-купе на заказ",
            description: "Раздвижные шкафы-купе с любым наполнением",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Корпусная мебель на заказ",
            description: "Кровати, комоды, тумбы, стеллажи по индивидуальным размерам",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}