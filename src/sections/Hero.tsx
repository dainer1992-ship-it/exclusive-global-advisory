import { AnimatedHeading } from '../components/AnimatedHeading';
import { FadeIn } from '../components/FadeIn';
import { WHATSAPP_URL, appPath } from '../lib/format';

const heroVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4';

export function Hero() {
  const proof = ['300+ clients assisted', 'RM200k-RM100mil routes', 'Zero upfront fees'];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid grid-cols-1 items-end gap-10 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <AnimatedHeading
              text={'Financing tomorrow,\nbuilt for your business.'}
              className="mb-4 max-w-5xl leading-[1.04] max-[420px]:text-[2rem] max-[420px]:leading-[1.08]"
            />
            <FadeIn delay={800} duration={1000}>
              <p
                className="mb-5 max-w-2xl text-base leading-7 text-gray-100 md:text-lg md:leading-8"
                style={{ textShadow: '0 2px 16px rgba(0,0,0,.36)' }}
              >
                We secure multi-source financing for Malaysian SMEs — no business left behind.
              </p>
            </FadeIn>
            <FadeIn delay={1200} duration={800}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-gold px-8 py-3 text-center font-semibold text-navy shadow-gold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#e3c978] focus:outline-none focus:ring-2 focus:ring-gold/80"
                >
                  Talk to Us
                </a>
                <a
                  href={appPath('services/')}
                  className="liquid-glass rounded-xl border border-white/20 px-8 py-3 text-center font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-gold hover:text-navy focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  Our Services
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={1500} duration={900}>
              <div className="mt-6 flex flex-wrap gap-2">
                {proof.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/18 bg-black/28 px-3 py-1.5 text-xs font-semibold text-white/85 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={1400} duration={800}>
            <div className="liquid-glass w-fit rounded-2xl border border-white/20 px-6 py-4 text-lg font-light leading-tight text-white shadow-[0_22px_60px_rgba(0,0,0,.24)] md:text-xl xl:ml-auto xl:text-2xl">
              Financing. Advisory. Growth.
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
