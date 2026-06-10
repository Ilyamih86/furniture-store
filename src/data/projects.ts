// ============================================================
// Project Stub Data
// All projects from the design project at ул. Передовая
// ============================================================

export interface ProjectStub {
  id: string;
  name: string;
  description: string;
  images: string[];
  categorySlug: string;
  area?: string;
  features?: string[];
}

export const projects: ProjectStub[] = [
  // ============================================================
  // Кухни (kitchens)
  // ============================================================
  {
    id: "kuhnya-s-panelyami",
    name: "Кухня с дизайнерскими панелями",
    description:
      "Современная кухня с декоративными фасадными панелями. Продуманная эргономика рабочего треугольника, встроенная техника и вместительные системы хранения. Материалы — премиальный МДФ с матовой эмалью.",
    images: [
      "/images/projects/page-009-kuhnya.png",
      "/images/projects/page-010-kuhnya.png",
      "/images/projects/page-011-kuhnya.png",
    ],
    categorySlug: "kitchens",
    area: "26.5 м²",
    features: ["МДФ матовая эмаль", "Встроенная техника", "Система хранения"],
  },
  {
    id: "kuhnya-ostrovnaya",
    name: "Кухня-гостиная с островом",
    description:
      "Просторная кухня, объединённая с гостиной зоной. Остров с барной стойкой и дополнительным местом для хранения. Верхние шкафы с подсветкой, столешница из искусственного камня.",
    images: [
      "/images/projects/page-012-kuhnya.png",
      "/images/projects/page-013-kuhnya.png",
      "/images/projects/page-014-kuhnya.png",
    ],
    categorySlug: "kitchens",
    area: "34.0 м²",
    features: ["Остров с барной стойкой", "Искусственный камень", "Подсветка"],
  },

  // ============================================================
  // Шкафы-купе (wardrobes) — используем изображения спален со встроенными шкафами
  // ============================================================
  {
    id: "shkaf-gostevaya-spalnya",
    name: "Встроенный шкаф-купе в гостевой спальне",
    description:
      "Вместительный шкаф-купе на всю стену с зеркальными фасадами. Внутреннее наполнение: зона для верхней одежды, полки, выдвижные ящики. Оптимальное решение для хранения в гостевой комнате.",
    images: [
      "/images/projects/page-110-gostevaya-spalnya.png",
      "/images/projects/page-111-gostevaya-spalnya.png",
    ],
    categorySlug: "wardrobes",
    area: "18.2 м²",
    features: ["Зеркальные фасады", "Система хранения", "Раздвижная система"],
  },
  {
    id: "shkaf-master-spalnya",
    name: "Шкаф-купе в мастер-спальне",
    description:
      "Элегантный шкаф-купе с комбинированными фасадами: матовое стекло и деревянные вставки. Внутреннее наполнение под заказ: выдвижные пантографы, полки для обуви, зона для глажки.",
    images: [
      "/images/projects/page-032-master-spalnya.png",
      "/images/projects/page-033-master-spalnya.png",
      "/images/projects/page-034-master-spalnya.png",
    ],
    categorySlug: "wardrobes",
    area: "22.5 м²",
    features: ["Комбинированные фасады", "Пантографы", "Зона для глажки"],
  },

  // ============================================================
  // Гардеробные (dressing-rooms)
  // ============================================================
  {
    id: "garderobnaya-master",
    name: "Гардеробная при мастер-спальне",
    description:
      "Проект гардеробной комнаты с открытой системой хранения. Стеллажи из ЛДСП, корзины для аксессуаров, вешалки для платьев и костюмов. Центральный остров для хранения украшений и аксессуаров.",
    images: [
      "/images/projects/page-034-master-spalnya.png",
      "/images/projects/page-035-master-spalnya.png",
    ],
    categorySlug: "dressing-rooms",
    area: "12.0 м²",
    features: ["Открытая система", "Остров для аксессуаров", "ЛДСП"],
  },
  {
    id: "garderobnaya-prihozhaya",
    name: "Гардеробная система в прихожей",
    description:
      "Функциональная гардеробная система в прихожей: открытые вешалки, обувницы, полки для сумок и головных уборов. Зеркало в полный рост и мягкий пуф для комфортного переобувания.",
    images: [
      "/images/projects/page-022-prihozhaya.png",
      "/images/projects/page-023-prihozhaya.png",
    ],
    categorySlug: "dressing-rooms",
    area: "8.5 м²",
    features: ["Открытые вешалки", "Обувница", "Зеркало в полный рост"],
  },

  // ============================================================
  // Корпусная мебель (case-furniture)
  // ============================================================
  {
    id: "mebel-dlya-gostevoy",
    name: "Корпусная мебель для гостевой спальни",
    description:
      "Комплект корпусной мебели для гостевой спальни: кровать с подъемным механизмом, прикроватные тумбы, комод и вместительный шкаф. Дизайн в светлых тонах с акцентными фасадами.",
    images: [
      "/images/projects/page-112-gostevaya-spalnya.png",
      "/images/projects/page-113-gostevaya-spalnya.png",
    ],
    categorySlug: "case-furniture",
    area: "19.8 м²",
    features: ["Кровать с подъемным механизмом", "Комод", "Прикроватные тумбы"],
  },
  {
    id: "mebel-komnata-otdyha",
    name: "Мебель для комнаты отдыха",
    description:
      "Комплект мягкой и корпусной мебели для комнаты отдыха: диван-трансформер, журнальный столик, стеллаж для книг, барная стойка. Сочетание дерева, ткани и металла в отделке.",
    images: [
      "/images/projects/page-080-komnata-otdyha.png",
      "/images/projects/page-081-komnata-otdyha.png",
      "/images/projects/page-082-komnata-otdyha.png",
    ],
    categorySlug: "case-furniture",
    area: "28.5 м²",
    features: ["Диван-трансформер", "Барная стойка", "Стеллаж"],
  },
  {
    id: "mebel-detskaya-devochki",
    name: "Корпусная мебель для детской девочки",
    description:
      "Мебель для детской комнаты девочки: кровать с балдахином, письменный стол, стеллаж для игрушек и книг. Яркие акценты и функциональные системы хранения.",
    images: [
      "/images/projects/page-038-detskaya-devochki.png",
      "/images/projects/page-040-detskaya-devochki.png",
      "/images/projects/page-041-detskaya-devochki.png",
    ],
    categorySlug: "case-furniture",
    area: "16.5 м²",
    features: ["Кровать с балдахином", "Письменный стол", "Стеллаж"],
  },

  // ============================================================
  // Офисная / Кабинет (office)
  // ============================================================
  {
    id: "kabinet-domashniy",
    name: "Домашний кабинет с корпусной мебелью",
    description:
      "Функциональный домашний кабинет с эргономичным рабочим местом. П-образный письменный стол, навесные полки, стеллаж для документов и книг. Лаконичный дизайн в тёплых древесных тонах.",
    images: [
      "/images/projects/page-116-kabinet.png",
      "/images/projects/page-117-kabinet.png",
      "/images/projects/page-118-kabinet.png",
    ],
    categorySlug: "office",
    area: "14.2 м²",
    features: ["П-образный стол", "Навесные полки", "Стеллаж для документов"],
  },

  // ============================================================
  // Прихожие (hallways)
  // ============================================================
  {
    id: "prihozhaya-klassicheskaya",
    name: "Прихожая с системой хранения",
    description:
      "Продуманная прихожая с вместительной системой хранения. Верхние шкафы для сезонных вещей, открытые ниши для повседневной одежды, обувница и консоль с зеркалом. Тёплая цветовая гамма.",
    images: [
      "/images/projects/page-022-prihozhaya.png",
      "/images/projects/page-023-prihozhaya.png",
    ],
    categorySlug: "hallways",
    area: "8.5 м²",
    features: ["Система хранения", "Обувница", "Консоль с зеркалом"],
  },

  // ============================================================
  // Детские (children) — игровая + обе детские
  // ============================================================
  {
    id: "igrovaya-komnata",
    name: "Игровая комната",
    description:
      "Яркая и безопасная игровая комната с многофункциональной мебелью. Игровой домик, шведская стенка, стеллажи для игрушек и книг, удобный пуфик для чтения. Все углы скруглены, материалы экологичны.",
    images: [
      "/images/projects/page-017-igrovaya.png",
      "/images/projects/page-018-igrovaya.png",
      "/images/projects/page-019-igrovaya.png",
    ],
    categorySlug: "children",
    area: "20.0 м²",
    features: ["Игровой домик", "Шведская стенка", "Экологичные материалы"],
  },
  {
    id: "detskaya-devochki",
    name: "Детская для девочки",
    description:
      "Нежная и уютная детская комната для девочки. Кровать с балдахином, туалетный столик, стеллаж для игрушек, письменный стол для занятий. Пастельная цветовая гамма с розовыми акцентами.",
    images: [
      "/images/projects/page-038-detskaya-devochki.png",
      "/images/projects/page-039-detskaya-devochki.png",
      "/images/projects/page-040-detskaya-devochki.png",
      "/images/projects/page-041-detskaya-devochki.png",
    ],
    categorySlug: "children",
    area: "16.5 м²",
    features: ["Кровать с балдахином", "Туалетный столик", "Письменный стол"],
  },
  {
    id: "detskaya-malchika",
    name: "Детская для мальчика",
    description:
      "Динамичная детская комната для мальчика с тематическим дизайном. Кровать-чердак, спортивный уголок, рабочее место с компьютерным столом. Много места для хранения игрушек и книг.",
    images: [
      "/images/projects/page-045-detskaya-malchika.png",
      "/images/projects/page-046-detskaya-malchika.png",
      "/images/projects/page-047-detskaya-malchika.png",
      "/images/projects/page-048-detskaya-malchika.png",
    ],
    categorySlug: "children",
    area: "17.2 м²",
    features: ["Кровать-чердак", "Спортивный уголок", "Компьютерный стол"],
  },

  // ============================================================
  // Дополнительные проекты (доступны в "Все проекты")
  // Эти проекты имеют собственные категории-теги, но отображаются в общем списке
  // ============================================================
  {
    id: "master-spalnya",
    name: "Мастер-спальня с декоративными панелями",
    description:
      "Просторная мастер-спальня с акцентной стеной из декоративных панелей. Встроенная система хранения, туалетный столик, мягкое изголовье кровати с подсветкой. Интерьер в тёплых бежевых тонах.",
    images: [
      "/images/projects/page-032-master-spalnya.png",
      "/images/projects/page-033-master-spalnya.png",
      "/images/projects/page-034-master-spalnya.png",
      "/images/projects/page-035-master-spalnya.png",
    ],
    categorySlug: "case-furniture",
    area: "22.5 м²",
    features: ["Декоративные панели", "Подсветка изголовья", "Туалетный столик"],
  },
  {
    id: "gostevaya-spalnya",
    name: "Гостевая спальня",
    description:
      "Светлая гостевая спальня с лаконичным дизайном. Удобная кровать, прикроватные тумбы, комод и вместительный шкаф-купе. Нейтральная цветовая палитра подходит для любых гостей.",
    images: [
      "/images/projects/page-110-gostevaya-spalnya.png",
      "/images/projects/page-111-gostevaya-spalnya.png",
      "/images/projects/page-112-gostevaya-spalnya.png",
      "/images/projects/page-113-gostevaya-spalnya.png",
    ],
    categorySlug: "case-furniture",
    area: "19.8 м²",
    features: ["Лаконичный дизайн", "Шкаф-купе", "Нейтральная палитра"],
  },
  {
    id: "komnata-otdyha",
    name: "Комната отдыха с зоной барбекю",
    description:
      "Многофункциональная комната отдыха с зоной барбекю и обеденной группой. Мягкая зона с диваном, домашний кинотеатр, стеллаж для посуды и декора. Идеально для семейных вечеров и приёма гостей.",
    images: [
      "/images/projects/page-080-komnata-otdyha.png",
      "/images/projects/page-081-komnata-otdyha.png",
      "/images/projects/page-082-komnata-otdyha.png",
      "/images/projects/page-083-komnata-otdyha.png",
      "/images/projects/page-084-komnata-otdyha.png",
      "/images/projects/page-085-komnata-otdyha.png",
    ],
    categorySlug: "case-furniture",
    area: "28.5 м²",
    features: ["Зона барбекю", "Домашний кинотеатр", "Обеденная группа"],
  },
  {
    id: "bassein",
    name: "Бассейн с зоной отдыха",
    description:
      "Крытый бассейн с отделкой из натурального камня. Зона отдыха с шезлонгами, душевая кабина, система хранения для принадлежностей для плавания. Панорамное остекление и продуманная вентиляция.",
    images: [
      "/images/projects/page-076-bassein.png",
      "/images/projects/page-077-bassein.png",
      "/images/projects/page-078-bassein.png",
    ],
    categorySlug: "case-furniture",
    area: "45.0 м²",
    features: ["Натуральный камень", "Панорамное остекление", "Зона отдыха"],
  },
  {
    id: "hamam",
    name: "Хамам с восточным дизайном",
    description:
      "Традиционный хамам с мраморной отделкой и восточными орнаментами. Мраморные лежаки, система подогрева пола и стен, приглушённая подсветка. Парогенератор и ароматерапия для полного расслабления.",
    images: [
      "/images/projects/page-088-hamam.png",
      "/images/projects/page-089-hamam.png",
    ],
    categorySlug: "case-furniture",
    area: "12.0 м²",
    features: ["Мраморная отделка", "Подогрев пола и стен", "Ароматерапия"],
  },
  {
    id: "banya",
    name: "Русская баня",
    description:
      "Классическая русская баня с отделкой из липовой вагонки. Парилка с каменкой, комнатой отдыха с деревянной мебелью. Предбанник с вешалками и лавками. Аромат натурального дерева и уютная атмосфера.",
    images: [
      "/images/projects/page-094-banya.png",
      "/images/projects/page-095-banya.png",
    ],
    categorySlug: "case-furniture",
    area: "15.0 м²",
    features: ["Липовая вагонка", "Каменка", "Комната отдыха"],
  },
  {
    id: "sanusel-master",
    name: "Санузел мастер-спальни",
    description:
      "Современный санузел при мастер-спальне. Двойная раковина с тумбой, унитаз, душевая кабина без поддона. Подвесная мебель, зеркало с подсветкой, система хранения для полотенец и косметики.",
    images: [
      "/images/projects/page-052-sanusel-master.png",
      "/images/projects/page-053-sanusel-master.png",
      "/images/projects/page-054-sanusel-master.png",
    ],
    categorySlug: "case-furniture",
    area: "8.0 м²",
    features: ["Двойная раковина", "Душевая без поддона", "Подсветка зеркала"],
  },
  {
    id: "sanusel-devochki",
    name: "Санузел детской девочки",
    description:
      "Светлый санузел для детской комнаты девочки. Раковина с тумбой, унитаз, ванна с экраном. Весёлые акценты в отделке, удобные полки для детской косметики и игрушек.",
    images: [
      "/images/projects/page-058-sanusel-devochki.png",
      "/images/projects/page-059-sanusel-devochki.png",
      "/images/projects/page-060-sanusel-devochki.png",
    ],
    categorySlug: "case-furniture",
    area: "6.5 м²",
    features: ["Ванна с экраном", "Детский дизайн", "Полки для хранения"],
  },
  {
    id: "sanusel-malchika",
    name: "Санузел детской мальчика",
    description:
      "Функциональный санузел для детской мальчика. Раковина, унитаз, душевая кабина. Яркая плитка с геометрическим рисунком, практичные полки и крючки для полотенец.",
    images: [
      "/images/projects/page-064-sanusel-malchika.png",
      "/images/projects/page-065-sanusel-malchika.png",
      "/images/projects/page-066-sanusel-malchika.png",
    ],
    categorySlug: "case-furniture",
    area: "6.5 м²",
    features: ["Душевая кабина", "Геометрическая плитка", "Практичные полки"],
  },
  {
    id: "sanusel-pri-komnate",
    name: "Санузел при комнате отдыха",
    description:
      "Дополнительный санузел при комнате отдыха. Компактная мебель, раковина на пьедестале, унитаз, душевой уголок. Отделка в светлых тонах визуально расширяет пространство.",
    images: [
      "/images/projects/page-098-sanusel-pri-komnate.png",
      "/images/projects/page-099-sanusel-pri-komnate.png",
    ],
    categorySlug: "case-furniture",
    area: "5.0 м²",
    features: ["Компактная мебель", "Душевой уголок", "Светлая отделка"],
  },
  {
    id: "gostevoy-sanusel",
    name: "Гостевой санузел",
    description:
      "Элегантный гостевой санузел с подвесной мебелью. Раковина с тумбой, унитаз, гигиенический душ. Декоративная плитка с акцентной стеной, зеркало с подсветкой.",
    images: [
      "/images/projects/page-121-gostevoy-sanusel.png",
      "/images/projects/page-122-gostevoy-sanusel.png",
      "/images/projects/page-123-gostevoy-sanusel.png",
      "/images/projects/page-124-gostevoy-sanusel.png",
    ],
    categorySlug: "case-furniture",
    area: "4.5 м²",
    features: ["Подвесная мебель", "Гигиенический душ", "Акцентная плитка"],
  },
  {
    id: "obshiy-sanusel",
    name: "Общий санузел",
    description:
      "Просторный общий санузел для всей семьи. Двойная раковина, унитаз, ванна с гидромассажем. Большое зеркало во всю стену, системы хранения для банных принадлежностей.",
    images: [
      "/images/projects/page-128-obshiy-sanusel.png",
      "/images/projects/page-129-obshiy-sanusel.png",
    ],
    categorySlug: "case-furniture",
    area: "9.0 м²",
    features: ["Гидромассажная ванна", "Двойная раковина", "Большое зеркало"],
  },
];

// Category metadata for display
export const categoryMeta: Record<
  string,
  { name: string; description: string }
> = {
  kitchens: {
    name: "Кухни",
    description:
      "Индивидуальные кухонные гарнитуры любой сложности. Современные материалы, эргономичный дизайн, встроенная техника.",
  },
  wardrobes: {
    name: "Шкафы-купе",
    description:
      "Раздвижные шкафы-купе на заказ. Любые размеры, наполнение и фасады. Зеркальные, стеклянные, деревянные — на ваш выбор.",
  },
  "dressing-rooms": {
    name: "Гардеробные",
    description:
      "Открытые и закрытые гардеробные системы. Продуманное хранение для всей семьи.",
  },
  "case-furniture": {
    name: "Корпусная мебель",
    description:
      "Корпусная мебель для дома и офиса. Кровати, комоды, тумбы, стеллажи, стенки — любые предметы по вашим размерам.",
  },
  office: {
    name: "Офисная мебель",
    description:
      "Мебель для домашнего кабинета и офиса. Письменные столы, стеллажи, шкафы для документов, кресла.",
  },
  hallways: {
    name: "Прихожие",
    description:
      "Функциональные прихожие с системами хранения. Шкафы, обувницы, консоли, вешалки — всё для комфортного входа в дом.",
  },
  children: {
    name: "Детские",
    description:
      "Мебель для детских комнат любого возраста. Кровати, столы, стеллажи, игровые зоны. Только безопасные и экологичные материалы.",
  },
};

export function getProjectsByCategory(
  categorySlug: string | null
): ProjectStub[] {
  if (!categorySlug || categorySlug === "") return projects;
  return projects.filter((p) => p.categorySlug === categorySlug);
}

export function getProjectById(id: string): ProjectStub | undefined {
  return projects.find((p) => p.id === id);
}

export function getCategoryName(slug: string): string {
  return categoryMeta[slug]?.name ?? slug;
}