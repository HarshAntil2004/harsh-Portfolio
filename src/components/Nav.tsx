"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/content/data";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[var(--bg)]/70 border-b border-[var(--border)]" : ""
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-[family-name:var(--font-mono)] text-sm tracking-tight text-[var(--text)]"
        >
          harsh<span className="text-[var(--signal)]">.</span>antil
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download
            className="hidden sm:inline-flex text-sm px-4 py-2 rounded-full border border-[var(--border)] text-[var(--text)] hover:border-[var(--signal-dim)] hover:text-[var(--signal)] transition-colors"
          >
            Résumé
          </a>
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)]"
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[var(--text-dim)]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
