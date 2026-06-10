import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/shared/SchemaOrg";

export default function HomePage() {
  const projectImages = [
    {
      src: "/images/projects/page-009-kuhnya.png",
      alt: "Кухня-гостиная с дизайнерскими панелями",
    },
    {
      src: "/images/projects/page-012-kuhnya.png",
      alt: "Островная кухня с обеденной зоной",
    },
    {
      src: "/images/projects/page-033-master-spalnya.png",
      alt: "Мастер-спальня с декоративными панелями",
    },
    {
      src: "/images/projects/page-039-detskaya-devochki.png",
      alt: "Детская комната для девочки",
    },
    {
      src: "/images/projects/page-046-detskaya-malchika.png",
      alt: "Детская комната для мальчика",
    },
    {
      src: "/images/projects/page-053-sanusel-master.png",
      alt: "Санузел в мастер-спальне",
    },
    {
      src: "/images/projects/page-080-komnata-otdyha.png",
      alt: "Комната отдыха с зоной барбекю",
    },
    {
      src: "/images/projects/page-089-hamam.png",
      alt: "Хамам с восточным дизайном",
    },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-walnut-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-walnut-900 sm:text-5xl md:text-6xl">
                Производство мебели на заказ
              </h1>
              <p className="mt-6 text-lg leading-8 text-walnut-600">
                Изготавливаем кухни, шкафы-купе и корпусную мебель по индивидуальным проектам.
                Натуральные материалы, европейская фурнитура, безупречное качество.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href="/catalog"
                  className="rounded-lg bg-walnut-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-walnut-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-walnut-600"
                >
                  Наши работы
                </a>
                <a
                  href="/catalog?category=kitchens"
                  className="rounded-lg border border-walnut-300 px-8 py-3 text-sm font-semibold text-walnut-700 transition-colors hover:bg-walnut-50"
                >
                  Кухни
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Preview */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-walnut-900 sm:text-4xl">
              Виды мебели
            </h2>
            <p className="mt-4 text-lg text-walnut-500">
              Изготавливаем мебель любой сложности по вашим размерам
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Кухни", slug: "kitchens" },
                { name: "Шкафы-купе", slug: "wardrobes" },
                { name: "Гардеробные", slug: "dressing-rooms" },
                { name: "Корпусная мебель", slug: "case-furniture" },
                { name: "Офисная мебель", slug: "office" },
                { name: "Прихожие", slug: "hallways" },
                { name: "Детские", slug: "children" },
              ].map((category) => (
                <a
                  key={category.slug}
                  href={`/catalog?category=${category.slug}`}
                  className="group relative overflow-hidden rounded-xl bg-walnut-50 p-6 transition-all hover:bg-walnut-100"
                >
                  <h3 className="font-serif text-xl font-semibold text-walnut-800 transition-colors group-hover:text-walnut-600">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-walnut-500">
                    Смотреть проекты →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="bg-walnut-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-walnut-900 sm:text-4xl">
              Наши проекты
            </h2>
            <p className="mt-4 text-lg text-walnut-500">
              Примеры выполненных работ — дизайн-проект жилого дома на ул. Передовая
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {projectImages.map((project) => (
                <div
                  key={project.src}
                  className="group rounded-xl border border-walnut-100 bg-white p-2 transition-shadow hover:shadow-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-lg bg-walnut-100">
                    <img
                      src={project.src}
                      alt={project.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 px-1 pb-2">
                    <p className="text-sm font-medium text-walnut-700">
                      {project.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-walnut-900 sm:text-4xl text-center">
              Почему выбирают нас
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Индивидуальный проект", desc: "Разрабатываем дизайн-проект под ваш интерьер и размеры" },
                { title: "Натуральные материалы", desc: "Используем качественный ЛДСП, МДФ, массив дерева" },
                { title: "Европейская фурнитура", desc: "Blum, Hettie, Grass — гарантия долговечности" },
                { title: "Замер бесплатно", desc: "Выезд замерщика по Краснодару и краю — без оплаты" },
                { title: "Сроки изготовления", desc: "От 2 до 4 недель в зависимости от сложности" },
                { title: "Гарантия 5 лет", desc: "На всю изготавливаемую мебель" },
              ].map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <h3 className="font-serif text-lg font-semibold text-walnut-800">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-walnut-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
