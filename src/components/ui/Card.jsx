import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  highlight = false, 
  glow = false,
  glass = false,
  padding = 'p-10',
  overflow = 'overflow-hidden'
}) => {
  const baseStyles = `rounded-[2rem] border transition-all duration-500 ${overflow} flex flex-col h-full relative`;
  
  const themes = {
    standard: "bg-white border-primary/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-secondary hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(6,11,20,0.3)] group",
    highlight: "bg-white border-primary/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-secondary hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(6,11,20,0.3)] group transform md:scale-105 z-20",
    glass: "bg-surfaceGlass backdrop-blur-md border-white/10 hover:border-white/20",
  };

  const glowStyles = glow ? "hover:shadow-[0_0_30px_rgba(255,179,0,0.2)]" : "";
  const currentTheme = highlight ? themes.highlight : (glass ? themes.glass : themes.standard);

  return (
    <div className={`${baseStyles} ${currentTheme} ${glowStyles} ${padding} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
