import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Ethan Lobo — Python Engineer | Backend Systems & Data Pipelines',
  description:
    'Ethan Lobo builds backend systems, data pipelines, and automation tools in Python. M.S. Applied Cognition & Neuroscience at UT Dallas. Python, SQL, PostgreSQL, Go, TypeScript, Docker.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* Skip to content link for accessibility (WCAG 2.1 AA) */}
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
