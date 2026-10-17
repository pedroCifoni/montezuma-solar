import React from 'react';
import { Home, Building2, TrendingUp, Check } from 'lucide-react';
import { siteContent } from '@content/siteContent';

const iconMap = {
  home: Home,
  building: Building2,
  trending: TrendingUp,
};

const Solutions = () => {
  const { solutions } = siteContent;

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 bg-background" id="solucoes">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <h2 className="font-heading font-extrabold text-[2rem] leading-[1.1] md:text-5xl tracking-tight text-primary text-balance">
              {solutions.title}
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-textDark/65">
              {solutions.subtitle}
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
          {solutions.items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <article key={item.title} className="py-10 md:py-12 border-t border-line first:border-t-0 first:pt-0 grid sm:grid-cols-[auto,1fr] gap-6 md:gap-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-2xl md:text-[1.75rem] tracking-tight text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base md:text-lg leading-relaxed text-textDark/70 max-w-2xl">
                    {item.description}
                  </p>
                  <ul className="mt-6 grid sm:grid-cols-3 gap-3">
                    {item.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm font-medium text-textDark/80">
                        <Check className="w-4 h-4 mt-0.5 text-accent shrink-0" strokeWidth={3} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
