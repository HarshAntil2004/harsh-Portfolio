"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/content/data";

const SESSION_KEY = "intro-shown";

export function IntroLoader() {
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {}

    if (alreadyShown) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time intro animation gated by sessionStorage
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {}
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg)]"
        >
          <div className="data-field" aria-hidden />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center"
            >
              {!imgError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/profile.jpg"
                  alt={profile.name}
                  className="h-full w-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="font-[family-name:var(--font-display)] text-2xl text-[var(--text-dim)]">
                  {initials}
                </span>
              )}
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-[var(--signal)] ring-2 ring-[var(--bg)]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 font-[family-name:var(--font-mono)] text-sm tracking-wide text-[var(--text-dim)]"
            >
              {profile.name}
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.8, ease: "easeInOut" }}
              className="mt-5 h-px w-32 origin-left bg-[var(--signal-dim)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
