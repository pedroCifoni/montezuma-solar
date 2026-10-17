import React from 'react';
import { Plus } from 'lucide-react';
import { siteContent, whatsappLink } from '@content/siteContent';
import Button from '@components/ui/Button';
import WhatsAppIcon from '@components/ui/WhatsAppIcon';

const Faq = () => {
  const { faq } = siteContent;

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 bg-background" id="duvidas">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <h2 className="font-heading font-extrabold text-[2rem] leading-[1.1] md:text-5xl tracking-tight text-primary">
              {faq.title}
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-textDark/65">{faq.subtitle}</p>
            <Button
              href={whatsappLink(faq.whatsappMessage)}
              variant="outline"
              className="mt-8"
              icon={<WhatsAppIcon className="w-4 h-4" />}
            >
              {faq.cta}
            </Button>
          </div>
        </div>

        {/* Native details/summary: keyboard and screen reader friendly without extra JS */}
        <div className="lg:col-span-8 border-t border-line">
          {faq.items.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-heading font-bold text-lg md:text-xl text-primary hover:text-primary/80">
                {item.q}
                <Plus className="w-5 h-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45" strokeWidth={2.5} />
              </summary>
              <p className="pb-7 -mt-1 max-w-2xl text-base leading-relaxed text-textDark/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
