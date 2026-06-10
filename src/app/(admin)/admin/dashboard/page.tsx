import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Дашборд",
};

export default function AdminDashboardPage() {
  return (
    <>
      <h1 className="font-serif text-2xl font-bold text-walnut-900">
        Дашборд
      </h1>
      <p className="mt-2 text-sm text-walnut-500">
        Общая статистика производства
      </p>

      {/* Stats Cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Проектов", value: "0", color: "bg-blue-50 text-blue-700" },
          { label: "Заказов в работе", value: "0", color: "bg-green-50 text-green-700" },
          { label: "Клиентов", value: "0", color: "bg-purple-50 text-purple-700" },
          { label: "Выручка", value: "0 ₽", color: "bg-walnut-50 text-walnut-700" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-walnut-100 bg-white p-6"
          >
            <p className="text-sm text-walnut-500">{stat.label}</p>
            <p className={`mt-2 text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Production Pipeline */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Дизайн-проекты", value: "0", color: "bg-amber-50 text-amber-700" },
          { label: "В производстве", value: "0", color: "bg-blue-50 text-blue-700" },
          { label: "Готовы к сборке", value: "0", color: "bg-green-50 text-green-700" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-walnut-100 bg-white p-6"
          >
            <p className="text-sm text-walnut-500">{stat.label}</p>
            <p className={`mt-2 text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Placeholder for charts */}
      <div className="mt-8 rounded-xl border border-walnut-100 bg-white p-6">
        <h2 className="font-serif text-lg font-semibold text-walnut-800">
          График производства
        </h2>
        <div className="mt-4 flex h-64 items-center justify-center rounded-lg bg-walnut-50 text-sm text-walnut-400">
          Графики появятся после подключения базы данных
        </div>
      </div>
    </>
  );
}