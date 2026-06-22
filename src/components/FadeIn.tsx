import { ReactNode, useEffect, useRef, useState } from 'react';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  trigger?: 'mount' | 'scroll';
  threshold?: number;
};

export function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 700,
  trigger = 'mount',
  threshold = 0.18,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (trigger === 'mount') {
      timeout = setTimeout(() => setVisible(true), delay);
      return () => {
        if (timeout) clearTimeout(timeout);
      };
    }

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeout = setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, [delay, threshold, trigger]);

  return (
    <div
      ref={ref}
      style={{ transitionDuration: `${duration}ms` }}
      className={`transition-all ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
