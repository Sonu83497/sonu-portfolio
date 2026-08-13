import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "signal" | "aurora" | "ember" | "sprout";
};

const TONE_CLASSES: Record<NonNullable<BadgeProps["tone"]>, string> = {
  default: "border-abyss-600 bg-abyss-800/60 text-mist-300",
  signal: "border-signal-500/30 bg-signal-500/10 text-signal-300",
  aurora: "border-aurora-500/30 bg-aurora-500/10 text-aurora-400",
  ember: "border-ember-500/30 bg-ember-500/10 text-ember-400",
  sprout: "border-sprout-500/30 bg-sprout-500/10 text-sprout-400",
};

export function Badge({ children, className, tone = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.7rem] font-medium tracking-wide",
        TONE_CLASSES[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
