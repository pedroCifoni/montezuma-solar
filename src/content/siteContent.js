/**
 * Centralized site content to avoid duplication and help with maintenance.
 * Itens marcados com TODO são provisórios e devem ser confirmados com o cliente.
 */
const WHATSAPP_NUMBER = "5585988970101";

// Builds a WhatsApp link with a prefilled message so each CTA opens a contextual conversation
export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const siteContent = {
  contact: {
    whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
    whatsappMessage: "Olá! Vim pelo site da Montezuma Solar e gostaria de mais informações.",
    whatsappLabel: "(85) 98897-0101",
    phone: "+55 85 98897 0101",
    email: "contato@montezumasolar.com.br",
  },
  navbar: {
    links: [
      { label: "Soluções", href: "#solucoes" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Projetos", href: "#projetos" },
      { label: "Dúvidas", href: "#duvidas" },
    ],
    cta: "Pedir orçamento",
    menuLabel: "Abrir menu",
  },
  hero: {
    title: "Sua conta de luz pode cair até 90% com energia solar.", // TODO: confirmar percentual com o cliente
    subtitle: "Projetos para casas, empresas, condomínios e investidores no Ceará, do estudo da sua conta até a usina gerando.",
    cta: "Pedir orçamento no WhatsApp",
    whatsappMessage: "Olá! Vim pelo site e quero um orçamento de energia solar.",
    secondaryCta: "Ver como funciona",
    // TODO: confirmar cada garantia com o cliente
    assurances: [
      "Visita técnica sem custo",
      "Homologação com a Enel inclusa",
      "Garantia de 25 anos nos módulos",
    ],
    video: {
      src: "/VideoUsinaComprimido.mp4",
      poster: "",
      caption: "Usina instalada pela Montezuma Solar",
    },
  },
  // TODO: substituir pelos números reais da empresa
  stats: [
    { value: "+150", label: "projetos entregues" },
    { value: "2,5 MWp", label: "de potência instalada" },
    { value: "R$ 3 mi", label: "economizados por ano pelos clientes" },
    { value: "4,9", label: "de nota no Google" },
  ],
  solutions: {
    title: "Um projeto para cada tipo de conta",
    subtitle: "Cada sistema é dimensionado a partir do seu histórico de consumo, do telhado ou terreno disponível e do seu objetivo.",
    items: [
      {
        icon: "home",
        title: "Residências e empresas",
        description: "Sistema no seu telhado ou terreno, dimensionado para cobrir o seu consumo e reduzir a conta já no primeiro mês de operação.",
        benefits: ["Projeto e instalação completos", "Monitoramento da geração pelo celular", "Opções de financiamento"],
        cta: "Pedir proposta para minha casa ou empresa",
        whatsappMessage: "Olá! Quero uma proposta de energia solar para minha casa/empresa.",
      },
      {
        icon: "building",
        title: "Condomínios",
        description: "Energia para as áreas comuns com estudo de viabilidade técnica e apresentação dos números para a assembleia.",
        benefits: ["Estudo de viabilidade do condomínio", "Redução da taxa condominial", "Apresentação para síndico e conselho"],
        cta: "Falar sobre meu condomínio",
        whatsappMessage: "Olá! Tenho interesse em energia solar para o meu condomínio.",
      },
      {
        icon: "trending",
        title: "Investidores",
        description: "Invista em uma usina solar e receba pela energia gerada, com receita recorrente estimada de até R$ 5.600 por mês.", // TODO: informar o valor de investimento
        benefits: ["Usina operada pela Montezuma", "Receita mensal pela energia gerada", "Ativo de longo prazo"],
        cta: "Conhecer as usinas de investimento",
        whatsappMessage: "Olá! Quero saber mais sobre as usinas solares de investimento.",
      },
    ],
  },
  process: {
    statement: "A maioria instala painéis. Nós entregamos previsibilidade: você sabe quanto vai pagar de energia nos próximos anos.",
    title: "Como funciona",
    steps: [
      { title: "Análise da sua conta", description: "Você envia uma foto da conta de luz e nós calculamos o sistema ideal." },
      { title: "Visita técnica", description: "Avaliamos o telhado ou terreno, a estrutura e a parte elétrica." },
      { title: "Projeto e proposta", description: "Você recebe o projeto com a economia estimada e as formas de pagamento." },
      { title: "Homologação e instalação", description: "Cuidamos da aprovação na Enel e instalamos com equipe própria." },
      { title: "Monitoramento", description: "Acompanhe a geração pelo celular, com suporte da nossa equipe." },
    ],
  },
  portfolio: {
    title: "Projetos entregues",
    subtitle: "Alguns sistemas que já estão gerando economia para nossos clientes.",
    // TODO: substituir imagens, textos e números pelos projetos reais
    items: [
      { id: 1, title: 'Usina Integrada Alfa', type: 'Usina de investimento', city: 'Fortaleza, CE', power: '75 kWp', savings: 'R$ 8.200/mês', img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1200&q=80' },
      { id: 2, title: 'Galpão Logístico', type: 'Empresa', city: 'Maracanaú, CE', power: '42 kWp', savings: 'R$ 4.900/mês', img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80' },
      { id: 3, title: 'Fazenda Solar Enterprise', type: 'Usina de investimento', city: 'Caucaia, CE', power: '150 kWp', savings: 'R$ 16.300/mês', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  testimonials: {
    title: "Quem já instalou",
    // TODO: substituir pelos depoimentos reais (nome, cidade e texto autorizados pelo cliente)
    items: [
      { quote: "Substitua pelo depoimento do cliente sobre a economia e o atendimento.", name: "Nome do cliente", detail: "Residência em Fortaleza" },
      { quote: "Substitua pelo depoimento do cliente sobre a economia e o atendimento.", name: "Nome do cliente", detail: "Empresa em Maracanaú" },
      { quote: "Substitua pelo depoimento do cliente sobre a economia e o atendimento.", name: "Nome do síndico", detail: "Condomínio em Fortaleza" },
    ],
  },
  faq: {
    title: "Dúvidas frequentes",
    subtitle: "Não encontrou sua resposta? Fale direto com um especialista.",
    cta: "Tirar dúvida no WhatsApp",
    whatsappMessage: "Olá! Tenho uma dúvida sobre energia solar.",
    items: [
      {
        q: "Vou zerar minha conta de luz?",
        a: "Não totalmente. Mesmo gerando toda a energia que consome, você continua pagando a taxa mínima de disponibilidade da distribuidora e uma parte do uso da rede (Fio B), conforme a Lei 14.300. Na prática, a redução costuma ficar entre 80% e 90% da conta.",
      },
      {
        q: "O sistema funciona em dias nublados ou à noite?",
        a: "Em dias nublados a geração diminui, mas não para. À noite você usa a energia da rede, compensada pelos créditos que o sistema gerou durante o dia. O dimensionamento já considera a média de sol do ano inteiro.",
      },
      {
        q: "Quanto tempo leva da proposta até a usina gerando?",
        a: "A instalação de um sistema residencial costuma levar poucos dias. O prazo total depende principalmente da aprovação da distribuidora, e nós acompanhamos todo o processo de homologação por você.",
      },
      {
        q: "Precisa de manutenção?",
        a: "Pouca. O principal cuidado é a limpeza periódica dos módulos, que varia conforme a poeira da região. O monitoramento avisa se a geração cair abaixo do esperado.",
      },
      {
        q: "Dá para financiar?",
        a: "Sim. Trabalhamos com opções de financiamento em que a parcela pode ficar próxima do valor que você economiza na conta. Os detalhes vêm na proposta.",
      },
      {
        q: "Meu telhado aguenta as placas?",
        a: "Na visita técnica avaliamos a estrutura, a inclinação e o sombreamento. Se for preciso algum reforço, ele já aparece no projeto antes de você fechar.",
      },
    ],
  },
  finalCta: {
    title: "Mande uma foto da sua conta de luz e receba um estudo gratuito.", // TODO: confirmar que o estudo é gratuito
    subtitle: "Em poucas horas você recebe o tamanho do sistema, a economia estimada e as formas de pagamento.",
    cta: "Enviar minha conta pelo WhatsApp",
    whatsappMessage: "Olá! Quero enviar minha conta de luz para receber um estudo gratuito.",
  },
  footer: {
    tagline: "Energia solar com projeto, instalação e acompanhamento no Ceará.",
    copy: "© 2026 Montezuma Solar. Todos os direitos reservados.",
    address: "Fortaleza, Ceará",
  }
};
