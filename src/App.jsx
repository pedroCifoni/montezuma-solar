import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowRight, Sun, Activity, Pointer, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

const Hero = () => {
  const heroRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-elem', { y: 60, opacity: 0, duration: 1.5, stagger: 0.15, ease: 'power3.out', delay: 0.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col lg:flex-row items-center justify-between pt-32 pb-24 px-6 md:px-16 gap-12 lg:gap-8 bg-[#060B14]" id="hero">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-secondary to-secondary pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-radial-solar z-0 pointer-events-none opacity-40 mix-blend-screen" />

      {/* TEXT CONTENT (Left) */}
      <div className="max-w-3xl text-textLight relative z-20 w-full lg:w-[55%] flex flex-col justify-center">
        <div className="flex flex-col mb-8 mt-8 lg:mt-0">
          <span className="hero-elem font-heading font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">Soluções em energia que geram</span>
          <span className="hero-elem font-drama italic text-6xl md:text-[7rem] lg:text-[8rem] leading-[0.8] mt-4 tracking-tight text-accent drop-shadow-[0_0_30px_rgba(255,179,0,0.4)]">Economia.</span>
        </div>
        <div className="hero-elem">
          <p className="text-lg md:text-xl font-body font-medium max-w-xl text-textLight/70 mb-10">Menos custo com energia. Mais previsibilidade para crescer.</p>
          <a href="https://wa.me/5585988970101" target="_blank" rel="noreferrer" className="magnetic-btn inline-flex bg-accent text-secondary px-8 py-4 rounded-[2rem] text-lg font-bold items-center gap-3 hover:shadow-[0_0_20px_rgba(255,179,0,0.4)] transition-shadow">
            <span className="relative z-10">Fale conosco</span>
            <ArrowRight className="w-5 h-5 relative z-10" />
          </a>
        </div>
      </div>

      {/* VIDEO SHOWCASE (Right) */}
      <div className="hero-elem relative z-20 w-full lg:w-[40%] flex justify-center lg:justify-end perspective-1000 mt-8 lg:mt-0">
        <div className="relative aspect-[9/16] h-[480px] md:h-[560px] lg:h-[620px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-white/10 group transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,179,0,0.2)] hover:ring-accent/40 bg-black">
          <video
            className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            src="/VideoUsinaComprimido.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          {/* Subtle reflection overlay for glass effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

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

const Features = () => {
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

const Visao = () => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.philo-text', {
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        y: 40, opacity: 0, duration: 1, stagger: 0.2
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative py-40 px-6 md:px-16 bg-secondary text-textLight overflow-hidden" id="visao">
      <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" alt="Tech grid night sky" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        <p className="philo-text font-body text-xl md:text-2xl text-textLight/50 mb-8 max-w-2xl font-light">
          A maioria instala painéis.
        </p>
        <p className="philo-text font-drama italic text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
          Nós entregamos <span className="text-accentGlow drop-shadow-[0_0_20px_rgba(255,213,79,0.7)] not-italic font-heading font-extrabold tracking-tight">previsibilidade energética</span> <br />para o crescimento da sua empresa.
        </p>
      </div>
    </section>
  );
};

const Protocol = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.proto-card');
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          animation: gsap.to(card, { scale: 0.9, opacity: 0.5, filter: 'blur(10px)', ease: 'none' }),
          scrub: true,
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    { num: "01", title: "Assessment Técnico", desc: "Varredura topológica e análise de consumo da sua rede local." },
    { num: "02", title: "Deploy Físico", desc: "Integração modular de usinas off-site ou instalação em polo." },
    { num: "03", title: "Operação em Rede", desc: "Ativação inteligente e abatimento direto via infraestrutura compartilhada." }
  ];

  return (
    <section ref={containerRef} className="bg-background pt-24 pb-48 px-6 md:px-16 bg-night-grid bg-grid-size relative" id="protocolo">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none z-0" />
      <div className="max-w-4xl mx-auto relative z-10">
        {steps.map((step, i) => (
          <div key={i} className="proto-card h-[80vh] flex items-center justify-center sticky top-0 relative origin-top">
            <div className="w-full bg-white/95 backdrop-blur-md rounded-[3rem] p-12 md:p-20 shadow-[0_20px_50px_rgba(11,31,59,0.1)] border border-primary/5 flex flex-col md:flex-row items-center gap-12 transition-all duration-500 hover:shadow-glass hover:border-accent/20">
              <div className="flex-1">
                <span className="font-mono text-accent text-2xl mb-4 block font-semibold drop-shadow-[0_0_10px_rgba(255,179,0,0.4)]">[{step.num}]</span>
                <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-primary mb-6 tracking-tight">{step.title}</h2>
                <p className="font-body text-xl text-textDark/60 leading-relaxed font-light">{step.desc}</p>
              </div>
              <div className="w-full md:w-1/2 aspect-[4/3] bg-background/50 rounded-3xl flex items-center justify-center overflow-hidden border border-primary/10 relative shadow-inner">
                {/* Simulated Industrial UI feeling */}
                <div className={`absolute inset-4 border border-primary/20 rounded-2xl flex items-center justify-center`}>
                  <div className={`absolute w-32 h-32 border-[3px] rounded-full border-primary/10 animate-[spin_${10 + i}s_linear_infinite] ${i % 2 === 0 ? 'border-t-accent/80 border-r-accent/30 drop-shadow-[0_0_8px_rgba(255,179,0,0.5)]' : 'border-b-accent/80 border-l-accent/30 drop-shadow-[0_0_8px_rgba(255,179,0,0.5)]'}`} />
                  <div className={`absolute w-16 h-16 border-[2px] rounded-full border-primary/30 animate-[spin_${5 + i}s_linear_infinite_reverse] ${i % 2 !== 0 ? 'border-t-primary border-r-primary' : 'border-b-primary border-l-primary'}`} />
                  <div className="w-2 h-2 rounded-full bg-accentGlow animate-[pulse_1s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

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

export default function App() {
  return (
    <div className="bg-background selection:bg-accent selection:text-secondary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Visao />
        <Protocol />
        <Portfolio />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
