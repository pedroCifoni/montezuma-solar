import React from 'react';
import { Phone } from 'lucide-react';
import { siteContent, whatsappLink } from '@content/siteContent';
import Button from '@components/ui/Button';
import WhatsAppIcon from '@components/ui/WhatsAppIcon';

const FinalCta = () => {
  const { finalCta, contact } = siteContent;

  return (
    <section className="px-4 md:px-16 pb-16 md:pb-24 bg-background" id="orcamento">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-primary text-textLight px-6 py-14 md:px-16 md:py-20">
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(255,179,0,0.28)_0%,_transparent_65%)] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-3xl">
          <h2 className="font-heading font-extrabold text-[2rem] leading-[1.1] md:text-5xl tracking-tight text-balance">
            {finalCta.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-textLight/75 max-w-xl">{finalCta.subtitle}</p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <Button href={whatsappLink(finalCta.whatsappMessage)} size="lg" icon={<WhatsAppIcon />}>
              {finalCta.cta}
            </Button>
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 font-semibold text-textLight/85 hover:text-accentGlow transition-colors">
              <Phone className="w-4 h-4" />
              ou ligue {contact.whatsappLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
