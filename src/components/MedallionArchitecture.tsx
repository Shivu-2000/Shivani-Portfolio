import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Database, CheckCircle2, Cpu, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const MedallionArchitecture: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<'Bronze' | 'Silver' | 'Gold'>('Bronze');
  const { medallionSteps } = PORTFOLIO_DATA;

  const activeStep = medallionSteps.find((s) => s.layer === selectedLayer) || medallionSteps[0];

  const layerSpecs = {
    Bronze: {
      sources: ['SAP BID / Proforma', 'Automotive IoT Sensors', 'Clinical EHR APIs', 'SQL Database Replicas'],
      processing: 'Metadata-Driven Ingestion • Fabric Pipelines • Parquet Append-Only',
      latency: 'Streaming & Micro-batch (Sub-5 min)',
      records: '300B+ Cumulative Raw Ingestion',
      schema: 'Schema on Read • Raw JSON & CDC logs',
      icon: Database,
    },
    Silver: {
      sources: ['Bronze Delta Lake Tables'],
      processing: 'PySpark / Scala ETL • SCD Type 2 & Type 3 • Fuzzy Logic Address Matching',
      latency: 'Incremental Batch • ACID Guarantees',
      records: 'Conformed & Deduplicated Master Records',
      schema: 'Enriched Delta Parquet • Medallion Standard Views',
      icon: Cpu,
    },
    Gold: {
      sources: ['Silver Conformed Data Assets'],
      processing: 'Galaxy Schema (100+ tables) • Star Schema • Fact & Dim Aggregations',
      latency: 'DirectLake Sub-Second Querying',
      records: '100+ Power BI Semantic Models & Executive Dashboards',
      schema: 'Business Ready • Automated RLS via Azure AD & Entra',
      icon: Zap,
    },
  };

  const currentSpec = layerSpecs[selectedLayer];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Data Flow Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Enterprise <span className="gradient-text-cyan">Medallion Lakehouse</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A battle-tested lakehouse pattern engineered for multi-domain scale across Databricks, Microsoft Fabric,
            and Snowflake, capable of handling 300B+ records.
          </p>
        </div>

        {/* Layer Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {medallionSteps.map((step) => {
            const isSelected = selectedLayer === step.layer;
            return (
              <button
                key={step.layer}
                onClick={() => setSelectedLayer(step.layer as any)}
                className={`p-6 rounded-2xl text-left transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'glass-card border-cyan-500 shadow-lg shadow-cyan-500/10 dark:shadow-cyan-950/40'
                    : 'glass-card border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono uppercase font-bold tracking-wider ${step.accent}`}>
                    Layer 0{step.layer === 'Bronze' ? '1' : step.layer === 'Silver' ? '2' : '3'}
                  </span>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-medium ${
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {step.layer}
                  </span>
                </div>

                <div className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{step.name}</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{step.description}</p>
              </button>
            );
          })}
        </div>

        {/* Interactive Architecture Inspector Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedLayer}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-cyan-500/40 relative overflow-hidden"
          >
            {/* Background watermark */}
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none select-none text-slate-400 dark:text-white">
              <span className="text-9xl font-black font-mono">{selectedLayer}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Visual Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-1 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                    <span>Active Inspection: {selectedLayer} Layer</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {activeStep.name} Architecture
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {activeStep.description}
                  </p>
                </div>

                {/* Core Architectural Capabilities */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-3 font-semibold">
                    Core Engineering Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStep.features.map((feature) => (
                      <div
                        key={feature}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ingestion & Transformation Highlights */}
                <div className="p-4 rounded-2xl bg-cyan-500/10 dark:bg-cyan-950/20 border border-cyan-500/20">
                  <div className="text-xs font-mono text-cyan-700 dark:text-cyan-300 font-semibold mb-1">
                    Transformation Engine & Strategy:
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-mono">
                    {currentSpec.processing}
                  </div>
                </div>
              </div>

              {/* Right Column: Telemetry Cards */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Input Sources</div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {currentSpec.sources.map((src) => (
                      <span
                        key={src}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-mono"
                      >
                        {src}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Throughput & Scale</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">{currentSpec.records}</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Latency Target</div>
                  <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-300 mt-1">{currentSpec.latency}</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Governance & Data Security</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">{currentSpec.schema}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
