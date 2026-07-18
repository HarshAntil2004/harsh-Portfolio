import { Reveal, SectionHeading } from "./Reveal";
import { certifications, education, research } from "@/content/data";
import { Award, GraduationCap, TrendingUp } from "lucide-react";

export function Credentials() {
  return (
    <section id="credentials" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Credentials" title="Education, certifications & independent work." />

      <div className="grid md:grid-cols-3 gap-6">
        <Reveal delay={0}>
          <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-7">
            <GraduationCap className="text-[var(--signal)]" size={22} />
            <h3 className="mt-4 font-[family-name:var(--font-display)] font-semibold text-[var(--text)]">
              Education
            </h3>
            <div className="mt-5 space-y-5">
              {education.map((e) => (
                <div key={e.school}>
                  <div className="text-sm text-[var(--text)]">{e.degree}</div>
                  <div className="text-sm text-[var(--text-dim)]">{e.school}</div>
                  <div className="mono-eyebrow mt-1">{e.date}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-7">
            <Award className="text-[var(--signal)]" size={22} />
            <h3 className="mt-4 font-[family-name:var(--font-display)] font-semibold text-[var(--text)]">
              Certifications
            </h3>
            <div className="mt-5 space-y-5">
              {certifications.map((c) => (
                <div key={c.name}>
                  <div className="text-sm text-[var(--text)]">{c.name}</div>
                  <div className="text-sm text-[var(--text-dim)]">{c.issuer}</div>
                  <div className="mono-eyebrow mt-1">{c.date}</div>
                </div>
              ))}
              <div className="text-xs text-[var(--text-faint)] pt-2 border-t border-dashed border-[var(--border)]">
                More on the way — add to content/data.ts as earned.
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-7">
            <TrendingUp className="text-[var(--signal)]" size={22} />
            <h3 className="mt-4 font-[family-name:var(--font-display)] font-semibold text-[var(--text)]">
              {research.title}
            </h3>
            <div className="mono-eyebrow mt-2">{research.date}</div>
            <p className="mt-4 text-sm text-[var(--text-dim)] leading-relaxed">{research.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
