import { Service, Testimonial, FAQItem, ComparisonRow } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'conta',
    number: '01',
    title: 'Conta Estruturada em Reais',
    headline: 'Controle total das suas receitas nacionais — com segurança real.',
    description: 'Não é só uma conta. É uma estrutura financeira robusta que organiza seus recebimentos, protege suas transações e te dá visibilidade completa para tomar decisões com clareza.',
    benefits: [
      'Gestão segura e organizada das receitas nacionais',
      'Proteção em todas as transações financeiras',
      'Visibilidade total para decisões estratégicas'
    ],
    iconName: 'Wallet'
  },
  {
    id: 'cambio',
    number: '02',
    title: 'Lucratividade em Dólar',
    headline: 'Seu dinheiro crescendo em dólar — mesmo enquanto você dorme.',
    description: 'Com a valorização média de 25% ao ano, sua reserva financeira para de ser um peso e passa a ser um ativo. A ACE rentabiliza seu saldo em dólar e protege seu patrimônio das oscilações do câmbio — a favor de você, não contra.',
    benefits: [
      'Rentabilização automática do saldo em dólar',
      'Proteção contra variações cambiais',
      'Valorização média de 25% ao ano'
    ],
    iconName: 'TrendingUp',
    badge: '★ Rentabilidade de 25% a.a.'
  },
  {
    id: 'telefonia',
    number: '03',
    title: 'Telefonia no Brasil e nos EUA',
    headline: 'Fale de onde estiver, pague o que é justo.',
    description: 'Profissionais que transitam entre Brasil e Estados Unidos sabem o custo absurdo de uma fatura de roaming. Com a ACE, você tem número local nos dois países, tarifas competitivas e suporte 24h — comunicação sem fronteiras e sem surpresas.',
    benefits: [
      'Tarifas competitivas Brasil-EUA',
      'Roaming internacional simplificado',
      'Número local em ambos os países',
      'Suporte 24 horas'
    ],
    iconName: 'Phone'
  },
  {
    id: 'seguros',
    number: '04',
    title: 'Seguro Veicular',
    headline: 'Proteção completa para o seu veículo — quando você precisar, estaremos lá.',
    description: 'Cobertura abrangente contra acidentes, roubo e danos para veículos pessoais e profissionais. E quando imprevistos acontecem, você conta com guincho, socorro mecânico e atendimento emergencial em qualquer lugar do Brasil, 24 horas por dia, 7 dias por semana.',
    benefits: [
      'Cobertura total: acidentes, roubo e danos',
      'Assistência 24h/7 dias em todo o Brasil',
      'Guincho e socorro mecânico incluso'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'beneficios',
    number: '05',
    title: 'Clube de Benefícios ACE',
    headline: 'Muito além da gestão financeira — vantagens que elevam o seu padrão.',
    description: 'Como membro ACE, você tem acesso a um ecossistema de benefícios exclusivos que valoriza cada real investido na sua gestão. Economia no dia a dia, experiências diferenciadas e serviços que ampliam o seu poder de compra e qualidade de vida.',
    benefits: [
      'Descontos exclusivos em parceiros comerciais selecionados',
      'Acesso a eventos e experiências exclusivas',
      'Serviços adicionais de alto valor agregado',
      'Benefícios integrados diretamente à sua gestão financeira'
    ],
    iconName: 'Gift'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: 'Antes eu tinha conta em banco, corretora, seguradora, plano de telefonia… tudo separado. Com a ACE, finalmente tenho controle de verdade.',
    name: 'Carlos Eduardo da Silva',
    role: 'Arquiteto de Soluções de TI',
    score: 5
  },
  {
    id: 't2',
    quote: 'A rentabilidade em dólar mudou minha perspectiva sobre onde guardar dinheiro. 25% ao ano não é teoria — é o que está na minha conta.',
    name: 'Mariana Alencar',
    role: 'Empresária de Importações',
    score: 5
  },
  {
    id: 't3',
    quote: 'Viajo frequentemente para os EUA e o plano de telefonia da ACE me economizou centenas de reais por mês. Simples assim.',
    name: 'Dr. Roberto Mendes',
    role: 'Advogado Tributarista Internacional',
    score: 5
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    characteristic: 'Contratos e contas',
    fragmented: { text: 'Várias contas, vários contratos', isPositive: false },
    aab: { text: 'Uma única plataforma integrada', isPositive: true }
  },
  {
    characteristic: 'Exposição cambial',
    fragmented: { text: 'Patrimônio exposto ao câmbio e desvalorização', isPositive: false },
    aab: { text: 'Rentabilidade em dólar c/ proteção cambial ativa', isPositive: true }
  },
  {
    characteristic: 'Roaming internacional',
    fragmented: { text: 'Roaming caro nas viagens e burocracia', isPositive: false },
    aab: { text: 'Número local simultâneo no Brasil e EUA', isPositive: true }
  },
  {
    characteristic: 'Segurança veicular',
    fragmented: { text: 'Seguro genérico, sem suporte de emergência ágil', isPositive: false },
    aab: { text: 'Cobertura completa com assistência 24h premiada', isPositive: true }
  },
  {
    characteristic: 'Aproveitamento de Benefícios',
    fragmented: { text: 'Benefícios espalhados e esquecidos no dia a dia', isPositive: false },
    aab: { text: 'Clube exclusivo integrado diretamente à sua gestão', isPositive: true }
  },
  {
    characteristic: 'Esforço de gestão',
    fragmented: { text: 'Você gerencia e integra tudo sozinho', isPositive: false },
    aab: { text: 'Nossa equipe especialista cuida de tudo por você', isPositive: true }
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Para quem é a ACE?',
    answer: 'A ACE é ideal para profissionais liberais, empreendedores e empresas — especialmente quem tem ou quer ter operações entre Brasil e Estados Unidos, ou que busca proteger e rentabilizar seu patrimônio de forma inteligente.'
  },
  {
    question: 'Preciso ser investidor experiente para aproveitar a lucratividade em dólar?',
    answer: 'Não. A ACE cuida da estrutura por você. Nossa equipe orienta cada passo para que seu saldo seja rentabilizado com segurança e de forma acessível, independente do seu nível de experiência.'
  },
  {
    question: 'Os serviços são separados ou precisam ser contratados juntos?',
    answer: 'A ACE oferece uma gestão integrada — quanto mais soluções você utiliza, maior o valor que gera. Nossa equipe faz um diagnóstico personalizado para entender o que faz mais sentido para o seu perfil.'
  },
  {
    question: 'Como funciona o atendimento?',
    answer: 'Você tem acesso a atendimento personalizado com a equipe da ACE, disponível por telefone e e-mail. Profissionais que atuam nos EUA contam com número de contato americano para facilitar a comunicação.'
  },
  {
    question: 'Quanto custa?',
    answer: 'Os planos são personalizados conforme o seu perfil e as soluções contratadas. Entre em contato para uma conversa sem compromisso e receba uma proposta sob medida.'
  }
];
