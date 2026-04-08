import React, { useState, useEffect } from 'react';
import { Zap, Pointer } from 'lucide-react';

const DiagnosticShuffler = () => {
  const [items, setItems] = useState(["Instalação profissional", "Garantia de qualidade", "Suporte dedicado"]);
  useEffect(() => {
    const int = setInterval(() => setItems(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]), 3000);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="bg-white glowing-card rounded-[2rem] p-8 shadow-xl flex flex-col h-full min-h-[320px]">
      <h3 className="font-heading font-bold text-2xl text-primary mb-2">Soluções Residenciais & Empresariais</h3>
      <p className="text-textDark/70 font-body mb-8 md:text-sm lg:text-base">Energia solar para sua casa ou empresa, com os melhores equipamentos do mercado.</p>
      <div className="relative flex-1 flex flex-col justify-end perspective-1000">
        {items.map((item, i) => (
          <div key={item} className="absolute inset-x-0 bottom-0 bg-background rounded-2xl p-4 shadow-sm border border-primary/10 flex items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{ transform: `translateY(-${i * 12}px) scale(${1 - i * 0.05})`, opacity: 1 - i * 0.3, zIndex: 10 - i }}>
            <Zap className="text-accent w-5 h-5 flex-shrink-0" />
            <span className="font-mono text-sm font-medium truncate">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TelemetryTypewriter = () => {
  const [text, setText] = useState("");
  const fullText = "ANALISANDO VIABILIDADE TÉCNICA...\nCALCULANDO DEMANDA...\nOTIMIZANDO ÁREA DE SOL...\nSISTEMA PRONTO PARA INSTALAÇÃO.";

  useEffect(() => {
    let charIdx = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, charIdx));
      charIdx++;
      if (charIdx > fullText.length + 10) charIdx = 0;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-secondary rounded-[2rem] p-8 shadow-[0_15px_30px_rgba(6,11,20,0.5)] border border-primary/20 flex flex-col h-full min-h-[320px] transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(255,179,0,0.2)] hover:border-accent/30">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-accentGlow animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_8px_rgba(255,213,79,0.8)]" />
        <span className="font-mono text-xs text-textLight/50 uppercase">Network Telemetry</span>
      </div>
      <h3 className="font-heading font-bold text-2xl text-textLight mb-2">Soluções para Condomínios</h3>
      <p className="text-textLight/60 font-body mb-6 md:text-sm lg:text-base">Instalação do sistema no próprio condomínio após o estudo minucioso de viabilidade técnica.</p>
      <div className="bg-black/60 rounded-xl p-4 flex-1 font-mono text-xs text-textLight/80 leading-relaxed whitespace-pre-wrap flex ring-1 ring-white/5">
        <span className="text-accentGlow/90 drop-shadow-[0_0_2px_rgba(255,213,79,0.5)]">{text}</span>
        <span className="w-2 h-4 bg-accentGlow ml-1 inline-block animate-[pulse_0.8s_steps(2,start)_infinite]" />
      </div>
    </div>
  );
};

const Scheduler = () => {
  return (
    <div className="bg-background glowing-card rounded-[2rem] p-8 h-full min-h-[320px] overflow-hidden group flex flex-col">
      <h3 className="font-heading font-bold text-2xl text-primary mb-2">Usinas de Investimento</h3>
      <p className="text-textDark/70 font-body mb-8 md:text-sm lg:text-base">Invista em uma usina de energia solar e tenha receita recorrente de R$ 5600 por mês.</p>
      <div className="flex-1 rounded-xl p-2 grid grid-cols-7 gap-1 relative bg-white border border-primary/10 shadow-inner">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
          <div key={d} className="text-center font-mono text-[10px] text-textDark/40 py-1">{d}</div>
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className={`h-8 rounded bg-primary/5 transition-all duration-500 ${i === 4 ? 'group-hover:bg-accent/20 group-hover:shadow-[0_0_10px_rgba(255,179,0,0.3)] ring-1 ring-transparent group-hover:ring-accent/50' : ''}`} />
        ))}
        <Pointer className="absolute text-primary w-5 h-5 transition-all duration-1000 ease-in-out left-4 bottom-4 group-hover:left-[60%] group-hover:bottom-[60%] -rotate-12 group-hover:scale-90 drop-shadow-md" />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-background relative z-10" id="solucoes">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <DiagnosticShuffler />
        <TelemetryTypewriter />
        <Scheduler />
      </div>
    </section>
  );
};

export default Services;
