// ============================================================
// Schema.org FAQPage JSON-LD
// ============================================================

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export const DEFAULT_FAQS: FAQItem[] = [
  {
    question: "Сколько стоит изготовление мебели на заказ в Краснодаре?",
    answer:
      "Стоимость зависит от размеров, материалов и сложности. Мы делаем индивидуальный расчёт под каждый проект. Оставьте заявку — мы подготовим смету бесплатно в течение дня.",
  },
  {
    question: "Как долго изготавливается мебель на заказ?",
    answer:
      "Стандартные сроки — от 2 до 4 недель в зависимости от сложности проекта и загрузки производства.",
  },
  {
    question: "Выезжаете на замер бесплатно?",
    answer:
      "Да, выезд замерщика по Краснодару и Краснодарскому краю — бесплатный. Мы приедем в удобное для вас время, сделаем замеры и поможем с дизайн-проектом.",
  },
  {
    question: "Какие материалы используете?",
    answer:
      "Работаем с качественным ЛДСП, МДФ, массивом дерева. Фурнитура — европейских брендов Blum, Hettich, Grass. Предложим оптимальный вариант под ваш бюджет.",
  },
  {
    question: "Даёте гарантию на мебель?",
    answer:
      "Да, гарантия 5 лет на всю изготавливаемую мебель. При возникновении вопросов оперативно решаем их.",
  },
];