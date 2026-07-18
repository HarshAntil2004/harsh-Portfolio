"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { Reveal, SectionHeading } from "./Reveal";
import { projects } from "@/content/data";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <Reveal delay={index * 0.08}>
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/60 overflow-hidden card-hover">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full text-left p-7 sm:p-9 flex items-start justify-between gap-6"
        >
          <div>
            <div className="mono-eyebrow">Case study 0{index + 1}</div>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-semibold text-[var(--text)]">
              {project.title}
            </h3>
            <p className="mt-3 max-w-2xl text-[var(--text-dim)] leading-relaxed">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--text-dim)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 mt-1 text-[var(--text-faint)]"
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-7 sm:px-9 pb-9 border-t border-[var(--border)] pt-8">
                {project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-[family-name:var(--font-mono)] text-2xl text-[var(--signal)]">
                          {m.value}
                        </div>
                        <div className="text-xs text-[var(--text-faint)] mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <div className="mono-eyebrow">Problem</div>
                    <p className="mt-2 text-sm text-[var(--text-dim)] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <div className="mono-eyebrow">Solution</div>
                    <p className="mt-2 text-sm text-[var(--text-dim)] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mono-eyebrow">Key features</div>
                  <ul className="mt-3 space-y-2">
                    {project.features.map((f) => (
                      <li key={f} className="text-sm text-[var(--text-dim)] flex gap-3 leading-relaxed">
                        <span className="text-[var(--signal)] mt-1 shrink-0">·</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-full border border-[var(--border)] text-[var(--text)] hover:border-[var(--line-strong)] transition-colors"
                    >
                      <GithubIcon size={15} /> Source
                    </a>
                  )}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-full bg-[var(--signal)] text-[var(--ink-950)] font-medium"
                    >
                      <ExternalLink size={15} /> Live demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-full border border-dashed border-[var(--border)] text-[var(--text-faint)]">
                      Live demo — add a URL in content/data.ts to enable
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects, end to end."
        lede="Each one is documented as a case study: the problem, what I built, and what it found. New projects slot into this same layout — see content/data.ts."
      />
      <div className="space-y-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
