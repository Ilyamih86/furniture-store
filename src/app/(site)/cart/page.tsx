import type { Metadata } from "next";
import { CartContent } from "./CartContent";

export const metadata: Metadata = {
  title: "Корзина",
  description: "Ваша корзина проектов. Оформите заказ на изготовление мебели",
};

export default function CartPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-walnut-500">
        <a href="/" className="hover:text-walnut-700">Главная</a>
        <span className="mx-2">/</span>
        <span className="text-walnut-800">Корзина</span>
      </nav>

      <h1 className="font-serif text-3xl font-bold text-walnut-900">Корзина</h1>
      <CartContent />
    </div>
  );
}