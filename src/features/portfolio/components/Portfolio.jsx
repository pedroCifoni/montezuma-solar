import React from 'react';

const Portfolio = () => {
  const installations = [
    { id: 1, title: 'Usina Integrada Alfa', desc: 'Substitua pelo texto descritivo desta instalação posteriormente.', img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80' },
    { id: 2, title: 'Galpão Logístico', desc: 'Substitua pelo texto descritivo desta instalação posteriormente.', img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80' },
    { id: 3, title: 'Fazenda Solar Enterprise', desc: 'Substitua pelo texto descritivo desta instalação posteriormente.', img: 'https://images.unsplash.com/photo-1584278858223-9ee82b6be1a8?auto=format&fit=crop&q=80' }
  ];
  return (
    <section className="py-24 px-6 md:px-16 bg-secondary text-textLight border-t border-accent/10" id="instalacoes">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6">Instalações Realizadas</h2>
        <p className="font-body text-textLight/60 text-lg max-w-2xl mx-auto">Conheça algumas das nossas entregas de infraestrutura corporativa.</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {installations.map((inst) => (
          <div key={inst.id} className="group relative overflow-hidden rounded-[2rem] bg-primary border border-textLight/10 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(255,179,0,0.2)] transition-all duration-500">
            <div className="aspect-[4/3] w-full overflow-hidden bg-black/50">
              <img src={inst.img} alt={inst.title} className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
            </div>
            <div className="p-8">
              <h4 className="font-heading font-bold text-xl mb-3 text-textLight group-hover:text-accentGlow transition-colors">{inst.title}</h4>
              <p className="font-body text-textLight/50 text-sm leading-relaxed">{inst.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
