/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Shield, 
  Download, 
  ShieldAlert, 
  Wallet, 
  FileText, 
  Gavel, 
  Phone, 
  ArrowUp, 
  Menu, 
  X,
  MessageSquare,
  Lock,
  ChevronRight,
  Eye,
  Info,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const SecurityBanner = () => (
  <div className="w-full bg-primary text-white px-6 py-2.5 flex items-center justify-center gap-4 z-[70] relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_4s_infinite] skew-x-12"></div>
    <div className="flex items-center gap-2.5">
      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
        <Lock className="w-2.5 h-2.5 text-secondary" />
      </div>
      <span className="font-headline font-black text-[8px] md:text-[10px] tracking-[0.4em] uppercase opacity-80">
        Conexão Criptografada • AES-256
      </span>
    </div>
    <div className="hidden md:block w-px h-4 bg-white/10 mx-2"></div>
    <div className="hidden md:flex items-center gap-2.5">
      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
        <Shield className="w-2.5 h-2.5 text-secondary" />
      </div>
      <span className="font-headline font-black text-[8px] md:text-[10px] tracking-[0.4em] uppercase opacity-80">
        Protocolo de Sigilo Nível 4
      </span>
    </div>
  </div>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed left-0 w-full z-50 transition-all duration-700 ease-in-out
        ${isScrolled 
          ? 'top-0 py-3 bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)]' 
          : 'top-10 py-6 bg-transparent'}`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-secondary/30 w-full overflow-hidden">
        <motion.div 
          className="h-full bg-secondary"
          style={{ width: `${scrollProgress}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Section */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-secondary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:scale-100"></div>
            <div className="relative w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-2xl group-hover:shadow-secondary/20 transition-all duration-700">
              <Shield className="text-white w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-primary uppercase font-headline leading-none">
              GO VISA <span className="text-secondary">CORP</span>
            </span>
            <div className="flex items-center gap-2 mt-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[8px] font-black tracking-[0.4em] text-primary/40 uppercase leading-none">
                Vigilância Ativa
              </span>
            </div>
          </div>
        </div>
        
        {/* Action Section */}
        <div className="flex items-center gap-4 md:gap-10">
          <div className="hidden lg:flex flex-col items-end">
            <div className="flex items-center gap-2 text-primary/60 font-headline font-black text-[9px] uppercase tracking-[0.3em]">
              <Lock className="w-3 h-3 text-secondary" />
              <span>Ambiente Seguro</span>
            </div>
            <span className="text-[8px] font-bold text-primary/30 uppercase tracking-widest mt-1">SSL 256-BIT ENCRYPTION</span>
          </div>

          <a 
            href="#contact" 
            className="relative group px-6 md:px-10 py-3.5 md:py-4 rounded-xl font-headline font-black text-[9px] md:text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:scale-105 active:scale-95 shadow-lg hover:shadow-secondary/30"
          >
            <div className="absolute inset-0 bg-primary group-hover:bg-secondary transition-colors duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10 text-white flex items-center gap-3">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Baixar Guia Grátis</span>
              <span className="sm:hidden">Baixar</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center px-8 md:px-16 overflow-hidden pt-48 pb-24">
    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,20,48,0.03),transparent_70%)]"></div>
    
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-7"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/5 text-secondary rounded-full mb-8 border border-secondary/10">
          <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></div>
          <span className="text-[10px] font-black tracking-widest uppercase">E-book Gratuito • Guia de Sobrevivência</span>
        </div>
        <h1 className="font-headline font-extrabold text-5xl md:text-8xl text-primary leading-[0.9] tracking-tighter mb-8">
          VOCÊ PODE ESTAR <br />
          <span className="text-secondary uppercase">EM PERIGO</span>.
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl font-medium max-w-xl mb-10 leading-relaxed opacity-80">
          Muitos brasileiros nos EUA vivem em regime de escravidão moderna sem saber. Baixe o guia <span className="text-primary font-black">"A Armadilha Invisível"</span> e descubra como identificar o tráfico humano e proteger sua liberdade.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <a href="#contact" className="group relative px-10 py-6 bg-primary text-white font-headline font-black text-xs tracking-[0.3em] uppercase rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all active:scale-95 overflow-hidden">
            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="relative z-10 flex items-center gap-3">
              Baixar Guia Gratuito <Download className="w-4 h-4" />
            </span>
          </a>
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-surface-container-high">
                <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
            ))}
            <div className="h-10 px-4 rounded-full bg-surface-container-low border-2 border-white flex items-center justify-center">
              <span className="text-[10px] font-black text-primary/40">+1.2k protegidos</span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-black/5 pt-12">
          {[
            { icon: ShieldAlert, text: "Identifique Sinais" },
            { icon: Lock, text: "Sigilo Absoluto" },
            { icon: MessageSquare, text: "Apoio Jurídico" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-secondary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">{item.text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="lg:col-span-5 relative flex justify-center"
      >
        <div className="relative group">
          <div className="absolute -inset-8 bg-secondary/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative aspect-[3/4] w-[320px] md:w-[420px] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)] transform group-hover:-rotate-1 group-hover:scale-[1.02] transition-all duration-700 border border-white/20">
            <img 
              src="https://picsum.photos/seed/protection/800/1200" 
              alt="Capa do E-book A Armadilha Invisível" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
              <div className="w-16 h-1.5 bg-secondary mb-6"></div>
              <h3 className="font-headline font-black text-3xl text-white leading-tight uppercase tracking-tighter">
                A Armadilha <br />
                <span className="text-secondary">Invisível</span>
              </h3>
              <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mt-4">Edição 2024 • Gratuito</p>
            </div>
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-4 border-white z-20"
          >
            <span className="text-[10px] font-black uppercase leading-none">Baixe</span>
            <span className="text-2xl font-black leading-none">GRÁTIS</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const AwarenessGrid = () => (
  <section className="py-32 px-8 bg-surface-container-low" id="prevention">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 text-primary rounded-full mb-6 border border-primary/10">
          <ShieldAlert className="w-3 h-3" />
          <span className="text-[9px] font-black tracking-widest uppercase">Diagnóstico de Risco</span>
        </div>
        <h2 className="text-4xl md:text-6xl text-primary mb-6">
          O trabalho virou uma <span className="text-secondary">prisão sem grades?</span>
        </h2>
        <p className="text-on-surface-variant text-lg font-medium opacity-80">
          O tráfico laboral é silencioso. Se você identificar <span className="text-primary font-black">pelo menos um</span> destes sinais extraídos do nosso guia, você precisa de orientação imediata:
        </p>
      </div>
      
      <div className="bento-grid">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 lg:row-span-1 premium-card flex flex-col md:flex-row gap-8 items-center border-l-4 border-l-secondary"
        >
          <div className="w-16 h-16 bg-secondary/5 rounded-xl flex items-center justify-center shrink-0">
            <Wallet className="w-8 h-8 text-secondary" />
          </div>
          <div>
            <h3 className="text-xl font-black text-primary mb-2">Servidão por Dívida</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed opacity-70">
              Você trabalha apenas para pagar dívidas de travessia ou moradia que nunca diminuem, independentemente do quanto você produza.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-6 lg:row-span-1 premium-card flex flex-col md:flex-row gap-8 items-center border-l-4 border-l-primary"
        >
          <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-black text-primary mb-2">Retenção de Documentos</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed opacity-70">
              Seu passaporte, certidão ou visto estão em posse do empregador como forma de garantir que você não abandone o local.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-6 lg:row-span-1 premium-card flex flex-col md:flex-row gap-8 items-center border-l-4 border-l-primary"
        >
          <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
            <Gavel className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-black text-primary mb-2">Ameaças e Coerção</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed opacity-70">
              Ameaças de deportação, violência contra familiares ou denúncia às autoridades caso você tente reclamar de seus direitos.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-6 lg:row-span-1 premium-card flex flex-col md:flex-row gap-8 items-center border-l-4 border-l-secondary"
        >
          <div className="w-16 h-16 bg-secondary/5 rounded-xl flex items-center justify-center shrink-0">
            <ShieldAlert className="w-8 h-8 text-secondary" />
          </div>
          <div>
            <h3 className="text-xl font-black text-primary mb-2">Isolamento Social</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed opacity-70">
              Proibição de falar com outras pessoas, restrição de acesso ao telefone ou internet e vigilância constante.
            </p>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-20 text-center">
        <a href="#contact" className="inline-flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.3em] hover:text-secondary transition-colors group">
          Quero baixar o guia completo agora <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

const CaptureSection = () => (
  <section className="py-32 px-8 bg-white" id="contact">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-surface-container-low relative">
          <img 
            src="https://picsum.photos/seed/legal/800/1000" 
            alt="Apoio Jurídico" 
            className="w-full aspect-[4/5] object-cover grayscale brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 p-12 flex flex-col justify-end">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <p className="text-white text-xl font-bold italic leading-relaxed mb-4">
                "O conhecimento é a única chave que os exploradores não podem tirar de você."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-secondary"></div>
                <span className="text-[9px] font-black uppercase tracking-widest text-white/60">Equipe GO VISA CORP</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/5 text-secondary rounded-full mb-6 border border-secondary/10">
            <Lock className="w-3 h-3" />
            <span className="text-[9px] font-black tracking-widest uppercase">Download Seguro e Sigiloso</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-primary mb-6">
            Receba o guia <span className="text-secondary">gratuitamente</span>
          </h2>
          <p className="text-on-surface-variant text-lg font-medium opacity-80">
            Preencha os dados abaixo para receber o e-book <span className="text-primary font-black">"A Armadilha Invisível"</span> em seu e-mail ou WhatsApp. Garantimos que seus dados nunca serão compartilhados.
          </p>
        </div>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Nome ou Codinome</label>
              <input 
                className="w-full bg-surface-container-low p-5 rounded-xl outline-none font-medium border border-transparent focus:border-primary/10 transition-all" 
                placeholder="Como quer ser chamado?" 
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">WhatsApp (Opcional)</label>
              <input 
                className="w-full bg-surface-container-low p-5 rounded-xl outline-none font-medium border border-transparent focus:border-primary/10 transition-all" 
                placeholder="+1 (000) 000-0000" 
                type="tel"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">E-mail para envio</label>
            <input 
              className="w-full bg-surface-container-low p-5 rounded-xl outline-none font-medium border border-transparent focus:border-primary/10 transition-all" 
              placeholder="seuemail@exemplo.com" 
              type="email"
            />
          </div>
          
          <button className="w-full bg-primary text-white py-6 rounded-2xl font-headline font-black uppercase tracking-[0.3em] text-xs shadow-2xl hover:bg-secondary transition-all active:scale-95 flex items-center justify-center gap-4 group">
            <span>Quero o Guia de Sobrevivência</span>
            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2">
              <Shield className="w-3 h-3 text-secondary" />
              <span className="text-[9px] font-black uppercase tracking-widest text-primary/40">Dados Protegidos</span>
            </div>
            <div className="w-1 h-1 bg-primary/10 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Lock className="w-3 h-3 text-secondary" />
              <span className="text-[9px] font-black uppercase tracking-widest text-primary/40">Sigilo Absoluto</span>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-32 px-8 bg-primary text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <img 
        src="https://picsum.photos/seed/freedom/1920/1080" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-7xl mb-8 leading-tight font-headline font-black uppercase tracking-tighter">
          VOCÊ TEM O DIREITO DE <br />
          <span className="text-secondary">VIVER SEM MEDO</span>.
        </h2>
        <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto font-medium">
          Não deixe que a desinformação seja sua maior inimiga. O primeiro passo para a liberdade é o conhecimento.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#contact" className="bg-white text-primary px-12 py-6 rounded-2xl font-headline font-black uppercase tracking-[0.3em] text-xs hover:bg-secondary hover:text-white transition-all shadow-2xl active:scale-95">
            Baixar Guia Agora
          </a>
          <a href="https://wa.me/14075308780" className="bg-transparent border-2 border-white/20 text-white px-12 py-6 rounded-2xl font-headline font-black uppercase tracking-[0.3em] text-xs hover:bg-white/10 transition-all active:scale-95">
            Falar com Especialista
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-secondary text-white py-16 relative">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-white opacity-60" />
            <div className="text-xl font-black font-headline uppercase tracking-tighter">
              GO VISA <span className="opacity-40">CORP</span>
            </div>
          </div>
          <div className="flex items-center gap-4 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Conexão Criptografada</span>
          </div>
        </div>
        
        <nav className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {[
            { label: 'Guia Gratuito', href: '#contact' },
            { label: 'Diagnóstico', href: '#diagnosis' },
            { label: 'Privacidade', href: '#' },
            { label: 'Contato', href: 'https://wa.me/14075308780' }
          ].map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all hover:translate-y-[-1px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex flex-col items-end">
            <p className="text-[10px] text-white/40 font-headline font-black tracking-widest uppercase">
              © 2024 • ORLANDO, FL
            </p>
            <p className="text-[8px] text-white/20 font-black uppercase tracking-widest">
              Protecting Human Dignity
            </p>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-secondary transition-all active:scale-95 group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5">
        <p className="text-[9px] leading-relaxed text-white/30 font-bold uppercase tracking-widest text-center max-w-2xl mx-auto">
          AVISO: ESTA PÁGINA É EDUCATIVA. EM EMERGÊNCIAS NOS EUA, LIGUE 911 OU 1-888-373-7888 (LINHA NACIONAL DE TRÁFICO HUMANO).
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white overflow-x-hidden">
      <SecurityBanner />
      <Header />
      <main>
        <Hero />
        <AwarenessGrid />
        <CaptureSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
