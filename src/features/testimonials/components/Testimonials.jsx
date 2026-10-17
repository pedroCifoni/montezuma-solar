import React from 'react';
import { Quote } from 'lucide-react';
import { siteContent } from '@content/siteContent';

const Testimonials = () => {
  const { testimonials } = siteContent;

  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-16 bg-primary" id="depoimentos" aria-labelledby="depoimentos-titulo">
      {/* Soft solar glow to separate this block from the light sections around it */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[48rem] h-[24rem] rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        <h2 id="depoimentos-titulo" className="font-heading font-extrabold text-[2rem] md:text-5xl tracking-tight text-white">
          {testimonials.title}
        </h2>
        <div className="mt-4 h-1 w-16 rounded-full bg-accent" aria-hidden="true" />

        <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.items.map((item, i) => (
            <figure key={i} className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 hover:border-accent/40">
              <Quote className="w-8 h-8 text-accent" aria-hidden="true" />
              <blockquote className="mt-5 text-lg leading-relaxed text-textLight/90">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <span className="block font-heading font-bold text-white">{item.name}</span>
                <span className="block text-sm text-textLight/60">{item.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
