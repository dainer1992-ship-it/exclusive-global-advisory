import { ArrowRight, BookOpen, HelpCircle, Layers3 } from 'lucide-react';
import { Footer } from '../sections/Footer';
import { Navbar } from '../components/Navbar';
import { WHATSAPP_URL, appPath } from '../lib/format';
import { ContentPage as ContentPageType, pageTitleForPath } from '../lib/siteContent';

function KindIcon({ kind }: { kind: ContentPageType['kind'] }) {
  if (kind === 'article') return <BookOpen className="h-5 w-5" />;
  if (kind === 'support') return <HelpCircle className="h-5 w-5" />;
  return <Layers3 className="h-5 w-5" />;
}

export function ContentPage({ page }: { page: ContentPageType }) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main className="pt-28">
        <section className="px-5 pb-14 pt-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2rem] border border-navy/10 bg-white/75 p-6 shadow-soft md:p-10">
              <p className="kicker mb-5">
                {page.eyebrow}
              </p>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
                <div>
                  <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-navy md:text-6xl">
                    {page.title}
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                    {page.summary}
                  </p>
                </div>
                <div className="rounded-2xl bg-navy p-6 text-white">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-navy">
                    <KindIcon kind={page.kind} />
                  </div>
                  <p className="text-sm leading-6 text-white/72">
                    Migrated from the original EGA page structure and rewritten for clearer client reading,
                    SEO, and WhatsApp conversion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-6">
              {page.blocks.map((block) => (
                <article key={block.heading} className="rounded-[1.5rem] border border-navy/10 bg-white/82 p-6 shadow-soft md:p-8">
                  <h2 className="mb-4 text-2xl font-bold leading-tight text-navy md:text-3xl">
                    {block.heading}
                  </h2>
                  <div className="space-y-4 text-base leading-8 text-muted">
                    {block.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {block.bullets ? (
                    <ul className="mt-5 grid gap-3 text-muted md:grid-cols-2">
                      {block.bullets.map((item) => (
                        <li key={item} className="flex gap-3 rounded-xl bg-cream p-4">
                          <span className="mt-2 h-2 w-2 flex-none rounded-full bg-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[1.5rem] border border-navy/10 bg-white/82 p-6 shadow-soft">
                <h2 className="mb-3 text-xl font-bold text-navy">Next step</h2>
                <p className="mb-5 text-sm leading-6 text-muted">
                  {page.cta || 'Talk to EGA about the right financing route.'}
                </p>
                <a
                  href={page.cta === 'Open calculators' ? appPath('#calculators') : WHATSAPP_URL}
                  target={page.cta === 'Open calculators' ? undefined : '_blank'}
                  rel={page.cta === 'Open calculators' ? undefined : 'noreferrer'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-700"
                >
                  {page.cta || 'Talk to Us'}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {page.related?.length ? (
                <div className="rounded-[1.5rem] border border-navy/10 bg-white/82 p-6 shadow-soft">
                  <h2 className="mb-4 text-xl font-bold text-navy">Related pages</h2>
                  <div className="grid gap-3">
                    {page.related.map((path) => (
                      <a
                        key={path}
                        href={path.startsWith('/#') ? appPath(path.slice(1)) : appPath(path)}
                        className="rounded-xl border border-navy/10 bg-cream px-4 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold/20"
                      >
                        {pageTitleForPath(path)}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
