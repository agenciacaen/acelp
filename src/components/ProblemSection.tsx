import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, Hourglass } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problema" className="bg-brand-primary py-25 relative overflow-hidden border-b border-white/5">
      {/* Subtle top decoration - sophisticated dark premium gold line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* SECTION 2 — PROBLEMA (PAS: Problem) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-28">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-red-500"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                A FRAGMENTAÇÃO OCULTA
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight mb-6">
              Você está gerenciando tudo isso…{' '}
              <span className="text-[#C5A059] block sm:inline italic font-normal">
                separado?
              </span>
            </h2>

            <div className="text-gray-350 space-y-4 mb-6 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Conta bancária em um lugar. Investimentos em outro. Seguro do carro numa corretora diferente. Plano de telefonia que cobra uma fortuna quando você viaja. E ainda assim, no final do mês, a sensação é que o dinheiro escorreu pelos dedos.
              </p>
              <p>
                Profissionais e empresários que atuam no mercado nacional e internacional enfrentam o mesmo problema todos os dias:
              </p>
            </div>

            {/* Pain Points list */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="h-5 w-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 font-bold shrink-0 mt-0.5 text-xs">🔴</span>
                <span className="text-sm text-gray-300 leading-normal">
                  <strong className="text-white hover:text-[#C5A059] transition-colors">Receitas em reais sem estrutura:</strong> Sem proteção automatizada e sem controle integrado.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-5 w-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 font-bold shrink-0 mt-0.5 text-xs">🔴</span>
                <span className="text-sm text-gray-300 leading-normal">
                  <strong className="text-white hover:text-[#C5A059] transition-colors">Patrimônio exposto a oscilações:</strong> Perdendo poder de compra para o câmbio sem que você perceba.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-5 w-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 font-bold shrink-0 mt-0.5 text-xs">🔴</span>
                <span className="text-sm text-gray-300 leading-normal">
                  <strong className="text-white hover:text-[#C5A059] transition-colors">Tarifas absurdas de telefonia e roaming:</strong> Custos injustos a cada embarque.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-5 w-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 font-bold shrink-0 mt-0.5 text-xs">🔴</span>
                <span className="text-sm text-gray-300 leading-normal">
                  <strong className="text-white hover:text-[#C5A059] transition-colors">Seguro veicular restrito:</strong> Coberturas caras com pouco respaldo prático nos imprevistos.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-5 w-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 font-bold shrink-0 mt-0.5 text-xs">🔴</span>
                <span className="text-sm text-gray-300 leading-normal">
                  <strong className="text-white hover:text-[#C5A059] transition-colors">Benefícios desconectados e esquecidos:</strong> Dispersos em programas que expiram.
                </span>
              </li>
            </ul>

            <div className="bg-red-950/20 border-l-4 border-red-500 p-4 rounded-r shadow-lg border-t border-b border-r border-white/5">
              <p className="text-xs sm:text-sm text-red-200/90 font-light italic leading-relaxed">
                "A fragmentação da sua vida financeira está te custando tempo, dinheiro e energia que você poderia investir no que realmente importa."
              </p>
            </div>
          </div>

          {/* Right Visual Column (PAS Problem Illustration) */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="bg-brand-secondary border border-white/10 p-6 sm:p-8 rounded-2xl max-w-md shadow-2xl w-full relative">
              <div className="absolute top-4 right-4 bg-red-500/10 p-2 rounded-full border border-red-500/20">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              
              <h3 className="font-serif text-lg font-bold text-white mb-6 pr-8">
                O custo real da sua estrutura atual:
              </h3>

              {/* Fragmented cards simulation */}
              <div className="space-y-4">
                <div className="bg-brand-light px-4 py-3 rounded-lg border border-white/5 shadow-sm flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-300">🏦 Banco Tradicional (BR)</span>
                  </div>
                  <span className="text-xs font-mono text-red-400 font-bold">Taxas elevadas</span>
                </div>
                <div className="bg-brand-light px-4 py-3 rounded-lg border border-white/5 shadow-sm flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-300">📉 Corretora Separada (EUA)</span>
                  </div>
                  <span className="text-xs font-mono text-red-400 font-bold">Câmbio + IOF abusivo</span>
                </div>
                <div className="bg-brand-light px-4 py-3 rounded-lg border border-white/5 shadow-sm flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-300">📱 Operadora de Telefonia</span>
                  </div>
                  <span className="text-xs font-mono text-red-400 font-bold">Roaming Extraordinário</span>
                </div>
                <div className="bg-brand-light px-4 py-3 rounded-lg border border-white/5 shadow-sm flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-300">🚗 Corretora de Seguros</span>
                  </div>
                  <span className="text-xs font-mono text-gray-400 font-medium">Burocracia de Sinistro</span>
                </div>
              </div>

              {/* Cost meter */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
                  <span>Desperdício oculto estimado</span>
                  <span className="font-bold text-red-400 font-mono text-sm">R$ 18.400 / ano</span>
                </div>
                <div className="w-full bg-brand-light h-2.5 rounded-full overflow-hidden border border-white/5">
                  <div className="bg-red-500 h-full rounded-full w-[82%] animate-pulse" />
                </div>
                <span className="text-[10px] text-gray-550 block mt-2.5 text-center font-mono">
                  Calculado baseado em inflação cambial e roaming internacional.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 — AGITAÇÃO (PAS: Agitate) */}
        <div className="border-t border-white/5 pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Visual Illustration with hourglass */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="bg-brand-secondary border border-white/10 py-8 px-6 sm:px-8 rounded-max rounded-2xl text-left text-white max-w-sm shadow-2xl relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 opacity-[0.03] pointer-events-none">
                  <Hourglass className="h-64 w-64 text-white" />
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <Hourglass className="h-5 w-5 text-brand-gold animate-spin" style={{ animationDuration: '6s' }} />
                  <span className="font-mono text-xs text-brand-gold font-bold">O TEMPO CORRE</span>
                </div>

                <p className="text-sm text-gray-350 leading-relaxed mb-6 font-light">
                  A cada dia que você posterga a reestruturação das suas receitas:
                </p>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <TrendingDown className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white font-serif tracking-wide">Vulnerabilidade Inflacionária</h4>
                      <p className="text-[11px] text-gray-400 leading-normal">O real perde em média 6.5% de poder de compra ao ano perante moedas de reserva.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Hourglass className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white font-serif tracking-wide">Desperdício Passivo de Tempo</h4>
                      <p className="text-[11px] text-gray-400 leading-normal">Você consome de 6 a 12 horas por mês consolidando faturas e fazendo conferências manuais.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Column: PAS Agitation */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[1px] bg-brand-gold"></span>
                <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
                  AGITAÇÃO DO RISCO
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight mb-6">
                E o problema piora{' '}
                <span className="text-brand-gold italic block sm:inline font-normal">
                  quando você cresce.
                </span>
              </h2>

              <div className="text-gray-355 space-y-4 mb-6 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Quanto maior a sua renda, maior a exposição ao risco. Mais dinheiro parado em reais significa mais patrimônio perdendo valor para a inflação. Mais viagens ao exterior significam mais gastos desnecessários com telefonia. Mais ativos significam mais vulnerabilidade sem um seguro à altura.
                </p>
                <p>
                  Enquanto você continua gerenciando sua comercialização e ativos na fragmentação e no improviso, o mercado global segue operando ativamente contra o seu crescimento acumulativo.
                </p>
              </div>

              {/* Bold centered agitating block quote */}
              <div className="bg-brand-secondary text-[#E5E5E7] p-6 rounded-2xl text-left shadow-xl relative border-l-4 border-brand-gold my-4 border-t border-b border-r border-white/5">
                <span className="absolute top-2 right-4 text-brand-gold font-serif text-5xl opacity-20 leading-none">“</span>
                <p className="font-serif text-base sm:text-lg italic leading-relaxed text-gray-200 pr-4">
                  "Não é falta de dinheiro que impede o crescimento financeiro dos profissionais — é a falta de uma estrutura verdadeiramente inteligente para protegê-lo e multiplicá-lo continuamente."
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
