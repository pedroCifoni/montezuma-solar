import React from 'react';
import { Building2, Users, TrendingUp } from 'lucide-react';
import { siteContent } from '@content/siteContent';
import SectionHeader from '@components/ui/SectionHeader';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';

const iconMap = {
  building: <Building2 className="w-8 h-8 text-accent" />,
  users: <Users className="w-8 h-8 text-accent" />,
  trending: <TrendingUp className="w-8 h-8 text-accent" />
};

const Pricing = () => {
  const { pricing, contact } = siteContent;

  return (
    <section className="py-32 px-6 md:px-16 bg-white relative" id="planos">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-white to-white pointer-events-none" />
      
      <SectionHeader 
        title={pricing.title} 
        subtitle={pricing.subtitle} 
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative z-10">
        {pricing.cards.map((item, index) => (
          <Card 
            key={index} 
            highlight={item.highlight}
          >
            {item.highlight && (
              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-accent text-primary px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase shadow-lg">
                Destaque
              </div>
            )}
            
            <div className={`mb-8 p-4 rounded-2xl inline-block ${item.highlight ? 'bg-white/10' : 'bg-primary/5'}`}>
              {iconMap[item.iconType]}
            </div>

            <h3 className={`font-heading font-extrabold text-2xl mb-4 ${item.highlight ? 'text-textLight' : 'text-primary'}`}>
              {item.title}
            </h3>
            
            <p className={`font-body text-base mb-10 flex-grow leading-relaxed ${item.highlight ? 'text-textLight/70' : 'text-textDark/50'}`}>
              {item.description}
            </p>

            <Button 
              href={contact.whatsapp} 
              variant={item.highlight ? 'primary' : 'outline'}
            >
              {item.cta}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
