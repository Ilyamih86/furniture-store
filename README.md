# Мебельная фабрика — Интернет-магазин мебели на заказ

Производство мебели на заказ. Кухни, шкафы-купе, гардеробные, корпусная мебель.
Индивидуальное изготовление по вашим размерам.

**Стек:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Prisma, PostgreSQL

---

## Запуск локальной разработки

### 1. Запустить PostgreSQL через Docker

```bash
docker compose up -d
```

### 2. Настроить окружение

Скопировать `.env.example` в `.env`:

```bash
cp .env.example .env
```

По умолчанию `.env` настроен на локальную PostgreSQL в Docker.

### 3. Установить зависимости

```bash
npm install
```

### 4. Применить миграции БД и сгенерировать Prisma Client

```bash
npm run prisma:migrate
npm run prisma:generate
```

### 5. Заполнить БД тестовыми данными (опционально)

```bash
npm run prisma:seed
```

### 6. Запустить дев-сервер

```bash
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000)

---

## Деплой на Vercel + Neon (бесплатно)

### Пошаговая инструкция

#### 1. Создать базу данных в Neon

1. Зарегистрироваться на [neon.tech](https://neon.tech) (GitHub или Google)
2. Нажать **Create project**
3. Выбрать регион **US East** (ближе к Vercel)
4. Скопировать **Connection string** (строку подключения)
   - Она выглядит так: `postgresql://user:password@ep-xxxx.us-east-2.aws.neon.tech/neondb?sslmode=require`

#### 2. Залить код на GitHub

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/ВАШ_АККАУНТ/furniture-store.git
git push -u origin main
```

#### 3. Импортировать проект в Vercel

1. Зайти на [vercel.com](https://vercel.com) (войти через GitHub)
2. Нажать **Add New → Project**
3. Выбрать репозиторий `furniture-store`
4. Vercel автоматически определит Next.js
5. В разделе **Environment Variables** добавить:

| Name | Value |
|------|-------|
| `DATABASE_URL` | Строка подключения из Neon (с `?sslmode=require`) |
| `AUTH_SECRET` | Сгенерировать: `openssl rand -base64 32` |
| `AUTH_URL` | `https://ваш-проект.vercel.app` |

6. Нажать **Deploy**

#### 4. Применить миграции к Neon

После деплоя нужно создать таблицы в Neon:

```bash
# Установить Prisma CLI локально (если ещё нет)
npx prisma db push
```

Или через терминал Vercel.

#### 5. Готово

Сайт будет доступен по адресу: `https://ваш-проект.vercel.app`

При каждом пуше в `main` Vercel автоматически пересобирает проект.

---

## Структура проекта

```
furniture-store/
├── prisma/                  # Prisma schema + миграции
│   ├── schema.prisma        # Модели БД
│   └── seed.ts              # Тестовые данные
├── public/
│   └── images/projects/     # Изображения проектов
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (site)/          # Публичные страницы
│   │   │   ├── catalog/     # Каталог с фильтрацией
│   │   │   ├── cart/        # Корзина
│   │   │   └── ...
│   │   └── api/             # API роуты
│   ├── components/          # UI компоненты
│   ├── data/                # Статические данные проектов
│   ├── lib/                 # Утилиты
│   ├── store/               # Zustand store
│   └── types/               # TypeScript типы
├── vercel.json              # Конфигурация для Vercel
└── .env.example             # Пример переменных окружения
```

---

## Переменные окружения

См. [`.env.example`](.env.example) — все переменные с описанием.
