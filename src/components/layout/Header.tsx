"use client";

import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/cart-store";
import { useFavoritesStore } from "@/store/favorites-store";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = useCartStore((state) => state.getItemCount());
  const favoritesCount = useFavoritesStore((state) => state.items.length);

  return (
    <header className="sticky top-0 z-50 border-b border-walnut-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl font-bold text-walnut-800">
          Мебельная фабрика
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <Link
            href="/catalog"
            className="text-sm font-medium text-walnut-600 transition-colors hover:text-walnut-800"
          >
            Каталог
          </Link>
          <Link
            href="/catalog?category=kitchens"
            className="text-sm font-medium text-walnut-600 transition-colors hover:text-walnut-800"
          >
            Кухни
          </Link>
          <Link
            href="/catalog?category=wardrobes"
            className="text-sm font-medium text-walnut-600 transition-colors hover:text-walnut-800"
          >
            Шкафы-купе
          </Link>
          <Link
            href="/catalog?category=case-furniture"
            className="text-sm font-medium text-walnut-600 transition-colors hover:text-walnut-800"
          >
            Корпусная мебель
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Favorites */}
          <Link
            href="/profile/favorites"
            className="relative p-2 text-walnut-600 transition-colors hover:text-walnut-800"
            aria-label="Избранное"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            {favoritesCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-walnut-600 text-[10px] font-bold text-white">
                {favoritesCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative p-2 text-walnut-600 transition-colors hover:text-walnut-800"
            aria-label="Корзина"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-walnut-600 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-walnut-600 md:hidden"
            aria-label="Меню"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-walnut-100 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            <Link
              href="/catalog"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-walnut-600 hover:bg-walnut-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог
            </Link>
            <Link
              href="/catalog?category=kitchens"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-walnut-600 hover:bg-walnut-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Кухни
            </Link>
            <Link
              href="/catalog?category=wardrobes"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-walnut-600 hover:bg-walnut-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Шкафы-купе
            </Link>
            <Link
              href="/catalog?category=case-furniture"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-walnut-600 hover:bg-walnut-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Корпусная мебель
            </Link>
            <Link
              href="/catalog?category=dressing-rooms"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-walnut-600 hover:bg-walnut-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Гардеробные
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}