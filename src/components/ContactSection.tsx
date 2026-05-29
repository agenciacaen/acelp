import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Phone, Mail, Send, CheckCircle, Smartphone, Shield, User } from 'lucide-react';
import { LeadFormData } from '../types';

export default function ContactSection() {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    service: 'completa',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<LeadFormData>>({});
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [storedLeads, setStoredLeads] = useState<LeadFormData[]>([]);
  const [showAdminLeads, setShowAdminLeads] = useState(false);

  // Load from local storage for testing proof
  useEffect(() => {
    try {
      const items = localStorage.getItem('ace_captured_leads');
      if (items) {
        setStoredLeads(JSON.parse(items));
      }
    } catch (e) {
      console.error('Failed to load local leads:', e);
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error
    if (errors[name as keyof LeadFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LeadFormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Nome completo é obrigatório';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Insira um e-mail válido';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'WhatsApp ou Celular é obrigatório';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Insira um telefone corporativo válido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API storage
    setTimeout(() => {
      const updatedLeads = [...storedLeads, formData];
      setStoredLeads(updatedLeads);
      try {
        localStorage.setItem('ace_captured_leads', JSON.stringify(updatedLeads));
      } catch (err) {
        console.error('Failed to save lead:', err);
      }
      
      setIsSubmitting(false);
      setIsSubmitSuccess(true);
      
      // Reset form states
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'completa',
        message: ''
      });
    }, 1200);
  };

  const clearAdminLeads = () => {
    try {
      localStorage.removeItem('ace_captured_leads');
      setStoredLeads([]);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <section id="contato" className="bg-brand-primary py-25 text-[#E5E5E7] relative overflow-hidden border-b border-white/5">
      {/* Background blur effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.03),transparent_60%)] pointer-events-none" />
      <div className="absolute top-12 right-12 w-64 h-64 bg-brand-gold/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Seção 9 Left Copy Column */}
          <div className="lg:col-span-12 xl:col-span-6 text-left">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-brand-gold"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
                DIAGNÓSTICO GRATUITO
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight mb-6 leading-tight">
              Cada dia sem estrutura é um dia de patrimônio perdido.
            </h2>

            <div className="text-sm sm:text-base text-gray-400 space-y-4 mb-8 leading-relaxed font-light">
              <p>
                Você já sabe que a fragmentação financeira tem um custo. A questão agora é: por quanto tempo mais você vai continuar convivendo com esse desperdício invisível?
              </p>
              <p>
                A ACE está pronta para transformar sua gestão financeira com atendimento personalizado, soluções integradas de ativos e telefonia celular em duas pátrias, com uma equipe dedicada exclusivamente ao seu crescimento — no Brasil e nos Estados Unidos.
              </p>
            </div>

            {/* Direct Contact links card */}
            <div className="bg-brand-secondary border border-white/5 p-6 rounded-2xl space-y-4 max-w-lg mb-8">
              <span className="text-[10px] text-brand-gold uppercase font-mono font-bold tracking-widest block mb-1">
                PREFERE CONTATO TELEFÔNICO IMEDIATO?
              </span>

              {/* Whatsapp */}
              <a
                href="https://wa.me/5541991394324?text=Olá,%20gostaria%20de%20receber%20um%20diagnóstico%20financeiro%20gratuito%20pela%20ACE."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 hover:text-brand-gold transition-colors text-xs sm:text-sm"
              >
                <div className="h-9 w-9 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0 text-emerald-400 border border-emerald-500/10">
                  <Smartphone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-gray-500 text-[10px] block font-mono">SUPORTE WHATSAPP BR</span>
                  <span className="font-mono font-semibold text-[#E5E5E7]">+55 (41) 99139-4324</span>
                </div>
              </a>

              {/* USA Speed Call */}
              <a
                href="tel:+16573019001"
                className="flex items-center gap-3.5 hover:text-brand-gold transition-colors text-xs sm:text-sm"
              >
                <div className="h-9 w-9 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0 text-brand-gold border border-[#C5A059]/20">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-gray-500 text-[10px] block font-mono">SUPORTE TELEFÔNICO EUA</span>
                  <span className="font-mono font-semibold text-[#E5E5E7]">+1 (657) 301-9001</span>
                </div>
              </a>

              {/* Mail */}
              <a
                href="mailto:a.gestaoeconsultoria@gmail.com"
                className="flex items-center gap-3.5 hover:text-brand-gold transition-colors text-xs sm:text-sm"
              >
                <div className="h-9 w-9 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-gray-400 border border-white/5">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-gray-500 text-[10px] block font-mono">E-MAIL OFICIAL</span>
                  <span className="font-mono font-semibold text-gray-300">a.gestaoeconsultoria@gmail.com</span>
                </div>
              </a>
            </div>

            {/* Counselors names */}
            <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-405 font-mono">
              <div>
                <span className="text-white font-serif uppercase block font-bold">Andrea Nogueira</span>
                Gestora e Consultora Sênior
              </div>
              <div className="w-[1px] bg-white/5 h-8 hidden sm:block"></div>
              <div>
                <span className="text-white font-serif uppercase block font-bold">Amara Aldevania</span>
                Gestora e Consultora Sênior
              </div>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-12 xl:col-span-6 w-full relative">
            
            <div className="bg-brand-secondary p-8 rounded-2xl border border-white/10 shadow-2xl relative">
              
              {isSubmitSuccess ? (
                // Success screen
                <div className="text-center py-12 space-y-6">
                  <div className="inline-flex h-16 w-16 bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 rounded-full items-center justify-center mx-auto mb-4 animate-[bounce_1.5s_infinite]">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Solicitação Capturada!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed font-light">
                    Sua consulta gratuita e análise de dados foram capturadas corporativamente. Nossas especialistas <strong className="text-white">Andrea Nogueira</strong> ou <strong className="text-white">Amara Aldevania</strong> entrarão em contato no seu WhatsApp ou celular nas próximas 2 horas.
                  </p>
                  
                  <div className="bg-brand-light border border-white/5 rounded-xl p-4 text-left max-w-sm mx-auto">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-white/40 block mb-1">
                      O que esperar agora:
                    </span>
                    <ul className="text-xs text-gray-405 space-y-2 font-light">
                      <li>• Ligação rápida de diagnóstico estratégico (10min).</li>
                      <li>• Elaboração e envio de proposta do seu diagnóstico.</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => setIsSubmitSuccess(false)}
                    className="text-xs font-mono font-bold text-brand-gold hover:text-[#d4b474] underline uppercase tracking-widest cursor-pointer mt-4"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                // Normal Capture Form
                <form onSubmit={handleSubmit} className="space-y-4 text-left font-sans">
                  
                  <div className="mb-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      Agende sua Consultoria
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-400 font-light mt-1">
                      Preencha os dados e receba um diagnóstico exclusivo de proteção cambial.
                    </p>
                  </div>

                  {/* Input 1: name */}
                  <div>
                    <label htmlFor="form_name" className="block text-[10px] uppercase tracking-widest text-white/40 mb-1 ml-1 font-mono">
                      Nome Completo
                    </label>
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Ex: Carlos Albuquerque"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#C5A059] outline-none transition-all placeholder-white/20"
                    />
                    {errors.name && <p className="text-red-400 font-mono text-[10px] mt-1 ml-1">{errors.name}</p>}
                  </div>

                  {/* Input 2: email */}
                  <div>
                    <label htmlFor="form_email" className="block text-[10px] uppercase tracking-widest text-white/40 mb-1 ml-1 font-mono">
                      E-mail Corporativo ou Pessoal
                    </label>
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Ex: nome@empresa.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#C5A059] outline-none transition-all placeholder-white/20"
                    />
                    {errors.email && <p className="text-red-400 font-mono text-[10px] mt-1 ml-1">{errors.email}</p>}
                  </div>

                  {/* Input 3: phone */}
                  <div>
                    <label htmlFor="form_phone" className="block text-[10px] uppercase tracking-widest text-white/40 mb-1 ml-1 font-mono">
                      WhatsApp ou Celular (com ddd)
                    </label>
                    <input
                      id="form_phone"
                      type="tel"
                      name="phone"
                      placeholder="Ex: (41) 99999-9999"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#C5A059] outline-none transition-all placeholder-white/20"
                    />
                    {errors.phone && <p className="text-red-400 font-mono text-[10px] mt-1 ml-1">{errors.phone}</p>}
                  </div>

                  {/* Input 4: Service selection */}
                  <div>
                    <label htmlFor="form_service" className="block text-[10px] uppercase tracking-widest text-white/40 mb-1 ml-1 font-mono">
                      Desejo diagnóstico sobre:
                    </label>
                    <select
                      id="form_service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#C5A059] outline-none transition-all font-sans cursor-pointer [&>option]:bg-brand-secondary [&>option]:text-white"
                    >
                      <option value="completa">Gestão Financeira Integrada Completa</option>
                      <option value="conta">Conta Estruturada em Reais (BR)</option>
                      <option value="cambio">Lucratividade e Saldo em Dólar (EUA)</option>
                      <option value="telefonia">Telefonia Celular Brasil-EUA Independente</option>
                      <option value="seguros">Seguros Veiculares e de Ativos</option>
                      <option value="beneficios">Acesso ao Clube de Benefícios Exclusivos</option>
                    </select>
                  </div>

                  {/* Input 5: message */}
                  <div>
                    <label htmlFor="form_message" className="block text-[10px] uppercase tracking-widest text-white/40 mb-1 ml-1 font-mono">
                      Mensagem (Opcional)
                    </label>
                    <textarea
                      id="form_message"
                      name="message"
                      rows={3}
                      placeholder="Ex: Gostaria de alinhar rendimentos cambiais..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#C5A059] outline-none transition-all placeholder-white/20"
                    />
                  </div>

                  {/* Submission triggers */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C5A059] text-black font-bold uppercase tracking-widest py-4 rounded-lg mt-4 hover:bg-[#d4b474] transition-colors shadow-lg shadow-[#C5A059]/10 cursor-pointer text-xs sm:text-sm"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full" />
                        Aguarde...
                      </span>
                    ) : (
                      'Quero Escalar Agora'
                    )}
                  </button>

                  <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-white/35 font-mono">
                    <span className="flex items-center gap-1">
                      <Shield className="h-3.5 w-3.5 text-white/30" /> LGPD Compliant 2026
                    </span>
                    <span>Vagas limitadas para este mês</span>
                  </div>

                </form>
              )}
            </div>

            {/* TESTER ACTION MODULE: Local Leads database dashboard */}
            {storedLeads.length > 0 && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowAdminLeads(!showAdminLeads)}
                  className="font-mono text-[9px] text-gray-500 hover:text-white underline tracking-widest cursor-pointer uppercase py-1"
                >
                  {showAdminLeads ? '▲ Ocultar painel de leads para teste' : '▼ Monitorar leads recebidos para teste'}
                </button>

                {showAdminLeads && (
                  <div className="bg-brand-light border border-white/5 p-5 rounded-xl text-left mt-3">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] tracking-widest font-bold font-mono text-brand-gold">
                        PAINEL DE LEADS SALVOS (LOCAL STORAGE)
                      </span>
                      <button
                        onClick={clearAdminLeads}
                        className="text-[9px] text-red-400 hover:text-red-300 underline font-mono cursor-pointer"
                      >
                        Limpar log de leads
                      </button>
                    </div>

                    <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                      {storedLeads.map((lead, idx) => (
                        <div key={idx} className="bg-brand-secondary p-3 rounded text-[11px] font-mono border border-white/5">
                          <p><strong className="text-white">Nome:</strong> {lead.name}</p>
                          <p><strong className="text-white">E-mail:</strong> {lead.email}</p>
                          <p><strong className="text-white">Whats:</strong> {lead.phone}</p>
                          <p><strong className="text-white">Serviço:</strong> {lead.service}</p>
                          {lead.message && <p><strong className="text-white">Msg:</strong> {lead.message}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
