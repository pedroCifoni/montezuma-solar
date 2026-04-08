import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  highlight = false, 
  glow = false,
  glass = false,
  padding = 'p-10'
}) => {
  const baseStyles = "rounded-[2rem] border transition-all duration-500 overflow-hidden flex flex-col h-full relative";
  
  const themes = {
    standard: "bg-background/40 border-primary/5 hover:border-primary/10 hover:bg-white",
    highlight: "bg-primary border-accent/30 shadow-2xl transform md:scale-105 z-20",
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
