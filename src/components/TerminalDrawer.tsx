import React, { useState } from 'react';
import { Terminal, ChevronUp, ChevronDown, Sparkles, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TerminalDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: 'fabric --status',
      output: 'Fabric Lakehouse Engine: ACTIVE\nStorage: OneLake (300B+ records)\nActive Clusters: Databricks 14.3 LTS (PySpark, Scala)\nSecurity: Unity Catalog + Entra RLS enabled\nMarketplace Products: Azure-to-Fabric Migration Tool [GA]',
    },
  ]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let res = '';

    switch (cleanCmd) {
      case 'help':
        res = 'Available commands: about, education, fabric --status, stats, certifications, projects, contact, clear';
        break;
      case 'about':
        res = `${PORTFOLIO_DATA.personal.name} - ${PORTFOLIO_DATA.personal.role} at ${PORTFOLIO_DATA.personal.currentCompany}.\n${PORTFOLIO_DATA.personal.summary}`;
        break;
      case 'education':
        res = PORTFOLIO_DATA.education.map((e) => `* ${e.degree} (${e.period})\n  ${e.institution}\n  Honor: ${e.medal}`).join('\n\n');
        break;
      case 'fabric --status':
      case 'status':
        res = 'Fabric Lakehouse Engine: ONLINE | 300B+ records | 2 GA Products | DirectLake enabled';
        break;
      case 'stats':
        res = PORTFOLIO_DATA.stats.map((s) => `${s.label}: ${s.value} (${s.detail})`).join('\n');
        break;
      case 'certifications':
        res = PORTFOLIO_DATA.certifications.map((c) => `[${c.issuer}] ${c.name} (${c.code})`).join('\n');
        break;
      case 'projects':
        res = PORTFOLIO_DATA.projects.map((p) => `* ${p.title} [${p.domain}]: ${p.impactMetrics[0]}`).join('\n');
        break;
      case 'contact':
        res = `Direct messaging is available via the Verified Contact Form on this page.\nLinkedIn: ${PORTFOLIO_DATA.personal.linkedin}\nGitHub: ${PORTFOLIO_DATA.personal.github}`;
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        res = `Unknown command: '${cmd}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd, output: res }]);
    setInputVal('');
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-lg w-full sm:w-96">
      {/* Trigger Bar */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card px-4 py-2.5 rounded-2xl border border-cyan-500/40 shadow-xl shadow-cyan-950/50 flex items-center justify-between cursor-pointer hover:border-cyan-400 transition-all bg-[#0a1122]/90 backdrop-blur-md"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono font-bold text-slate-200">
            Interactive CLI Terminal
          </span>
        </div>
        <button className="text-slate-400 hover:text-white">
          {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
      </div>

      {/* Terminal Body */}
      {isOpen && (
        <div className="mt-2 glass-card bg-[#070b16]/95 border border-cyan-500/30 rounded-2xl p-4 shadow-2xl font-mono text-xs text-slate-200 animate-in fade-in slide-in-from-bottom-2">
          {/* Quick command buttons */}
          <div className="flex flex-wrap gap-1.5 pb-3 border-b border-slate-800 mb-3">
            {['help', 'about', 'education', 'fabric --status', 'stats', 'certifications', 'clear'].map((c) => (
              <button
                key={c}
                onClick={() => handleCommand(c)}
                className="px-2 py-0.5 rounded bg-slate-900 hover:bg-cyan-500/20 text-[10px] text-cyan-300 border border-slate-800 hover:border-cyan-500/40 cursor-pointer"
              >
                {c}
              </button>
            ))}
          </div>

          {/* History Scroll Area */}
          <div className="max-h-52 overflow-y-auto space-y-2.5 mb-3 pr-1">
            {history.map((h, i) => (
              <div key={i} className="space-y-1">
                <div className="text-cyan-400 flex items-center gap-1">
                  <span>shivani@lakehouse:~$</span>
                  <span className="text-white font-semibold">{h.cmd}</span>
                </div>
                <div className="text-slate-300 text-[11px] whitespace-pre-wrap pl-3 border-l border-slate-800">
                  {h.output}
                </div>
              </div>
            ))}
          </div>

          {/* Input Line */}
          <form onSubmit={onSubmit} className="flex items-center gap-2 pt-2 border-t border-slate-800">
            <span className="text-cyan-400 text-xs">~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command or 'help'..."
              className="flex-1 bg-transparent text-white placeholder-slate-600 focus:outline-none text-xs"
            />
            <button
              type="submit"
              className="p-1 rounded text-cyan-400 hover:text-cyan-300 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

