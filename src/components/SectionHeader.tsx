import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
        {description}
      </p>
    </div>
  );
}
