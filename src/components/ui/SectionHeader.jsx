import React from 'react';

// Left-aligned section heading; the subtitle sits beside the title on wide screens
const SectionHeader = ({ title, subtitle, light = false, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto mb-14 md:mb-20 grid gap-5 lg:grid-cols-12 lg:items-end ${className}`}>
      <h2 className={`lg:col-span-7 font-heading font-extrabold text-[2rem] leading-[1.1] md:text-5xl tracking-tight text-balance ${light ? 'text-textLight' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`lg:col-span-5 text-base md:text-lg leading-relaxed max-w-xl ${light ? 'text-textLight/70' : 'text-textDark/65'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
