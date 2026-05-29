import { useState } from 'react';
import { SERVICES_DATA } from '../data';
import { 
  Wallet, 
  TrendingUp, 
  Phone, 
  ShieldAlert, 
  Gift, 
  Check, 
  ArrowRight,
  ChevronRight,
  Calculator,
  TrendingDown
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Wallet: Wallet,
  TrendingUp: TrendingUp,
  Phone: Phone,
  ShieldAlert: ShieldAlert,
  Gift: Gift,
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  // Simulation states
  const [initialAmount, setInitialAmount] = useState<number>(30000);
  const [simulationYears, setSimulationYears] = useState<number>(3);

  const calculateReturn = (principal: number, years: number, rate: number) => {
    return principal * Math.pow(1 + rate, years);
  };

  const aceResult = calculateReturn(initialAmount, simulationYears, 0.25);
  const brlSavingsResult = calculateReturn(initialAmount, simulationYears, 0.06); // typical 6% return
  const typicalLoss = aceResult - brlSavingsResult;

  const handleServiceClick = (id: string) => {
    setSelectedService(selectedService === id ? null : id);
    
    // Auto-fill form
    const formServiceDropdown = document.getElementById('form_service') as HTMLSelectElement;
    if (formServiceDropdown) {
      formServiceDropdown.value = id;
    }
  };

  const handleFormScroll = () => {
    const form = document.getElementById('contato');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="servicos" className="bg-brand-light py-25 text-[#E5E5E7] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-gold"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
              PLANO MULTI-SOLUÇÕES
            </span>
            <span className="w-8 h-[1px] bg-brand-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight mb-4">
            O que está incluído na sua Gestão ACE
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl mx-auto">
            Cada serviço foi meticulosamente desenhado para eliminar a fricção entre finanças nacionais e internacionais, garantindo segurança patrimonial, valorização real e facilidade de comunicação.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 items-start text-left">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName] || Wallet;
            const isSelected = selectedService === service.id;

            return (
              <div
                key={service.id}
                className={`bg-brand-secondary rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer relative h-full overflow-hidden ${
                  isSelected 
                    ? 'border-[#C5A059] shadow-2xl shadow-[#C5A059]/5 scale-[1.01]' 
                    : 'border-white/5 hover:border-[#C5A059]/40'
                }`}
                onClick={() => handleServiceClick(service.id)}
              >
                {/* Badge if present */}
                {service.badge && (
                  <div className="absolute top-0 right-0 bg-[#C5A059] text-black text-[10px] font-bold uppercase py-1 px-3.5 rounded-bl-lg">
                    {service.badge}
                  </div>
                )}

                <div>
                  {/* Service ID / Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="bg-[#C5A059]/10 text-[#C5A059] p-3 rounded-lg border border-[#C5A059]/20">
                      <IconComponent className="h-6 w-6 text-[#C5A059]" />
                    </div>
                    <span className="text-sm font-mono font-bold text-white/30">
                      {service.number}
                    </span>
                  </div>

                  {/* Title / Headline */}
                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-brand-gold mb-3 uppercase tracking-wider">
                    {service.headline}
                  </p>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4 font-light">
                    {service.description}
                  </p>

                  {/* Benefits checklist */}
                  <div className="space-y-2 mt-4 pt-4 border-t border-white/5">
                    <span className="text-[10px] uppercase font-mono font-bold text-white/30 tracking-wider block mb-2">
                      Ganhos Reais Integrados:
                    </span>
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-[#C5A059] shrink-0" />
                        <span className="text-xs text-gray-300 font-light">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Foot indicators */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-white/50">
                  <span className="group-hover:text-white transition-colors">Selecionar interesse</span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${isSelected ? 'rotate-90 text-brand-gold' : 'text-white/30'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE ASSET: VALUATION CALCULATOR */}
        <div className="bg-brand-secondary text-white rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left border border-white/10">
          
          <div className="absolute top-0 right-0 bg-[#C5A059] text-black text-[10px] font-mono uppercase tracking-widest py-1.5 px-4 rounded-bl-lg font-bold">
            Simulador de Lucro Cambial & Valorização
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Simulation controls */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2.5 mb-4">
                <Calculator className="h-5 w-5 text-brand-gold" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Como cresce seu saldo na estrutura?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-6 leading-relaxed font-light">
                As reservas financeiras na ACE em dólar contam com uma rentabilidade valorizada historicamente em <strong className="text-brand-gold font-normal">25% ao ano</strong>. Compare as projeções de crescimento contra a poupança tradicional no Brasil que mal bate a inflação regular.
              </p>

              {/* Slider Input 1: Amount */}
              <div className="mb-5">
                <div className="flex justify-between items-center text-xs text-gray-300 font-medium mb-2">
                  <span>Patrimônio Alocado Inicial</span>
                  <span className="font-mono font-bold text-brand-gold text-sm sm:text-base">
                    {initialAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="500000"
                  step="5000"
                  value={initialAmount}
                  onChange={(e) => setInitialAmount(Number(e.target.value))}
                  className="w-full accent-brand-gold h-1.5 bg-brand-light rounded-lg appearance-none cursor-pointer border border-white/5"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                  <span>R$ 5.000</span>
                  <span>R$ 250.000</span>
                  <span>R$ 500.000</span>
                </div>
              </div>

              {/* Slider Input 2: Years */}
              <div className="mb-2">
                <div className="flex justify-between items-center text-xs text-gray-300 font-medium mb-2">
                  <span>Horizonte de Projeção</span>
                  <span className="font-mono font-bold text-brand-gold text-sm sm:text-base">
                    {simulationYears} {simulationYears === 1 ? 'Ano' : 'Anos'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={simulationYears}
                  onChange={(e) => setSimulationYears(Number(e.target.value))}
                  className="w-full accent-brand-gold h-1.5 bg-brand-light rounded-lg appearance-none cursor-pointer border border-white/5"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                  <span>1 Ano</span>
                  <span>5 Anos</span>
                  <span>10 Anos</span>
                </div>
              </div>
            </div>

            {/* Results breakdown display */}
            <div className="lg:col-span-6 bg-brand-light/90 border border-white/5 rounded-2xl p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 items-center">
              
              <div className="space-y-4">
                {/* Result 1: ACE */}
                <div className="bg-brand-primary p-4 rounded-xl border border-[#C5A059]/20">
                  <span className="text-[10px] text-[#C5A059] font-bold font-mono tracking-widest block uppercase">
                    ESTRUTURA ACE (+25% a.a. em USD)
                  </span>
                  <span className="text-xl sm:text-2xl font-mono font-bold text-white block mt-1">
                    {aceResult.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                  <span className="text-[10px] text-gray-400 block mt-1 leading-normal font-light">
                    Saldo dolarizado com reajuste automático
                  </span>
                </div>

                {/* Result 2: Savings */}
                <div className="bg-brand-secondary/40 p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] text-white/40 font-bold font-mono tracking-widest block uppercase">
                    POUPANÇA TRADICIONAL (~6% a.a.)
                  </span>
                  <span className="text-base sm:text-lg font-mono font-semibold text-white/50 block mt-1">
                    {brlSavingsResult.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                  <span className="text-[10px] text-red-400 block mt-1.5 flex items-center gap-1 font-mono">
                    <TrendingDown className="h-3 w-3 inline" /> Perde para a inflação real
                  </span>
                </div>
              </div>

              {/* Action and difference summary */}
              <div className="bg-[#C5A059]/5 border border-[#C5A059]/20 rounded-xl p-4 text-center md:text-left lg:text-center xl:text-left flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] text-[#C5A059] uppercase font-mono font-bold tracking-widest block mb-1">
                    CUSTO DA FRAGMENTAÇÃO:
                  </span>
                  <span className="text-lg sm:text-xl font-bold font-mono text-[#C5A059] block leading-tight">
                    {typicalLoss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                  <p className="text-[11px] text-gray-400 mt-2 leading-relaxed font-light">
                    Você deixa de ganhar este valor ao manter seu saldo ocioso em contas nacionais sem paridade cambial dolarizada.
                  </p>
                </div>

                <button
                  onClick={handleFormScroll}
                  className="bg-[#C5A059] hover:bg-[#d4b474] text-black font-bold w-full mt-4 py-3 rounded text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-[#C5A059]/10"
                >
                  Proteger meu capital
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>

          </div>

          <p className="text-[10px] text-gray-500 font-mono mt-4 text-center">
            *As estimativas são calculadas com rendimentos capitalizados anualmente e representam simulações financeiras ilustrativas. Os resultados anteriores não asseguram rentabilidade futura garantida.
          </p>

        </div>

      </div>
    </section>
  );
}
