import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Database,
  BarChart3,
  Layers,
  Sparkles,
  CheckCircle2,
  Car,
  Pill,
  ShieldCheck,
  Package,
  Rocket,
  ArrowRight,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TechStackAndDomains: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  // The Big 4 Tech Stacks explicitly highlighted
  const big4TechStack = [
    {
      name: 'Databricks',
      tag: 'Certified DE Professional',
      icon: Cpu,
      badgeColor: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30',
      gradientBorder: 'hover:border-red-500/60',
      glow: 'shadow-red-500/10',
      bullets: [
        'PySpark & Spark SQL distributed data pipelines',
        'Databricks Unity Catalog governance & access control',
        'Delta Lake, Delta Live Tables & streaming architecture',
        'Certified Data Engineer Professional',
      ],
      colorAccent: 'text-red-500',
    },
    {
      name: 'Microsoft Fabric',
      tag: 'DP-700 & DP-600 Certified',
      icon: Database,
      badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
      gradientBorder: 'hover:border-blue-500/60',
      glow: 'shadow-blue-500/10',
      bullets: [
        'Solution designer for 2 GA products on Fabric Marketplace',
        'Fabric Lakehouse, Dataflows Gen2 & Notebooks',
        'DirectLake high-speed semantic layer integration',
        'External Microsoft XIAD Trainer (DIAD, FAIAD, RTIAD)',
      ],
      colorAccent: 'text-blue-500',
    },
    {
      name: 'Snowflake',
      tag: 'SnowPro Advanced Data Engineer',
      icon: Layers,
      badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
      gradientBorder: 'hover:border-cyan-500/60',
      glow: 'shadow-cyan-500/10',
      bullets: [
        'SnowPro Core & SnowPro Advanced Data Engineer',
        'SnowSQL, Streams, Tasks & Snowpipe automation',
        'Virtual Warehouses optimization & performance tuning',
        'Zero-Copy Cloning & secure Data Sharing',
      ],
      colorAccent: 'text-cyan-500',
    },
    {
      name: 'Power BI',
      tag: 'Community Super User',
      icon: BarChart3,
      badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
      gradientBorder: 'hover:border-amber-500/60',
      glow: 'shadow-amber-500/10',
      bullets: [
        'Recognized Microsoft Power BI Community Super User',
        '100+ Enterprise reports with writeback & Paginated Reports',
        'Advanced DAX time intelligence & dynamic calculations',
        'Automated RLS security via Azure AD & Power Automate',
      ],
      colorAccent: 'text-amber-500',
    },
  ];

  // The 5 Domains of Experience explicitly requested by user
  const domainsList = [
    {
      id: 'pharma',
      name: 'Pharma',
      icon: Pill,
      scale: '300B+ Records',
      accent: 'text-emerald-500 dark:text-emerald-400',
      bgBadge: 'bg-emerald-500/10 border-emerald-500/30',
      description:
        'Architected Fabric & Databricks lakehouses processing 300B+ clinical, pharmaceutical, and prescription records incrementally with SCD Type 2/3 compliance.',
    },
    {
      id: 'automobile',
      name: 'Automobile',
      icon: Car,
      scale: 'Real-Time Telemetry',
      accent: 'text-blue-500 dark:text-blue-400',
      bgBadge: 'bg-blue-500/10 border-blue-500/30',
      description:
        'Engineered streaming telemetry, assembly-line sensor data pipelines, and predictive vehicle maintenance analytics with PySpark and Unity Catalog.',
    },
    {
      id: 'insurance',
      name: 'Group Captive Insurance',
      icon: ShieldCheck,
      scale: 'Multi-Source Unified',
      accent: 'text-violet-500 dark:text-violet-400',
      bgBadge: 'bg-violet-500/10 border-violet-500/30',
      description:
        'Designed Fact & Dimension schemas for shared services analytics, risk models, and fuzzy-logic address matching to reconcile policyholder records.',
    },
    {
      id: 'material-handling',
      name: 'Material Handling',
      icon: Package,
      scale: '20M+ Records & ML',
      accent: 'text-amber-500 dark:text-amber-400',
      bgBadge: 'bg-amber-500/10 border-amber-500/30',
      description:
        'Modernized enterprise TDW into a Medallion Lakehouse with 20+ Power BI reports with writeback and deployed a Python ML model for Work Order Classification.',
    },
    {
      id: 'ga-products',
      name: 'Products in GA',
      icon: Rocket,
      scale: '2 GA Software Products',
      accent: 'text-cyan-500 dark:text-cyan-400',
      bgBadge: 'bg-cyan-500/10 border-cyan-500/30',
      description:
        'Solution designer for two Generally Available enterprise products: the Azure-to-Fabric Migration Tool on Microsoft Fabric Marketplace and the KARL AI Insight Agent.',
    },
  ];

  return (
    <div className="space-y-24">
      {/* 1. Highlighted Tech Stacks Section */}
      <section id="tech-stack" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Tech Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured <span className="gradient-text-cyan">Tech Stacks</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Specialized expertise across modern distributed data ecosystems, lakehouses, and enterprise business intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {big4TechStack.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`glass-card rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 ${tech.gradientBorder} transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-800 dark:text-white shadow-sm group-hover:scale-105 transition-transform">
                        <Icon className={`w-6 h-6 ${tech.colorAccent}`} />
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${tech.badgeColor}`}>
                        {tech.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {tech.name}
                    </h3>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 mb-6">
                      {tech.bullets.map((b, i) => (
                        <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span>Ecosystem Pillar</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Production Scale</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Domains of Experience Section */}
      <section id="domains" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-600 dark:text-violet-400 text-xs font-mono font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Multi-Industry Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Domains of <span className="gradient-text-cyan">Experience</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Proven data architecture and analytics delivery across 5 core enterprise domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domainsList.map((domain, idx) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white">
                        <Icon className={`w-5 h-5 ${domain.accent}`} />
                      </div>
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border ${domain.bgBadge} ${domain.accent}`}>
                        {domain.scale}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {domain.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {domain.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                    <a
                      href="#projects"
                      className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1.5 transition-colors group/link"
                    >
                      <span>Explore {domain.name} Case Studies</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
