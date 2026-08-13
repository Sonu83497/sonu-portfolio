"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CERTIFICATES } from "@/lib/constants";

export function Certificates() {
  return (
    <section id="certifications" className="py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Certifications" icon={Award} title="Credentials I've earned" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              className="h-full"
            >
              <GlassCard hoverable className="flex h-full flex-col p-0">
                <div className="flex aspect-[16/10] items-center justify-center rounded-t-[var(--radius-card)] bg-gradient-to-br from-signal-700/25 via-abyss-800 to-aurora-500/10">
                  <Award className="h-10 w-10 text-signal-400" aria-hidden />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-sm font-semibold text-mist-100">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs text-mist-500">
                    {cert.provider} &middot; {cert.date}
                  </p>
                  <Button
                    href={cert.url}
                    external
                    variant="outline"
                    size="sm"
                    className="mt-4 justify-center"
                  >
                    View Certificate <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
