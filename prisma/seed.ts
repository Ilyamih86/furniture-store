import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create admin user
  const admin = await prisma.user.upsert({
    where: { email: "admin@mebelfabrika.ru" },
    update: {},
    create: {
      email: "admin@mebelfabrika.ru",
      name: "Администратор",
      role: "ADMIN",
    },
  });

  // Create categories for furniture manufacturing
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "Кухни",
        slug: "kitchens",
        description: "Кухни на заказ по индивидуальным размерам. Широкий выбор материалов и цветов фасадов.",
      },
    }),
    prisma.category.create({
      data: {
        name: "Шкафы-купе",
        slug: "wardrobes",
        description: "Встроенные и отдельно стоящие шкафы-купе с любыми наполнениями.",
      },
    }),
    prisma.category.create({
      data: {
        name: "Гардеробные",
        slug: "dressing-rooms",
        description: "Гардеробные комнаты любой конфигурации под ваш интерьер.",
      },
    }),
    prisma.category.create({
      data: {
        name: "Корпусная мебель",
        slug: "case-furniture",
        description: "Стенки, тумбы, комоды, стеллажи и другая корпусная мебель на заказ.",
      },
    }),
    prisma.category.create({
      data: {
        name: "Офисная мебель",
        slug: "office",
        description: "Мебель для офиса и рабочих пространств по индивидуальным проектам.",
      },
    }),
    prisma.category.create({
      data: {
        name: "Прихожие",
        slug: "hallways",
        description: "Функциональные прихожие с системами хранения на заказ.",
      },
    }),
    prisma.category.create({
      data: {
        name: "Детские",
        slug: "children",
        description: "Детская мебель на заказ из экологичных материалов.",
      },
    }),
  ]);

  console.log(`Created ${categories.length} categories`);
  console.log(`Created admin user: ${admin.email}`);
  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });