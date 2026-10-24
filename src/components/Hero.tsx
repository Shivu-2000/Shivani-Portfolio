import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, ShieldCheck, Sparkles, ChevronDown, Database, Cpu, BarChart3 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';

export const Hero: React.FC = () => {
  const { stats } = PORTFOLIO_DATA;

  return (
    <section id="about" className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-center lg:text-left space-y-5"
          >
            {/* Top Designation & Affiliation Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                Data Engineer & Analyst
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                Kanerika Inc. • 2+ Years Experience
              </span>
            </div>

            {/* Refined Professional Headline (Balanced, Not Oversized) */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                Data Engineer & Analyst
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-600 dark:text-slate-300 leading-snug">
                Architecting <span className="gradient-text-cyan font-bold">Enterprise Lakehouses</span> & Advanced Analytics
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Delivering high-throughput data pipelines and enterprise analytics processing <strong className="text-slate-900 dark:text-white font-semibold">300B+ records</strong> across{' '}
              <span className="text-cyan-700 dark:text-cyan-300 font-medium">Pharma</span>,{' '}
              <span className="text-blue-700 dark:text-blue-300 font-medium">Automobile</span>,{' '}
              <span className="text-violet-700 dark:text-violet-300 font-medium">Group Captive Insurance</span>,{' '}
              <span className="text-amber-700 dark:text-amber-300 font-medium">Material Handling</span>, and{' '}
              <span className="text-emerald-700 dark:text-emerald-300 font-medium">Products in GA</span>.
            </p>

            {/* Highlighted Big 4 Tech Stack Pills */}
            <div className="pt-0.5">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Core Stack Focus:
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="px-3 py-1 rounded-xl bg-red-500/10 dark:bg-red-500/15 border border-red-500/30 text-red-700 dark:text-red-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-red-500" />
                  Databricks
                </span>
                <span className="px-3 py-1 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/30 text-blue-700 dark:text-blue-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-blue-500" />
                  Microsoft Fabric
                </span>
                <span className="px-3 py-1 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-500" />
                  Snowflake
                </span>
                <span className="px-3 py-1 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-amber-500" />
                  Power BI
                </span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-cyan-900/20 dark:shadow-cyan-950/50 transition-all hover:scale-102"
              >
                <span>View Projects & GA Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#domains"
                className="px-5 py-2.5 rounded-xl glass-card hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-xs"
              >
                <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Industry Domains</span>
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                <span>Send Message</span>
              </a>
            </div>

            {/* Recognitions Footnote */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-300 font-semibold">
                <span>🥉</span>
                <span>NIT Raipur Bronze Medalist (MCA)</span>
              </div>
              <div className="flex items-center gap-1.5 text-yellow-700 dark:text-yellow-400 font-semibold">
                <span>🏅</span>
                <span>Chancellor's Medal Holder (BCA)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>Microsoft XIAD Trainer</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>7x Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <ProfileAvatar />
          </motion.div>
        </div>

        {/* Stats Grid Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card glass-card-hover p-4 rounded-2xl border border-slate-200 dark:border-white/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-bl-full group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white gradient-text-cyan">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                {stat.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Down indicator */}
      <div className="mt-8 flex justify-center">
        <a
          href="#tech-stack"
          className="p-2 rounded-full text-slate-400 dark:text-slate-500 hover:text-cyan-500 transition-colors animate-bounce"
          aria-label="Scroll to tech stack"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
