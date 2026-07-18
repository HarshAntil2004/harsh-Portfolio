import { Reveal, SectionHeading } from "./Reveal";
import { experience } from "@/content/data";

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've applied it."
        lede="Job simulations run to the same brief as real analyst work: ambiguous data in, a specific recommendation out."
      />

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]" aria-hidden />
        <div className="space-y-12">
          {experience.map((job, i) => (
            <Reveal key={job.org} delay={i * 0.08}>
              <div className="relative pl-10">
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-[var(--signal)] ring-4 ring-[var(--bg)]" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--text)]">
                    {job.role}
                  </h3>
                  <span className="mono-eyebrow !mb-0">{job.date}</span>
                </div>
                <div className="text-sm text-[var(--signal)] mt-1">
                  {job.org} <span className="text-[var(--text-faint)]">· via {job.via}</span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="text-sm text-[var(--text-dim)] leading-relaxed flex gap-3">
                      <span className="text-[var(--text-faint)] mt-1 shrink-0">—</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--text-dim)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
