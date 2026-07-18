import { Reveal, SectionHeading } from "./Reveal";
import { notes } from "@/content/data";
import { FileText, Download } from "lucide-react";

export function Blog() {
  return (
    <section id="blog" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Reference"
        title="Notes & cheat sheets."
        lede="Quick-reference PDFs I use myself, sharing them in case they help someone else."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {notes.map((note) => {
          const href = "/notes/" + note.file;
          return (
            <Reveal key={note.file}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-6 card-hover"
              >
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-[var(--signal)] shrink-0" />
                  <span className="text-sm text-[var(--text)] leading-relaxed">
                    {note.title}
                  </span>
                </div>
                <Download
                  size={16}
                  className="shrink-0 text-[var(--text-faint)] group-hover:text-[var(--signal)] transition-colors"
                />
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
