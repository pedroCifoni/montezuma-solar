import React from 'react';

const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon = null,
  external = true
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2.5 rounded-full font-bold sm:whitespace-nowrap transition-all duration-300 active:scale-[0.97] text-center";

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3.5 text-base",
    lg: "px-7 py-4 text-base md:text-lg",
  };

  const variants = {
    primary: "bg-accent text-secondary hover:bg-accentGlow hover:shadow-solar-glow",
    ghostLight: "text-textLight ring-1 ring-inset ring-textLight/25 hover:bg-textLight/10 hover:ring-textLight/40",
    outline: "text-primary ring-1 ring-inset ring-primary/20 hover:bg-primary hover:text-textLight hover:ring-primary",
  };

  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  if (href) {
    const isExternal = external && !href.startsWith('#');
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};

export default Button;
