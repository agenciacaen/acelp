import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Menu, X, Landmark, PhoneCall } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-primary/95 backdrop-blur-md shadow-lg border-b border-brand-secondary/40 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="bg-brand-gold/10 p-2 rounded border border-brand-gold/30 group-hover:border-brand-gold/80 transition-colors">
              <Landmark className="h-6 w-6 text-brand-gold" />
            </div>
            <div>
              <span className="font-sans font-extrabold text-xl tracking-wider text-white flex items-center gap-1">
                ACE <span className="text-brand-gold text-xs font-normal font-serif italic">Gestão</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] font-mono block text-gray-300 leading-none uppercase">
                Financeira Integrada
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('problema')}
              className="text-sm font-medium text-gray-300 hover:text-brand-gold cursor-pointer transition-colors focus:outline-none"
            >
              O Problema
            </button>
            <button
              onClick={() => scrollToSection('solucao')}
              className="text-sm font-medium text-gray-300 hover:text-brand-gold cursor-pointer transition-colors focus:outline-none"
            >
              Sobre a ACE
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-sm font-medium text-gray-300 hover:text-brand-gold cursor-pointer transition-colors focus:outline-none"
            >
              Nossos Serviços
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="text-sm font-medium text-gray-300 hover:text-brand-gold cursor-pointer transition-colors focus:outline-none"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium text-gray-300 hover:text-brand-gold cursor-pointer transition-colors focus:outline-none"
            >
              FAQ
            </button>
          </nav>

          {/* CTAs and Active Indicators */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5541991394324?text=Olá,%20gostaria%20de%20receber%20um%20diagnóstico%20financeiro%20gratuito%20pela%20ACE."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-gray-300 hover:text-white transition-colors"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Fale Conosco
            </a>

            <button
              onClick={() => scrollToSection('contato')}
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-primary font-bold text-xs font-sans tracking-wide uppercase px-5 py-2.5 rounded shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/20 transition-all cursor-pointer"
            >
              Consulta Gratuita
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-brand-gold text-brand-primary text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-2 rounded"
            >
              Contato
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-brand-gold focus:outline-none p-1 bg-brand-secondary/30 rounded border border-brand-secondary"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-0 w-full bg-brand-primary border-b border-brand-secondary/80 z-40 lg:hidden shadow-2xl px-6 py-6 flex flex-col gap-5"
          >
            <button
              onClick={() => scrollToSection('problema')}
              className="text-left py-2 border-b border-brand-secondary/40 text-gray-300 hover:text-brand-gold font-medium w-full focus:outline-none"
            >
              O Problema
            </button>
            <button
              onClick={() => scrollToSection('solucao')}
              className="text-left py-2 border-b border-brand-secondary/40 text-gray-300 hover:text-brand-gold font-medium w-full focus:outline-none"
            >
              Sobre a ACE
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-left py-2 border-b border-brand-secondary/40 text-gray-300 hover:text-brand-gold font-medium w-full focus:outline-none"
            >
              Nossos Serviços
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="text-left py-2 border-b border-brand-secondary/40 text-gray-300 hover:text-brand-gold font-medium w-full focus:outline-none"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left py-2 border-b border-brand-secondary/40 text-gray-300 hover:text-brand-gold font-medium w-full focus:outline-none"
            >
              FAQ
            </button>
            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={() => scrollToSection('contato')}
                className="w-full text-center bg-brand-gold text-brand-primary py-3 rounded-lg font-bold text-sm tracking-wide uppercase shadow-lg shadow-brand-gold/10"
              >
                Agendar Consulta Gratuita
              </button>
              <div className="flex justify-between items-center px-2 py-1 text-xs text-gray-400">
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Atendimento Brasil</span>
                <span className="font-mono text-[10px]">+55 41 99139-4324</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
