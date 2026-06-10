import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход",
  description: "Войдите в свой аккаунт",
};

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-center font-serif text-3xl font-bold text-walnut-900">
        Вход
      </h1>
      <p className="mt-2 text-center text-sm text-walnut-500">
        Войдите, чтобы оформить заказ
      </p>

      <div className="mt-8 rounded-xl border border-walnut-100 bg-white p-6">
        <p className="text-center text-walnut-400 py-8">
          Форма входа будет добавлена после настройки NextAuth
        </p>
      </div>
    </div>
  );
}