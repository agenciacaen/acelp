import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Globe } from 'lucide-react';

export default function Hero() {
  const handleStartToday = () => {
    const contactForm = document.getElementById('contato');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-b from-brand-primary via-brand-light to-brand-primary pt-32 sm:pt-40 lg:pt-44 pb-16 flex items-center overflow-hidden">
      {/* Visual background lines & noise */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,160,89,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-gold/5 blur-3xl rounded-full pointer-events-none animate-pulse" />
      
      {/* Decorative vertical gold line */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-brand-gold/15 to-transparent pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Upper Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start bg-brand-gold/10 border border-brand-gold/35 rounded-full px-4 py-1.5 mb-6 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-gold animate-ping"></span>
              <span className="text-xs font-mono font-medium tracking-wider text-brand-gold uppercase">
                ESTRUTURA PATRIMONIAL INTEGRADA
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-semibold leading-tight tracking-tight mb-6"
            >
              Sua vida financeira está te custando dinheiro —{' '}
              <span className="text-brand-gold italic block sm:inline">
                e você provavelmente nem percebe.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8"
            >
              Conta estruturada em reais, rentabilidade em dólar, telefonia internacional, seguro veicular e benefícios exclusivos —{' '}
              <strong className="text-white font-medium">tudo em uma única gestão integrada e focada no seu crescimento.</strong>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10 items-stretch sm:items-center"
            >
              <button
                onClick={handleStartToday}
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-primary font-bold px-8 py-4 rounded-md shadow-lg shadow-brand-gold/15 hover:shadow-brand-gold/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                Quero conhecer a ACE
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <a
                href="#servicos"
                className="border border-white/20 hover:border-brand-gold/60 text-white hover:text-brand-gold font-medium px-6 py-4 rounded-md transition-all flex items-center justify-center gap-2 text-sm"
              >
                Ver as 5 soluções integradas
              </a>
            </motion.div>

            {/* Quick Proof indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-brand-secondary/40"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-brand-gold shrink-0" />
                <span className="text-xs text-gray-300 leading-tight">
                  <strong className="text-white block font-semibold">+500 profissionais</strong>
                  simplificados com a ACE
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <TrendingUp className="h-5 w-5 text-brand-gold shrink-0" />
                <span className="text-xs text-gray-300 leading-tight">
                  <strong className="text-white block font-semibold">25% a.a. médio</strong>
                  de valorização em USD
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="h-5 w-5 text-brand-gold shrink-0" />
                <span className="text-xs text-gray-300 leading-tight">
                  <strong className="text-white block font-semibold">Bipolaridade Real</strong>
                  Brasil e Estados Unidos
                </span>
              </div>
            </motion.div>

          </div>

          {/* Graphic Side Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Gold decorative border surrounding the graphic */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-gold/40 via-brand-highlight/20 to-brand-gold/10 opacity-70 blur-sm pointer-events-none" />

              {/* Central Mockup Workspace Card */}
              <div className="relative bg-brand-primary/95 border border-brand-secondary px-6 py-8 rounded-xl shadow-2xl">
                
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-secondary/60">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 tracking-wider">SECURE CONNECT ENGINE</span>
                </div>

                <div className="space-y-4">
                  {/* Account overview simulation box */}
                  <div className="bg-brand-secondary/40 p-4 rounded-lg border border-brand-secondary/60 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block mb-0.5 font-mono">SALDO INTEGRADO BR</span>
                      <span className="text-lg font-mono font-bold text-white">R$ 142.850,00</span>
                    </div>
                    <div className="h-8 py-1 px-2.5 rounded bg-brand-gold/10 text-brand-gold font-mono text-xs border border-brand-gold/20 flex items-center justify-center">
                      Ativo
                    </div>
                  </div>

                  {/* Growth chart mockup */}
                  <div className="bg-brand-secondary/40 p-4 rounded-lg border border-brand-secondary/60">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs text-brand-gold block font-mono">RESERVA PROTEGIDA EUA (USD)</span>
                        <span className="text-2xl font-mono font-bold text-white">$ 35.400</span>
                      </div>
                      <div className="text-right">
                        <span className="text-emerald-400 text-xs font-mono font-bold block">+25.4%</span>
                        <span className="text-[10px] text-gray-400 block">Médio ao Ano</span>
                      </div>
                    </div>
                    
                    {/* Visual bar graph representation */}
                    <div className="mt-4 pt-1 flex items-end justify-between gap-1 h-20">
                      <div className="bg-brand-highlight/30 hover:bg-brand-highlight/50 transition-colors w-full h-[30%] rounded-sm" title="Reais" />
                      <div className="bg-brand-highlight/30 hover:bg-brand-highlight/50 transition-colors w-full h-[35%] rounded-sm" />
                      <div className="bg-brand-highlight/30 hover:bg-brand-highlight/50 transition-colors w-full h-[40%] rounded-sm" />
                      <div className="bg-brand-gold/50 hover:bg-brand-gold/70 transition-colors w-full h-[60%] rounded-sm" title="Pró-Dólar" />
                      <div className="bg-brand-gold/70 hover:bg-brand-gold/80 transition-colors w-full h-[75%] rounded-sm" />
                      <div className="bg-brand-gold w-full h-[100%] rounded-sm" title="ACE Dólar Protegido" />
                    </div>
                    <div className="flex justify-between font-mono text-[9px] text-gray-400 mt-2">
                      <span>Ano 1</span>
                      <span>Ano 2</span>
                      <span>Valorização ACE</span>
                    </div>
                  </div>

                  {/* Other services integrations widgets */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-brand-secondary/45 p-3 rounded border border-brand-secondary/60">
                      <span className="text-[9px] text-gray-400 block mb-1 font-mono">TELEFONIA BR-EUA</span>
                      <span className="text-xs text-white font-medium flex items-center justify-between">
                        Unlimited Roaming
                        <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                      </span>
                    </div>
                    <div className="bg-brand-secondary/45 p-3 rounded border border-brand-secondary/60">
                      <span className="text-[9px] text-gray-400 block mb-1 font-mono">SEGURO VEICULAR</span>
                      <span className="text-xs text-white font-medium flex items-center justify-between">
                        Plena 24h
                        <ShieldCheck className="h-3.5 w-3.5 text-brand-gold" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secure certificate */}
                <div className="mt-5 pt-4 border-t border-brand-secondary/50 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <ShieldCheck className="h-4 w-4 text-brand-gold" />
                  <span>Criptografia de Dados Bancários de Ponta-a-Ponta</span>
                </div>
              </div>

              {/* Micro decoration */}
              <div className="absolute -bottom-6 -right-6 bg-brand-gold/10 border border-brand-gold/30 rounded-lg p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="bg-brand-gold text-brand-primary p-1.5 rounded">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block font-mono">DOLARIZAÇÃO</span>
                  <span className="text-xs text-white font-bold">25% ao Ano Protegido</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
