import { tv, type VariantProps } from "tailwind-variants";
import { forwardRef, type ComponentProps } from "react";

const button = tv({
  base: "flex items-center justify-center gap-1 duration-300 tracking-tight leading-5.5 outline-none ring-offset-2 ring-offset-black focus-visible:ring-2 disabled:cursor-not-allowed overflow-hidden",

  variants: {
    variant: {
      primary:
        "bg-zinc-100 text-black hover:bg-zinc-200 ring-zinc-300 focus:bg-zinc-300 disabled:bg-zinc-500 disabled:text-zinc-400",
      secondary:
        "bg-zinc-200 text-zinc-800 hover:bg-zinc-300/90 ring-zinc-400 focus:bg-zinc-400 disabled:bg-zinc-500 disabled:text-zinc-400",
      ghost:
        "bg-transparent text-white hover:bg-zinc-300/20 ring-zinc-300/30 focus:bg-zinc-300/30 disabled:text-zinc-400 disabled:bg-transparent",
      outline:
        "bg-transparent text-white border border-zinc-100 hover:bg-zinc-300/20 ring-zinc-300/30 focus:bg-zinc-300/30 disabled:text-zinc-400 disabled:border-zinc-400 disabled:bg-transparent",
      danger:
        "bg-red-500 text-black hover:bg-red-600 ring-zinc-bg-red-700 focus:bg-red-700 disabled:bg-red-950 disabled:text-zinc-400",
      success:
        "bg-green-500 text-black hover:bg-green-600 focus:bg-green-700 disabled:bg-green-950 disabled:text-zinc-400",
      warning:
        "bg-yellow-500 text-black hover:bg-yellow-600 focus:bg-yellow-700 disabled:bg-yellow-950 disabled:text-zinc-400",
    },

    size: {
      default: "px-4 py-2 text-base",
      large: "px-5 py-2.5 text-lg",
      compact: "px-3 py-1.5 text-sm",
      mini: "px-2 py-1 text-xs",
    },

    shape: {
      default: "rounded-md",
      square: "rounded-md p-0",
      circle: "rounded-full p-0",
    },
  },

  compoundVariants: [
    { shape: "square", size: "default", class: "w-10 h-10" },
    { shape: "square", size: "large", class: "w-11 h-11" },
    { shape: "square", size: "compact", class: "w-8 h-8" },
    { shape: "square", size: "mini", class: "w-6 h-6" },

    { shape: "circle", size: "default", class: "w-10 h-10" },
    { shape: "circle", size: "large", class: "w-11 h-11" },
    { shape: "circle", size: "compact", class: "w-8 h-8" },
    { shape: "circle", size: "mini", class: "w-6 h-6" },
  ],

  defaultVariants: {
    variant: "primary",
    size: "default",
    shape: "default",
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={button({ variant, size, shape, className })}
      />
    );
  }
);

Button.displayName = "Button";
