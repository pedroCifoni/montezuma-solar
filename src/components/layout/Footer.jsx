import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-textLight rounded-t-[4rem] px-6 md:px-16 pt-24 pb-8 overflow-hidden relative border-t border-accent/10">
      <div className="absolute inset-0 bg-night-grid bg-grid-size opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 relative z-10">
        <div>
          <div className="font-heading font-extrabold text-3xl tracking-tighter flex items-center gap-3 mb-4">
            <img src="/logo.jpeg" alt="Montezuma Logo" className="w-10 h-10 object-cover rounded-full border-2 border-accent drop-shadow-[0_0_8px_rgba(255,179,0,0.6)]" /> Montezuma
          </div>
          <p className="font-body text-textLight/40 max-w-sm font-light leading-relaxed">
            Energia limpa em escala corporativa. Projetado para as infraestruturas do amanhã.
          </p>
        </div>
        <div className="flex justify-start md:justify-end gap-16 font-body text-sm text-textLight/60">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-textLight/20 uppercase text-xs tracking-widest">Menu</span>
            <a href="#solucoes" className="hover:text-accentGlow transition-colors">Infra</a>
            <a href="#visao" className="hover:text-accentGlow transition-colors">Visão</a>
            <a href="#planos" className="hover:text-accentGlow transition-colors">Contratos</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-textLight/20 uppercase text-xs tracking-widest">Segurança</span>
            <a href="#" className="hover:text-accentGlow transition-colors">SLA</a>
            <a href="#" className="hover:text-accentGlow transition-colors">Compliance</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-textLight/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="font-mono text-[10px] text-textLight/30 tracking-widest uppercase">© 2026 MONTEZUMA SOLAR INFRA.</p>
        <div className="flex items-center gap-2 bg-textLight/5 px-4 py-2 rounded-full border border-textLight/5 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          <span className="font-mono text-[10px] uppercase text-textLight/70 tracking-wider">System Operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
