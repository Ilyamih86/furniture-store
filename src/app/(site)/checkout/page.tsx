import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оформление заказа",
  description: "Оформите заказ на изготовление мебели по индивидуальному проекту",
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-walnut-500">
        <a href="/" className="hover:text-walnut-700">Главная</a>
        <span className="mx-2">/</span>
        <a href="/cart" className="hover:text-walnut-700">Корзина</a>
        <span className="mx-2">/</span>
        <span className="text-walnut-800">Оформление заказа</span>
      </nav>

      <h1 className="font-serif text-3xl font-bold text-walnut-900">
        Оформление заказа
      </h1>

      <div className="mt-8 rounded-xl border border-walnut-100 bg-white p-6">
        <p className="text-center text-walnut-500 py-8">
          Форма заказа будет доступна после подключения базы данных и аутентификации
        </p>
      </div>
    </div>
  );
}