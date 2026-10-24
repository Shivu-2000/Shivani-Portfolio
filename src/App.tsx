import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { DataCanvasBackground } from './components/DataCanvasBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStackAndDomains } from './components/TechStackAndDomains';
import { MedallionArchitecture } from './components/MedallionArchitecture';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { TerminalDrawer } from './components/TerminalDrawer';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#060913] text-slate-800 dark:text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 relative transition-colors duration-300">
        {/* Dynamic Big Data Background (Image + Interactive Canvas Plexus) */}
        <DataCanvasBackground />

        {/* Sticky Navigation with Top-Right Theme Toggle */}
        <Navbar />

        {/* Main Sections */}
        <main className="relative z-10">
          <Hero />
          <TechStackAndDomains />
          <MedallionArchitecture />
          <ExperienceTimeline />
          <ProjectsSection />
          <CertificationsSection />
          <SkillsMatrix />
          <ContactSection />
        </main>

        {/* Interactive Developer CLI Drawer */}
        <TerminalDrawer />

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
