import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ArrowUpRight, Sparkles, CheckCircle2, Layers, Cpu, ShieldCheck, Database, Award } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<'all' | 'pharma' | 'automobile' | 'insurance' | 'material-handling' | 'ga-products'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const filterTabs = [
    { label: 'All Initiatives', value: 'all', count: projects.length },
    { label: 'Pharma', value: 'pharma', count: projects.filter((p) => p.category === 'pharma').length },
    { label: 'Automobile', value: 'automobile', count: projects.filter((p) => p.category === 'automobile').length },
    { label: 'Group Captive Insurance', value: 'insurance', count: projects.filter((p) => p.category === 'insurance').length },
    { label: 'Material Handling', value: 'material-handling', count: projects.filter((p) => p.category === 'material-handling').length },
    { label: 'Products in GA', value: 'ga-products', count: projects.filter((p) => p.category === 'ga-products').length },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proven Multi-Domain Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client Projects & <span className="gradient-text-cyan">GA Products</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real-world enterprise solutions spanning Pharma, Automobile, Group Captive Insurance, Material Handling, and Generally Available marketplace software.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/50 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-cyan-500/30 text-cyan-900 dark:text-cyan-100' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-500'}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 flex flex-col justify-between relative group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Top Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-semibold">
                    {project.domain}
                  </span>
                  {project.architectureTag && (
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                      {project.architectureTag}
                    </span>
                  )}
                </div>

                {/* Title & Client */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </h3>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1 mb-4">
                  Domain: {project.client}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Metrics Chips */}
                <div className="space-y-2 mb-6">
                  {project.impactMetrics.map((metric) => (
                    <div
                      key={metric}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags at bottom */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md ${
                        tech === 'Databricks'
                          ? 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50'
                          : tech === 'Microsoft Fabric'
                          ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50'
                          : tech === 'Snowflake'
                          ? 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-900/50'
                          : tech === 'Power BI'
                          ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900/50'
                          : 'bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-2xl glass-card bg-white dark:bg-[#0b1328] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-slate-800 dark:text-slate-100"
              >
                <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                      {selectedProject.domain} • {selectedProject.client}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="py-6 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-2">
                      Project Overview
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-2">
                      Key Highlights & Architecture
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-2">
                      Verified Impact & Metrics
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.impactMetrics.map((m) => (
                        <div
                          key={m}
                          className="p-3 rounded-xl bg-cyan-50 dark:bg-slate-900/90 border border-cyan-500/20 text-xs font-semibold text-cyan-800 dark:text-cyan-300 flex items-center gap-2"
                        >
                          <Sparkles className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-2">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs font-semibold cursor-pointer"
                  >
                    Close Inspection
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
