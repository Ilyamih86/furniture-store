import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-walnut-500 disabled:pointer-events-none disabled:opacity-50",

          // Variants
          variant === "primary" &&
            "bg-walnut-600 text-white shadow-sm hover:bg-walnut-700 active:bg-walnut-800",
          variant === "secondary" &&
            "bg-walnut-100 text-walnut-800 hover:bg-walnut-200 active:bg-walnut-300",
          variant === "outline" &&
            "border border-walnut-300 text-walnut-700 hover:bg-walnut-50 active:bg-walnut-100",
          variant === "ghost" &&
            "text-walnut-600 hover:bg-walnut-50 hover:text-walnut-800",

          // Sizes
          size === "sm" && "px-3 py-1.5 text-xs",
          size === "md" && "px-4 py-2 text-sm",
          size === "lg" && "px-6 py-3 text-base",

          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";