import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface EmptyStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  icon?: React.ReactNode;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {icon && <div className="mb-4 text-walnut-300">{icon}</div>}
      <h3 className="font-serif text-xl font-semibold text-walnut-800">
        {title}
      </h3>
      {description && (
        <p className="mt-2 max-w-sm text-sm text-walnut-500">{description}</p>
      )}
      {actionLabel && actionHref && (
        <Link href={actionHref} className="mt-6">
          <Button>{actionLabel}</Button>
        </Link>
      )}
    </div>
  );
}