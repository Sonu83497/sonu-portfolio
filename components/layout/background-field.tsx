export function BackgroundField() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-abyss-950">
      {/* Dot grid */}
      <div
        className="grid-line-mask absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(125, 184, 255, 0.16) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Drifting glow orbs */}
      <div className="animate-float absolute -left-32 top-[-10%] h-[28rem] w-[28rem] rounded-full bg-signal-600/25 blur-[120px]" />
      <div
        className="animate-float absolute right-[-10%] top-[20%] h-[24rem] w-[24rem] rounded-full bg-aurora-500/20 blur-[130px]"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="animate-float absolute bottom-[-15%] left-[30%] h-[26rem] w-[26rem] rounded-full bg-signal-500/15 blur-[140px]"
        style={{ animationDelay: "3s" }}
      />

      {/* Base vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-abyss-950/40 to-abyss-950" />
    </div>
  );
}
