import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

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

export default Hero;
