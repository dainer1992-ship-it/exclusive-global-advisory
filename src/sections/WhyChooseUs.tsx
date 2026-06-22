import { HandCoins, Layers3, ReceiptText, UsersRound } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const reasons = [
  {
    title: 'Multi-Source Financing Under One Roof',
    body: 'Bank, equity, grant, factoring, P2P, halal, koperasi and government-linked options reviewed together.',
    icon: Layers3,
  },
  {
    title: 'Proven Track Record (300+ Clients)',
    body: 'Real SME cases across different industries, facility sizes, and approval pathways.',
    icon: UsersRound,
  },
  {
    title: 'Transparent & Zero Upfront Fees',
    body: 'Clear advisory process before commitment, built for business owners who need straight answers.',
    icon: ReceiptText,
  },
  {
    title: 'Professional One-Stop Support',
    body: 'Financing, licensing, accounting, legal and insurance support connected around the same business goal.',
    icon: HandCoins,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn trigger="scroll">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="kicker mb-4 border-gold/25 bg-gold/10 text-gold">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Built for SMEs that need funding clarity, not more paperwork.
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <FadeIn key={reason.title} trigger="scroll" delay={index * 90}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl gold-gradient text-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">{reason.title}</h3>
                  <p className="text-sm leading-6 text-white/70">{reason.body}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
