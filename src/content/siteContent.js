/**
 * Centralized site content to avoid duplication and help with maintenance.
 */
export const siteContent = {
  contact: {
    whatsapp: "https://wa.me/5585988970101",
    whatsappLabel: "(85) 98897-0101",
    phone: "+55 85 98897 0101",
    email: "contato@montezumasolar.com.br",
  },
  navbar: {
    links: [
      { label: "Soluções", href: "#solucoes" },
      { label: "Instalações", href: "#instalacoes" },
      { label: "Planos", href: "#planos" },
      { label: "Visão", href: "#visao" },
    ],
    cta: "Fale conosco",
  },
  hero: {
    title: {
      line1: "Soluções em energia que geram",
      highlight: "Economia.",
    },
    subtitle: "Menos custo com energia. Mais previsibilidade para crescer.",
    cta: "Fale conosco",
    video: {
      src: "/VideoUsinaComprimido.mp4",
      poster: "",
    }
  },
  services: {
    items: [
      {
        title: "Soluções Residenciais & Empresariais",
        description: "Energia solar para sua casa ou empresa, com os melhores equipamentos do mercado.",
        features: ["Instalação profissional", "Garantia de qualidade", "Suporte dedicado"],
      },
      {
        title: "Soluções para Condomínios",
        description: "Instalação do sistema no próprio condomínio após o estudo minucioso de viabilidade técnica.",
        telemetry: [
          "ANALISANDO VIABILIDADE TÉCNICA...",
          "CALCULANDO DEMANDA...",
          "OTIMIZANDO ÁREA DE SOL...",
          "SISTEMA PRONTO PARA INSTALAÇÃO."
        ],
      },
      {
        title: "Usinas de Investimento",
        description: "Invista em uma usina de energia solar e tenha receita recorrente de R$ 5.600 por mês.",
        investment: "Receita recorrente garantida",
      }
    ]
  },
  visao: {
    text1: "A maioria instala painéis.",
    text2: "Nós entregamos",
    highlight: "previsibilidade energética",
    text3: "para o crescimento da sua empresa.",
  },
  portfolio: {
    title: "Instalações Realizadas",
    subtitle: "Conheça algumas das nossas entregas de infraestrutura corporativa.",
    items: [
      { id: 1, title: 'Usina Integrada Alfa', desc: 'Substitua pelo texto descritivo desta instalação posteriormente.', img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80' },
      { id: 2, title: 'Galpão Logístico', desc: 'Substitua pelo texto descritivo desta instalação posteriormente.', img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80' },
      { id: 3, title: 'Fazenda Solar Enterprise', desc: 'Substitua pelo texto descritivo desta instalação posteriormente.', img: 'https://images.unsplash.com/photo-1584278858223-9ee82b6be1a8?auto=format&fit=crop&q=80' }
    ]
  },
  pricing: {
    title: "Soluções em Energia Solar para Cada Perfil",
    subtitle: "Atendemos residências, empresas, condomínios e investidores com projetos pensados para economia, previsibilidade e retorno.",
    cards: [
      {
        title: "Residências e Empresas",
        description: "Projetos solares sob medida para reduzir a conta de energia e aumentar a eficiência do consumo.",
        cta: "Solicitar proposta",
        iconType: "building",
        highlight: false
      },
      {
        title: "Condomínios",
        description: "Soluções para áreas comuns e consumo coletivo, com estudo de viabilidade e foco em economia recorrente.",
        cta: "Falar com especialista",
        iconType: "users",
        highlight: true
      },
      {
        title: "Investidores",
        description: "Oportunidades em usinas solares com potencial de receita recorrente e visão de longo prazo.",
        cta: "Quero saber mais",
        iconType: "trending",
        highlight: false
      }
    ]
  },
  footer: {
    copy: "© 2026 Montezuma Solar. Todos os direitos reservados.",
    address: "Fortaleza, Ceará - BR",
  }
};
