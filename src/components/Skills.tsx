import { Reveal, SectionHeading } from "./Reveal";
import { skills } from "@/content/data";

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Toolkit"
        title="What I actually use."
        lede="No padding — this is the stack I've shipped projects and job-sim deliverables with."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-6 card-hover">
              <div className="mono-eyebrow">{group.category}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
