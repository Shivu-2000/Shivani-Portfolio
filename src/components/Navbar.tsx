import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Database, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { personal } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Domains', href: '#domains' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-[#060913]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 py-3 shadow-lg shadow-slate-200/50 dark:shadow-black/40'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Designation */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                Shivani Gupta
              </div>
              <div className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider uppercase -mt-0.5">
                Data Engineer and Analyst
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls: Theme Switcher & Contact Button */}
          <div className="flex items-center gap-2.5">
            {/* Top Right Corner Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer shadow-sm relative group"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="hidden sm:flex px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all shadow-md shadow-cyan-950/40 items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl glass-card space-y-2 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Theme: {isDark ? 'Dark Mode' : 'Light Mode'}
              </span>
              <button
                onClick={toggleTheme}
                className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-xs font-semibold flex items-center gap-1.5 text-slate-800 dark:text-slate-200"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
                <span>Toggle</span>
              </button>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 rounded-xl text-center text-xs font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-white mt-2"
            >
              Contact Shivani
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
