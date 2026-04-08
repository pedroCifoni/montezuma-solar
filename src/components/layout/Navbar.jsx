import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@lib/gsap';
import { siteContent } from '@content/siteContent';
import Button from '@components/ui/Button';

const Navbar = () => {
  const navRef = useRef(null);
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

  return (
    <nav 
      ref={navRef} 
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2.5rem] px-4 py-2.5 flex items-center text-background [&.scrolled]:bg-[#060B14]/80 [&.scrolled]:backdrop-blur-xl [&.scrolled]:shadow-glass [&.scrolled]:border [&.scrolled]:border-textLight/10 [&.scrolled]:text-textLight"
    >
      {/* 1. BRAND BLOCK */}
      <div className="flex items-center gap-3 pr-10 mr-6 ml-2 py-1">

        <img 
          src="/logo.jpeg" 
          alt="Montezuma Logo" 
          className="w-9 h-9 object-cover rounded-full border border-white/20" 
        /> 
        <span className="font-heading font-extrabold text-xl tracking-tighter whitespace-nowrap">
          Montezuma Solar
        </span>
      </div>
      
      {/* 2. NAVIGATION BLOCK */}
      <div className="hidden md:flex items-center gap-8 px-4 mr-8 text-sm font-semibold tracking-wide">
        {navbar.links.map((link) => (
          <a 
            key={link.href}
            href={link.href} 
            className="hover:text-accentGlow transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* 3. CTA BLOCK */}
      <Button 
        href={contact.whatsapp} 
        variant="primary" 
        className="px-6 py-3 text-sm"
        icon={false}
      >
        <span className="relative z-10">{navbar.cta}</span>
      </Button>
    </nav>
  );
};

export default Navbar;
