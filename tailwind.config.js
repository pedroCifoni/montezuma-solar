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
        secondary: "#07142A",   // Ceu Noturno
        accent: "#FFB300",      // Ambar Solar
        accentGlow: "#FFD54F",  // Sol Eletrico
        background: "#F3F6FA",  // Ceu Claro
        line: "#DCE3EC",        // Divisores em fundo claro
        textLight: "#EAF2FF",
        textDark: "#0A0F18",
        whatsapp: "#25D366",
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'solar-glow': '0 0 24px rgba(255, 179, 0, 0.35)',
        'glass': '0 8px 32px 0 rgba(7, 20, 42, 0.35)',
        'lift': '0 24px 48px -24px rgba(11, 31, 59, 0.35)',
      },
    },
  },
  plugins: [],
}
