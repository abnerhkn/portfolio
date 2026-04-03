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
  const [lang, setLang] = useState('en');
  const [isDark, setIsDark] = useState(true);

  const content = {
    pt: {
      nav: ['Sobre', 'Experiência', 'Stack', 'Projetos', 'Contato'],
      badge: 'MUDANDO PARA DUBLIN, IRLANDA • OUT 2026',
      title: 'Abner Hakinnen',
      subtitle: 'Data Engineer | Software Engineering Background',
      heroDesc: 'Construindo pipelines de dados resilientes e arquiteturas modernas (ELT/ETL) aplicando princípios de engenharia de software para garantir escalabilidade e confiança.',
      aboutTitle: 'Sobre',
      aboutText: [
        "Engenheiro de Software de formação, migrei para a Engenharia de Dados para resolver o gap entre sistemas complexos e insights acionáveis.",
        "Especialista em construir bases de dados robustas utilizando Snowflake, dbt, Python e nuvem AWS, com foco total em Data Quality e automação.",
        "Experiência em liderar a transição de processos manuais para pipelines orquestrados e testados, garantindo uma 'Single Source of Truth' confiável."
      ],
      expTitle: 'Trajetória Profissional',
      eduTitle: 'Formação',
      stackTitle: 'Especialidades Técnicas',
      projectsTitle: 'Engenharia em Ação',
      impactLabel: 'Impacto Técnico & Negócio',
      ctaTitle: 'Pronto para impulsionar times de dados em Dublin.',
      ctaDesc: 'Buscando oportunidades em Engenharia de Dados onde código limpo e infraestrutura sólida são prioridade.',
      ctaButton: 'Entrar em contato',
      footer: 'Desenvolvido com foco em performance • 2026'
    },
    en: {
      nav: ['About', 'Experience', 'Stack', 'Projects', 'Contact'],
      badge: 'RELOCATING TO DUBLIN, IRELAND • OCT 2026',
      title: 'Abner Hakinnen',
      subtitle: 'Data Engineer | Software Engineering Background',
      heroDesc: 'Building resilient data pipelines and modern architectures (ELT/ETL) by applying software engineering principles to ensure scalability and trust.',
      aboutTitle: 'About',
      aboutText: [
        "Software Engineer by trade, I pivoted to Data Engineering to bridge the gap between complex systems and actionable insights.",
        "Specialized in building robust data foundations using Snowflake, dbt, Python, and AWS, with a core focus on Data Quality and automation.",
        "Experienced in leading the transition from manual processes to orchestrated, tested pipelines, ensuring a reliable Single Source of Truth."
      ],
      expTitle: 'Professional Experience',
      eduTitle: 'Education',
      stackTitle: 'Technical Specialties',
      projectsTitle: 'Engineering in Action',
      impactLabel: 'Technical & Business Impact',
      ctaTitle: 'Ready to drive data teams in Dublin.',
      ctaDesc: 'Seeking Data Engineering opportunities where clean code and solid infrastructure are a priority.',
      ctaButton: 'Get in Touch',
      footer: 'Built with a focus on performance • 2026'
    }
  };

  const t = content[lang];

  const experience = [
    {
      company: "Víssimo Group",
      role: lang === 'pt' ? "Engenheiro de Dados Pleno" : "Data Engineer",
      period: "2025 - Present",
      description: lang === 'pt'
        ? "Liderança técnica na arquitetura de pipelines ELT. Implementação de orquestração moderna com Kestra e modelagem de dados para suporte a decisões executivas via AWS QuickSight."
        : "Technical leadership in ELT pipeline architecture. Implementation of modern orchestration using Kestra and data modeling to support executive decision-making via AWS QuickSight.",
      tags: ["Python", "Kestra", "AWS", "Snowflake", "SQL"]
    },
    {
      company: "Linx",
      role: lang === 'pt' ? "Engenheiro de Dados (Integração)" : "Data Integration Engineer",
      period: "2024 - 2025",
      description: lang === 'pt'
        ? "Otimização de fluxos de dados em ambiente Databricks e AWS. Automação de processos de BI que resultaram em 40% de ganho de performance operacional."
        : "Optimization of data flows in Databricks and AWS environments. Automation of BI processes resulting in a 40% operational performance gain.",
      tags: ["Databricks", "PySpark", "AWS Lambda", "SQL"]
    },
    {
      company: "AL Factory",
      role: "Software Engineer",
      period: "2022 - 2023",
      description: lang === 'pt'
        ? "Desenvolvimento backend focado em performance de banco de dados (PostgreSQL). Estruturação de APIs que serviram de base para análise de retenção de usuários (aumento de 25%)."
        : "Backend development focused on database performance (PostgreSQL). Structured APIs that served as the foundation for user retention analytics (25% increase).",
      tags: ["Python", "PostgreSQL", "Docker", "API Design"]
    }
  ];

  const projects = [
    {
      title: "Modern Data Stack: SaaS Revenue",
      desc: lang === "pt"
        ? "Arquitetura completa de Analytics Engineering (MRR/Churn) usando dbt + Snowflake. Foco em testes automatizados e linhagem de dados."
        : "End-to-end Analytics Engineering architecture (MRR/Churn) using dbt + Snowflake. Focused on automated testing and data lineage.",
      impact: lang === "pt" ? "Single Source of Truth para métricas financeiras" : "Single Source of Truth for financial metrics",
      link: "https://github.com/abnerhkn/saas-revenue-analytics-engineering",
      tags: ["dbt", "Snowflake", "Data Modeling"]
    },
    {
      title: "ANP Fuel ETL Pipeline",
      desc: lang === 'pt' ? "Pipeline resiliente para processamento de dados públicos em larga escala utilizando Docker e Python." : "Resilient pipeline for large-scale public data processing using Docker and Python.",
      impact: lang === 'pt' ? "Processamento de +100k registros/dia" : "+100k records processed daily",
      link: "https://github.com/abnerhkn/anp-fuel-etl",
      tags: ["Python", "Docker", "ETL"]
    },
    {
      title: "Financial Data Ingestion (BigQuery)",
      desc: lang === 'pt' ? "Pipeline automatizado de ingestão de câmbio com carga programada e monitoramento de integridade." : "Automated currency exchange ingestion pipeline with scheduled loading and data integrity monitoring.",
      impact: lang === 'pt' ? "Disponibilidade de dados financeiros em tempo real" : "Real-time financial data availability",
      link: "https://github.com/abnerhkn/cotacao-moedas-etl-bigquery",
      tags: ["BigQuery", "Cloud Functions", "Python"]
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
    <div className={`min-h-screen transition-all duration-500 font-sans selection:bg-blue-500/30 ${styles.bg} ${styles.text}`}>
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
              <button onClick={() => setLang(lang === 'en' ? 'pt' : 'en')} className="p-2 hover:opacity-70 transition-opacity flex items-center gap-1">
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

      <header className="max-w-5xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center">
        <div className="relative mb-10">
          <div className={`absolute inset-0 blur-3xl rounded-full opacity-20 ${styles.accent.replace('text-', 'bg-')}`}></div>
          <img src={profile} alt="Abner" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/10 grayscale" />
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
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500"><GraduationCap /></div>
                <div>
                  <h4 className="font-bold text-sm">BSc in Software Engineering</h4>
                  <p className="text-xs mt-1 opacity-60">UFC (2018-2024)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
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
              <a href={p.link} key={i} target="_blank" rel="noreferrer" className={`group p-8 rounded-[2rem] border flex flex-col transition-all hover:-translate-y-2 ${styles.card}`}>
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

      <section id="stack" className="py-24 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: 'Engineering', items: ['Python', 'SQL', 'dbt', 'Airflow', 'Snowflake'], icon: <Workflow /> },
            { title: 'Infrastructure', items: ['AWS', 'Databricks', 'Docker', 'Kestra'], icon: <Cpu /> },
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
