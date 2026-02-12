const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6 py-4 md:px-10">
      <nav className="card-surface flex items-center justify-between px-4 py-3" aria-label="Primary navigation">
        <a href="#" className="focus-ring rounded-md text-sm font-semibold tracking-wide text-cyan-100">
          ETHAN LOBO
        </a>
        <ul className="hidden gap-4 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a className="focus-ring rounded-md px-2 py-1 transition hover:text-cyan-200" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
