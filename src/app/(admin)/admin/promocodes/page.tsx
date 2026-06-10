import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Промокоды",
};

export default function AdminPromocodesPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-walnut-900">
            Промокоды
          </h1>
          <p className="mt-1 text-sm text-walnut-500">
            Управление скидками и акциями
          </p>
        </div>
        <button className="rounded-lg bg-walnut-600 px-4 py-2 text-sm font-medium text-white hover:bg-walnut-700">
          + Создать промокод
        </button>
      </div>

      <div className="mt-8 rounded-xl border border-walnut-100 bg-white p-6">
        <p className="text-center py-8 text-walnut-400">
          Список промокодов будет доступен после подключения базы данных
        </p>
      </div>
    </>
  );
}