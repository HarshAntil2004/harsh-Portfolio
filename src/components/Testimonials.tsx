import { Reveal, SectionHeading } from "./Reveal";
import { testimonials } from "@/content/data";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Word of mouth"
        title="What people say."
        lede="Placeholder cards — swap the quotes in content/data.ts once you have real references."
      />
      <div className="grid sm:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)]/40 p-7">
              <Quote className="text-[var(--text-faint)]" size={20} />
              <p className="mt-4 text-[var(--text-dim)] leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 text-sm text-[var(--text)]">{t.name}</div>
              <div className="text-xs text-[var(--text-faint)]">{t.title}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
