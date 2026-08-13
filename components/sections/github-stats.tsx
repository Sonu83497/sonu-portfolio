"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame, Github } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { GITHUB_STATS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Deterministic contribution intensity pattern (0-4) so server & client render identically.
const CONTRIBUTION_PATTERN = [
  0, 1, 0, 2, 1, 0, 0, 1, 2, 3, 1, 0, 2, 4, 3, 1, 0, 2, 1, 0, 3, 2, 1, 0, 1,
  2, 3, 4, 2, 1, 0, 1, 2, 1, 0, 3, 2, 1, 0, 2, 1, 3, 2, 0, 1, 2, 4, 3, 1, 0,
  2, 1, 0, 3, 4, 2, 1, 0, 1, 2, 3, 1, 0, 2, 1, 4, 3, 2, 1, 0,
];

const INTENSITY_CLASSES = [
  "bg-abyss-800",
  "bg-abyss-600",
  "bg-signal-700/70",
  "bg-signal-500/80",
  "bg-signal-400",
];

const WEEKS = 18;
const DAYS = ["Mon", "Wed", "Fri"];

export function GithubStats() {
  const stats = [
    { label: "Total Repos", value: GITHUB_STATS.totalRepos },
    { label: "Contributions", value: GITHUB_STATS.contributions },
    { label: "GitHub Streak", value: GITHUB_STATS.streak },
    { label: "Top Language", value: GITHUB_STATS.topLanguage },
  ];

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="GitHub Stats" icon={Github} title="Building in the open" />
          <Button href={SITE.github} external variant="outline" className="shrink-0">
            View My GitHub Profile <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <GlassCard className="p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-semibold text-mist-100 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-mist-500">
                    {stat.label === "GitHub Streak" && (
                      <Flame className="h-3.5 w-3.5 text-ember-400" aria-hidden />
                    )}
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-x-auto">
              <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-wider text-mist-500">
                Contribution Graph
              </p>
              <div className="flex gap-3">
                <div className="flex flex-col justify-between py-1 font-mono text-[0.6rem] text-mist-500">
                  {DAYS.map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
                <div
                  className="grid flex-1 grid-flow-col gap-1"
                  style={{ gridTemplateRows: "repeat(7, minmax(0, 1fr))" }}
                >
                  {Array.from({ length: WEEKS * 7 }).map((_, i) => {
                    const intensity = CONTRIBUTION_PATTERN[i % CONTRIBUTION_PATTERN.length];
                    return (
                      <div
                        key={i}
                        className={cn("h-3 w-3 rounded-sm", INTENSITY_CLASSES[intensity])}
                        aria-hidden
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}
