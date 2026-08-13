"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  LayoutGrid,
  Server,
  Wrench,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SKILL_CATEGORIES, type SkillCategory } from "@/lib/constants";

const ICON_MAP: Record<SkillCategory["icon"], LucideIcon> = {
  code: Code2,
  database: Database,
  brain: BrainCircuit,
  layout: LayoutGrid,
  server: Server,
  wrench: Wrench,
  chart: BarChart3,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          icon={Code2}
          title="Tools I use to turn data into decisions"
          description="A practical toolkit spanning programming, analytics, machine learning, and the web technologies used to ship them."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = ICON_MAP[category.icon];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              >
                <GlassCard hoverable className="h-full">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal-500/10 text-signal-400">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="font-display text-base font-semibold text-mist-100">
                      {category.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item.name}
                        className="rounded-lg border border-abyss-600 bg-abyss-800/50 px-2.5 py-1.5 text-xs text-mist-300"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
