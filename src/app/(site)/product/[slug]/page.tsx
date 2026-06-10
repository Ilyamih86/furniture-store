import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Проект | Мебельная фабрика`,
    description: `Страница проекта ${slug}`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-walnut-500">
        <a href="/" className="hover:text-walnut-700">Главная</a>
        <span className="mx-2">/</span>
        <a href="/catalog" className="hover:text-walnut-700">Каталог</a>
        <span className="mx-2">/</span>
        <span className="text-walnut-800">{slug}</span>
      </nav>

      <div className="text-center py-16">
        <p className="text-walnut-400">
          Страница проекта будет доступна после подключения базы данных
        </p>
      </div>
    </div>
  );
}