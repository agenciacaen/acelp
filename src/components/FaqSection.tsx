import { useState } from 'react';
import { FAQ_DATA } from '../data';
import { HelpCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Default open first

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const handleScrollToForm = () => {
    const form = document.getElementById('contato');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="faq" className="bg-brand-primary py-25 text-[#E5E5E7] border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-gold"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
              OBJEÇÕES E RESPOSTAS
            </span>
            <span className="w-8 h-[1px] bg-brand-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight mb-4">
            Dúvidas frequentes
          </h2>
          <p className="text-sm text-gray-400 font-light">
            Encontre respostas diretas para as principais dúvidas de novos parceiros e corporações que simplificam suas finanças com a ACE.
          </p>
        </div>

        {/* FAQs LIST */}
        <div className="space-y-4 mb-14 text-left">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div 
                key={idx}
                className={`bg-brand-secondary rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? 'border-[#C5A059] shadow-xl' 
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-white pr-4 flex items-center gap-3">
                    <HelpCircle className={`h-4.5 w-4.5 text-brand-gold shrink-0 transition-transform ${isOpen ? 'rotate-12' : ''}`} />
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-brand-light border border-white/5 shrink-0 transition-transform text-white/50 ${isOpen ? 'rotate-90 text-brand-gold bg-brand-gold/5' : ''}`}>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-white/5 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA Banner under FAQ */}
        <div className="bg-brand-secondary rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-white/10">
          <div className="text-left">
            <h4 className="font-serif font-bold text-base sm:text-lg text-white mb-1">
              Ficou alguma dúvida sobre o funcionamento?
            </h4>
            <p className="text-xs text-gray-400 font-light">
              Nossa equipe dedicada responde dúvidas técnicas e fornece propostas sob medida com agilidade extrema.
            </p>
          </div>
          <button
            onClick={handleScrollToForm}
            className="bg-[#C5A059] hover:bg-[#d4b474] text-black text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg cursor-pointer shrink-0 transition-colors shadow-lg shadow-[#C5A059]/10"
          >
            Falar com a ACE agora
          </button>
        </div>

        {/* Decorative badge limit message */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Vagas de diagnóstico garantidas para esta semana</span>
        </div>

      </div>
    </section>
  );
}
