import { BadgeCheck, Calculator, FileSignature, Landmark, ShieldCheck } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { appPath } from '../lib/format';

const services = [
  {
    title: 'Fundraising & Capital',
    description:
      'Grant Financing, Equity Financing, Bank Financing, Halal Financing, Koperasi Institution Financing, Factoring Financing, P2P Financing, BFP, BSP, PCP.',
    icon: Landmark,
    href: 'services/business-fundraising-capital/',
  },
  {
    title: 'Accounting & Tax',
    description: 'Company Secretary (COSEC), Bookkeeping, Audit, Tax Services.',
    icon: Calculator,
    href: 'services/account-tax-collaboration-with-partner/',
  },
  {
    title: 'Legal Advisory',
    description: 'Facility Agreement Drafting & Corporate Legal Services.',
    icon: FileSignature,
    href: 'services/legal-services-collaboration-with-partner/',
  },
  {
    title: 'Business Licensing',
    description: 'Local & Agency Government license applications.',
    icon: BadgeCheck,
    href: 'services/business-license/',
  },
  {
    title: 'Insurance & Risk',
    description: 'Keyman Insurance, Corporate Insurance.',
    icon: ShieldCheck,
    href: 'services/insurance-risk-services/',
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn trigger="scroll">
          <div className="mb-12 max-w-3xl">
            <p className="kicker mb-4">
              Our Services
            </p>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight text-navy md:text-5xl">
              One advisory partner for business funding and the work around it.
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const featured = index === 0;
            return (
              <FadeIn key={service.title} trigger="scroll" delay={index * 80}>
                <article
                  className={`group flex h-full min-h-[260px] flex-col rounded-2xl border p-6 transition-all duration-300 ease-out hover:-translate-y-1 sm:p-7 ${
                    featured
                      ? 'premium-surface border-gold/20 md:col-span-2 xl:col-span-1'
                      : 'border-navy/10 bg-white/82 shadow-soft'
                  }`}
                >
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${
                      featured ? 'gold-gradient text-navy' : 'bg-navy text-gold'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className={`${featured ? 'text-2xl' : 'text-xl'} mb-3 max-w-[12rem] font-semibold leading-tight text-navy`}>
                    {service.title}
                  </h3>
                  <p className={`${featured ? 'text-base leading-7' : 'text-[0.95rem] leading-7'} max-w-[30rem] text-muted`}>
                    {service.description}
                  </p>
                  <a
                    href={appPath(service.href)}
                    className="mt-6 inline-flex w-fit rounded-full border border-navy/10 px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-gold/20"
                  >
                    Know More
                  </a>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
