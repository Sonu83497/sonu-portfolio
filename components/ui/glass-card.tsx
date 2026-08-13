import { cn } from "@/lib/utils";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  hoverable?: boolean;
};

export function GlassCard({ children, className, hoverable = false, ...rest }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-[var(--radius-card)] p-6",
        hoverable &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-signal-500/30 hover:shadow-glow-md",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
