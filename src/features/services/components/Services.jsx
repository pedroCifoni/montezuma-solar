import React, { useState, useEffect } from 'react';
import { Zap, Pointer } from 'lucide-react';
import Card from '@components/ui/Card';
import { siteContent } from '@content/siteContent';

const DiagnosticShuffler = ({ content }) => {
  const [items, setItems] = useState(content.features);
  
  useEffect(() => {
    const int = setInterval(() => {
      setItems(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    }, 3000);
    return () => clearInterval(int);
  }, []);

  return (
    <Card padding="p-8" className="min-h-[320px]">
      <h3 className="font-heading font-bold text-2xl text-primary mb-2 transition-colors duration-500 group-hover:text-textLight">{content.title}</h3>
      <p className="text-textDark/70 font-body mb-8 md:text-sm lg:text-base transition-colors duration-500 group-hover:text-textLight/70">{content.description}</p>
      <div className="relative flex-1 flex flex-col justify-end perspective-1000">
        {items.map((item, i) => (
          <div 
            key={item} 
            className="absolute inset-x-0 bottom-0 bg-white group-hover:bg-[#1A2233] rounded-2xl p-4 shadow-sm border border-primary/10 group-hover:border-white/10 flex items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{ 
              transform: `translateY(-${i * 12}px) scale(${1 - i * 0.05})`, 
              opacity: 1 - i * 0.3, 
              zIndex: 10 - i 
            }}
          >
            <Zap className="text-accent w-5 h-5 flex-shrink-0" />
            <span className="font-mono text-sm font-medium truncate text-textDark/80 group-hover:text-textLight transition-colors duration-500">{item}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

const TelemetryTypewriter = ({ content }) => {
  const [text, setText] = useState("");
  const fullText = content.telemetry.join('\n');

  useEffect(() => {
    let charIdx = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, charIdx));
      charIdx++;
      if (charIdx > fullText.length + 10) charIdx = 0;
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <Card padding="p-8" className="min-h-[320px]" highlight>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-accentGlow animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_8px_rgba(255,213,79,0.8)]" />
        <span className="font-mono text-xs text-secondary/50 group-hover:text-textLight/50 uppercase transition-colors duration-500">Network Telemetry</span>
      </div>
      <h3 className="font-heading font-bold text-2xl text-primary mb-2 transition-colors duration-500 group-hover:text-textLight">{content.title}</h3>
      <p className="text-textDark/70 font-body mb-6 md:text-sm lg:text-base transition-colors duration-500 group-hover:text-textLight/60">{content.description}</p>
      <div className="bg-black/60 rounded-xl p-4 flex-1 font-mono text-xs text-textLight/80 leading-relaxed whitespace-pre-wrap flex ring-1 ring-white/5">
        <span className="text-accentGlow/90 drop-shadow-[0_0_2px_rgba(255,213,79,0.5)]">{text}</span>
        <span className="w-2 h-4 bg-accentGlow ml-1 inline-block animate-[pulse_0.8s_steps(2,start)_infinite]" />
      </div>
    </Card>
  );
};

const Scheduler = ({ content }) => {
  return (
    <Card padding="p-8" className="min-h-[320px] overflow-hidden">
      <h3 className="font-heading font-bold text-2xl text-primary mb-2 transition-colors duration-500 group-hover:text-textLight">{content.title}</h3>
      <p className="text-textDark/70 font-body mb-8 md:text-sm lg:text-base transition-colors duration-500 group-hover:text-textLight/70">{content.description}</p>
      <div className="flex-1 rounded-xl p-2 grid grid-cols-7 gap-1 relative bg-background border border-primary/10 shadow-inner group-hover:bg-white/5 group-hover:border-white/10 transition-colors duration-500">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
          <div key={d} className="text-center font-mono text-[10px] text-textDark/40 group-hover:text-textLight/40 py-1 transition-colors duration-500">{d}</div>
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className={`h-8 rounded bg-primary/5 group-hover:bg-white/10 transition-all duration-500 ${i === 4 ? 'group-hover:bg-accent/20 group-hover:shadow-[0_0_10px_rgba(255,179,0,0.3)] ring-1 ring-transparent group-hover:ring-accent/50' : ''}`} />
        ))}
        <Pointer className="absolute text-primary w-5 h-5 transition-all duration-1000 ease-in-out left-4 bottom-4 group-hover:left-[60%] group-hover:bottom-[60%] -rotate-12 group-hover:scale-90 drop-shadow-md" />
      </div>
    </Card>
  );
};

const Services = () => {
  const { services } = siteContent;

  return (
    <section className="py-24 px-6 md:px-16 bg-background relative z-10" id="solucoes">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <DiagnosticShuffler content={services.items[0]} />
        <TelemetryTypewriter content={services.items[1]} />
        <Scheduler content={services.items[2]} />
      </div>
    </section>
  );
};

export default Services;
