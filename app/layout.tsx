import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ethan Lobo | Portfolio',
  description:
    'Ethan Daniel Lobo - Software Developer & Data Analytics portfolio blending cognitive science with performant engineering.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
