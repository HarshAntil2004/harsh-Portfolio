import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/content/data";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.summary,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
  },
  robots: { index: true, follow: true },
};

const themeInit = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
    document.documentElement.classList.toggle('light', theme === 'light');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
