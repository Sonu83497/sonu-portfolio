import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <div
        className={cn(
          "inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal-400",
          align === "center" && "justify-center"
        )}
      >
        {Icon && <Icon className="h-3.5 w-3.5" aria-hidden />}
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-mist-100 sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-balance text-base leading-relaxed text-mist-400">{description}</p>
      )}
    </div>
  );
}
