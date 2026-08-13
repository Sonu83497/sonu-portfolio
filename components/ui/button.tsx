import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-signal-500 text-abyss-950 hover:bg-signal-400 shadow-glow-sm hover:shadow-glow-md",
        outline:
          "border border-abyss-600 text-mist-200 hover:border-signal-500/60 hover:text-mist-100 hover:bg-abyss-800/60",
        ghost: "text-mist-300 hover:text-mist-100 hover:bg-abyss-800/60",
        link: "text-signal-400 hover:text-signal-300 underline-offset-4 hover:underline p-0",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-5",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type Variant = VariantProps<typeof buttonVariants>;

type ButtonAsButton = Variant &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    href?: undefined;
    external?: undefined;
    type?: "button" | "submit" | "reset";
  };

type ButtonAsLink = Variant &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  if ("href" in props && props.href !== undefined) {
    const {
      href,
      external,
      variant,
      size,
      className,
      children,
      ...anchorProps
    } = props;

    const classes = cn(buttonVariants({ variant, size }), className);

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const {
    variant,
    size,
    className,
    children,
    type,
    ...buttonProps
  } = props;

  const classes = cn(buttonVariants({ variant, size }), className);

  return (
    <button
      type={type}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
}