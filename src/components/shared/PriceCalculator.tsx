"use client";

import { useState } from "react";

const CATEGORY_PRICES: Record<string, { min: number; max: number; unit: string }> = {
  kitchens: { min: 60000, max: 300000, unit: "проект" },
  wardrobes: { min: 30000, max: 150000, unit: "шкаф" },
  "dressing-rooms": { min: 50000, max: 250000, unit: "проект" },
  "case-furniture": { min: 20000, max: 200000, unit: "изделие" },
  office: { min: 25000, max: 150000, unit: "проект" },
  hallways: { min: 25000, max: 120000, unit: "проект" },
  children: { min: 30000, max: 150000, unit: "проект" },
};

const CATEGORY_NAMES: Record<string, string> = {
  kitchens: "Кухня",
  wardrobes: "Шкаф-купе",
  "dressing-rooms": "Гардеробная",
  "case-furniture": "Корпусная мебель",
  office: "Офисная мебель",
  hallways: "Прихожая",
  children: "Детская",
};

export function PriceCalculator() {
  const [category, setCategory] = useState("kitchens");
  const [width, setWidth] = useState(200);
  const [showResult, setShowResult] = useState(false);

  const priceInfo = CATEGORY_PRICES[category] || CATEGORY_PRICES.kitchens;
  const estimatedPrice = Math.round(
    priceInfo.min + ((width - 100) / 400) * (priceInfo.max - priceInfo.min)
  );
  const clampedPrice = Math.max(priceInfo.min, Math.min(priceInfo.max, estimatedPrice));

  return (
    <div className="rounded-xl border border-walnut-100 bg-white p-6 shadow-sm">
      <h3 className="font-serif text-lg font-semibold text-walnut-800">
        Примерный расчёт стоимости
      </h3>
      <p className="mt-1 text-sm text-walnut-500">
        Калькулятор даёт ориентировочную цену. Точная — после замера и проекта.
      </p>

      <div className="mt-5 space-y-4">
        {/* Category Select */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-walnut-600">
            Тип мебели
          </label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setShowResult(false);
            }}
            className="w-full rounded-lg border border-walnut-200 px-3 py-2 text-sm text-walnut-700"
          >
            {Object.entries(CATEGORY_NAMES).map(([slug, name]) => (
              <option key={slug} value={slug}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Width Slider */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-walnut-600">
            Ширина (мм): <span className="font-semibold text-walnut-800">{width}</span>
          </label>
          <input
            type="range"
            min={100}
            max={500}
            step={10}
            value={width}
            onChange={(e) => {
              setWidth(Number(e.target.value));
              setShowResult(false);
            }}
            className="w-full accent-walnut-600"
          />
          <div className="flex justify-between text-xs text-walnut-400">
            <span>100 см</span>
            <span>500 см</span>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          type="button"
          onClick={() => setShowResult(true)}
          className="w-full rounded-lg bg-walnut-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-walnut-700"
        >
          Рассчитать
        </button>

        {/* Result */}
        {showResult && (
          <div className="rounded-lg bg-walnut-50 p-4 text-center">
            <p className="text-xs text-walnut-500">Ориентировочная цена</p>
            <p className="mt-1 font-serif text-2xl font-bold text-walnut-800">
              {clampedPrice.toLocaleString("ru-RU")} ₽
            </p>
            <p className="mt-1 text-xs text-walnut-400">
              за {priceInfo.unit}. Точная цена после замера.
            </p>
            <a
              href="tel:+78001234567"
              className="mt-3 inline-block text-sm font-medium text-walnut-600 underline hover:text-walnut-800"
            >
              +7 (800) 123-45-67
            </a>
          </div>
        )}
      </div>
    </div>
  );
}