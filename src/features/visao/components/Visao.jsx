import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from '@lib/gsap';
import { siteContent } from '@content/siteContent';

const Visao = () => {
  const ref = useRef(null);
  const { visao } = siteContent;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.philo-text', {
        scrollTrigger: { 
          trigger: ref.current, 
          start: 'top 70%' 
        },
        y: 40, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.2
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={ref} 
      className="relative pt-40 pb-24 px-6 md:px-16 bg-secondary text-textLight overflow-hidden" 
      id="visao"
    >
      <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
          alt="Tech grid night sky" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        <p className="philo-text font-body text-xl md:text-2xl text-textLight/50 mb-8 max-w-2xl font-light">
          {visao.text1}
        </p>
        <p className="philo-text font-drama italic text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
          {visao.text2} <span className="text-accentGlow drop-shadow-[0_0_20px_rgba(255,213,79,0.7)] not-italic font-heading font-extrabold tracking-tight">{visao.highlight}</span> <br />{visao.text3}
        </p>
      </div>
    </section>
  );
};

export default Visao;
