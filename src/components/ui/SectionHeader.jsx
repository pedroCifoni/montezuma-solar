import React from 'react';

const SectionHeader = ({ title, subtitle, light = false, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto text-center mb-16 relative z-10 ${className}`}>
      <h2 className={`font-heading font-extrabold text-4xl md:text-5xl mb-6 tracking-tight drop-shadow-sm ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body text-lg max-w-3xl mx-auto leading-relaxed ${light ? 'text-textLight/60' : 'text-textDark/60'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
