import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Navbar = () => {
  const navRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: { className: 'scrolled', targets: navRef.current },
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2rem] px-6 py-3 flex items-center gap-8 text-background [&.scrolled]:bg-[#060B14]/70 [&.scrolled]:backdrop-blur-xl [&.scrolled]:shadow-glass [&.scrolled]:border [&.scrolled]:border-textLight/10 [&.scrolled]:text-textLight">
      <div className="font-heading font-extrabold text-xl tracking-tighter flex items-center gap-3 whitespace-nowrap">
        <img src="/logo.jpeg" alt="Montezuma Logo" className="w-8 h-8 object-cover rounded-full" /> Montezuma Solar
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#solucoes" className="hover:-translate-y-px transition-transform hover:text-accentGlow hover:drop-shadow-[0_0_8px_rgba(255,213,79,0.5)]">Soluções</a>
        <a href="#visao" className="hover:-translate-y-px transition-transform hover:text-accentGlow hover:drop-shadow-[0_0_8px_rgba(255,213,79,0.5)]">Visão</a>
        <a href="#planos" className="hover:-translate-y-px transition-transform hover:text-accentGlow hover:drop-shadow-[0_0_8px_rgba(255,213,79,0.5)]">Planos</a>
      </div>
      <a href="https://wa.me/5585988970101" target="_blank" rel="noreferrer" className="magnetic-btn bg-accent hover:bg-accentGlow text-secondary px-5 py-2.5 rounded-[1.5rem] text-sm font-bold flex items-center gap-2">
        <span className="relative z-10 hidden sm:inline">Contato Corporativo</span>
        <ArrowRight className="w-4 h-4 relative z-10" />
      </a>
    </nav>
  );
};

export default Navbar;
