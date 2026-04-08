import React from 'react';

const Pricing = () => {
  return (
    <section className="py-32 px-6 md:px-16 bg-white relative" id="planos">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-primary mb-6 tracking-tight drop-shadow-sm">Infraestrutura em Módulos</h2>
        <p className="font-body text-textDark/50 text-lg max-w-2xl mx-auto">Capacidade energética alocada diretamente sob o regime de sua demanda interna.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">

        {/* Tier 1 */}
        <div className="bg-background rounded-[2rem] p-8 border border-primary/5 hover:border-primary/20 transition-all duration-300">
          <h4 className="font-heading font-extrabold text-xl text-primary mb-2">Soluções Residenciais</h4>
          <p className="font-body text-textDark/50 text-sm mb-6">Economia máxima com energia renovável no seu lar.</p>
          <a href="https://wa.me/5585988970101" target="_blank" rel="noreferrer" className="w-full py-3 rounded-full border border-primary/20 text-primary font-bold text-center block hover:bg-primary/5 transition-colors">Detalhes do Contrato</a>
        </div>

        {/* Tier 2 - Highlight Solar Ring */}
        <div className="bg-primary text-textLight rounded-[2.5rem] p-10 transform md:scale-105 shadow-2xl relative ring-2 ring-accent shadow-solar-bloom overflow-hidden group">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,179,0,0.1),transparent_70%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-accent text-secondary px-4 py-1 rounded-full text-xs font-bold font-mono shadow-[0_0_15px_rgba(255,179,0,0.6)]">NÍVEL ENTERPRISE</div>
          <h4 className="font-heading font-extrabold text-2xl mb-2 relative z-10">Soluções Empresariais</h4>
          <p className="font-body text-textLight/60 text-sm mb-8 relative z-10 leading-relaxed">Infraestrutura corporativa focada na redução imediata do Opex do seu negócio.</p>
          <a href="https://wa.me/5585988970101" target="_blank" rel="noreferrer" className="magnetic-btn w-full py-4 rounded-full bg-accent text-secondary hover:text-secondary shadow-[0_4px_14px_0_rgba(255,179,0,0.39)] hover:shadow-solar-bloom font-bold text-center block relative z-10">Solicitar Engenheiro</a>
        </div>

        {/* Tier 3 */}
        <div className="bg-secondary text-textLight rounded-[2rem] p-8 border border-textLight/5 relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent opacity-0 group-hover:opacity-[0.05] blur-2xl transition-all duration-500 rounded-full" />
          <h4 className="font-heading font-extrabold text-xl mb-2">Usinas de Investimento e Condomínios</h4>
          <p className="font-body text-textLight/50 text-sm mb-6">Invista em uma usina de energia solar e tenha receita recorrente acima de R$ 5.600 por mês com contrato garantido de 5 anos.</p>
          <a href="https://wa.me/5585988970101" target="_blank" rel="noreferrer" className="w-full py-3 rounded-full border border-textLight/20 text-textLight font-bold text-center block hover:bg-textLight/10 transition-colors relative z-10">Falar com Mesa</a>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
