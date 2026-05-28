import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
};

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkProps | NativeButtonProps;

const variants = {
  primary:
    "bg-gold text-deep-navy shadow-gold hover:bg-soft-gold border border-gold/70",
  secondary:
    "bg-white text-navy border border-gold/30 shadow-card hover:border-gold hover:text-deep-navy",
  ghost:
    "bg-white/[0.08] text-white border border-white/[0.18] hover:bg-white/[0.14] backdrop-blur",
  dark:
    "bg-navy text-white border border-navy hover:bg-deep-navy shadow-card"
};

export function Button({
  children,
  icon,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 sm:min-h-12 sm:px-6",
    variants[variant],
    className
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, target, rel, ...linkProps } = props as LinkProps;

    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={target === "_blank" ? rel ?? "noreferrer" : rel}
        {...linkProps}
      >
        {icon}
        <span>{children}</span>
      </a>
    );
  }

  const buttonProps = props as NativeButtonProps;

  return (
    <button className={classes} {...buttonProps}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
