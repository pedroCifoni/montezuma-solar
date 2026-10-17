import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteContent, whatsappLink } from '@content/siteContent';

const Footer = () => {
  const { footer, navbar, contact } = siteContent;

  return (
    <footer className="bg-secondary text-textLight px-6 md:px-16 pt-20 pb-10">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <a href="#hero" className="inline-flex items-center gap-3 font-heading font-extrabold text-2xl tracking-tight">
            <img
              src="/logo.jpeg"
              alt=""
              className="w-10 h-10 object-cover rounded-full ring-2 ring-accent"
            />
            Montezuma Solar
          </a>
          <p className="mt-4 max-w-sm leading-relaxed text-textLight/65">{footer.tagline}</p>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-heading font-bold text-sm text-textLight">Contato</h2>
          <ul className="mt-5 space-y-4 text-sm text-textLight/70">
            <li>
              <a
                href={whatsappLink(contact.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-accentGlow transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                {contact.whatsappLabel}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2.5 hover:text-accentGlow transition-colors break-all">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-accent" />
              {footer.address}
            </li>
          </ul>
        </div>

        <nav className="md:col-span-3" aria-label="Rodapé">
          <h2 className="font-heading font-bold text-sm text-textLight">Navegação</h2>
          <ul className="mt-5 space-y-4 text-sm text-textLight/70">
            {navbar.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accentGlow transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-textLight/10 text-sm text-textLight/50">
        {footer.copy}
      </div>
    </footer>
  );
};

export default Footer;
