import React from 'react';
import { ArrowRight } from 'lucide-react';

const Button = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '', 
  icon = true,
  external = true
}) => {
  const baseStyles = "inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform active:scale-95 whitespace-nowrap";
  
  const variants = {
    primary: "bg-accent text-secondary hover:shadow-[0_0_20px_rgba(255,179,0,0.4)] hover:bg-accent/90",
    secondary: "bg-primary text-textLight hover:bg-primary/90 shadow-lg",
    outline: "border-2 border-primary/10 text-primary hover:border-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary/5 px-4"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        target={external ? "_blank" : "_self"} 
        rel={external ? "noreferrer" : ""}
        className={combinedClasses}
      >
        <span className="relative z-10">{children}</span>
        {icon && <ArrowRight className="w-5 h-5 relative z-10" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      <span className="relative z-10">{children}</span>
      {icon && <ArrowRight className="w-5 h-5 relative z-10" />}
    </button>
  );
};

export default Button;
