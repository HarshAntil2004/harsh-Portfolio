"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing with class set by inline script before hydration
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggle() {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-dim)] hover:text-[var(--signal)] hover:border-[var(--signal-dim)] transition-colors"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
