import { Facebook, Instagram, Mail, MapPin, Music2, Phone, Youtube } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import {
  ADDRESS,
  EMAIL,
  PHONE_HREF,
  PHONE_LABEL,
  WHATSAPP_URL,
  socials,
} from '../lib/format';

const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn trigger="scroll">
          <div className="mb-10 max-w-3xl">
            <p className="kicker mb-4">
              Contact
            </p>
            <h2 className="text-3xl font-bold leading-tight text-navy md:text-5xl">
              Book a consultation today and get expert guidance on financing.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[420px_minmax(0,1fr)]">
          <FadeIn trigger="scroll" delay={80}>
            <div className="navy-surface rounded-[2rem] p-6 text-white shadow-soft">
              <div className="space-y-5">
                <a href={PHONE_HREF} className="flex min-w-0 gap-4 rounded-2xl bg-white/8 p-4 transition-colors hover:bg-white/12">
                  <Phone className="mt-1 h-5 w-5 text-gold" />
                  <span className="min-w-0">
                    <span className="block text-sm text-white/60">Phone</span>
                    <span className="font-semibold">{PHONE_LABEL}</span>
                  </span>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex min-w-0 gap-4 rounded-2xl bg-white/8 p-4 transition-colors hover:bg-white/12">
                  <Mail className="mt-1 h-5 w-5 text-gold" />
                  <span className="min-w-0">
                    <span className="block text-sm text-white/60">Email</span>
                    <span className="break-all font-semibold">{EMAIL}</span>
                  </span>
                </a>
                <div className="flex min-w-0 gap-4 rounded-2xl bg-white/8 p-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <span className="min-w-0">
                    <span className="block text-sm text-white/60">Address</span>
                    <span className="break-words font-semibold">{ADDRESS}</span>
                  </span>
                </div>
                <div className="rounded-2xl bg-white/8 p-4">
                  <span className="block text-sm text-white/60">Hours</span>
                  <span className="font-semibold">Monday-Friday, 9:00am-6:00pm</span>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 block rounded-xl bg-success px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12883e]"
              >
                WhatsApp Us
              </a>

              <div className="mt-6 flex gap-3">
                <a aria-label="Instagram" href={socials.instagram} target="_blank" rel="noreferrer" className="rounded-xl bg-white/10 p-3 text-white transition-colors hover:bg-white/15">
                  <Instagram className="h-5 w-5" />
                </a>
                <a aria-label="Facebook" href={socials.facebook} target="_blank" rel="noreferrer" className="rounded-xl bg-white/10 p-3 text-white transition-colors hover:bg-white/15">
                  <Facebook className="h-5 w-5" />
                </a>
                <a aria-label="TikTok" href={socials.tiktok} target="_blank" rel="noreferrer" className="rounded-xl bg-white/10 p-3 text-white transition-colors hover:bg-white/15">
                  <Music2 className="h-5 w-5" />
                </a>
                <a aria-label="YouTube" href={socials.youtube} target="_blank" rel="noreferrer" className="rounded-xl bg-white/10 p-3 text-white transition-colors hover:bg-white/15">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn trigger="scroll" delay={140}>
            <iframe
              title="Exclusive Global Advisory Puchong location"
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[520px] w-full rounded-[2rem] border-0 shadow-soft"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
