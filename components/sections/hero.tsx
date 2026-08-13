"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Sparkles, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { HERO_BADGES, HERO_FOCUS_AREAS, HERO_STATS, SITE } from "@/lib/constants";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-36 sm:pt-40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
          {/* Left: copy */}
          <div>
            <motion.div
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-signal-500/25 bg-signal-500/10 px-4 py-1.5 font-mono text-xs font-medium text-signal-300"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              {SITE.role}
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={fadeUp}
              className="mt-5 text-4xl font-semibold leading-[1.1] text-mist-100 sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m
              <br />
              <span className="text-gradient-signal">{SITE.name}</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              custom={0.2}
              variants={fadeUp}
              className="mt-5 max-w-xl text-balance text-base leading-relaxed text-mist-400 sm:text-lg"
            >
              {SITE.tagline}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.3}
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href={SITE.resumeUrl} external size="lg">
                Download Resume <Download className="h-4 w-4" aria-hidden />
              </Button>
              <Button href={SITE.github} external variant="outline" size="lg">
                <Github className="h-4 w-4" aria-hidden /> GitHub
              </Button>
              <Button href={SITE.linkedin} external variant="outline" size="lg">
                <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
              </Button>
              <Button href="#contact"/*{`mailto:${SITE.email}`}</motion.div>*/ variant="outline" size="lg">
                <Mail className="h-4 w-4" aria-hidden /> Contact Me
              </Button>
            </motion.div>

            <motion.dl
              initial="hidden"
              animate="show"
              custom={0.4}
              variants={fadeUp}
              className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4"
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-mist-100 sm:text-3xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs text-mist-500">{stat.label}</dd>
                </div>
              ))}
            </motion.dl>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.5}
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-2"
            >
              {HERO_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-abyss-600 bg-abyss-800/50 px-3 py-1 font-mono text-[0.7rem] text-mist-400"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: portrait + focus card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto flex w-full max-w-md items-center justify-center"
          >
            {/* Orbit rings */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="animate-pulse-glow h-72 w-72 rounded-full border border-signal-500/25 sm:h-80 sm:w-80" />
              <div className="absolute h-96 w-96 rounded-full border border-dashed border-aurora-500/15 sm:h-[26rem] sm:w-[26rem]" />
              <div className="absolute h-64 w-64 rounded-full bg-signal-500/20 blur-[90px]" />
            </div>

            {/* Monogram portrait card */}
            {/* <div className="relative flex h-72 w-72 items-center justify-center rounded-[2.5rem] border border-signal-500/20 bg-gradient-to-br from-abyss-800 via-abyss-850 to-abyss-900 shadow-glow-md sm:h-80 sm:w-80">
              <span className="font-display text-8xl font-semibold text-gradient-signal">
                SP
              </span>
              <div className="absolute -right-3 top-6 h-3 w-3 rounded-full bg-sprout-400 shadow-[0_0_12px_2px_rgba(74,222,128,0.6)]" />
            </div>
            */}
            <div className="relative h-72 w-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1 animate-pulse">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-black">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Sonu Prajapati"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Focus card */}
            <GlassCard className="absolute -right-2 top-2 hidden w-52 p-4 sm:-right-10 sm:block">
              <p className="font-mono text-[0.65rem] uppercase tracking-wider text-signal-400">
                Currently Focusing On
              </p>
              <ul className="mt-3 space-y-2">
                {HERO_FOCUS_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-xs text-mist-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal-400" aria-hidden />
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-3 flex items-center gap-1 text-[0.65rem] text-mist-500">
                Exploring the future of AI <ArrowUpRight className="h-3 w-3" aria-hidden />
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
