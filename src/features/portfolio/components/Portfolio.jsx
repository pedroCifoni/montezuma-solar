import React from 'react';
import { MapPin } from 'lucide-react';
import { siteContent } from '@content/siteContent';
import SectionHeader from '@components/ui/SectionHeader';

const Portfolio = () => {
  const { portfolio } = siteContent;

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 bg-white" id="projetos">
      <SectionHeader title={portfolio.title} subtitle={portfolio.subtitle} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {portfolio.items.map((project) => (
          <article key={project.id} className="group">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-line">
              <img
                src={project.img}
                alt={`${project.title}, ${project.type} em ${project.city}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute top-4 left-4 rounded-full bg-secondary/85 backdrop-blur px-3 py-1.5 text-xs font-bold text-textLight">
                {project.power}
              </span>
            </div>
            <h3 className="mt-5 font-heading font-bold text-xl text-primary">{project.title}</h3>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-textDark/60">
              <MapPin className="w-3.5 h-3.5" />
              {project.type} em {project.city}
            </p>
            <p className="mt-4 pt-4 border-t border-line text-sm text-textDark/70">
              Economia de <strong className="font-heading text-base text-primary">{project.savings}</strong>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
