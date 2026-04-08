import React from 'react';
import { siteContent } from '@content/siteContent';
import SectionHeader from '@components/ui/SectionHeader';
import Card from '@components/ui/Card';

const Portfolio = () => {
  const { portfolio } = siteContent;

  return (
    <section className="py-24 px-6 md:px-16 bg-secondary text-textLight border-t border-accent/10" id="instalacoes">
      <SectionHeader 
        title={portfolio.title} 
        subtitle={portfolio.subtitle} 
        light 
      />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolio.items.map((inst) => (
          <Card 
            key={inst.id} 
            padding="p-0"
            className="group"
            glow
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-black/50">
              <img 
                src={inst.img} 
                alt={inst.title} 
                className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" 
              />
            </div>
            <div className="p-8">
              <h3 className="font-heading font-bold text-xl mb-3 text-textLight group-hover:text-accentGlow transition-colors">
                {inst.title}
              </h3>
              <p className="font-body text-textLight/50 text-sm leading-relaxed">
                {inst.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
