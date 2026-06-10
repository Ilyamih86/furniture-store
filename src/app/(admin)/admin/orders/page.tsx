import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Управление заказами",
};

export default function AdminOrdersPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-walnut-900">
            Заказы
          </h1>
          <p className="mt-1 text-sm text-walnut-500">
            Просмотр и управление заказами
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-walnut-100 bg-white p-6">
        <p className="text-center py-8 text-walnut-400">
          Таблица заказов будет доступна после подключения базы данных
        </p>
      </div>
    </>
  );
}