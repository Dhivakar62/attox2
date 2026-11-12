import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Truck, FlaskConical, AlertTriangle, ArrowRight, Skull, ShieldAlert, Target, TrendingUp } from 'lucide-react';
import CountUp from './CountUp';

const STAGES = [
  {
    number: 'STAGE 01',
    badge: 'Hour 0',
    title: 'Sample Draw',
    desc: 'Patient exhibits acute sepsis or catheter-associated infection. Specimen taken at bedside.',
    footer: 'Empiric Broad-Spectrum Begun',
    icon: Clock,
    border: 'border-secondary/20',
    statusColor: 'text-secondary/70',
  },
  {
    number: 'STAGE 02',
    badge: '+12 to 24h',
    title: 'Courier Transit',
    desc: 'Specimens shipped off-site to central microbiological processing laboratories via cold-chain courier.',
    footer: 'Transit Vulnerability Window',
    icon: Truck,
    border: 'border-secondary/20',
    statusColor: 'text-secondary/70',
  },
  {
    number: 'STAGE 03',
    badge: '+36 to 48h',
    title: 'Agar Incubation',
    desc: 'Petri dishes plated on solid medium. Technicians wait for macroscopic colony formation to measure zone diameters.',
    footer: 'Passive Cellular Doubling',
    icon: FlaskConical,
    border: 'border-secondary/20',
    statusColor: 'text-secondary/70',
  },
  {
    number: 'STAGE 04',
    badge: '+72h Lag',
    title: 'Late Susceptibility',
    desc: 'AST readout finalized. By this point, 40% of empiric therapy requires adjustment or organism has adapted.',
    footer: 'Critical Window Missed',
    icon: AlertTriangle,
    border: 'border-red-500/40 bg-red-950/20 shadow-[0_0_25px_rgba(239,68,68,0.15)]',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40',
    statusColor: 'text-red-400',
    isAlert: true,
  },
];

const METRICS = [
  {
    number: '1.14M',
    title: 'GLOBAL ANNUAL AMR FATALITIES',
    desc: 'Direct bacterial antimicrobial resistance deaths globally each year.',
    icon: Skull,
  },
  {
    number: '267K',
    title: 'ANNUAL DEATHS IN INDIA',
    desc: 'Leading epicenter of multidrug-resistant pathogens and hospital-acquired sepsis.',
    icon: ShieldAlert,
  },
  {
    number: '6%',
    title: 'EMPIRIC BLINDSPOT',
    desc: 'Only small fraction of empiric treatments are informed by direct phenotypic testing at admission.',
    icon: Target,
  },
  {
    number: '39M',
    title: 'FORECAST HORIZON BY 2050',
    desc: 'Cumulative projected fatalities without point-of-care rapid testing interventions.',
    icon: TrendingUp,
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="w-full bg-[#0C0A33] text-on-surface px-margin lg:px-margin-desktop py-space-xl lg:py-24 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#140C64]/30 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col space-y-space-xl relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl flex flex-col space-y-space-sm">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-mono"
          >
            Diagnostic Dilemma
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline-lg text-headline-lg lg:text-[54px] lg:leading-[60px] text-white tracking-tight"
          >
            When an infection cannot wait, doctors are forced to guess.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body-lg text-body-lg text-secondary/85 leading-relaxed pt-2"
          >
            Conventional antimicrobial susceptibility testing relies on 19th-century biological doubling times. While standard cultures incubate, broad-spectrum empiric prescriptions accelerate antimicrobial resistance (AMR) and trigger systemic septic decline.
          </motion.p>
        </div>

        {/* 4-Stage Horizontal Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`p-6 rounded-2xl bg-[#140C64]/40 backdrop-blur-md border ${stage.border} flex flex-col justify-between relative group hover:bg-[#140C64]/60 transition-all duration-300`}
              >
                {/* Top Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-secondary/60 tracking-wider">
                      {stage.number}
                    </span>
                    <span className={`px-2 py-0.5 rounded font-mono text-[11px] border ${
                      stage.badgeColor || 'bg-secondary/10 text-secondary border-secondary/30'
                    }`}>
                      {stage.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-5 h-5 ${stage.isAlert ? 'text-red-400 animate-pulse' : 'text-primary-container'}`} />
                    <h3 className="font-headline-md text-xl font-bold text-white">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-secondary/80 leading-relaxed mb-6">
                    {stage.desc}
                  </p>
                </div>

                {/* Footer Subtitle */}
                <div className="pt-4 border-t border-secondary/15 flex items-center justify-between">
                  <span className={`font-mono text-[11px] ${stage.statusColor}`}>
                    {stage.footer}
                  </span>
                  {idx < 3 && (
                    <ArrowRight className="w-3.5 h-3.5 text-secondary/40 hidden lg:block -mr-2" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Massive Electric Lime Metric Counters */}
        <div className="pt-space-lg border-t border-secondary/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
          {METRICS.map((metric, idx) => {
            const MetricIcon = metric.icon;
            return (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col space-y-2 p-4 rounded-xl bg-[#0a0731]/60 border border-secondary/10 hover:border-primary-container/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <MetricIcon className="w-5 h-5 text-secondary/50" />
                  <span className="font-mono text-[9px] text-secondary/40">DATA VERIFIED</span>
                </div>
                <div className="font-headline-xl text-4xl lg:text-5xl font-extrabold text-primary-container tracking-tight">
                  <CountUp value={metric.number} />
                </div>
                <div className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-mono font-bold">
                  {metric.title}
                </div>
                <p className="font-sans text-xs text-secondary/70 leading-normal pt-1">
                  {metric.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
