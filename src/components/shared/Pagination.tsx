"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { range } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pages = range(1, totalPages);

  return (
    <nav
      className="flex items-center justify-center gap-1"
      aria-label="Пагинация"
    >
      {/* Previous */}
      {currentPage > 1 && (
        <Link
          href={createPageUrl(currentPage - 1)}
          className="rounded-lg px-3 py-2 text-sm text-walnut-600 transition-colors hover:bg-walnut-50"
        >
          Назад
        </Link>
      )}

      {/* Pages */}
      {pages.map((page) => (
        <Link
          key={page}
          href={createPageUrl(page)}
          className={cn(
            "rounded-lg px-3 py-2 text-sm transition-colors",
            page === currentPage
              ? "bg-walnut-600 text-white"
              : "text-walnut-600 hover:bg-walnut-50",
          )}
        >
          {page}
        </Link>
      ))}

      {/* Next */}
      {currentPage < totalPages && (
        <Link
          href={createPageUrl(currentPage + 1)}
          className="rounded-lg px-3 py-2 text-sm text-walnut-600 transition-colors hover:bg-walnut-50"
        >
          Вперед
        </Link>
      )}
    </nav>
  );
}