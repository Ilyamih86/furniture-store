"use client";

import { useState, type FormEvent } from "react";

export function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Имитация отправки — в реальности заменить на API-вызов
    await new Promise((r) => setTimeout(r, 1000));

    setLoading(false);
    setSubmitted(true);
    setName("");
    setPhone("");
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-green-50 p-6 text-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="mx-auto h-10 w-10 text-green-500"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
        <p className="mt-3 font-medium text-green-800">
          Спасибо! Мы свяжемся с вами в ближайшее время.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-3 text-sm text-green-600 underline hover:text-green-800"
        >
          Отправить ещё раз
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="callback-name" className="sr-only">
          Ваше имя
        </label>
        <input
          id="callback-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
          required
          className="w-full rounded-lg border border-walnut-200 px-4 py-2.5 text-sm text-walnut-800 placeholder-walnut-400 focus:border-walnut-500 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="callback-phone" className="sr-only">
          Номер телефона
        </label>
        <input
          id="callback-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 (___) ___-__-__"
          required
          className="w-full rounded-lg border border-walnut-200 px-4 py-2.5 text-sm text-walnut-800 placeholder-walnut-400 focus:border-walnut-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-walnut-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-walnut-700 disabled:opacity-50"
      >
        {loading ? "Отправка..." : "Заказать звонок"}
      </button>
      <p className="text-xs text-walnut-400">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}