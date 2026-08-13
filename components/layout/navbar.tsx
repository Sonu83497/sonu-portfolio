"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled();
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between rounded-full border border-transparent px-4 py-2.5 transition-all duration-300",
            scrolled && "glass-panel shadow-glow-sm"
          )}
        >
          <Link
            href="#home"
            className="font-display text-lg font-semibold tracking-tight text-mist-100"
          >
            {SITE.shortName}
            <span className="text-signal-400">.</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium text-mist-400 transition-colors hover:text-mist-100",
                    isActive && "text-mist-100"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-signal-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button href={SITE.resumeUrl} external size="sm" variant="outline">
              Resume <Download className="h-3.5 w-3.5" aria-hidden />
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-mist-200 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <Container className="mt-3">
              <div className="glass-panel flex flex-col gap-1 rounded-2xl p-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-2.5 text-sm font-medium text-mist-300 transition-colors hover:bg-abyss-800/60 hover:text-mist-100"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  href={SITE.resumeUrl}
                  external
                  size="sm"
                  variant="primary"
                  className="mt-2 justify-center"
                >
                  Resume <Download className="h-3.5 w-3.5" aria-hidden />
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
