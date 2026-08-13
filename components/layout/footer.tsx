import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { NAV_LINKS, SITE } from "@/lib/constants";

const SOCIALS = [
  { label: "GitHub", href: SITE.github, icon: Github , external: true },
  { label: "LinkedIn", href: SITE.linkedin, icon: Linkedin , external: true },
  { label: "Email", href: "#contact", icon: Mail , external: false },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-abyss-700/60">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <Link href="#home" className="font-display text-lg font-semibold text-mist-100">
            {SITE.shortName}
            <span className="text-signal-400">.</span>
          </Link>
          <p className="text-xs text-mist-500">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-mist-400 transition-colors hover:text-mist-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {SOCIALS.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? {
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
                : {})}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-abyss-600 text-mist-400 transition-colors hover:border-signal-500/50 hover:text-signal-300"
            >
              <Icon className="h-4 w-4" aria-hidden />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
