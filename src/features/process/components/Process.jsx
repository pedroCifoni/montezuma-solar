import React from 'react';
import { siteContent } from '@content/siteContent';

const Process = () => {
  const { process } = siteContent;

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 bg-secondary text-textLight" id="como-funciona">
      <div className="max-w-7xl mx-auto">
        <p className="font-heading font-bold text-2xl md:text-4xl leading-snug tracking-tight text-textLight/90 max-w-4xl text-balance">
          {process.statement}
        </p>

        <h2 className="mt-20 md:mt-24 font-heading font-extrabold text-[2rem] md:text-5xl tracking-tight">
          {process.title}
        </h2>

        {/* Real sequence, so the steps are numbered and joined by a line */}
        <ol className="mt-12 grid gap-10 md:gap-6 md:grid-cols-5 relative md:before:content-[''] md:before:absolute md:before:top-6 md:before:inset-x-6 md:before:h-px md:before:bg-textLight/15">
          {process.steps.map((step, i) => (
            <li key={step.title} className="relative flex md:block gap-5">
              <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-secondary ring-1 ring-accent/60 text-accent font-heading font-extrabold flex items-center justify-center">
                {i + 1}
              </div>
              <div>
                <h3 className="md:mt-6 font-heading font-bold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm md:text-[0.95rem] leading-relaxed text-textLight/65">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
