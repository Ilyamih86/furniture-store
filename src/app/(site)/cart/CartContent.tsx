"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/shared/EmptyState";

export function CartContent() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <EmptyState
        title="Корзина пуста"
        description="Добавьте проекты из каталога, чтобы оформить заказ"
        actionLabel="Перейти в каталог"
        actionHref="/catalog"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="h-16 w-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        }
      />
    );
  }

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-3">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <div className="divide-y divide-walnut-100">
          {items.map((item) => (
            <div key={item.productId} className="flex gap-4 py-6">
              {/* Image */}
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-walnut-50">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-walnut-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <Link
                    href={`/product/${item.slug}`}
                    className="text-sm font-medium text-walnut-800 hover:text-walnut-600"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-1 text-sm font-semibold text-walnut-900">
                    {formatPrice(item.price)}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity - 1)
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-walnut-200 text-walnut-600 hover:bg-walnut-50"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-medium text-walnut-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity + 1)
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-walnut-200 text-walnut-600 hover:bg-walnut-50"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="text-sm text-walnut-400 hover:text-red-500"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-walnut-100 pt-4">
          <button
            onClick={clearCart}
            className="text-sm text-walnut-400 hover:text-red-500"
          >
            Очистить корзину
          </button>
          <Link
            href="/catalog"
            className="text-sm text-walnut-600 hover:text-walnut-800"
          >
            Продолжить выбор
          </Link>
        </div>
      </div>

      {/* Summary */}
      <div className="h-fit rounded-xl border border-walnut-100 bg-walnut-50 p-6">
        <h3 className="font-serif text-lg font-semibold text-walnut-800">
          Итого
        </h3>
        <div className="mt-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-walnut-500">Товары ({items.length})</span>
            <span className="font-medium text-walnut-800">
              {formatPrice(getTotal())}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-walnut-500">Доставка</span>
            <span className="text-walnut-400">Рассчитывается</span>
          </div>
          <div className="border-t border-walnut-200 pt-3">
            <div className="flex justify-between">
              <span className="font-semibold text-walnut-800">Всего</span>
              <span className="font-serif text-xl font-bold text-walnut-900">
                {formatPrice(getTotal())}
              </span>
            </div>
          </div>
        </div>
        <Link href="/checkout" className="mt-6 block">
          <Button className="w-full">Оформить заказ</Button>
        </Link>
      </div>
    </div>
  );
}