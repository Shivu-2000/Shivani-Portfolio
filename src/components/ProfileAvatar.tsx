import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, ShieldCheck, Database, Award, Check } from 'lucide-react';

interface ProfileAvatarProps {
  onOpenUploadModal?: () => void;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = () => {
  const [imgSrc, setImgSrc] = useState<string>('/profile.jpg');
  const [imgLoaded, setImgLoaded] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageError = () => {
    setImgLoaded(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImgSrc(url);
      setImgLoaded(true);
      setShowModal(false);
    }
  };

  return (
    <div className="relative group flex items-center justify-center">
      {/* Outer ambient glow rings */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-75 group-hover:opacity-100 pointer-events-none" />
      
      {/* Animated rotating border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-2 rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 opacity-80 pointer-events-none"
      />

      {/* Main Avatar Container */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-1.5 bg-white dark:bg-[#0a1020] shadow-2xl overflow-hidden border border-cyan-500/30">
        {imgLoaded ? (
          <img
            src={imgSrc}
            alt="Shivani Gupta - Data Engineer and Analyst"
            className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
            onError={handleImageError}
          />
        ) : (
          /* High-Tech Fallback Interactive Avatar */
          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#0f1d38] via-[#0b1426] to-[#080d19] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Cyber Grid Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Futuristic Tech Monogram / Stylized Avatar */}
            <div className="relative z-10 flex flex-col items-center text-center px-4">
              <div className="relative mb-2">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/30 border border-cyan-400/40 flex items-center justify-center shadow-inner">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight gradient-text-cyan select-none">
                    SG
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-300 font-mono">
                Data Engineer and Analyst
              </span>
              <span className="text-sm font-bold text-slate-100 mt-0.5">
                Shivani Gupta
              </span>

              <button
                onClick={() => setShowModal(true)}
                className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 rounded-full transition-all cursor-pointer"
                title="Click to change your photo"
              >
                <Camera className="w-3 h-3" />
                <span>Change Photo</span>
              </button>
            </div>
          </div>
        )}

        {/* Hover overlay allowing photo change */}
        {imgLoaded && (
          <button
            onClick={() => setShowModal(true)}
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-cyan-300 text-xs font-semibold cursor-pointer rounded-full backdrop-blur-xs"
          >
            <Camera className="w-6 h-6 text-cyan-400" />
            <span>Update Photo</span>
          </button>
        )}
      </div>

      {/* Floating Badge 1: 300B+ Records */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3 -right-3 sm:-right-4 glass-card px-3.5 py-1.5 rounded-2xl border border-cyan-500/30 flex items-center gap-2 shadow-lg shadow-cyan-950/20 dark:shadow-cyan-950/40 z-20 backdrop-blur-md"
      >
        <div className="p-1 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
          <Database className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono font-medium">Throughput</div>
          <div className="text-xs font-bold text-cyan-700 dark:text-cyan-300">300B+ Records</div>
        </div>
      </motion.div>

      {/* Floating Badge 2: 7x Certified */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-3 -left-3 sm:-left-4 glass-card px-3.5 py-1.5 rounded-2xl border border-violet-500/30 flex items-center gap-2 shadow-lg shadow-purple-950/20 dark:shadow-purple-950/40 z-20 backdrop-blur-md"
      >
        <div className="p-1 rounded-lg bg-violet-500/15 text-violet-600 dark:text-violet-400">
          <Award className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono font-medium">Credentials</div>
          <div className="text-xs font-bold text-violet-700 dark:text-violet-300">7x Certified</div>
        </div>
      </motion.div>

      {/* Floating Badge 3: 2 GA Products */}
      <motion.div
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="hidden sm:flex absolute top-1/2 -left-8 -translate-y-1/2 glass-card px-3 py-1.5 rounded-2xl border border-emerald-500/30 items-center gap-2 shadow-lg z-20 backdrop-blur-md"
      >
        <div className="p-1 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
        </div>
        <div className="text-left">
          <div className="text-[9px] text-slate-500 dark:text-slate-400 uppercase font-mono font-medium">Innovator</div>
          <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300">2 GA Products</div>
        </div>
      </motion.div>

      {/* Photo Change Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md glass-card bg-white dark:bg-[#0b1329] border border-cyan-500/40 rounded-2xl p-6 shadow-2xl relative text-left"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700/60 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Profile Photo Set</h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white text-xl cursor-pointer"
              >
                &times;
              </button>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Your official LinkedIn profile photo is active and saved in your project folder at <code className="text-cyan-600 dark:text-cyan-400 font-mono text-xs">public/profile.jpg</code>.
            </p>

            <div className="space-y-3">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition shadow-md"
              >
                <Camera className="w-4 h-4" />
                Choose Different Photo
              </button>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
