import React, { useState, useEffect } from 'react';
import profile from "./assets/profile.jpg";
import {
  Github,
  Linkedin,
  Mail,
  Database,
  Code2,
  MapPin,
  ExternalLink,
  Layers,
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
      heroDesc: 'Transformo dados fragmentados em decisões de negócio através de infraestrutura escalável, pipelines de ELT e soluções de IA generativa. [cite: 20, 25]',
      aboutTitle: 'Sobre',
      aboutText: [
        "Engenheiro de Software de formação, atuo como Engenheiro de Dados com foco em construir fundações sólidas utilizando Snowflake, dbt e nuvem AWS. [cite: 17, 22, 98]",
        "Tenho experiência prática em reduzir o tempo de relatórios manuais em 40% e implementar modelos de Machine Learning que contribuíram para o aumento de conversão. [cite: 35, 40]",
        "Trabalho na intersecção entre Engenharia de Dados e IA, desenvolvendo sistemas de RAG (Retrieval-Augmented Generation) para facilitar o acesso a informações complexas. [cite: 7]"
      ],
      expTitle: 'Trajetória Profissional',
      stackTitle: 'Conhecimentos Técnicos',
      projectsTitle: 'Engenharia & IA em Ação',
      impactLabel: 'Impacto Técnico & Negócio',
      ctaTitle: 'Vamos tomar um café em Dublin?',
      ctaDesc: 'Aberto a oportunidades em Engenharia de Dados e Analytics onde código limpo e sistemas escaláveis são a prioridade. [cite: 24]',
      ctaButton: 'Enviar E-mail',
      footer: 'Abner Hakinnen • Data Portfolio 2026',
      mapTitle: 'Onde me encontrar'
    },
    en: {
      nav: ['About', 'Experience', 'Stack', 'Projects', 'Location'],
      badge: 'BASED IN DUBLIN, IRELAND',
      title: 'Abner Hakinnen',
      subtitle: 'Data Engineer | Modern Data Stack | AI & RAG',
      heroDesc: 'I turn messy, siloed data into clear business decisions by building reliable, scalable data systems and modern AI-driven architectures. [cite: 20, 25]',
      aboutTitle: 'About',
      aboutText: [
        "Software Engineer by trade, working as a Data Engineer focused on building robust data foundations using Snowflake, dbt, and AWS cloud infrastructure. [cite: 17, 22, 98]",
        "I have hands-on experience reducing manual reporting time by 40% and deploying ML models that supported business growth. [cite: 35, 40]",
        "Currently bridging the gap between Data Engineering and AI, building RAG systems to enable teams to operate on trusted data at scale. [cite: 7]"
      ],
      expTitle: 'Professional Experience',
      stackTitle: 'Technical Stack',
      projectsTitle: 'Engineering & AI in Action',
      impactLabel: 'Technical & Business Impact',
      ctaTitle: 'Let\'s connect in Dublin',
      ctaDesc: 'Seeking Data Engineering opportunities where clean code, solid infrastructure, and AI innovation are a priority. [cite: 24]',
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
        ? "Construção da infraestrutura de dados do zero. Implementação de pipelines ELT reduzindo tempo operacional em 40% e uso de K-Means para segmentação. [cite: 31, 34, 35, 40]"
        : "Building data infrastructure from scratch. Implemented ELT pipelines reducing manual work by 40% and applied K-Means for segmentation. [cite: 31, 34, 35, 40]",
      tags: ["Python", "AWS", "Snowflake", "QuickSight", "dbt"]
    },
    {
      company: "Linx",
      role: lang === 'pt' ? "Analista de Integração de Dados" : "Data Integration Analyst",
      period: "2024 - 2025",
      description: lang === 'pt'
        ? "Gestão de camadas ETL para alta volumetria. Aumento de 30% na confiabilidade dos dados e automação de 15h semanais de tarefas manuais. [cite: 43, 44, 47, 50]"
        : "Managing high-volume ETL layers. Increased data reliability by 30% and automated 15 hours/week of manual engineering tasks. [cite: 43, 44, 47, 50]",
      tags: ["Airflow", "SQL", "Python", "REST APIs"]
    },
    {
      company: "AL Factory",
      role: lang === 'pt' ? "Engenheiro de Software Júnior" : "Junior Software Engineer",
      period: "2022 - 2023",
      description: lang === 'pt'
        ? "Desenvolvimento full-stack de produtos do zero, com foco em persistência de dados, design de APIs e comunicação em tempo real. [cite: 73, 75, 76, 81]"
        : "Full-stack development of products from scratch, focusing on data persistence, API design, and real-time communication. [cite: 73, 75, 76, 81]",
      tags: ["React", "Node.js", "PostgreSQL", "Docker"]
    }
  ];

  const projects = [
    {
      title: "Data Catalog RAG",
      desc: lang === "pt"
        ? "Sistema de IA para consultar catálogos de dados usando linguagem natural. Integração de metadados com LLMs."
        : "AI system to query data catalogs using natural language. Integrating metadata with LLMs for smarter discovery.",
      impact: lang === "pt" ? "Acesso facilitado a metadados" : "Easier access to metadata",
      link: "https://github.com/abnerhkn/data-catalog-rag",
      tags: ["Python", "RAG", "LangChain", "OpenAI"],
      isNew: true
    },
    {
      title: "YouTube Transcript RAG",
      desc: lang === "pt"
        ? "Busca semântica em transcrições de vídeos, permitindo encontrar insights específicos em segundos."
        : "Semantic search for video transcripts, enabling specific insight discovery in seconds.",
      impact: lang === "pt" ? "Recuperação de informação rápida" : "Fast information retrieval",
      link: "https://github.com/abnerhkn/yt-transcript-rag",
      tags: ["Vector DB", "Python", "LLMs"],
      isNew: true
    },
    {
      title: "Modern Data Stack: SaaS Revenue",
      desc: lang === "pt"
        ? "Arquitetura de Analytics Engineering para métricas de MRR e Churn utilizando dbt e Snowflake."
        : "Analytics Engineering architecture for MRR and Churn metrics using dbt and Snowflake.",
      impact: lang === "pt" ? "Single Source of Truth financeira" : "Financial Single Source of Truth",
      link: "https://github.com/abnerhkn/saas-revenue-analytics-engineering",
      tags: ["dbt", "Snowflake", "SQL"]
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
      <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-500 ${isDark ? 'bg-black/70 border-[#38383A]' : 'bg-white/70 border-[#D2D2D7]'}`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">AH<span className={styles.accent}>.</span></span>
          <div className="flex items-center gap-6">
            <div className={`hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest ${styles.textSec}`}>
              {t.nav.map((item, i) => (
                <a key={i} href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">{item}</a>
              ))}
            </div>
            <div className="flex items-center gap-2 pl-4 border-l border-gray-500/20">
              <button onClick={() => setLang(lang === 'en' ? 'pt' : 'en')} className="p-2 hover:opacity-70 flex items-center gap-1">
                <Languages size={18} />
                <span className="text-[10px] font-bold">{lang.toUpperCase()}</span>
              </button>
              <button onClick={() => setIsDark(!isDark)} className="p-2 hover:opacity-70">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Fixed centering */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center">
        <div className="relative mb-10 mx-auto">
          <div className={`absolute inset-0 blur-3xl rounded-full opacity-20 bg-blue-500`}></div>
          <img src={profile} alt="Abner" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/10 mx-auto" />
        </div>
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold mb-6 border ${isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'}`}>
          <MapPin size={12} /> {t.badge}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{t.title}</h1>
        <p className={`text-xl md:text-2xl font-medium mb-8 ${styles.textSec}`}>{t.subtitle}</p>
        <p className={`max-w-2xl mx-auto text-lg mb-12 opacity-80 leading-relaxed ${styles.textSec}`}>{t.heroDesc}</p>
        <div className="flex justify-center gap-4">
          <a href="mailto:dev.abnerlima@gmail.com" className="px-8 py-3 bg-[#0071E3] text-white rounded-full font-bold hover:bg-[#0077ED] transition-all">
            {t.ctaButton}
          </a>
          <div className="flex items-center gap-4 px-4">
            <a href="https://linkedin.com/in/abnerhakinnen" target="_blank" rel="noreferrer" className={`hover:${styles.accent} transition-colors ${styles.textSec}`}><Linkedin size={24} /></a>
            <a href="https://github.com/abnerhkn" target="_blank" rel="noreferrer" className={`hover:${styles.accent} transition-colors ${styles.textSec}`}><Github size={24} /></a>
          </div>
        </div>
      </header>

      <section id="sobre" className={`py-24 border-y ${isDark ? 'bg-[#0A0A0A] border-[#1C1C1E]' : 'bg-[#FBFBFD] border-[#D2D2D7]'}`}>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-blue-500">{t.aboutTitle}</h3>
            <div className={`p-6 rounded-2xl border ${styles.card}`}>
              <div className="flex gap-4 items-start text-left">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500"><GraduationCap /></div>
                <div>
                  <h4 className="font-bold text-sm">BSc Software Engineering [cite: 98]</h4>
                  <p className="text-xs mt-1 opacity-60">UFC (2018-2024) [cite: 99]</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6 text-left">
            {t.aboutText.map((paragraph, idx) => (
              <p key={idx} className="text-lg leading-relaxed opacity-90">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="experiência" className="py-24 max-w-5xl mx-auto px-6">
        <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-12 text-center ${styles.textSec}`}>{t.expTitle}</h3>
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div key={i} className={`p-8 rounded-[2rem] border transition-all ${styles.card}`}>
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div className="text-left">
                  <div className="flex items-center gap-2 text-blue-500 mb-1">
                    <Briefcase size={16} />
                    <span className="text-sm font-bold uppercase tracking-wider">{exp.company}</span>
                  </div>
                  <h4 className="text-2xl font-bold">{exp.role}</h4>
                </div>
                <div className={`flex items-center gap-2 text-sm font-medium ${styles.textSec}`}>
                  <Calendar size={14} /> {exp.period}
                </div>
              </div>
              <p className={`mb-8 leading-relaxed text-left ${styles.textSec}`}>{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${isDark ? 'bg-white/5 text-white/50' : 'bg-black/5 text-black/50'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projetos" className={`py-24 ${isDark ? 'bg-[#0A0A0A]' : 'bg-[#FBFBFD]'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div className="text-left">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-blue-500">{t.projectsTitle}</h3>
              <h4 className="text-4xl font-bold leading-tight">Data Pipelines <br/> & GenAI Solutions.</h4>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <a href={p.link} key={i} target="_blank" rel="noreferrer" className={`group p-8 rounded-[2rem] border flex flex-col transition-all hover:-translate-y-2 text-left ${styles.card}`}>
                <div className="flex justify-between mb-8">
                  <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                    {p.isNew ? <Bot /> : <Database />}
                  </div>
                  <ArrowUpRight className="opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                {p.isNew && <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-2 italic">New: RAG Project</span>}
                <h5 className="text-lg font-bold mb-3">{p.title}</h5>
                <p className={`text-sm mb-8 flex-grow ${styles.textSec}`}>{p.desc}</p>
                <div className="pt-6 border-t border-inherit">
                  <span className="text-[10px] font-bold uppercase tracking-widest block mb-1 opacity-40">{t.impactLabel}</span>
                  <p className="text-xs font-bold text-emerald-500">{p.impact}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="py-24 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left">
          {[
            { title: 'Data Eng', items: ['Python', 'SQL', 'dbt', 'Airflow', 'Snowflake'], icon: <Workflow size={20}/> },
            { title: 'IA / RAG', items: ['LangChain', 'OpenAI', 'Vector DBs', 'RAG'], icon: <Bot size={20}/> },
            { title: 'Infrastructure', items: ['AWS', 'Databricks', 'Docker', 'Kestra'], icon: <Cpu size={20}/> },
            { title: 'Analytics', items: ['QuickSight', 'Power BI', 'Machine Learning'], icon: <BarChart3 size={20}/> },
          ].map((cat, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-6 text-blue-500">
                {cat.icon}
                <h6 className="font-bold text-xs uppercase tracking-widest">{cat.title}</h6>
              </div>
              <ul className="space-y-3">
                {cat.items.map(item => (
                  <li key={item} className={`flex items-center gap-2 text-sm font-medium ${styles.textSec}`}>
                    <CheckCircle2 size={14} className="text-blue-500/40" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="localização" className={`py-24 border-t ${isDark ? 'bg-[#000000] border-[#1C1C1E]' : 'bg-[#F5F5F7] border-[#D2D2D7]'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-12 text-center text-blue-500">{t.mapTitle}</h3>
          <div className="rounded-[2.5rem] overflow-hidden border border-inherit h-[400px] relative grayscale contrast-125">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152509.30810755916!2d-6.42594639912762!3d53.34830155057059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C%20Ireland!5e0!3m2!1sen!2sbr!4v1711200000000!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="absolute bottom-6 right-6 p-4 bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 text-white">
              <p className="text-xs font-bold flex items-center gap-2">
                <Globe size={14} className="text-blue-500"/> Dublin, Ireland [cite: 18, 24]
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 px-6 text-center">
        <h3 className="text-3xl md:text-5xl font-bold mb-8">{t.ctaTitle}</h3>
        <p className={`mb-12 text-lg ${styles.textSec}`}>{t.ctaDesc}</p>
        <a href="mailto:dev.abnerlima@gmail.com" className={`inline-flex items-center gap-3 px-12 py-5 rounded-full font-bold hover:opacity-90 transition-all ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
          <Mail size={18} /> dev.abnerlima@gmail.com [cite: 2]
        </a>
        <p className={`mt-24 text-[10px] font-bold uppercase tracking-[0.6em] ${styles.textSec}`}>
          {t.footer}
        </p>
      </footer>
    </div>
  );
};

export default App;
