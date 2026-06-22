import { useEffect, useMemo, useState } from 'react';

type AnimatedHeadingProps = {
  text: string;
  className?: string;
};

export function AnimatedHeading({ text, className = '' }: AnimatedHeadingProps) {
  const [visible, setVisible] = useState(false);
  const lines = useMemo(() => text.split('\n'), [text]);
  const lineOffsets = useMemo(
    () =>
      lines.map((_, lineIndex) =>
        lines.slice(0, lineIndex).reduce((total, line) => total + line.length, 0),
      ),
    [lines],
  );

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <h1
      className={`text-4xl font-normal text-white md:text-5xl lg:text-6xl xl:text-7xl ${className}`}
      style={{ letterSpacing: '-0.04em', textShadow: '0 2px 24px rgba(0,0,0,.42)' }}
    >
      {lines.map((line, lineIndex) => (
        <span className="block" key={`${line}-${lineIndex}`}>
          {Array.from(line).map((char, charIndex) => {
            const delay = 200 + (lineOffsets[lineIndex] + charIndex) * 30;
            return (
              <span
                key={`${char}-${charIndex}`}
                className={`inline-block transition-all ease-out ${
                  visible ? 'translate-x-0 opacity-100' : '-translate-x-[18px] opacity-0'
                }`}
                style={{
                  transitionDelay: `${delay}ms`,
                  transitionDuration: '500ms',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
