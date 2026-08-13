"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CircleDot, CircleDashed, Route } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LEARNING_JOURNEY, type TimelineStage } from "@/lib/constants";
import { cn } from "@/lib/utils";

const STATUS_CONFIG: Record<
  TimelineStage["status"],
  { icon: typeof CheckCircle2; classes: string; label: string }
> = {
  completed: {
    icon: CheckCircle2,
    classes: "border-sprout-500/40 bg-sprout-500/10 text-sprout-400",
    label: "Completed",
  },
  "in-progress": {
    icon: CircleDot,
    classes: "border-signal-500/40 bg-signal-500/10 text-signal-400",
    label: "In Progress",
  },
  upcoming: {
    icon: CircleDashed,
    classes: "border-abyss-600 bg-abyss-800/60 text-mist-500",
    label: "Coming Soon",
  },
};

export function Timeline() {
  return (
    <section id="journey" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Learning Journey"
          icon={Route}
          title="My roadmap from data to deep learning"
          description="A living map of what I've mastered, what I'm working on now, and what's next."
        />

        <div className="relative mt-14">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-signal-500/40 via-abyss-600 to-transparent md:block"
            aria-hidden
          />

          <ol className="space-y-6 md:space-y-0">
            {LEARNING_JOURNEY.map((stage, index) => {
              const config = STATUS_CONFIG[stage.status];
              const Icon = config.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.li
                  key={stage.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className={cn(
                    "relative flex md:items-center md:gap-8 md:py-6",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  <div className="hidden flex-1 md:block" />

                  <div
                    className={cn(
                      "z-10 hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 md:flex",
                      config.classes,
                      "bg-abyss-950"
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </div>

                  <div className="flex-1">
                    <div className="glass-panel rounded-2xl p-5">
                      <div className="flex items-center gap-2 md:hidden">
                        <div
                          className={cn(
                            "flex h-8 w-8 items-center justify-center rounded-full border-2",
                            config.classes
                          )}
                        >
                          <Icon className="h-4 w-4" aria-hidden />
                        </div>
                      </div>
                      <p className={cn("mt-3 font-mono text-[0.65rem] uppercase tracking-wider md:mt-0", config.classes.split(" ").pop())}>
                        {config.label}
                      </p>
                      <h3 className="mt-1.5 font-display text-base font-semibold text-mist-100">
                        {stage.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-mist-400">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
