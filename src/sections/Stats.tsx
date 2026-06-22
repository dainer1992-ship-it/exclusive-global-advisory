import { useEffect, useRef, useState } from 'react';
import { FadeIn } from '../components/FadeIn';

const stats = [
  { value: 300, prefix: '', suffix: '+', label: 'Clients Assisted' },
  { value: 100, prefix: 'RM', suffix: 'mil', label: 'Business Funding Capacity' },
  { value: 7, prefix: '', suffix: '', label: 'Financing Types' },
  { value: 10, prefix: 'Up to ', suffix: ' years', label: 'Loan Tenures' },
];

function useCountUp(target: number, start: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    const startTime = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, start, target]);

  return value;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="section-pad bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn trigger="scroll">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="kicker mb-4">
                Our Key Achievements & Capabilities
              </p>
              <h2 className="text-3xl font-bold leading-tight text-navy md:text-5xl">
                A complete financing ecosystem for Malaysian SMEs.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-muted">
              Backed by successful cases, RM200k-RM100mil funding capacity, seven financing
              options, and tenures of up to ten years.
            </p>
          </div>
        </FadeIn>

        <div className="navy-surface grid overflow-hidden rounded-[2rem] border border-navy/10 p-2 shadow-soft md:grid-cols-4">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value, visible, 1100 + index * 120);
            return (
              <FadeIn key={stat.label} trigger="scroll" delay={index * 70}>
                <div className="h-full rounded-[1.5rem] p-6 text-white md:p-7">
                  <div className="mb-3 text-4xl font-extrabold text-gold md:text-5xl">
                    {stat.prefix}
                    {count}
                    {stat.suffix}
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[.12em] text-white/62">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
