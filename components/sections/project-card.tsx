"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/constants";

const ACCENT_GRADIENTS: Record<Project["accent"], string> = {
  blue: "from-signal-700/30 via-abyss-800 to-signal-500/5",
  violet: "from-aurora-500/25 via-abyss-800 to-aurora-500/5",
  emerald: "from-sprout-500/25 via-abyss-800 to-sprout-500/5",
  amber: "from-ember-500/25 via-abyss-800 to-ember-500/5",
};

const ACCENT_TEXT: Record<Project["accent"], string> = {
  blue: "text-signal-300",
  violet: "text-aurora-400",
  emerald: "text-sprout-400",
  amber: "text-ember-400",
};

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="h-full"
    >
      <GlassCard hoverable className="flex h-full flex-col p-0">
        <div
          className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-t-[var(--radius-card)] bg-gradient-to-br ${ACCENT_GRADIENTS[project.accent]}`}
        >
          {project.featured && (
            <span className="absolute right-3 top-3 rounded-full bg-signal-500 px-2.5 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-wide text-abyss-950">
              Featured
            </span>
          )}
          <p className={`px-6 text-center font-display text-xl font-bold ${ACCENT_TEXT[project.accent]}`}>
            {project.title}
          </p>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className={`font-mono text-[0.65rem] uppercase tracking-wider ${ACCENT_TEXT[project.accent]}`}>
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold text-mist-100">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-400">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-5 flex gap-2">
            <Button href={project.githubUrl} external size="sm" variant="outline" className="flex-1">
              <Github className="h-3.5 w-3.5" aria-hidden /> GitHub
            </Button>
            <Button href={project.liveUrl} external size="sm" className="flex-1">
              View Project <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </Button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
