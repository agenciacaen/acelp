import { Landmark, Phone, Mail, ChevronRight, ShieldAlert, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#080809] border-t border-white/5 text-gray-400 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            >
              <div className="bg-brand-gold/10 p-2 rounded border border-brand-gold/30">
                <Landmark className="h-6 w-6 text-brand-gold" />
              </div>
              <div>
                <span className="font-sans font-extrabold text-lg text-white block tracking-wider leading-none">
                  ACE <span className="text-brand-gold font-serif italic text-xs font-normal">Gestão</span>
                </span>
                <span className="text-[8px] tracking-[0.25em] font-mono block text-gray-400 uppercase mt-1">
                  Financeira Integrada
                </span>
              </div>
            </button>
            
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Simplificando a gestão de receitas nacionais, oferecendo lucratividade regulamentada em moeda forte (USD), telefones integrados e coberturas estruturadas com assessoria personalizada sênior.
            </p>

            <div className="pt-2">
              <span className="text-[10px] font-mono tracking-wider font-bold text-gray-500 uppercase block mb-1">
                LIDERANÇA SÊNIOR
              </span>
              <p className="text-xs text-gray-300 font-sans">
                Andrea Nogueira · Amara Aldevania
              </p>
            </div>
          </div>

          {/* Links Quick COL */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <button
                onClick={() => scrollToSection('hero')}
                className="hover:text-brand-gold cursor-pointer flex items-center gap-1 group text-left focus:outline-none"
              >
                <ChevronRight className="h-3 w-3 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                Início
              </button>
              <button
                onClick={() => scrollToSection('solucao')}
                className="hover:text-brand-gold cursor-pointer flex items-center gap-1 group text-left focus:outline-none"
              >
                <ChevronRight className="h-3 w-3 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                Sobre a ACE
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="hover:text-brand-gold cursor-pointer flex items-center gap-1 group text-left focus:outline-none"
              >
                <ChevronRight className="h-3 w-3 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                Serviços Integrados
              </button>
              <button
                onClick={() => scrollToSection('diferenciais')}
                className="hover:text-brand-gold cursor-pointer flex items-center gap-1 group text-left focus:outline-none"
              >
                <ChevronRight className="h-3 w-3 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                Diferenciais (PUV)
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="hover:text-brand-gold cursor-pointer flex items-center gap-1 group text-left focus:outline-none"
              >
                <ChevronRight className="h-3 w-3 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                FAQ / Objeções
              </button>
            </div>
          </div>

          {/* Contato Direct COL */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Dados de Contato Integrados
            </h4>
            <div className="text-xs space-y-3">
              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-gray-300">Brasil:</span>
                  <a href="tel:+5541991394324" className="font-mono text-gray-400 hover:text-brand-gold transition-colors">
                    +55 (41) 99139-4324
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-gray-300 font-sans">Estados Unidos:</span>
                  <a href="tel:+16573019001" className="font-mono text-gray-400 hover:text-brand-gold transition-colors">
                    +1 (657) 301-9001
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-gray-300">Suporte:</span>
                  <a href="mailto:a.gestaoeconsultoria@gmail.com" className="font-mono text-gray-400 hover:text-brand-gold transition-colors block break-all">
                    a.gestaoeconsultoria@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Separator / Disclaimer */}
        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500 text-center md:text-left space-y-1">
            <p>
              © {currentYear} ACE Gestão Financeira. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-gray-600">
              ACE Gestão e Consultoria LTDA. Gestão complementar unificada para profissionais nacionais e internacionais.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-gray-500 font-mono">
            <a href="#contato" className="hover:text-brand-gold transition-colors">Política de Privacidade</a>
            <span className="text-brand-secondary hidden sm:inline">|</span>
            <span className="flex items-center gap-1 text-[10px]">
              <Shield className="h-3 w-3 text-emerald-600" /> Criptografia ativa
            </span>
          </div>
        </div>

        {/* Centered Slogan */}
        <p className="text-center text-[11px] text-gray-500 italic mt-8 border-t border-brand-secondary/30 pt-4 font-serif">
          ACE Gestão Financeira — Sua solução integrada para crescer no Brasil e no mundo.
        </p>

      </div>
    </footer>
  );
}
