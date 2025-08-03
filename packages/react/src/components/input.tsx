import { forwardRef, type ComponentProps, useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Button } from "./button";
import { clsx } from "clsx";

const input = tv({
  base: "w-full px-4 py-2 text-base rounded-md border outline-none duration-300 focus:ring-2 focus:ring-offset-1 focus:ring-offset-black disabled:cursor-not-allowed",

  variants: {
    state: {
      default:
        "border-zinc-300 focus:border-zinc-400 focus:ring-zinc-400 disabled:border-zinc-400",
      success:
        "border-green-500 focus:border-green-600 focus:ring-green-600 disabled:border-zinc-400",
      error:
        "border-red-500 focus:border-red-600 focus:ring-red-600 disabled:border-zinc-400",
    },

    size: {
      default: "px-4 py-2 text-base",
      large: "px-5 py-3 text-lg rounded-lg",
      compact: "px-3 py-1.5 text-sm",
      mini: "px-2 py-1 text-xs rounded",
    },

    withClear: {
      true: "pr-10",
      false: "",
    },
  },

  defaultVariants: {
    state: "default",
    size: "default",
    withClear: false,
  },
});

export type InputVariants = VariantProps<typeof input>;
export type InputProps = Omit<ComponentProps<"input">, "size"> &
  InputVariants & {
    onClear?: () => void;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, state, size, withClear, onClear, ...props }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div className="relative w-full">
        <input
          {...props}
          ref={ref}
          value={props.value ?? value}
          onChange={(e) => {
            setValue(e.target.value);
            props.onChange?.(e);
          }}
          className={clsx(input({ state, size, withClear }), className)}
        />

        {withClear && (props.value ?? value) && (
          <Button
            type="button"
            variant="ghost"
            size="mini"
            shape="circle"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => {
              setValue("");
              onClear?.();
            }}
          >
            ✖
          </Button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
