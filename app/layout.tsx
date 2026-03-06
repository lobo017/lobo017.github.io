import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Ethan Lobo | Software Engineer',
  description:
    'Ethan Lobo is a software engineer who builds tools, web apps, and automation systems to solve complex problems. M.S. Applied Cognition & Neuroscience at UT Dallas.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Ethan Lobo | Software Engineer',
    description: 'Ethan Lobo is a software engineer who builds tools, web apps, and automation systems to solve complex problems.',
    url: 'https://lobo017.github.io',
    siteName: 'Ethan Lobo Portfolio',
    type: 'website',
  },
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
