import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-600 dark:text-violet-400 text-xs font-mono font-semibold mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Validated Industry Competency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            7x Certified <span className="gradient-text-cyan">Data Engineer</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Globally accredited by Microsoft, Databricks, and Snowflake with publicly verifiable credential badges.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Header with Issuer & Code */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                      [{cert.code}]
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug mb-4">
                  {cert.name}
                </h3>

                {/* Verified Skills */}
                <div className="space-y-1.5 mb-6">
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">
                    Core Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link: Verify Official Credential */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-900/90 hover:bg-cyan-500/15 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer group/link"
                >
                  <span>Verify Credential Badge</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
