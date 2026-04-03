import React, { useState } from 'react';
import profile from "./assets/profile.jpg";
import {
  Github,
  Linkedin,
  Mail,
  Database,
  MapPin,
  Cpu,
  Workflow,
  BarChart3,
  Sun,
  Moon,
  Languages,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Bot,
  Globe
} from 'lucide-react';

const App = () => {
  const [lang, setLang] = useState('en');
  const [isDark, setIsDark] = useState(true);

  const content = {
    pt: {
      nav: ['Sobre', 'Experiência', 'Stack', 'Projetos', 'Localização'],
      badge: 'BASEADO EM DUBLIN, IRLANDA',
      title: 'Abner Hakinnen',
      subtitle: 'Data Engineer | Modern Data Stack | AI & RAG',
      heroDesc: 'Transformo dados fragmentados em decisões de negócio através de infraestrutura escalável, pipelines de ELT e soluções de IA generativa.',
      aboutTitle: 'Sobre',
      aboutText: [
        "Engenheiro de Software de formação, atuo como Engenheiro de Dados com foco em construir fundações sólidas utilizando Snowflake, dbt e nuvem AWS.",
        "Tenho experiência prática em reduzir o tempo de relatórios manuais em 40% e implementar modelos de Machine Learning que contribuíram para o aumento de conversão.",
        "Trabalho na intersecção entre Engenharia de Dados e IA, desenvolvendo sistemas de RAG (Retrieval-Augmented Generation) para facilitar o acesso a informações complexas."
      ],
      expTitle: 'Trajetória Profissional',
      stackTitle: 'Conhecimentos Técnicos',
      projectsTitle: 'Engenharia & IA em Ação',
      impactLabel: 'Impacto Técnico & Negócio',
      ctaTitle: 'Vamos tomar um café em Dublin?',
      ctaDesc: 'Aberto a oportunidades em Engenharia de Dados onde código limpo e sistemas escaláveis são a prioridade.',
      ctaButton: 'Enviar E-mail',
      footer: 'Abner Hakinnen • Data Portfolio 2026',
      mapTitle: 'Onde me encontrar'
    },
    en: {
      nav: ['About', 'Experience', 'Stack', 'Projects', 'Location'],
      badge: 'BASED IN DUBLIN, IRELAND',
      title: 'Abner Hakinnen',
      subtitle: 'Data Engineer | Modern Data Stack | AI & RAG',
      heroDesc: 'I turn messy, siloed data into clear business decisions by building reliable, scalable data systems and modern AI-driven architectures.',
      aboutTitle: 'About',
      aboutText: [
        "Software Engineer by trade, working as a Data Engineer focused on building robust data foundations using Snowflake, dbt, and AWS cloud infrastructure.",
        "I have hands-on experience reducing manual reporting time by 40% and deploying ML models that supported business growth.",
        "Currently bridging the gap between Data Engineering and AI, building RAG systems to enable teams to operate on trusted data at scale."
      ],
      expTitle: 'Professional Experience',
      stackTitle: 'Technical Stack',
      projectsTitle: 'Engineering & AI in Action',
      impactLabel: 'Technical & Business Impact',
      ctaTitle: 'Let\'s connect in Dublin',
      ctaDesc: 'Seeking Data Engineering opportunities where clean code, solid infrastructure, and AI innovation are a priority.',
      ctaButton: 'Get in Touch',
      footer: 'Abner Hakinnen • Data Portfolio 2026',
      mapTitle: 'Where to find me'
    }
  };

  const t = content[lang];

  const experience = [
    {
      company: "Víssimo Group",
      role: lang === 'pt' ? "Analytics Engineer (Pleno)" : "Analytics Engineer (Mid-level)",
      period: "2025 - Present",
      description: lang === 'pt' 
        ? "Construção da infraestrutura de dados do zero. Implementação de pipelines ELT reduzindo tempo operacional em 40% e uso de K-Means para segmentação."
        : "Building data infrastructure from scratch. Implemented ELT pipelines reducing manual work by 40% and applied K-Means for segmentation.",
      tags: ["Python", "AWS", "Snowflake", "QuickSight", "dbt"]
    },
    {
      company: "Linx",
      role: lang === 'pt' ? "Analista de Integração de Dados" : "Data Integration Analyst",
      period: "2024 - 2025",
      description: lang === 'pt'
        ? "Gestão de camadas ETL para alta volumetria. Aumento de 30% na confiabilidade dos dados e automação de 15h semanais de tarefas manuais."
        : "Managing high-volume ETL layers. Increased data reliability by 30% and automated 15 hours/week of manual engineering tasks.",
      tags: ["Airflow", "SQL", "Python", "REST APIs"]
    }
  ];

  const projects = [
    {
      title: "Data Catalog RAG",
      desc: lang === "pt" ? "IA para consultar catálogos de dados usando linguagem natural." : "AI system to query data catalogs using natural language.",
      impact: lang === "pt" ? "Acesso facilitado a metadados" : "Easier access to metadata",
      link: "https://github.com/abnerhkn/data-catalog-rag",
      tags: ["Python", "RAG", "LangChain"],
      isNew: true
    },
    {
      title: "YouTube Transcript RAG",
      desc: lang === "pt" ? "Busca semântica em transcrições de vídeos para insights rápidos." : "Semantic search for video transcripts for quick insights.",
      impact: lang === "pt" ? "Recuperação de informação rápida" : "Fast information retrieval",
      link: "https://github.com/abnerhkn/yt-transcript-rag",
      tags: ["Vector DB", "LLMs"],
      isNew: true
    }
  ];

  const styles = {
    bg: isDark ? 'bg-[#000000]' : 'bg-[#F5F5F7]',
    text: isDark ? 'text-white' : 'text-[#1D1D1F]',
    textSec: isDark ? 'text-[#A1A1A6]' : 'text-[#6E6E73]',
    card: isDark ? 'bg-[#1C1C1E] border-[#38383A]' : 'bg-white border-[#D2D2D7]',
    accent: 'text-[#0071E3]'
  };

  return (
    <div className={`min-h-screen transition-all duration-500 font-sans ${styles.bg} ${styles.text}`}>
      {/* Nav */}
      <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-500 ${isDark ? 'bg-black/70 border-[#38383A]' : 'bg-white/70 border-[#D2D2D7]'}`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg">AH<span className={styles.accent}>.</span></span>
          <div className="flex items-center gap-4">
            <button onClick={() => setLang(lang === 'en' ? 'pt' : 'en')} className="p-2 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest">
              <Languages size={16} /> {lang}
            </button>
            <button onClick={() => setIsDark(!isDark)} className="p-2">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero - Fixed Centering */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center justify-center text-center">
        <div className="relative mb-8 w-fit">
          <div className="absolute inset-0 blur-3xl rounded-full opacity-20 bg-blue-500"></div>
          <img src={profile} alt="Abner" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/10" />
        </div>
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold mb-6 border ${isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'}`}>
          <MapPin size={12} /> {t.badge}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{t.title}</h1>
        <p className={`text-xl md:text-2xl font-medium mb-8 ${styles.textSec}`}>{t.subtitle}</p>
        <p className={`max-w-2xl text-lg mb-12 opacity-80 leading-relaxed ${styles.textSec}`}>{t.heroDesc}</p>
        <div className="flex gap-4">
          <a href="mailto:dev.abnerlima@gmail.com" className="px-8 py-3 bg-[#0071E3] text-white rounded-full font-bold hover:bg-[#0077ED] transition-all">
            {t.ctaButton}
          </a>
          <a href="https://linkedin.com/in/abnerhakinnen" className={`p-3 rounded-full border ${styles.card}`}><Linkedin size={20} /></a>
          <a href="https://github.com/abnerhkn" className={`p-3 rounded-full border ${styles.card}`}><Github size={20} /></a>
        </div>
      </header>

      {/* About */}
      <section className={`py-24 border-y ${isDark ? 'bg-[#0A0A0A] border-[#1C1C1E]' : 'bg-[#FBFBFD] border-[#D2D2D7]'}`}>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-left">
          <div className="md:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-blue-500">{t.aboutTitle}</h3>
            <div className={`p-6 rounded-2xl border ${styles.card} flex gap-4 items-center`}>
              <GraduationCap className="text-blue-500" />
              <div>
                <p className="font-bold text-sm text-left">BSc Software Engineering</p>
                <p className="text-[10px] opacity-60 text-left">UFC (2018-2024)</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            {t.aboutText.map((p, i) => <p key={i} className="text-lg opacity-90 leading-relaxed text-left">{p}</p>)}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <h3 className={`text-xs font-bold uppercase tracking-widest mb-12 text-center ${styles.textSec}`}>{t.expTitle}</h3>
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div key={i} className={`p-8 rounded-[2rem] border ${styles.card} text-left`}>
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <span className="text-blue-500 text-xs font-bold uppercase">{exp.company}</span>
                  <h4 className="text-2xl font-bold">{exp.role}</h4>
                </div>
                <span className={`text-sm ${styles.textSec}`}>{exp.period}</span>
              </div>
              <p className={`mb-6 ${styles.textSec}`}>{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => <span key={tag} className="px-3 py-1 rounded-full text-[10px] bg-blue-500/10 text-blue-500 font-bold">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className={`py-24 ${isDark ? 'bg-[#0A0A0A]' : 'bg-[#FBFBFD]'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-12 text-blue-500 text-left">{t.projectsTitle}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <a href={p.link} key={i} className={`p-8 rounded-[2rem] border ${styles.card} group transition-all hover:-translate-y-1 text-left`}>
                <div className="flex justify-between mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500"><Bot /></div>
                  <ArrowUpRight className="opacity-20 group-hover:opacity-100" />
                </div>
                <h5 className="text-xl font-bold mb-2">{p.title}</h5>
                <p className={`text-sm mb-6 ${styles.textSec}`}>{p.desc}</p>
                <div className="pt-4 border-t border-inherit">
                  <p className="text-[10px] font-bold text-emerald-500 uppercase">{p.impact}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-12 text-center text-blue-500">{t.mapTitle}</h3>
        <div className="rounded-[2rem] overflow-hidden h-[400px] border border-inherit relative grayscale">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76274.60410712716!2d-6.385786650393278!3d53.34448554763138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C%20Ireland!5e0!3m2!1sen!2sbr!4v1710000000000!5m2!1sen!2sbr" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
          </iframe>
          <div className="absolute bottom-6 right-6 p-4 bg-black/80 backdrop-blur-md rounded-2xl text-white text-xs font-bold flex items-center gap-2">
            <Globe size={14} className="text-blue-500"/> Dublin, Ireland
          </div>
        </div>
      </section>

      <footer className="py-24 text-center">
        <h3 className="text-4xl font-bold mb-8">{t.ctaTitle}</h3>
        <a href="mailto:dev.abnerlima@gmail.com" className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full font-bold">
          <Mail size={18} /> dev.abnerlima@gmail.com
        </a>
        <p className={`mt-20 text-[10px] font-bold uppercase tracking-[0.5em] ${styles.textSec}`}>{t.footer}</p>
      </footer>
    </div>
  );
};

export default App;
