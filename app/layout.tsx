import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ethan Lobo | Portfolio',
  description:
    'Ethan Lobo builds software that makes systems simpler, faster, and more reliable. Cognitive science background, engineering mindset, leadership trajectory.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
