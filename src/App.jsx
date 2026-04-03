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
  Globe,
  Terminal,
  Layers
} from 'lucide-react';

const App = () => {
  const [lang, setLang] = useState('en');
  const [isDark, setIsDark] = useState(true);

  const content = {
    pt: {
      nav: ['Sobre', 'Experiência', 'Stack', 'Projetos', 'Localização'],
      badge: 'BASEADO EM DUBLIN, IRLANDA',
      title: 'Abner Hakinnen',
      subtitle: 'Engenheiro de Dados | Modern Data Stack | AI & RAG',
      heroDesc: 'Transformo dados fragmentados em decisões de negócio através de infraestrutura escalável, pipelines de ELT e soluções de IA generativa.',
      aboutTitle: 'Sobre',
      aboutText: [
        "Engenheiro de Software de formação, atuo como Engenheiro de Dados focado em construir fundações sólidas utilizando Snowflake, dbt e nuvem AWS.",
        "Tenho experiência prática em reduzir o tempo de relatórios manuais em 40% e implementar modelos de Machine Learning que contribuíram para o aumento de conversão.",
        "Trabalho na intersecção entre Engenharia de Dados e IA, desenvolvendo sistemas de RAG (Retrieval-Augmented Generation) para facilitar o acesso a informações complexas."
      ],
      expTitle: 'Trajetória Profissional',
      stackTitle: 'Stack Técnica',
      projectsTitle: 'Projetos & Inovação',
      impactLabel: 'Impacto',
      ctaTitle: 'Vamos conversar em Dublin?',
      ctaDesc: 'Aberto a oportunidades onde código limpo e sistemas escaláveis são a prioridade.',
      ctaButton: 'Enviar E-mail',
      footer: 'Abner Hakinnen • Portfólio de Dados 2026',
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
      projectsTitle: 'Projects & Innovation',
      impactLabel: 'Impact',
      ctaTitle: 'Let\'s connect in Dublin',
      ctaDesc: 'Seeking Data Engineering opportunities where clean code and scalable systems are a priority.',
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
        ? "Construção da infraestrutura de dados do zero. Implementação de pipelines ELT reduzindo tempo operacional em 40% e uso de algoritmos de clusterização para segmentação de clientes."
        : "Building data infrastructure from scratch. Implemented ELT pipelines reducing manual work by 40% and applied clustering algorithms for customer segmentation.",
      tags: ["Python", "AWS", "Snowflake", "dbt", "QuickSight"]
    },
    {
      company: "Linx",
      role: lang === 'pt' ? "Analista de Integração de Dados" : "Data Integration Analyst",
      period: "2024 - 2025",
      description: lang === 'pt'
        ? "Gestão de camadas ETL para alta volumetria. Aumento de 30% na confiabilidade dos dados e automação de processos economizando 15h semanais de engenharia manual."
        : "Managing high-volume ETL layers. Increased data reliability by 30% and automated processes saving 15 hours/week of manual engineering tasks.",
      tags: ["Airflow", "SQL", "Python", "REST APIs"]
    },
    {
      company: "AL Factory",
      role: lang === 'pt' ? "Engenheiro de Software Júnior" : "Junior Software Engineer",
      period: "2022 - 2023",
      description: lang === 'pt'
        ? "Desenvolvimento full-stack de produtos ponta a ponta, com foco em persistência de dados, design de APIs robustas e comunicação em tempo real."
        : "End-to-end full-stack development, focusing on data persistence, robust API design, and real-time communication.",
      tags: ["React", "Node.js", "PostgreSQL", "WebSockets"]
    },
    {
      company: "Casa do Software",
      role: lang === 'pt' ? "Analista de Suporte Técnico (Dados)" : "Technical Support Analyst (Data)",
      period: "2020 - 2022",
      description: lang === 'pt'
        ? "Análise de logs e bancos de dados para diagnóstico de problemas complexos, melhorando a resolução de incidentes através de troubleshooting estruturado."
        : "Analyzing logs and databases to diagnose complex issues, improving incident resolution through structured troubleshooting.",
      tags: ["SQL", "Troubleshooting", "Database Analysis"]
    }
  ];

  const projects = [
    {
      title: "Data Catalog RAG",
      desc: lang === "pt" ? "Interface de IA para consultar catálogos de dados complexos via linguagem natural." : "AI interface to query complex data catalogs using natural language.",
      impact: lang === "pt" ? "Democratização de metadados" : "Metadata democratization",
      link: "https://github.com/abnerhkn/data-catalog-rag",
      tags: ["Python", "LangChain", "OpenAI"],
      isNew: true
    },
    {
      title: "YouTube Transcript RAG",
      desc: lang === "pt" ? "Busca semântica avançada em transcrições de vídeos para recuperação rápida de insights." : "Advanced semantic search across video transcripts for rapid insight retrieval.",
      impact: lang === "pt" ? "Busca inteligente de conteúdo" : "Intelligent content search",
      link: "https://github.com/abnerhkn/yt-transcript-rag",
      tags: ["Vector DB", "LLMs", "RAG"],
      isNew: true
    },
    {
      title: "SaaS Revenue Analytics",
      desc: lang === "pt" ? "Framework de Analytics Engineering para métricas de MRR e Churn." : "Analytics Engineering framework for MRR and Churn metrics.",
      impact: lang === "pt" ? "Single Source of Truth" : "Single Source of Truth",
      link: "https://github.com/abnerhkn/saas-revenue-analytics-engineering",
      tags: ["dbt", "Snowflake", "Data Quality"]
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
      
      {/* Navigation - Restored */}
      <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-500 ${isDark ? 'bg-black/70 border-[#38383A]' : 'bg-white/70 border-[#D2D2D7]'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">AH<span className={styles.accent}>.</span></span>
          <div className="flex items-center gap-8">
            <div className={`hidden md:flex gap-6 text-[10px] font-black uppercase tracking-widest ${styles.textSec}`}>
              {t.nav.map((item, i) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">{item}</a>
              ))}
            </div>
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
              <button onClick={() => setLang(lang === 'en' ? 'pt' : 'en')} className="p-2 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest">
                <Languages size={16} /> {lang}
              </button>
              <button onClick={() => setIsDark(!isDark)} className="p-2 transition-transform hover:scale-110">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Perfectly Centered */}
      <header className="max-w-4xl mx-auto px-6 pt-28 pb-32 flex flex-col items-center justify-center text-center">
        <div className="relative mb-10 flex justify-center">
          <div className="absolute inset-0 blur-3xl rounded-full opacity-25 bg-blue-600 scale-110"></div>
          <img 
            src={profile} 
            alt="Abner Profile" 
            className="relative w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-4 border-white/10 shadow-2xl" 
          />
        </div>
        
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black mb-8 border transition-colors ${isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'}`}>
          <MapPin size={12} className="animate-pulse" /> {t.badge}
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">{t.title}</h1>
        <p className={`text-xl md:text-3xl font-bold mb-10 ${styles.textSec}`}>{t.subtitle}</p>
        <p className={`max-w-2xl text-lg md:text-xl mb-12 opacity-80 leading-relaxed ${styles.textSec}`}>{t.heroDesc}</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:dev.abnerlima@gmail.com" className="px-10 py-4 bg-[#0071E3] text-white rounded-full font-bold hover:bg-[#0077ED] hover:scale-105 transition-all shadow-lg shadow-blue-500/20">
            {t.ctaButton}
          </a>
          <div className="flex gap-2">
            <a href="https://linkedin.com/in/abnerhakinnen" target="_blank" rel="noreferrer" className={`p-4 rounded-full border transition-all hover:scale-110 ${styles.card}`}>
              <Linkedin size={22} />
            </a>
            <a href="https://github.com/abnerhkn" target="_blank" rel="noreferrer" className={`p-4 rounded-full border transition-all hover:scale-110 ${styles.card}`}>
              <Github size={22} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="sobre" className={`py-32 border-y ${isDark ? 'bg-[#0A0A0A] border-[#1C1C1E]' : 'bg-[#FBFBFD] border-[#D2D2D7]'}`}>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-blue-500">{t.aboutTitle}</h3>
            <div className={`p-8 rounded-[2rem] border ${styles.card} flex flex-col gap-4 shadow-sm`}>
              <div className="p-4 bg-blue-500/10 rounded-2xl w-fit text-blue-500">
                <GraduationCap size={24} />
              </div>
              <div className="text-left">
                <p className="font-black text-sm uppercase tracking-tight">Software Engineering</p>
                <p className={`text-xs mt-1 font-bold ${styles.textSec}`}>UFC • 2018-2024</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-8">
            {t.aboutText.map((p, i) => (
              <p key={i} className="text-xl opacity-90 leading-relaxed font-medium text-left italic border-l-2 border-blue-500/20 pl-6">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - All Included */}
      <section id="experiência" className="py-32 max-w-5xl mx-auto px-6">
        <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-16 text-center ${styles.textSec}`}>{t.expTitle}</h3>
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] border transition-all hover:shadow-2xl hover:shadow-blue-500/5 ${styles.card} text-left relative overflow-hidden`}>
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-20"></div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-blue-500">
                    <Briefcase size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">{exp.company}</span>
                  </div>
                  <h4 className="text-3xl font-black tracking-tight">{exp.role}</h4>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold ${isDark ? 'bg-white/5 border-white/5' : 'bg-black/5 border-black/5'}`}>
                  <Calendar size={14} /> {exp.period}
                </div>
              </div>
              <p className={`text-lg mb-8 leading-relaxed font-medium ${styles.textSec}`}>{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-xl text-[10px] bg-blue-500/10 text-blue-500 font-black uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className={`py-32 ${isDark ? 'bg-[#0A0A0A]' : 'bg-[#FBFBFD]'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-16 text-blue-500 text-left">{t.projectsTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <a href={p.link} key={i} target="_blank" rel="noreferrer" className={`p-8 rounded-[2rem] border ${styles.card} group transition-all hover:-translate-y-2 flex flex-col text-left`}>
                <div className="flex justify-between mb-8">
                  <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                    {p.isNew ? <Bot size={24} /> : <Layers size={24} />}
                  </div>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                </div>
                {p.isNew && <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-2 italic">Active RAG project</span>}
                <h5 className="text-xl font-black mb-3 tracking-tight">{p.title}</h5>
                <p className={`text-sm mb-8 flex-grow leading-relaxed ${styles.textSec}`}>{p.desc}</p>
                <div className="pt-6 border-t border-inherit">
                  <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{t.impactLabel}: {p.impact}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a href="https://github.com/abnerhkn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:text-blue-500 transition-colors">
              <Github size={18} /> View all on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="py-32 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { title: 'Data Engine', items: ['Python', 'SQL', 'dbt', 'Airflow'], icon: <Workflow size={20}/> },
            { title: 'AI & Search', items: ['RAG', 'Vector DB', 'LangChain', 'LLMs'], icon: <Bot size={20}/> },
            { title: 'Cloud/Arch', items: ['AWS', 'Snowflake', 'Docker', 'Kestra'], icon: <Layers size={20}/> },
            { title: 'Analytics', items: ['QuickSight', 'Metabase', 'Stat Models'], icon: <BarChart3 size={20}/> },
          ].map((cat, i) => (
            <div key={i} className="text-left">
              <div className="flex items-center gap-2 mb-6 text-blue-500">
                {cat.icon}
                <h6 className="font-black text-[10px] uppercase tracking-[0.2em]">{cat.title}</h6>
              </div>
              <ul className="space-y-4">
                {cat.items.map(item => (
                  <li key={item} className={`flex items-center gap-3 text-sm font-bold ${styles.textSec}`}>
                    <CheckCircle2 size={14} className="text-blue-500/30" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section id="localização" className="py-32 max-w-5xl mx-auto px-6">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-12 text-center text-blue-500">{t.mapTitle}</h3>
        <div className="rounded-[3rem] overflow-hidden h-[450px] border border-inherit relative grayscale hover:grayscale-0 transition-all duration-1000">
          <iframe 
            src="http://googleusercontent.com/maps.google.com/5" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Dublin Location"
          ></iframe>
          <div className="absolute bottom-8 right-8 p-6 bg-black/90 backdrop-blur-xl rounded-[2rem] border border-white/10 text-white shadow-2xl">
            <p className="text-xs font-black uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
              Dublin, Ireland
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 text-center border-t border-white/5">
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-10">{t.ctaTitle}</h3>
        <p className={`mb-12 text-xl font-medium ${styles.textSec}`}>{t.ctaDesc}</p>
        <a href="mailto:dev.abnerlima@gmail.com" className={`inline-flex items-center gap-3 px-12 py-5 rounded-full font-black text-lg transition-all hover:scale-105 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
          <Mail size={22} /> dev.abnerlima@gmail.com
        </a>
        <div className="mt-32 flex flex-col items-center gap-4">
           <span className="font-black text-lg tracking-tight">AH<span className={styles.accent}>.</span></span>
           <p className={`text-[9px] font-black uppercase tracking-[0.6em] ${styles.textSec}`}>
            {t.footer}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
