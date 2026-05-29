import { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, Shield, Users, Globe2, ArrowLeft, ArrowRight } from 'lucide-react';

export default function SocialProof() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Automatic rotation for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 7000); // 7 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="prova-social" className="bg-brand-primary py-25 text-white relative overflow-hidden border-b border-white/5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/3 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgba(255,255,255,0.01)] blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-gold"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
              AUTORIDADE E PROVA REAL
            </span>
            <span className="w-8 h-[1px] bg-brand-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight mb-4">
            Profissionais que já escolheram a ACE
          </h2>
          <p className="text-sm text-gray-400 font-light max-w-md mx-auto">
            Simplificamos a burocracia cambial, tributária e securitária para empresários e liberais focarem em seu crescimento.
          </p>
        </div>

        {/* HIGH IMPACT METRICS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-20 text-center">
          
          <div className="bg-brand-secondary border border-white/5 p-6 rounded-2xl hover:border-[#C5A059]/40 transition-colors shadow-xl">
            <div className="flex justify-center mb-3 text-brand-gold">
              <Users className="h-6 w-6" />
            </div>
            <span className="block font-mono text-2xl sm:text-3xl font-bold text-white mb-1">
              +500
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-405 font-mono">
              Clientes Ativos
            </span>
          </div>

          <div className="bg-brand-secondary border border-white/5 p-6 rounded-2xl hover:border-[#C5A059]/40 transition-colors shadow-xl">
            <div className="flex justify-center mb-3 text-brand-gold">
              <Star className="h-6 w-6" />
            </div>
            <span className="block font-mono text-2xl sm:text-3xl font-bold text-white mb-1">
              25%
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-405 font-mono">
              Valorização Média / Ano
            </span>
          </div>

          <div className="bg-brand-secondary border border-white/5 p-6 rounded-2xl hover:border-[#C5A059]/40 transition-colors shadow-xl">
            <div className="flex justify-center mb-3 text-brand-gold">
              <Globe2 className="h-6 w-6" />
            </div>
            <span className="block font-mono text-2xl sm:text-3xl font-bold text-white mb-1">
              2
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-405 font-mono">
              Países Atendidos (BR-EUA)
            </span>
          </div>

          <div className="bg-brand-secondary border border-white/5 p-6 rounded-2xl hover:border-[#C5A059]/40 transition-colors shadow-xl">
            <div className="flex justify-center mb-3 text-brand-gold">
              <Shield className="h-6 w-6" />
            </div>
            <span className="block font-mono text-2xl sm:text-3xl font-bold text-white mb-1">
              24h
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-405 font-mono">
              Atendimento e Suporte
            </span>
          </div>

        </div>

        {/* FEEDBACK SLIDER TESTIMONIALS */}
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-brand-secondary/95 border border-white/10 p-8 sm:p-12 rounded-2xl relative shadow-2xl">
            {/* Background design big comma quotes */}
            <span className="absolute top-4 left-6 text-[#C5A059]/10 font-serif text-8xl leading-none select-none">“</span>
            
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6 text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 fill-current" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <div className="h-auto transition-all duration-300">
              <blockquote className="font-serif text-base sm:text-lg md:text-xl text-gray-100 font-light leading-relaxed mb-8 italic">
                "{TESTIMONIALS_DATA[activeTestimonial].quote}"
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center gap-3.5">
                <div className="h-10 w-10 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-brand-gold font-bold">
                  {TESTIMONIALS_DATA[activeTestimonial].name.charAt(0)}
                </div>
                <div>
                  <strong className="block text-white text-sm sm:text-base font-semibold font-sans">
                    {TESTIMONIALS_DATA[activeTestimonial].name}
                  </strong>
                  <span className="text-xs text-brand-gold block font-mono font-light mt-0.5">
                    {TESTIMONIALS_DATA[activeTestimonial].role}
                  </span>
                </div>
              </div>
            </div>

            {/* Manual controls buttons */}
            <div className="flex items-center gap-3 absolute bottom-8 right-8">
              <button
                aria-label="Anterior"
                onClick={() => setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1))}
                className="bg-brand-light hover:bg-[#C5A059]/10 hover:text-[#C5A059] text-white/60 border border-white/5 px-2.5 py-2.5 rounded-lg transition-all focus:outline-none cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Avançar"
                onClick={() => setActiveTestimonial((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1))}
                className="bg-brand-light hover:bg-[#C5A059]/10 hover:text-[#C5A059] text-white/60 border border-white/5 px-2.5 py-2.5 rounded-lg transition-all focus:outline-none cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Bullet navigations */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {TESTIMONIALS_DATA.map((testimonial, idx) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveTestimonial(idx)}
                aria-label={`Show slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${activeTestimonial === idx ? 'w-8 bg-brand-gold' : 'w-2 bg-white/10 hover:bg-white/20'}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
