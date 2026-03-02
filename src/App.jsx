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
  CheckCircle2
} from 'lucide-react';



const App = () => {
  const [lang, setLang] = useState('pt');
  const [isDark, setIsDark] = useState(true);

  const content = {
    pt: {
      nav: ['Sobre', 'Experiência', 'Stack', 'Projetos', 'Contato'],
      badge: 'MUDANDO PARA DUBLIN, IRLANDA',
      title: 'Abner Hakinnen',
      subtitle: 'Analytics Engineer',
      heroDesc: 'Transformando dados brutos em decisões estratégicas através de pipelines modernos e arquiteturas escaláveis.',
      aboutTitle: 'Sobre',
      aboutText: [
        "Analytics Engineer com experiência em ETL/ELT, modelagem de dados e soluções de BI orientadas a negócio.",
        "Especialista em transformar dados brutos em datasets confiáveis usando Python, SQL, AWS e dbt.",
        "Foco em escalabilidade, qualidade de dados e impacto mensurável nas decisões estratégicas."
      ],
      expTitle: 'Trajetória Profissional',
      eduTitle: 'Formação',
      stackTitle: 'Especialidades Técnicas',
      projectsTitle: 'Projetos em Destaque',
      impactLabel: 'Impacto de Negócio',
      ctaTitle: 'Pronto para novos desafios em Dublin.',
      ctaDesc: 'Buscando oportunidades onde dados limpos e bases fortes geram impacto real.',
      ctaButton: 'Falar com Abner',
      resumeButton: 'Ver CV Completo',
      footer: 'Construído com precisão • 2024'
    },
    en: {
      nav: ['About', 'Experience', 'Stack', 'Projects', 'Contact'],
      badge: 'RELOCATING TO DUBLIN, IRELAND',
      title: 'Abner Hakinnen',
      subtitle: 'Analytics Engineer',
      heroDesc: 'Turning raw data into strategic decisions through modern pipelines and scalable architectures.',
      aboutTitle: 'About',
      aboutText: [
        "Analytics Engineer experienced in ETL/ELT pipelines, data modeling, and business-driven BI solutions.",
        "Specialized in transforming raw data into reliable datasets using Python, SQL, AWS, and dbt.",
        "Focused on scalability, data quality, and measurable business impact."
      ],
      expTitle: 'Professional Experience',
      eduTitle: 'Education',
      stackTitle: 'Technical Specialties',
      projectsTitle: 'Featured Projects',
      impactLabel: 'Business Impact',
      ctaTitle: 'Ready for new challenges in Dublin.',
      ctaDesc: 'Seeking opportunities where clean data and strong foundations drive real growth.',
      ctaButton: 'Get in Touch',
      resumeButton: 'View Full CV',
      footer: 'Built with precision • 2024'
    }
  };

  const t = content[lang];

  const experience = [
    {
      company: "Víssimo Group",
      role: lang === 'pt' ? "Engenheiro Analítico Pleno" : "Mid-level Analyst Engineer",
      period: "2025 - Present",
      description: lang === 'pt'
        ? "Liderança técnica em pipelines ETL/ELT e orquestração com Kestra. Foco em clusterização de clientes e dashboards executivos no QuickSight."
        : "Technical leadership in ETL/ELT pipelines and Kestra orchestration. Focused on customer clustering and executive dashboards on QuickSight.",
      tags: ["Python", "Kestra", "AWS", "QuickSight", "SQL"]
    },
    {
      company: "Linx",
      role: lang === 'pt' ? "Engenheiro Analítico de Integração de Dados Pleno" : "Mid-level Data Integration Analyst Engineer",
      period: "2024 - 2025",
      description: lang === 'pt'
        ? "Redução de 40% no tempo de resposta através da automação de BI e DataOps em ambientes AWS e Databricks."
        : "40% reduction in response time through BI automation and DataOps in AWS and Databricks environments.",
      tags: ["Databricks", "SSIS", "AWS Lambda", "Power BI"]
    },
    {
      company: "AL Factory",
      role:
        lang === "pt"
          ? "Engenheiro de Software (Foco em Dados & Backend)"
          : "Software Engineer (Data & Backend Focus)",
      period: "Mar 2022 - Mar 2023",
      description:
        lang === "pt"
          ? "Desenvolvimento de APIs e serviços backend em Python com PostgreSQL e SQLite, estruturando bases de dados que viabilizaram analytics e visibilidade operacional. Construção do sistema Sucre do zero, contribuindo para aumento de 25% na retenção de usuários. Atuação em ciclos ágeis, traduzindo requisitos de negócio em soluções técnicas escaláveis e sustentáveis."
          : "Developed backend services and APIs in Python using PostgreSQL and SQLite, structuring data foundations that enabled analytics and operational visibility. Built the Sucre application from scratch, contributing to a 25% increase in user retention. Worked in agile cycles, translating business requirements into scalable and maintainable technical solutions.",
      tags: ["Python", "PostgreSQL", "APIs", "Docker", "Agile"]
    },

  ];

  const projects = [
    {
      title: "SaaS Revenue Analytics Engineering",
      desc:
        lang === "pt"
          ? "Projeto de Analytics Engineering com modelagem de receita (MRR/NRR/Churn) em dbt + Snowflake, com documentação e testes."
          : "Analytics Engineering project with revenue modeling (MRR/NRR/Churn) in dbt + Snowflake, including docs and tests.",
      impact:
        lang === "pt"
          ? "Métricas padronizadas de receita e churn para reporting consistente"
          : "Standardized revenue & churn metrics for consistent reporting",
      link: "https://github.com/abnerhkn/saas-revenue-analytics-engineering?tab=readme-ov-file#business-context",
      tags: ["dbt", "Snowflake", "SQL"]
    },
    {
      title: "Customer Clustering (K-Means)",
      desc: lang === 'pt' ? "Modelo para classificação de comportamento de compra de vinhos." : "Model for classifying wine purchasing behavior.",
      impact: lang === 'pt' ? "Otimização de campanhas de marketing" : "Marketing campaign optimization",
      link: "https://github.com/abnerhkn",
      tags: ["Python", "ML", "SQL"]
    },
    {
      title: "ANP Fuel ETL",
      desc: lang === 'pt' ? "Automação de dados públicos de combustíveis brasileiros." : "Automation of Brazilian public fuel data.",
      impact: lang === 'pt' ? "+100k registros diários" : "+100k daily records",
      link: "https://github.com/abnerhkn/anp-fuel-etl",
      tags: ["Docker", "Pandas", "ETL"]
    },
    {
      title: "Currency Exchange ETL Pipeline",
      desc:
        lang === "pt"
          ? "Pipeline ETL para ingestão e processamento de cotações de moedas com carga automatizada no BigQuery."
          : "ETL pipeline for ingesting and processing currency exchange rates with automated BigQuery loading.",
      impact:
        lang === "pt"
          ? "Automação de dados financeiros com atualização programada e modelagem analítica"
          : "Automated financial data ingestion with scheduled updates and analytical modeling",
      link: "https://github.com/abnerhkn/cotacao-moedas-etl-bigquery",
      tags: ["Python", "BigQuery", "ETL"]
    },
    {
      title: "BigTech Language Project",
      desc:
        lang === "pt"
          ? "Projeto focado em processamento e análise de linguagem para contextos de tecnologia, com estrutura orientada a dados."
          : "Language processing and analysis project applied to technology contexts, built with a data-oriented architecture.",
      impact:
        lang === "pt"
          ? "Exploração prática de NLP e modelagem aplicada"
          : "Hands-on NLP exploration and applied modeling",
      link: "https://github.com/abnerhkn/bigtech-language",
      tags: ["Python", "NLP", "Data Modeling"]
    }, {
      title: "Pagar.me Status Data Pipeline",
      desc:
        lang === "pt"
          ? "Pipeline para ingestão e processamento de status de transações via API Pagar.me, estruturando dados para análise operacional."
          : "Data pipeline ingesting transaction status data from the Pagar.me API and structuring it for operational analytics.",
      impact:
        lang === "pt"
          ? "Automação de monitoramento de pagamentos e melhoria de visibilidade operacional"
          : "Automated payment monitoring and improved operational visibility",
      link: "https://github.com/abnerhkn/pagarme-status-pipeline",
      tags: ["API", "Python", "ETL"]
    },

  ];

  const styles = {
    bg: isDark ? 'bg-[#000000]' : 'bg-[#F5F5F7]',
    text: isDark ? 'text-white' : 'text-[#1D1D1F]',
    textSec: isDark ? 'text-[#A1A1A6]' : 'text-[#6E6E73]',
    card: isDark ? 'bg-[#1C1C1E] border-[#38383A]' : 'bg-white border-[#D2D2D7]',
    accent: 'text-[#0071E3]'
  };

  return (

    <div className={`min-h-screen transition-all duration-500 font-sans selection:bg-blue-500/30 ${styles.bg} ${styles.text}`}>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-500 ${isDark ? 'bg-black/70 border-[#38383A]' : 'bg-white/70 border-[#D2D2D7]'}`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">AH<span className={styles.accent}>.</span></span>
          <div className="flex items-center gap-6">
            <div className={`hidden md:flex gap-6 text-[12px] font-semibold uppercase tracking-wider ${styles.textSec}`}>
              {t.nav.map((item, i) => (
                <a key={i} href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">{item}</a>
              ))}
            </div>
            <div className="flex items-center gap-2 pl-4 border-l border-gray-500/20">
              <button onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} className="p-2 hover:opacity-70 transition-opacity flex items-center gap-1">
                <Languages size={18} />
                <span className="text-[10px] font-bold">{lang.toUpperCase()}</span>
              </button>
              <button onClick={() => setIsDark(!isDark)} className="p-2 hover:opacity-70 transition-opacity">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center">
        <div className="relative mb-10">
          <div className={`absolute inset-0 blur-3xl rounded-full opacity-20 ${styles.accent.replace('text-', 'bg-')}`}></div>
          <img src="https://github.com/abnerhkn/portfolio/blob/main/public/profile.jpg?raw=true" alt="Abner" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/10 grayscale" />
        </div>
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold mb-6 border ${isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'}`}>
          <MapPin size={12} /> {t.badge}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{t.title}</h1>
        <p className={`text-xl md:text-2xl font-medium mb-8 ${styles.textSec}`}>{t.subtitle}</p>
        <p className={`max-w-xl text-lg mb-12 opacity-80 ${styles.textSec}`}>{t.heroDesc}</p>
        <div className="flex gap-4">
          <a href="#contato" className="px-5 py-2 bg-[#0071E3] text-white rounded-full font-bold hover:bg-[#0077ED] transition-all">
            {t.ctaButton}
          </a>
          <div className="flex items-center gap-4 px-4">
            <a href="https://linkedin.com/in/abnerhakinnen" target="_blank" className={`hover:${styles.accent} transition-colors ${styles.textSec}`}><Linkedin size={24} /></a>
            <a href="https://github.com/abnerhkn" target="_blank" className={`hover:${styles.accent} transition-colors ${styles.textSec}`}><Github size={24} /></a>
          </div>
        </div>
      </header>

      {/* About Section - Updated with provided text */}
      <section id="sobre" className={`py-24 border-y ${isDark ? 'bg-[#0A0A0A] border-[#1C1C1E]' : 'bg-[#FBFBFD] border-[#D2D2D7]'}`}>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-blue-500">{t.aboutTitle}</h3>
            <div className={`p-6 rounded-2xl border ${styles.card}`}>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500"><GraduationCap /></div>
                <div>
                  <h4 className="font-bold text-sm">BSc in Software Engineering</h4>
                  <p className="text-xs mt-1 opacity-60">UFC (2018-2024)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-1">
            {t.aboutText.map((paragraph, idx) => (
              <p key={idx} className="text-lg leading-relaxed font-small opacity-90">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experiência" className="py-24 max-w-5xl mx-auto px-6">
        <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-12 text-center ${styles.textSec}`}>{t.expTitle}</h3>
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div key={i} className={`p-8 rounded-[2rem] border transition-all hover:scale-[1.01] ${styles.card}`}>
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div>
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
              <p className={`mb-8 leading-relaxed ${styles.textSec}`}>{exp.description}</p>
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

      {/* Projects */}
      <section id="projetos" className={`py-24 ${isDark ? 'bg-[#0A0A0A]' : 'bg-[#FBFBFD]'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-blue-500">{t.projectsTitle}</h3>
              <h4 className="text-4xl font-bold">From Pipelines to Insights.</h4>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <a href={p.link} key={i} target="_blank" className={`group p-8 rounded-[2rem] border flex flex-col transition-all hover:-translate-y-2 ${styles.card}`}>
                <div className="flex justify-between mb-8">
                  <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform"><Database /></div>
                  <ArrowUpRight className="opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
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

      {/* Stack Grid */}
      <section id="stack" className="py-24 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: 'Engenharia', items: ['Python', 'SQL', 'dbt', 'Airflow', 'Snowflake'], icon: <Workflow /> },
            { title: 'Infra', items: ['AWS', 'Databricks', 'Docker', 'Kestra'], icon: <Cpu /> },
            { title: 'Analytics', items: ['Power BI', 'QuickSight', 'Looker Studio'], icon: <BarChart3 /> },
            { title: 'Data Science', items: ['Pandas', 'ML (K-means)', 'Clustering'], icon: <Layers /> },
          ].map((cat, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-6 text-blue-500">
                {cat.icon}
                <h6 className="font-bold text-sm uppercase tracking-widest">{cat.title}</h6>
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

      {/* Footer / Contact */}
      <footer id="contato" className="py-32 px-6 text-center border-t border-inherit">
        <h3 className="text-3xl md:text-5xl font-bold mb-8">{t.ctaTitle}</h3>
        <p className={`mb-12 text-lg ${styles.textSec}`}>{t.ctaDesc}</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-24">
          <a href="mailto:dev.abnerlima@gmail.com" className={`px-12 py-5 rounded-full font-bold hover:opacity-90 transition-all flex items-center gap-3 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <Mail size={18} /> dev.abnerlima@gmail.com
          </a>
        </div>
        <p className={`text-[10px] font-bold uppercase tracking-[0.6em] ${styles.textSec}`}>
          {t.footer}
        </p>
      </footer>
    </div>
  );
};

export default App;