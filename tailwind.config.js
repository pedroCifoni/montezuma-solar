/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1F3B",     // Azul Energia Profundo
        secondary: "#060B14",   // Ceu Noturno
        accent: "#FFB300",      // Ambar Solar
        accentGlow: "#FFD54F",  // Sol Eletrico
        background: "#F5F8FC",  // Claro
        surfaceGlass: "rgba(255,255,255,0.06)",
        textLight: "#EAF2FF",
        textDark: "#0A0F18"
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        subheading: ['Outfit', 'sans-serif'],
        drama: ['"Cormorant Garamond"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        body: ['Outfit', 'sans-serif']
      },
      boxShadow: {
        'solar-glow': '0 0 20px rgba(255, 179, 0, 0.4)',
        'solar-bloom': '0 0 40px rgba(255, 213, 79, 0.6)',
        'glass': '0 8px 32px 0 rgba(11, 31, 59, 0.3)',
      },
      backgroundImage: {
        'night-grid': 'linear-gradient(to right, rgba(234, 242, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(234, 242, 255, 0.05) 1px, transparent 1px)',
        'radial-solar': 'radial-gradient(circle at center, rgba(255, 179, 0, 0.15) 0%, transparent 60%)',
      }
    },
  },
  plugins: [],
}
