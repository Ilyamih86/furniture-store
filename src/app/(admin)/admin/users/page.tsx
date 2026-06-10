import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Управление пользователями",
};

export default function AdminUsersPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-walnut-900">
            Пользователи
          </h1>
          <p className="mt-1 text-sm text-walnut-500">
            Управление пользователями
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-walnut-100 bg-white p-6">
        <p className="text-center py-8 text-walnut-400">
          Список пользователей будет доступен после подключения базы данных
        </p>
      </div>
    </>
  );
}