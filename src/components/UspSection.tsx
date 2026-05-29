import { COMPARISON_DATA } from '../data';
import { Check, X, ShieldCheck, Landmark } from 'lucide-react';

export default function UspSection() {
  return (
    <section id="diferenciais" className="bg-brand-light py-25 text-[#E5E5E7] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-gold"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
              PROPOSTA ÚNICA DE VALOR (USP)
            </span>
            <span className="w-8 h-[1px] bg-brand-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight mb-4">
            Por que a ACE é diferente de tudo que você conhece?
          </h2>
          <p className="text-sm text-gray-400 font-light">
            Compare o modelo tradicional fragmentado e desgastante contra a estrutura unificada, rentável e automatizada que só a ACE oferece.
          </p>
        </div>

        {/* COMPARISON MODULE */}
        <div className="bg-brand-secondary border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-white/10 bg-brand-primary text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-gray-400">
            <div className="md:col-span-4 p-4 text-center md:text-left flex items-center justify-center md:justify-start">
              Característica
            </div>
            <div className="md:col-span-4 p-4 text-center border-l border-white/5 text-red-400 bg-red-950/20">
              Desvantagem Fragmentada
            </div>
            <div className="md:col-span-4 p-4 text-center border-l border-white/5 text-brand-gold bg-[#C5A059]/5 flex items-center justify-center gap-1.5 font-bold">
              <Landmark className="h-4 w-4 text-brand-gold" /> ACE Gestão Financeira
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {COMPARISON_DATA.map((row, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-12 gap-0 hover:bg-white/[0.01] transition-colors text-xs sm:text-sm"
              >
                {/* Feature Label */}
                <div className="md:col-span-4 p-4 font-medium text-white flex items-center justify-center md:justify-start">
                  {row.characteristic}
                </div>

                {/* Old Fragmented */}
                <div className="md:col-span-4 p-4 text-center text-gray-400 border-l border-white/5 bg-red-950/5 flex items-center justify-center gap-2">
                  <X className="h-4 w-4 text-red-500 shrink-0" />
                  <span className="font-light">{row.fragmented.text}</span>
                </div>

                {/* ACE Integrated */}
                <div className="md:col-span-4 p-4 text-center font-medium text-white border-l border-white/5 bg-[#C5A059]/5 flex items-center justify-center gap-2">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span className="text-gray-200">{row.aab.text}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Central Closing Block with Quote */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3.5 bg-brand-secondary text-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="bg-[#C5A059]/10 text-[#C5A059] p-2 rounded-full hidden sm:block border border-[#C5A059]/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="text-left">
              <p className="font-serif text-base sm:text-lg font-light tracking-wide leading-relaxed italic text-gray-300">
                "A ACE não é apenas mais um produto financeiro no mercado. É a sua equipe particular de gestão — completa, integrada comercialmente e totalmente focada no seu sucesso."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
