import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { GithubIcon, TelegramIcon } from "@/components/brand-icons";
import { Logo } from "@/components/logo";
import { siteConfig, navLinks } from "@/lib/site-config";

const legalLinks = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const resourceLinks = [
  { label: "Source", href: siteConfig.links.source, external: true },
  { label: "Maintainership", href: siteConfig.links.maintainership, external: true },
  { label: "Changelog", href: siteConfig.links.changelog, external: true },
  { label: "XDA Forums", href: siteConfig.links.xda, external: true },
  { label: "SourceForge", href: siteConfig.links.sourceforge, external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="flex gap-2">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid size-9 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="grid size-9 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:text-foreground"
              >
                <TelegramIcon className="size-4" />
              </a>
              <Link
                href="/download"
                aria-label="Download"
                className="grid size-9 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:text-foreground"
              >
                <Download className="size-4" />
              </Link>
            </div>
          </div>

          <FooterCol title="Explore" links={navLinks.map((l) => ({ ...l }))} />
          <FooterCol title="Resources" links={resourceLinks} />
          <FooterCol title="Legal" links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; 2022–{new Date().getFullYear()} Project Blaze. All rights reserved.</p>
          <a
            href="mailto:hr@projectblaze.co.in"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Mail className="size-3.5 shrink-0" />
            hr@projectblaze.co.in
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h3 className="font-heading text-sm font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
