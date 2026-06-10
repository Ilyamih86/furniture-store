import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Личный кабинет",
  description: "Управляйте своим профилем и заказами",
};

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-walnut-500">
        <a href="/" className="hover:text-walnut-700">Главная</a>
        <span className="mx-2">/</span>
        <span className="text-walnut-800">Личный кабинет</span>
      </nav>

      <h1 className="font-serif text-3xl font-bold text-walnut-900">
        Личный кабинет
      </h1>
      <p className="mt-2 text-walnut-500">
        Здесь будут отображаться ваши заказы и избранное
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-walnut-100 bg-white p-6">
          <h2 className="font-serif text-lg font-semibold text-walnut-800">
            Мои заказы
          </h2>
          <p className="mt-2 text-sm text-walnut-400">
            У вас пока нет заказов
          </p>
        </div>
        <div className="rounded-xl border border-walnut-100 bg-white p-6">
          <h2 className="font-serif text-lg font-semibold text-walnut-800">
            Избранное
          </h2>
          <p className="mt-2 text-sm text-walnut-400">
            Список избранных проектов пуст
          </p>
        </div>
      </div>
    </div>
  );
}