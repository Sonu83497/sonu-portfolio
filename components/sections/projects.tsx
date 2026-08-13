"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Rocket } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/sections/project-card";
import { PROJECTS, PROJECT_FILTERS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof PROJECT_FILTERS)[number]>(
    "All Projects"
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="My Projects"
            icon={Briefcase}
            title="Here's what I've been building"
            description="A mix of data analysis, machine learning, and applied AI projects. More are on the way."
          />
          <Button href={SITE.github} external variant="outline" className="shrink-0">
            View All Projects <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeFilter === filter
                  ? "border-signal-500 bg-signal-500 text-abyss-950"
                  : "border-abyss-600 text-mist-400 hover:border-signal-500/50 hover:text-mist-100"
              )}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="flex h-full flex-col items-center justify-center gap-3 border-dashed py-12 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-signal-500/10 text-signal-400">
                <Rocket className="h-5 w-5" aria-hidden />
              </div>
              <p className="font-display text-base font-semibold text-mist-100">
                More Projects Coming Soon
              </p>
              <p className="max-w-[16rem] text-xs text-mist-500">
                I&apos;m constantly building new projects. Stay tuned!
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
