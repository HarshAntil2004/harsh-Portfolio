"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="mono-eyebrow mb-3">{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <Reveal className="max-w-2xl mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)]">
        {title}
      </h2>
      {lede && <p className="mt-4 text-[var(--text-dim)] text-base leading-relaxed">{lede}</p>}
    </Reveal>
  );
}
