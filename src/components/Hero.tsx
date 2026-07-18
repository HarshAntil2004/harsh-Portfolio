"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Mail } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { profile } from "@/content/data";

// Deterministic pseudo-scatter of "noise" points behind one highlighted "signal" reading —
// the visual thesis: raw data (noise) resolved into one clear, actionable point.
const noisePoints = Array.from({ length: 46 }).map((_, i) => {
  const seed = i * 137.5;
  const x = (Math.sin(seed) * 0.5 + 0.5) * 100;
  const y = (Math.cos(seed * 1.7) * 0.5 + 0.5) * 100;
  const r = 1.4 + (i % 5) * 0.3;
  return { x, y, r, id: i };
});

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="data-field" aria-hidden />

      {/* signal scatter */}
      <svg
        className="absolute inset-0 w-full h-full opacity-90"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {noisePoints.map((p) => (
          <circle
            key={p.id}
            cx={p.x}
            cy={p.y}
            r={p.r * 0.22}
            fill="var(--text-faint)"
            opacity={0.35}
          />
        ))}
        <motion.line
          x1="18"
          y1="72"
          x2="82"
          y2="30"
          stroke="var(--signal-dim)"
          strokeWidth="0.25"
          strokeDasharray="0.6 1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
        />
        <motion.circle
          cx="82"
          cy="30"
          r="1.1"
          fill="var(--signal)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/60"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--signal)] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--signal)]" />
          </span>
          <span className="mono-eyebrow !mb-0">{profile.availability}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] font-semibold tracking-tight text-[var(--text)] text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl max-w-4xl"
        >
          Raw data,{" "}
          <span className="text-[var(--text-dim)]">read out loud</span> as
          a decision.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-lg text-[var(--text-dim)] leading-relaxed"
        >
          I&apos;m {profile.name}, a {profile.role.toLowerCase()} from {profile.location}.
          I clean it, query it, chart it, and tell you what to do next.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--signal)] text-[var(--ink-950)] px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            See the work
            <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm text-[var(--text)] hover:border-[var(--signal-dim)] hover:text-[var(--signal)] transition-colors"
          >
            Get in touch
          </a>

          <div className="flex items-center gap-2 ml-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-dim)] hover:text-[var(--text)] hover:border-[var(--line-strong)] transition-colors"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-dim)] hover:text-[var(--text)] hover:border-[var(--line-strong)] transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-dim)] hover:text-[var(--text)] hover:border-[var(--line-strong)] transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
