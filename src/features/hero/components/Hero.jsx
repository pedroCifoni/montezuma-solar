import React, { useLayoutEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { gsap } from '@lib/gsap';
import Button from '@components/ui/Button';
import WhatsAppIcon from '@components/ui/WhatsAppIcon';
import { siteContent, whatsappLink } from '@content/siteContent';

// Sun path geometry (SVG units): a half circle over the horizon, like a solar path diagram
const ARC = { cx: 720, cy: 720, r: 600 };
const SUN_END = 0.58; // fraction of the day where the sun rests after the intro
const HOUR_MARKS = Array.from({ length: 11 }, (_, i) => (i + 1) / 12);

const pointOnArc = (t) => ({
  x: ARC.cx - ARC.r * Math.cos(Math.PI * t),
  y: ARC.cy - ARC.r * Math.sin(Math.PI * t),
});

const SunPath = () => {
  const sunEnd = pointOnArc(SUN_END);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 720"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sun-glow">
          <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#FFB300" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFB300" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        className="sun-arc"
        d={`M${ARC.cx - ARC.r} ${ARC.cy} A${ARC.r} ${ARC.r} 0 0 1 ${ARC.cx + ARC.r} ${ARC.cy}`}
        fill="none"
        stroke="#FFD54F"
        strokeOpacity="0.28"
        strokeWidth="1.5"
      />
      {HOUR_MARKS.map((t) => {
        const p = pointOnArc(t);
        return <circle key={t} className="sun-mark" cx={p.x} cy={p.y} r="3" fill="#FFD54F" fillOpacity="0.4" />;
      })}
      <g className="sun" transform={`translate(${sunEnd.x} ${sunEnd.y})`}>
        <circle r="150" fill="url(#sun-glow)" />
        <circle r="13" fill="#FFB300" />
      </g>
    </svg>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const { hero, stats } = siteContent;

  // One orchestrated intro: the sun climbs its path while the copy settles in
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const arc = heroRef.current.querySelector('.sun-arc');
      const sun = heroRef.current.querySelector('.sun');
      const length = arc.getTotalLength();
      const progress = { t: 0.03 };

      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero-reveal', { y: 28, opacity: 0, duration: 0.9, stagger: 0.09 }, 0.1)
        .fromTo(arc, { strokeDasharray: length, strokeDashoffset: length }, { strokeDashoffset: 0, duration: 2, ease: 'power2.inOut' }, 0)
        .from('.sun-mark', { opacity: 0, duration: 0.4, stagger: 0.12 }, 0.3)
        .to(progress, {
          t: SUN_END,
          duration: 2.4,
          ease: 'power2.out',
          onUpdate: () => {
            const p = pointOnArc(progress.t);
            sun.setAttribute('transform', `translate(${p.x} ${p.y})`);
          },
        }, 0.2);
    }, heroRef);
    return () => mm.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-secondary text-textLight px-6 md:px-16 pt-32 md:pt-40" id="hero">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0B1F3B_0%,_transparent_60%)] pointer-events-none" />
      <SunPath />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7">
          <h1 className="hero-reveal font-heading font-extrabold text-[2.5rem] leading-[1.05] md:text-6xl lg:text-[4.25rem] tracking-tight text-balance">
            {hero.title}
          </h1>
          <p className="hero-reveal mt-6 text-lg md:text-xl leading-relaxed text-textLight/75 max-w-xl">
            {hero.subtitle}
          </p>

          <div className="hero-reveal mt-10 flex flex-col sm:flex-row gap-3">
            <Button href={whatsappLink(hero.whatsappMessage)} size="lg" icon={<WhatsAppIcon />}>
              {hero.cta}
            </Button>
            <Button href="#como-funciona" variant="ghostLight" size="lg">
              {hero.secondaryCta}
            </Button>
          </div>

          <ul className="hero-reveal mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-x-7 gap-y-3 text-sm md:text-base text-textLight/85">
            {hero.assurances.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Horizon: proof numbers sit on the line where the sun path begins */}
      <ul className="relative max-w-7xl mx-auto mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-textLight/15 border-t border-textLight/15">
        {stats.map((stat) => (
          <li key={stat.label} className="bg-secondary py-7 md:py-9 px-4 md:px-8 first:pl-0 md:[&:nth-child(3)]:pl-8 [&:nth-child(3)]:pl-0">
            <p className="font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-textLight">{stat.value}</p>
            <p className="mt-1 text-sm text-textLight/65">{stat.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
