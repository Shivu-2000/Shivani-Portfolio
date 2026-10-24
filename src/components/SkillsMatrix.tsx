import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Shield, BarChart3, Bot, CheckCircle2, Flame } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'core' | 'platforms' | 'governance' | 'bi' | 'aiDevOps'>('core');

  const tabs = [
    { id: 'core', label: 'Core Stack & Engines', icon: Cpu },
    { id: 'platforms', label: 'Lakehouse & Processing', icon: Database },
    { id: 'governance', label: 'Governance & Security', icon: Shield },
    { id: 'bi', label: 'BI & Analytics', icon: BarChart3 },
    { id: 'aiDevOps', label: 'AI, GenAI & DevOps', icon: Bot },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Mastery & Frameworks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="gradient-text-cyan">Ecosystem Matrix</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive overview of production-tested technologies, distributed engines, and enterprise governance frameworks.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-semibold font-mono transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/50 shadow-md'
                    : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'core' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.core.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-white/5 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                        <Flame className="w-4 h-4" />
                      </div>
                      <span className="text-base font-bold text-slate-900 dark:text-white">{item.name}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">{item.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'platforms' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills.platforms.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center gap-2.5 hover:border-cyan-500/40 transition-colors"
                >
                  <Database className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">{skill}</span>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'governance' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {skills.governance.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center gap-2.5 hover:border-violet-500/40 transition-colors"
                >
                  <Shield className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">{skill}</span>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'bi' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills.bi.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center gap-2.5 hover:border-amber-500/40 transition-colors"
                >
                  <BarChart3 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">{skill}</span>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'aiDevOps' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills.aiDevOps.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center gap-2.5 hover:border-emerald-500/40 transition-colors"
                >
                  <Bot className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">{skill}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
