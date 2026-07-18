import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      <div className="data-field" aria-hidden />
      <span className="mono-eyebrow">404</span>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-semibold text-[var(--text)]">
        This query returned no rows.
      </h1>
      <p className="mt-4 text-[var(--text-dim)] max-w-md">
        The page you&apos;re looking for doesn&apos;t exist, or moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--signal)] text-[var(--ink-950)] px-6 py-3 text-sm font-medium"
      >
        Back home
      </Link>
    </div>
  );
}
