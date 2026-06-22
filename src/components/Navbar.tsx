import { WHATSAPP_URL, assetPath } from '../lib/format';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Calculators', href: '#calculators' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="#home"
          className="liquid-glass flex h-14 items-center rounded-2xl px-4 py-2 transition-transform duration-300 ease-out hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold/70"
          aria-label="Exclusive Global Advisory home"
        >
          <img src={assetPath('logo-ega.png')} alt="Exclusive Global Advisory" className="h-9 w-auto" />
        </a>

        <div className="liquid-glass hidden rounded-2xl px-6 py-3 md:block">
          <div className="flex items-center gap-7 text-sm font-medium text-white/90">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-1 transition-colors duration-300 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#e3c978] focus:outline-none focus:ring-2 focus:ring-gold/70 sm:px-6"
        >
          Talk to Us
        </a>
      </nav>
    </header>
  );
}
