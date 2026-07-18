"use client";

import { useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { profile } from "@/content/data";
import { Copy, Check, Mail, MapPin } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function copyEmail() {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk about your data."
        lede="Open to Data / Business Analyst roles across Gurugram, Delhi, Noida, and remote."
      />

      <div className="grid md:grid-cols-5 gap-10">
        <Reveal className="md:col-span-2">
          <div className="space-y-4">
            <button
              onClick={copyEmail}
              className="w-full flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-5 text-left hover:border-[var(--line-strong)] transition-colors"
            >
              <span className="flex items-center gap-3 text-sm text-[var(--text)]">
                <Mail size={16} className="text-[var(--signal)]" /> {profile.email}
              </span>
              {copied ? <Check size={16} className="text-[var(--teal)]" /> : <Copy size={16} className="text-[var(--text-faint)]" />}
            </button>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-5 text-sm text-[var(--text)] hover:border-[var(--line-strong)] transition-colors"
            >
              <span className="text-[var(--signal)]"><GithubIcon size={16} /></span> github.com/{profile.github.split("/").pop()}
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-5 text-sm text-[var(--text)] hover:border-[var(--line-strong)] transition-colors"
            >
              <span className="text-[var(--signal)]"><LinkedinIcon size={16} /></span> LinkedIn profile
            </a>

            <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] p-5 text-sm text-[var(--text-dim)]">
              <MapPin size={16} className="text-[var(--signal)]" /> {profile.location}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <form onSubmit={submit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] outline-none focus:border-[var(--signal-dim)]"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] outline-none focus:border-[var(--signal-dim)]"
              />
            </div>
            <textarea
              required
              rows={5}
              placeholder="What are you working on?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] outline-none focus:border-[var(--signal-dim)] resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--signal)] text-[var(--ink-950)] px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition-transform"
            >
              Send message
            </button>
            <p className="text-xs text-[var(--text-faint)]">
              Opens your email client with this pre-filled — nothing is stored anywhere.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
