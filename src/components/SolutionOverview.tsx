import { motion } from 'motion/react';
import { Check, ArrowRight, Shield, Layers } from 'lucide-react';

export default function SolutionOverview() {
  const handleScrollToForm = () => {
    const form = document.getElementById('contato');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="solucao" className="bg-brand-light py-25 text-white relative overflow-hidden border-b border-white/5">
      {/* Absolute vector details */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/3 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Info */}
          <div className="lg:col-span-12 xl:col-span-7 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-brand-gold"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-brand-gold uppercase">
                A SOLUÇÃO DEFINITIVA
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl text-white font-bold tracking-tight mb-6 leading-tight">
              Apresentamos a ACE — Gestão Financeira Completa para o Seu Sucesso.
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed font-light">
              A ACE foi criada para profissionais liberais, empresários e empresas inovadoras que entendem que gestão financeira eficiente não é sobre acumular dezenas de faturas e contas espalhadas — é sobre ter uma <span className="text-brand-gold font-semibold">estrutura integrada, inteligente e protegida em dólar.</span>
            </p>

            {/* Checklist of 5 Solutions */}
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5 mb-10 text-left">
              <div className="flex items-start gap-3.5">
                <div className="bg-[#C5A059]/10 text-[#C5A059] p-1 rounded-lg mt-0.5 border border-[#C5A059]/20 shrink-0">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Receber com segurança</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Conta estruturada e monitorada em reais para sua operação comercial.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="bg-[#C5A059]/10 text-[#C5A059] p-1 rounded-lg mt-0.5 border border-[#C5A059]/20 shrink-0">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Crescer em dólar</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Rentabilidade real com valorização cambial passiva (média 25% a.a.).</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="bg-[#C5A059]/10 text-[#C5A059] p-1 rounded-lg mt-0.5 border border-[#C5A059]/20 shrink-0">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Comunicar sem fronteiras</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Telefonia celular local simultânea Brasil-EUA sem surpresas na fatura.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="bg-[#C5A059]/10 text-[#C5A059] p-1 rounded-lg mt-0.5 border border-[#C5A059]/20 shrink-0">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Proteger o que é seu</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Seguro veicular abrangente com suporte imediato e serviços 24h.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:col-span-2">
                <div className="bg-[#C5A059]/10 text-[#C5A059] p-1 rounded-lg mt-0.5 border border-[#C5A059]/20 shrink-0">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Aproveitar mais</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Clube de benefícios premium e vantagens de alto nível perfeitamente coordenadas.</p>
                </div>
              </div>
            </div>

            {/* CTA action trigger */}
            <div className="flex gap-4">
              <button
                onClick={handleScrollToForm}
                className="bg-brand-gold hover:bg-[#d4b474] text-brand-primary font-bold px-6 py-4 rounded-md shadow-lg shadow-brand-gold/15 hover:shadow-brand-gold/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-[1.01] text-sm"
              >
                Quero simplificar minha gestão agora
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Slogan Box */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center items-center">
            <div className="border border-white/10 bg-brand-secondary p-8 rounded-2xl max-w-sm text-center relative w-full shadow-2xl">
              <span className="text-xs text-brand-gold/80 block mb-2 font-mono uppercase tracking-widest">
                A MANTRA DA INTEGRAÇÃO
              </span>
              
              <div className="h-10 w-[1px] bg-brand-gold/20 mx-auto mb-6" />

              {/* Major quotes */}
              <div className="font-serif italic text-2xl text-white tracking-wide space-y-2 mb-6">
                <span className="block font-medium">Uma plataforma.</span>
                <span className="block text-brand-gold font-bold">Cinco soluções.</span>
                <span className="block italic text-gray-300 font-normal">Zero fragmentação.</span>
              </div>

              <div className="h-10 w-[1px] bg-brand-gold/20 mx-auto mb-6" />

              <div className="text-center">
                <p className="text-[11px] text-gray-400 leading-relaxed uppercase tracking-wider font-mono">
                  Sua estrutura patrimonial simplificada e cuidada por especialistas.
                </p>
              </div>

              {/* Decorative premium elements */}
              <div className="absolute top-4 left-4 text-brand-gold/10">
                <Shield className="h-5 w-5" />
              </div>
              <div className="absolute bottom-4 right-4 text-brand-gold/10">
                <Layers className="h-5 w-5" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
