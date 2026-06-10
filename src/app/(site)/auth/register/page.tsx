import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация",
  description: "Создайте новый аккаунт",
};

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-center font-serif text-3xl font-bold text-walnut-900">
        Регистрация
      </h1>
      <p className="mt-2 text-center text-sm text-walnut-500">
        Создайте аккаунт для доступа ко всем возможностям
      </p>

      <div className="mt-8 rounded-xl border border-walnut-100 bg-white p-6">
        <p className="text-center text-walnut-400 py-8">
          Форма регистрации будет добавлена после настройки NextAuth
        </p>
      </div>
    </div>
  );
}