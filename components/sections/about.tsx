"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, MapPin, Sparkles, Target, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { QUICK_FACTS, SITE } from "@/lib/constants";

const FACT_ICONS = [GraduationCap, Target, MapPin, Sparkles];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="About Me" icon={User} title="The engineer behind the models" />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full">
              <p className="leading-relaxed text-mist-300">
                Hello! I&apos;m {SITE.name}, A Computer Science Engineering student
                passionate about Artificial Intelligence and Machine Learning. I enjoy building
                practical projects, analyzing data, and continuously improving my problem-solving
                skills.
              </p>
              <p className="mt-4 leading-relaxed text-mist-400">
                My goal is to become an AI Engineer and contribute to impactful AI solutions —
                turning messy, real-world data into models and products people can actually rely
                on.
              </p>
              <Button href="#contact" variant="link" className="mt-6">
                Know More About Me <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </GlassCard>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {QUICK_FACTS.map((fact, index) => {
              const Icon = FACT_ICONS[index % FACT_ICONS.length];
              return (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <GlassCard hoverable className="h-full">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal-500/10 text-signal-400">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-wider text-mist-500">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-mist-200">{fact.value}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
