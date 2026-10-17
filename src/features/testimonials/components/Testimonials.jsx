import React from 'react';
import { siteContent } from '@content/siteContent';

const Testimonials = () => {
  const { testimonials } = siteContent;

  return (
    <section className="pb-24 md:pb-32 px-6 md:px-16 bg-white" aria-labelledby="depoimentos-titulo">
      <div className="max-w-7xl mx-auto border-t border-line pt-16 md:pt-20">
        <h2 id="depoimentos-titulo" className="font-heading font-extrabold text-[2rem] md:text-4xl tracking-tight text-primary">
          {testimonials.title}
        </h2>

        <div className="mt-10 md:mt-12 grid md:grid-cols-3 gap-10 md:gap-8">
          {testimonials.items.map((item, i) => (
            <figure key={i} className="border-l-2 border-accent pl-6">
              <blockquote className="text-lg leading-relaxed text-textDark/80">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5">
                <span className="block font-heading font-bold text-primary">{item.name}</span>
                <span className="block text-sm text-textDark/60">{item.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
