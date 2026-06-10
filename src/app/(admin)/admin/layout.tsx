import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Админ-панель | Мебельная фабрика",
    template: "%s | Админ-панель",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const adminNavItems = [
  { label: "Дашборд", href: "/admin/dashboard", icon: "📊" },
  { label: "Проекты", href: "/admin/products", icon: "📦" },
  { label: "Категории", href: "/admin/categories", icon: "📁" },
  { label: "Заказы", href: "/admin/orders", icon: "📋" },
  { label: "Пользователи", href: "/admin/users", icon: "👥" },
  { label: "Промокоды", href: "/admin/promocodes", icon: "🏷️" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-walnut-100 bg-walnut-50 lg:block">
        <div className="sticky top-0">
          <div className="border-b border-walnut-100 px-6 py-4">
            <Link
              href="/admin/dashboard"
              className="font-serif text-lg font-bold text-walnut-800"
            >
              Мебельная фабрика
            </Link>
          </div>
          <nav className="space-y-1 px-3 py-4">
            {adminNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-walnut-600 transition-colors hover:bg-walnut-100 hover:text-walnut-800"
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-walnut-100 px-6 py-4">
            <Link
              href="/"
              className="text-sm text-walnut-400 hover:text-walnut-600"
            >
              ← На сайт
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-8">{children}</div>
      </div>
    </div>
  );
}