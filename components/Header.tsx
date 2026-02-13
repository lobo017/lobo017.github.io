'use client';

import { useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6 py-4 md:px-10">
      <nav className="card-surface flex items-center justify-between px-4 py-3" aria-label="Primary navigation">
        <a href="#" className="focus-ring rounded-md text-sm font-semibold tracking-wide text-cyan-100">
          ETHAN LOBO
        </a>

        {/* Desktop nav */}
        <ul className="hidden gap-4 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                className="focus-ring rounded-md px-2 py-1 transition hover:text-cyan-200"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="focus-ring rounded-md p-1.5 text-slate-300 transition hover:text-cyan-200 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 12h16" />
                <path d="M4 6h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="card-surface mt-2 p-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm text-slate-300">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  className="focus-ring block rounded-md px-2 py-1.5 transition hover:bg-cyan-900/30 hover:text-cyan-200"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
