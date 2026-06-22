import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { WHATSAPP_URL } from '../lib/format';

export function About() {
  return (
    <section id="about" className="section-pad bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_460px] lg:px-8">
        <FadeIn trigger="scroll">
          <div>
            <p className="kicker mb-4">
              About Exclusive Global Advisory
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-navy md:text-5xl">
              We help SMEs move from funding uncertainty to bank-ready action.
            </h2>
            <div className="space-y-5 text-base leading-8 text-muted">
              <p>
                At Exclusive Global Advisory, we empower business owners to overcome financial
                challenges through our Exclusive Global Financing Ecosystem, helping Malaysia's
                young entrepreneurs grow into future industry leaders.
              </p>
              <p>
                The work is practical: understand the business, map the right financing route,
                prepare the case, and connect owners with suitable funding options from RM200k to
                RM100mil.
              </p>
              <p>
                We have helped companies navigate more than $1B in funding needs, with 300+ clients
                assisted across financing, licensing, accounting, legal, and risk support.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 font-semibold text-white shadow-[0_18px_46px_rgba(10,38,67,.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-700"
            >
              Book a Consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>

        <FadeIn trigger="scroll" delay={120}>
          <div className="relative rounded-[2rem] border border-navy/10 bg-white/70 p-2 shadow-soft">
            <img
              src="/advisory-meeting.jpg"
              alt="Business financing advisory meeting"
              className="aspect-[4/5] w-full rounded-[1.55rem] object-cover"
            />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-white/92 p-5 shadow-soft backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[.14em] text-gold-deep">
                Funding Capacity
              </p>
              <p className="mt-2 text-2xl font-extrabold text-navy">RM200k-RM100mil</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
