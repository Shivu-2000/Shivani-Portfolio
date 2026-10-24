import React from 'react';
import { Building2, Calendar, MapPin, Award, GraduationCap, Users, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const { experience, education } = PORTFOLIO_DATA;
  const currentExp = experience[0];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Professional Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & <span className="gradient-text-cyan">Impact</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Delivering high-scale data solutions, setting workload development standards with Microsoft, and mentoring the next generation of data engineers.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

            {/* Top Company & Role Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-cyan-950/40">
                    K
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      {currentExp.role}
                    </h3>
                    <div className="text-cyan-600 dark:text-cyan-400 font-bold text-sm">
                      {currentExp.company}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                  {currentExp.period}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                  {currentExp.location}
                </span>
                {currentExp.rating && (
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-bold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-500" />
                    {currentExp.rating}
                  </span>
                )}
              </div>
            </div>

            {/* 3 Impact Pillars */}
            <div className="mt-8 space-y-8">
              {currentExp.areas.map((area, idx) => (
                <div key={area.title} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-mono text-xs font-bold">
                      {idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-wide">
                      {area.title}
                    </h4>
                  </div>
                  <ul className="space-y-2.5 pl-8">
                    {area.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Distinctions Highlights */}
            <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono">Mentorship</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">~20 Engineers Mentored</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono">Community Honor</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Power BI Super User</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono">Trainer Role</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Microsoft XIAD Trainer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Sub-Section */}
          <div className="pt-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span>Academic Distinctions & Education</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-white/10 space-y-4 shadow-sm hover:border-cyan-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                        {edu.period}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{edu.location}</span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{edu.institution}</h4>
                      <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">{edu.degree}</div>
                    </div>

                    {/* Medal Honor Badge */}
                    <div className="pt-1">
                      {edu.medalType === 'bronze' && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/40 text-amber-800 dark:text-amber-300 text-xs font-bold shadow-xs">
                          <span className="text-sm">🥉</span>
                          <span>Bronze Medalist • Master of Computer Applications</span>
                        </div>
                      )}
                      {edu.medalType === 'chancellor' && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-yellow-500/10 dark:bg-yellow-500/15 border border-yellow-500/40 text-yellow-800 dark:text-yellow-300 text-xs font-bold shadow-xs">
                          <span className="text-sm">🏅</span>
                          <span>Chancellor's Medal Holder • University Rank 1</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {edu.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
