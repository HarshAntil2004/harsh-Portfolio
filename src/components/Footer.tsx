"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/content/data";

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-6xl px-6 py-10 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
      <p className="text-xs text-[var(--text-faint)]">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
      </p>
      <a
        href="#top"
        className="inline-flex items-center gap-2 text-xs text-[var(--text-dim)] hover:text-[var(--signal)] transition-colors"
      >
        Back to top <ArrowUp size={13} />
      </a>
    </footer>
  );
}
