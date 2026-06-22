import { Facebook, Instagram, Music2, Youtube } from 'lucide-react';
import { socials } from '../lib/format';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Calculators', href: '#calculators' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="navy-surface text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1fr_auto_auto] lg:px-8">
        <div className="max-w-sm">
          <img src="/logo-ega.png" alt="Exclusive Global Advisory" className="mb-5 h-12 w-auto" />
          <p className="text-sm leading-6 text-white/65">
            Multi-source financing advisory for Malaysian SMEs that need practical routes to
            capital, licensing, accounting, legal, and risk support.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[.14em] text-gold">Company</h3>
          <div className="grid gap-2 text-sm text-white/70">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[.14em] text-gold">Social</h3>
          <div className="flex gap-3">
            <a aria-label="Instagram" href={socials.instagram} target="_blank" rel="noreferrer" className="rounded-lg bg-white/10 p-3 transition-colors hover:bg-white/15">
              <Instagram className="h-5 w-5" />
            </a>
            <a aria-label="Facebook" href={socials.facebook} target="_blank" rel="noreferrer" className="rounded-lg bg-white/10 p-3 transition-colors hover:bg-white/15">
              <Facebook className="h-5 w-5" />
            </a>
            <a aria-label="TikTok" href={socials.tiktok} target="_blank" rel="noreferrer" className="rounded-lg bg-white/10 p-3 transition-colors hover:bg-white/15">
              <Music2 className="h-5 w-5" />
            </a>
            <a aria-label="YouTube" href={socials.youtube} target="_blank" rel="noreferrer" className="rounded-lg bg-white/10 p-3 transition-colors hover:bg-white/15">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/55">
        © 2026 Exclusive Global Advisory (202403054264). All rights reserved.
      </div>
    </footer>
  );
}
