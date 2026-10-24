import React from 'react';
import { Database, ArrowUp, ShieldCheck } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-[#050811] py-12 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/60">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-950/40">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white">Shivani Gupta</div>
              <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                Data Engineer and Analyst
              </div>
            </div>
          </div>

          {/* Social Profiles: LinkedIn & GitHub Only */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/shivani-gupta2000/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all shadow-xs"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Shivu-2000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 transition-all shadow-xs"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all cursor-pointer ml-2 shadow-xs"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Privacy protection status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Anti-Bot Shield Active • Encrypted Mail Routing</span>
          </div>

          <div>
            © {new Date().getFullYear()} Shivani Gupta. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
