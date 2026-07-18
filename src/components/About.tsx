import { Reveal, SectionHeading } from "./Reveal";
import { profile, strengths } from "@/content/data";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="About" title="Evidence over intuition." />

      <div className="grid md:grid-cols-5 gap-12">
        <Reveal delay={0.05} className="md:col-span-3">
          <p className="text-xl leading-relaxed text-[var(--text)]">{profile.summary}</p>
          <p className="mt-6 text-[var(--text-dim)] leading-relaxed">
            My work spans academic projects, industry job simulations with Deloitte
            Australia and Tata iQ, and two years of self-directed market research —
            all built on the same habit: don&apos;t guess, check the data first.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-5 card-hover"
              >
                <div className="text-sm font-medium text-[var(--text)] mb-1.5">
                  {s.title}
                </div>
                <p className="text-xs leading-relaxed text-[var(--text-dim)]">{s.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
