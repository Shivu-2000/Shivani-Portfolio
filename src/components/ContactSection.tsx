import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Send,
  ShieldCheck,
  ShieldAlert,
  Bot,
  UserCheck,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Sliders,
  MessageSquare,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  // Form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: 'Databricks & Lakehouse Architecture',
    message: '',
    honeypot: '', // Trap field for automated bot scrapers
  });

  // Human verification states
  const [isVerified, setIsVerified] = useState(false);
  const [verificationMode, setVerificationMode] = useState<'slider' | 'challenge'>('slider');
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderTrackRef = useRef<HTMLDivElement>(null);

  // Math/Logic Challenge State
  const [mathProblem, setMathProblem] = useState({ q: 'What is 18 + 7?', answer: 25 });
  const [userAnswer, setUserAnswer] = useState('');
  const [challengeError, setChallengeError] = useState(false);

  // Form submission state
  const [formRenderTime] = useState(Date.now());
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Generate dynamic math question
  const generateNewQuestion = () => {
    const num1 = Math.floor(Math.random() * 15) + 5;
    const num2 = Math.floor(Math.random() * 12) + 4;
    setMathProblem({
      q: `Verify human: What is ${num1} + ${num2}?`,
      answer: num1 + num2,
    });
    setUserAnswer('');
    setChallengeError(false);
  };

  useEffect(() => {
    generateNewQuestion();
  }, []);

  // Slider Verification Handler
  const handleSliderMove = (clientX: number) => {
    if (!sliderTrackRef.current || isVerified) return;
    const rect = sliderTrackRef.current.getBoundingClientRect();
    const handleWidth = 48;
    const maxTravel = rect.width - handleWidth;
    const currentX = clientX - rect.left - handleWidth / 2;
    const clamped = Math.max(0, Math.min(currentX, maxTravel));
    const percentage = (clamped / maxTravel) * 100;
    setSliderPosition(percentage);

    if (percentage > 94) {
      triggerVerificationSuccess();
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleSliderMove(e.clientX);
  };

  const handleMouseUp = () => {
    if (isDragging && !isVerified) {
      setIsDragging(false);
      setSliderPosition(0);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const triggerVerificationSuccess = () => {
    setIsVerified(true);
    setSliderPosition(100);
    setIsDragging(false);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#818cf8', '#34d399', '#f472b6'],
      });
    } catch (e) {
      // Ignore if confetti fails
    }
  };

  const handleChallengeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(userAnswer.trim(), 10) === mathProblem.answer) {
      triggerVerificationSuccess();
      setChallengeError(false);
    } else {
      setChallengeError(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Bot Honeypot Check (Hidden field should always be empty for humans)
    if (formData.honeypot.trim() !== '') {
      setSubmitStatus('error');
      setStatusMessage('Security violation: Automated bot behavior detected.');
      return;
    }

    // 2. Minimum Form Interaction Time Check (Bots submit instantly)
    const timeSpent = (Date.now() - formRenderTime) / 1000;
    if (timeSpent < 1.8) {
      setSubmitStatus('error');
      setStatusMessage('Submission was too rapid. Please review your message.');
      return;
    }

    // 3. Human Verification Check
    if (!isVerified) {
      setSubmitStatus('error');
      setStatusMessage('Please complete the anti-robot verification puzzle below.');
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setSubmitStatus('sending');

    // Email dispatch via mail client without printing raw credentials on the webpage
    const subject = encodeURIComponent(`[Inquiry] ${formData.projectType} - from ${formData.name}`);
    const bodyContent = `Hello Shivani,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic / Domain: ${formData.projectType}\nSubject: ${formData.subject || 'Data Engineering & Analytics Collaboration'}\n\nMessage:\n${formData.message}\n\n---\nSent via Shivani Gupta's Portfolio (Anti-Bot Verified)`;
    const mailtoUrl = `mailto:${personal.email}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setSubmitStatus('success');
      setStatusMessage('Thank you! Your verified message was prepared and opened in your email client.');

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Secure & Spam-Protected Communication</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Get in <span className="gradient-text-cyan">Touch</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Have a Data Engineering initiative, Lakehouse architecture challenge, or collaboration opportunity?
            Send a message or connect through LinkedIn and GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: LinkedIn, GitHub & Anti-Bot Protection */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6 shadow-md">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-500" />
                <span>Professional Profiles</span>
              </h3>

              <div className="space-y-3.5">
                {/* LinkedIn Card */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400">
                        <LinkedinIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">LinkedIn</div>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">shivani-gupta2000</span>
                      </div>
                    </div>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <span>Connect</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* GitHub Card */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                        <GithubIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">GitHub</div>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">Shivu-2000</span>
                      </div>
                    </div>
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <span>Follow</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Messaging Information Card */}
              <div className="p-4 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-500/20 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 dark:text-cyan-300">
                  <MessageSquare className="w-4 h-4 text-cyan-500" />
                  <span>Direct Message Transmission</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  To ensure privacy and avoid spam, communication is facilitated through the verified message form on this page.
                </p>
              </div>
            </div>

            {/* Anti-Bot Shield Status Box */}
            <div className="glass-card p-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-50/50 to-slate-100 dark:from-cyan-950/30 dark:to-slate-900/70 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className={`p-2.5 rounded-2xl ${isVerified ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400'}`}>
                  {isVerified ? <UserCheck className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    {isVerified ? (
                      <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                        <CheckCircle2 className="w-4 h-4" /> Human Verification Active
                      </span>
                    ) : (
                      <span className="text-cyan-700 dark:text-cyan-300">Anti-Robot Protection</span>
                    )}
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {isVerified
                      ? "Human identity confirmed. Your message is encrypted and prepared for dispatch."
                      : "Our contact gateway requires interactive verification to prevent automated bot scrapers."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 relative shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">Send a Message</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below. Once human verification is complete, your message can be sent directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                  <label htmlFor="bot_trap_field">Do not fill:</label>
                  <input
                    id="bot_trap_field"
                    type="text"
                    name="bot_honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition text-sm"
                    />
                  </div>
                </div>

                {/* Scope Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Engagement Topic / Domain
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition text-sm cursor-pointer"
                  >
                    <option value="Databricks & Lakehouse Architecture">Databricks & Lakehouse Architecture</option>
                    <option value="Microsoft Fabric & Migration">Microsoft Fabric & Migration</option>
                    <option value="Snowflake Modernization & Modeling">Snowflake Modernization & Modeling</option>
                    <option value="Power BI Semantic Models & Enterprise DAX">Power BI Semantic Models & Enterprise DAX</option>
                    <option value="Pharma & Healthcare Analytics">Pharma & Healthcare Analytics</option>
                    <option value="Automobile Telemetry & Supply Chain">Automobile Telemetry & Supply Chain</option>
                    <option value="Group Captive Insurance Shared Services">Group Captive Insurance Shared Services</option>
                    <option value="Material Handling TDW">Material Handling TDW</option>
                    <option value="Full-Time / Consulting Opportunity">Full-Time / Consulting Opportunity</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project overview or collaboration inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Message <span className="text-cyan-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your data platform requirements, timeline, or consultation topics..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition text-sm resize-none"
                  />
                </div>

                {/* Anti-Robot Verification Challenge */}
                <div className="pt-1">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-gradient-to-r dark:from-slate-900 dark:to-[#0c162c] border border-cyan-500/30">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className={`w-4 h-4 ${isVerified ? 'text-emerald-500' : 'text-cyan-600 dark:text-cyan-400'}`} />
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                          {isVerified ? 'Human Verified' : 'Anti-Robot Security Challenge'}
                        </span>
                      </div>
                      {!isVerified && (
                        <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                          <button
                            type="button"
                            onClick={() => setVerificationMode(verificationMode === 'slider' ? 'challenge' : 'slider')}
                            className="hover:text-cyan-600 dark:hover:text-cyan-300 underline cursor-pointer"
                          >
                            Switch to {verificationMode === 'slider' ? 'Math Question' : 'Slider'}
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Mode 1: Slider */}
                    {verificationMode === 'slider' && !isVerified && (
                      <div className="relative">
                        <div
                          ref={sliderTrackRef}
                          className="relative h-12 rounded-xl bg-slate-200 dark:bg-slate-950 border border-slate-300 dark:border-slate-700/80 flex items-center px-2 select-none overflow-hidden"
                        >
                          <div
                            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-cyan-500/40 to-emerald-500/40 transition-all"
                            style={{ width: `${sliderPosition}%` }}
                          />

                          <div className="w-full text-center text-xs font-semibold text-slate-600 dark:text-slate-400 pointer-events-none flex items-center justify-center gap-1.5">
                            <span>Slide right to verify you're human</span>
                            <ArrowRight className="w-3.5 h-3.5 animate-pulse text-cyan-600 dark:text-cyan-400" />
                          </div>

                          <div
                            onMouseDown={() => setIsDragging(true)}
                            onTouchStart={() => setIsDragging(true)}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={() => {
                              if (!isVerified) {
                                setIsDragging(false);
                                setSliderPosition(0);
                              }
                            }}
                            style={{
                              left: `calc(${sliderPosition}% * (1 - 44px / 100%))`,
                            }}
                            className="absolute left-1 top-1 bottom-1 w-11 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 shadow-md flex items-center justify-center cursor-grab active:cursor-grabbing text-white transition-transform active:scale-95"
                          >
                            <Sliders className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Mode 2: Math Question */}
                    {verificationMode === 'challenge' && !isVerified && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-300 bg-white dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                            {mathProblem.q}
                          </span>
                          <button
                            type="button"
                            onClick={generateNewQuestion}
                            className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400"
                            title="Generate another question"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="number"
                            placeholder="Enter answer"
                            value={userAnswer}
                            onChange={(e) => {
                              setUserAnswer(e.target.value);
                              setChallengeError(false);
                            }}
                            className="px-3 py-1.5 text-xs rounded-lg bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white w-28 focus:border-cyan-500 outline-none"
                          />
                          <button
                            type="button"
                            onClick={handleChallengeSubmit}
                            className="px-3.5 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-lg transition cursor-pointer"
                          >
                            Verify
                          </button>
                        </div>
                        {challengeError && (
                          <div className="text-[11px] text-red-500 flex items-center gap-1">
                            <ShieldAlert className="w-3 h-3" /> Incorrect answer. Try again.
                          </div>
                        )}
                      </div>
                    )}

                    {/* Verified State */}
                    {isVerified && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-2 flex items-center justify-between text-emerald-600 dark:text-emerald-400 text-xs font-bold"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          <span>Human identity confirmed. Anti-robot shield passed!</span>
                        </div>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">TOKEN: SEC-OK</span>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Status Feedback */}
                {submitStatus === 'error' && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs flex items-center gap-2 font-medium">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {submitStatus === 'success' && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Action Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={!isVerified || submitStatus === 'sending'}
                    className={`w-full py-3 px-6 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isVerified
                        ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white shadow-md shadow-cyan-900/20 dark:shadow-cyan-950/50 active:scale-[0.99]'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-300 dark:border-slate-700'
                    }`}
                  >
                    {submitStatus === 'sending' ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Preparing Encrypted Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{isVerified ? 'Send Verified Message' : 'Complete Verification to Send'}</span>
                      </>
                    )}
                  </button>
                  {!isVerified && (
                    <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                      Please slide or answer the question to unlock the send button.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
