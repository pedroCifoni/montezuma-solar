import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap, ScrollTrigger } from '@lib/gsap';
import { siteContent, whatsappLink } from '@content/siteContent';
import Button from '@components/ui/Button';
import WhatsAppIcon from '@components/ui/WhatsAppIcon';

const Navbar = () => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { navbar, contact } = siteContent;

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: {
          className: 'scrolled',
          targets: navRef.current
        },
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  // Close the mobile menu with Escape or when clicking outside of it
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    const onClick = (e) => !navRef.current?.contains(e.target) && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto justify-between transition-all duration-500 rounded-[2.5rem] px-4 py-2.5 flex items-center text-background [&.scrolled]:bg-[#07142A]/80 [&.scrolled]:backdrop-blur-xl [&.scrolled]:shadow-glass [&.scrolled]:border [&.scrolled]:border-textLight/10 [&.scrolled]:text-textLight ${menuOpen ? 'bg-[#07142A]/95 backdrop-blur-xl text-textLight' : ''}`}
    >
      {/* 1. BRAND BLOCK */}
      <a href="#hero" className="flex items-center gap-3 md:pr-10 md:mr-6 ml-2 py-1">
        <img
          src="/logo.jpeg"
          alt="Montezuma Logo"
          className="w-9 h-9 object-cover rounded-full border border-white/20"
        />
        <span className="font-heading font-extrabold text-xl tracking-tighter whitespace-nowrap">
          Montezuma Solar
        </span>
      </a>

      {/* 2. NAVIGATION BLOCK */}
      <div className="hidden md:flex items-center gap-8 px-4 mr-8 text-sm font-semibold tracking-wide whitespace-nowrap">
        {navbar.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-accentGlow transition-all duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* 3. CTA BLOCK */}
      <div className="hidden md:block">
        <Button
          href={whatsappLink(contact.whatsappMessage)}
          size="sm"
        >
          {navbar.cta}
        </Button>
      </div>

      {/* 4. MOBILE MENU */}
      <button
        type="button"
        className="md:hidden p-2 mr-1 rounded-full hover:bg-white/10 transition-colors"
        onClick={() => setMenuOpen(open => !open)}
        aria-label={navbar.menuLabel}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full inset-x-0 mt-3 rounded-[2rem] bg-[#07142A]/95 backdrop-blur-xl border border-textLight/10 shadow-glass p-6 flex flex-col gap-2 text-textLight"
        >
          {navbar.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 text-lg font-semibold border-b border-textLight/10 hover:text-accentGlow transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            href={whatsappLink(contact.whatsappMessage)}
            className="mt-4"
            icon={<WhatsAppIcon />}
          >
            {navbar.cta}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
