"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE.location,
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    try {
      await emailjs.send(
        "service_tyncoqj",
        "template_ubjg9nu",
        {
          name,
          email,
          message,
        },
        {
          publicKey: "swAB-6I-d4dYpGt6s",
        }
      );

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          icon={MessageSquare}
          title="Let's build something together"
          description="Have a project, internship, or opportunity in mind? I'd love to hear from you."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full">
              <h3 className="font-display text-base font-semibold text-mist-100">
                Let&apos;s Connect
              </h3>

              <ul className="mt-5 space-y-5">
                {CONTACT_DETAILS.map((detail) => {
                  const Icon = detail.icon;

                  const content = (
                    <>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal-500/10 text-signal-400">
                        <Icon className="h-4 w-4" aria-hidden />
                      </div>

                      <div>
                        <p className="font-mono text-[0.65rem] uppercase tracking-wider text-mist-500">
                          {detail.label}
                        </p>

                        <p className="mt-0.5 text-sm text-mist-200">
                          {detail.value}
                        </p>
                      </div>
                    </>
                  );

                  return (
                    <li key={detail.label}>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="flex items-start gap-3"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-start gap-3">
                          {content}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard className="h-full">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-abyss-600 bg-abyss-800/60 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 focus:border-signal-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Your Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-abyss-600 bg-abyss-800/60 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 focus:border-signal-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-xl border border-abyss-600 bg-abyss-800/60 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 focus:border-signal-500 focus:outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="justify-center"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" aria-hidden />
                </Button>

                {status === "sent" && (
                  <p
                    role="status"
                    className="text-center text-xs text-sprout-400"
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}

                {status === "error" && (
                  <p role="alert" className="text-center text-xs text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
