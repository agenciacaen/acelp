import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionOverview from './components/SolutionOverview';
import ServicesSection from './components/ServicesSection';
import SocialProof from './components/SocialProof';
import UspSection from './components/UspSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Icons
import { MessageSquare, Landmark, PhoneCall, ShieldCheck } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-primary text-[#E5E5E7] font-sans selection:bg-brand-gold/30 selection:text-brand-primary antialiased relative">
      {/* Premium Header */}
      <Header />

      {/* Hero Section (Seção 1 - AIDA: Attention) */}
      <main>
        <Hero />

        {/* Problem Section (Seção 2 e 3 - PAS: Problem & Agitate) */}
        <ProblemSection />

        {/* Solution Section (Seção 4 - PAS: Solution & AIDA: Interest) */}
        <SolutionOverview />

        {/* Services & Dynamic Simulation (Seção 5 - Cards + Calculator) */}
        <ServicesSection />

        {/* Social Proof (Seção 6 - Social Proof & Authority) */}
        <SocialProof />

        {/* Proposta Única de Valor (Seção 7 - USP Comparison) */}
        <UspSection />

        {/* FAQ - Objection Handling (Seção 8 - FAQs) */}
        <FaqSection />

        {/* Final CTA & Capturing Form (Seção 9 - Action, FOMO, Form) */}
        <ContactSection />
      </main>

      {/* Rodapé (Seção 10 - Contacts & Responsibles) */}
      <Footer />

      {/* FLOATING ACTION TRIGGER: High-Converting WhatsApp speed link */}
      <div className="fixed bottom-6 right-6 z-40 group">
        <a
          href="https://wa.me/5541991394324?text=Olá Andrea e Amara, gostaria de agendar um diagnóstico integrado rápido com a ACE."
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all relative border border-emerald-400/20"
          aria-label="Falar no WhatsApp"
        >
          {/* Animated green wave */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 animate-ping opacity-25 duration-1000 -z-10" />
          <MessageSquare className="h-6 w-6 stroke-[2.5]" />
        </a>

        {/* Floating tooltip label */}
        <div className="absolute right-16 bottom-3 bg-brand-primary text-white border border-brand-secondary text-xs font-medium px-3.5 py-1.5 rounded-lg whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Falar com as gestoras no WhatsApp <span className="text-brand-gold ml-1 font-bold">★</span>
        </div>
      </div>
    </div>
  );
}
