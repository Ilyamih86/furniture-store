// ============================================================
// Schema.org Product JSON-LD for project cards
// ============================================================

const SITE_URL =
  process.env.SITE_URL || "https://furniture-store-ilyamih-s-projects.vercel.app";

interface ProjectSchemaProps {
  project: {
    id: string;
    name: string;
    description: string;
    images: string[];
    categorySlug: string;
    area?: string;
    features?: string[];
  };
}

export function ProductSchema({ project }: ProjectSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: project.name,
    description: project.description,
    image: project.images.map(
      (img) => `${SITE_URL}${img.startsWith("/") ? img : `/${img}`}`
    ),
    category: project.categorySlug,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "RUB",
        description: "Цена по запросу. Индивидуальный расчёт.",
      },
    },
    ...(project.area && {
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Площадь",
          value: project.area,
        },
      ],
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}