"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Github, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FEATURED_PROJECT } from "@/lib/constants";

export function FeaturedProject() {
  const project = FEATURED_PROJECT;

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Featured Project" icon={Star} title={project.title} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <GlassCard hoverable className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
            {/* Visual */}
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-signal-500/15 bg-gradient-to-br from-signal-700/30 via-abyss-800 to-aurora-500/10">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(125,184,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(125,184,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative text-center">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal-300">
                  Data Analysis
                </p>
                <p className="mt-2 font-display text-4xl font-bold leading-tight text-mist-100 sm:text-5xl">
                  IPL 2022
                  <br />
                  <span className="text-gradient-signal">Data Analysis</span>
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="font-display text-2xl font-semibold text-mist-100">
                {project.title}
              </h3>
              <p className="mt-3 leading-relaxed text-mist-400">{project.description}</p>

              <ul className="mt-5 space-y-2.5">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-mist-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-signal-400" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} tone="signal">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={project.githubUrl} external variant="outline">
                  <Github className="h-4 w-4" aria-hidden /> View on GitHub
                </Button>
                <Button href={project.liveUrl} external>
                  View Project <ExternalLink className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}
