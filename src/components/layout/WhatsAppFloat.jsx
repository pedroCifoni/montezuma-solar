import React from 'react';
import { siteContent, whatsappLink } from '@content/siteContent';
import WhatsAppIcon from '@components/ui/WhatsAppIcon';

const WhatsAppFloat = () => {
  const { contact } = siteContent;

  return (
    <a
      href={whatsappLink(contact.whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] z-40 w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] active:scale-95 transition-all duration-300"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppFloat;
