import type { Metadata } from "next";
import Link from "next/link";
import { projects, getProjectsByCategory, categoryMeta, getCategoryName } from "@/data/projects";
import { ProductSchema } from "@/components/shared/ProjectSchema";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ShareButtons } from "@/components/shared/ShareButtons";

export const metadata: Metadata = {
  title: "Каталог мебели на заказ в Краснодаре",
  description:
    "Каталог мебели на заказ в Краснодаре. Кухни, шкафы-купе, гардеробные, корпусная мебель. Индивидуальное изготовление по вашим размерам. Более 20 реализованных проектов.",
};

const CATEGORIES = [
  { name: "Все проекты", slug: "" },
  { name: "Кухни", slug: "kitchens" },
  { name: "Шкафы-купе", slug: "wardrobes" },
  { name: "Гардеробные", slug: "dressing-rooms" },
  { name: "Корпусная мебель", slug: "case-furniture" },
  { name: "Офисная мебель", slug: "office" },
  { name: "Прихожие", slug: "hallways" },
  { name: "Детские", slug: "children" },
];

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const currentCategory = category || "";
  const filteredProjects = getProjectsByCategory(currentCategory || null);

  const categoryTitle = currentCategory
    ? getCategoryName(currentCategory)
    : "Каталог проектов";

  const categoryDesc = currentCategory
    ? categoryMeta[currentCategory]?.description
    : "Все реализованные проекты — от кухонь до детских комнат";

  const breadcrumbItems = [
    { name: "Главная", href: "/" },
    ...(currentCategory
      ? [
          { name: "Каталог", href: "/catalog" },
          { name: categoryMeta[currentCategory]?.name ?? currentCategory, href: `/catalog?category=${currentCategory}` },
        ]
      : [{ name: "Каталог", href: "/catalog" }]),
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {filteredProjects.map((project) => (
        <ProductSchema key={project.id} project={project} />
      ))}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
      <nav className="mb-6 text-sm text-walnut-500">
        <Link href="/" className="hover:text-walnut-700">Главная</Link>
        <span className="mx-2">/</span>
        {currentCategory ? (
          <>
            <Link href="/catalog" className="hover:text-walnut-700">Каталог</Link>
            <span className="mx-2">/</span>
            <span className="text-walnut-800">{categoryMeta[currentCategory]?.name ?? currentCategory}</span>
          </>
        ) : (
          <span className="text-walnut-800">Каталог</span>
        )}
      </nav>

      {/* Category Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-walnut-900 sm:text-4xl">
          {categoryTitle}
        </h1>
        <p className="mt-2 text-base text-walnut-500">
          {categoryDesc}
        </p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-walnut-800">
                Категории
              </h3>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => {
                  const isActive = currentCategory === cat.slug;
                  const count = cat.slug
                    ? getProjectsByCategory(cat.slug).length
                    : projects.length;
                  return (
                    <Link
                      key={cat.slug}
                      href={`/catalog${cat.slug ? `?category=${cat.slug}` : ""}`}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-walnut-100 font-medium text-walnut-800"
                          : "text-walnut-500 hover:bg-walnut-50 hover:text-walnut-800"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs text-walnut-400">({count})</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-walnut-800">
                Материал
              </h3>
              <div className="space-y-2">
                {["ЛДСП", "МДФ", "Массив дерева", "Пластик"].map((material) => (
                  <label key={material} className="flex items-center gap-2 text-sm text-walnut-600">
                    <input type="checkbox" className="rounded border-walnut-300" />
                    {material}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Project Grid */}
        <div className="flex-1">
          {/* Results Meta */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-walnut-500">
              Найдено: <span className="font-medium text-walnut-800">{filteredProjects.length}</span> проектов
            </p>
            <select className="rounded-lg border border-walnut-200 px-3 py-2 text-sm text-walnut-700">
              <option value="newest">Новые</option>
              <option value="popular">Популярные</option>
              <option value="rating">По рейтингу</option>
            </select>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group overflow-hidden rounded-xl border border-walnut-100 bg-white transition-shadow hover:shadow-lg"
                >
                  {/* Image Gallery Preview */}
                  <div className="relative grid grid-cols-2 gap-0.5 bg-walnut-50">
                    {project.images.slice(0, 3).map((img, idx) => (
                      <div
                        key={idx}
                        className={`overflow-hidden ${
                          idx === 0 ? "col-span-2 aspect-[2/1]" : "aspect-[4/3]"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${project.name} — фото ${idx + 1}`}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ))}
                    {project.images.length > 3 && (
                      <div className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
                        +{project.images.length - 3} фото
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full bg-walnut-100 px-2.5 py-0.5 text-xs font-medium text-walnut-700">
                        {categoryMeta[project.categorySlug]?.name ?? project.categorySlug}
                      </span>
                      {project.area && (
                        <span className="rounded-full bg-walnut-50 px-2.5 py-0.5 text-xs text-walnut-500">
                          {project.area}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-walnut-800">
                      {project.name}
                    </h3>

                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-walnut-500">
                      {project.description}
                    </p>

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-block rounded-md bg-walnut-50 px-2 py-0.5 text-xs text-walnut-600"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                    {/* Share */}
                    <div className="mt-4 border-t border-walnut-100 pt-3">
                      <ShareButtons
                        title={project.name}
                        description={project.area ? `Площадь: ${project.area}` : project.features?.[0]}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-walnut-200 py-16 text-center">
              <p className="text-walnut-400">
                В этой категории пока нет проектов
              </p>
              <p className="mt-1 text-sm text-walnut-300">
                Проекты появятся по мере выполнения работ
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}