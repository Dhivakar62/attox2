import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, FileCheck, CheckCircle2, FlaskRound, Scale } from 'lucide-react';
import CountUp from './CountUp';

export default function PrototypeSection() {
  return (
    <section id="validation" className="w-full bg-[#140C64] text-on-surface px-margin lg:px-margin-desktop py-space-xl lg:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col space-y-space-xl relative z-10">
        
        {/* Headline */}
        <div className="max-w-3xl flex flex-col space-y-space-xs">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label-sm text-label-sm text-primary-container tracking-widest uppercase font-mono"
          >
            Empirical Verification
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline-lg text-headline-lg lg:text-[54px] lg:leading-[60px] text-white tracking-tight"
          >
            Built and running in our lab, <br className="hidden sm:inline" />
            <span className="italic font-editorial-accent font-normal text-secondary text-4xl lg:text-[52px]">
              not just on paper.
            </span>
          </motion.h2>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-stretch">
          
          {/* Card 1 (Span 7): Big Clinical Concordance Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 rounded-2xl bg-[#0C0A33] p-6 lg:p-8 flex flex-col justify-between border border-secondary/20 shadow-2xl relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-secondary/15">
                <div className="flex items-center gap-2">
                  <FlaskRound className="w-4 h-4 text-primary-container" />
                  <span className="font-mono text-xs uppercase text-secondary/80 tracking-widest">
                    Bench Trial Cohort #04
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded font-mono text-[10px] font-bold bg-primary-container/20 text-primary-container border border-primary-container/40">
                  P-VALUE &lt; 0.001
                </span>
              </div>

              {/* Massive Metric Display */}
              <div className="flex items-baseline gap-3">
                <div className="font-headline-xl text-6xl lg:text-7xl font-extrabold text-primary-container tracking-tight">
                  <CountUp value="95.2" suffix="%" />
                </div>
                <span className="font-mono text-xs text-secondary/70">
                  vs CLSI Reference
                </span>
              </div>

              <h3 className="font-headline-md text-2xl font-bold text-white">
                Categorical Concordance to Broth Microdilution
              </h3>

              <p className="font-sans text-sm text-secondary/85 leading-relaxed">
                Tested against <span className="text-white font-mono font-bold">300+</span> internal bench runs comparing Bactolizer impedance curves against standard 48-hour CLSI microdilution MIC values across <span className="italic text-white">E. coli</span>, <span className="italic text-white">Klebsiella pneumoniae</span>, and <span className="italic text-white">Pseudomonas aeruginosa</span>.
              </p>
            </div>

            {/* Bottom 3-Stat Strip */}
            <div className="pt-6 mt-6 border-t border-secondary/20 grid grid-cols-3 gap-2">
              <div className="p-3 rounded-xl bg-[#140C64]/60 border border-secondary/15">
                <div className="font-headline-md text-2xl font-bold text-white">
                  <CountUp value="93.8" suffix="%" />
                </div>
                <div className="font-mono text-[10px] text-secondary/70 uppercase mt-0.5">
                  Urine MIC Match
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#140C64]/60 border border-secondary/15">
                <div className="font-headline-md text-2xl font-bold text-white">
                  <CountUp value="15" suffix="-20" />
                </div>
                <div className="font-mono text-[10px] text-secondary/70 uppercase mt-0.5">
                  Samples/Day Flow
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#140C64]/60 border border-secondary/15">
                <div className="font-headline-md text-2xl font-bold text-primary-container">
                  &lt; 1.2%
                </div>
                <div className="font-mono text-[10px] text-secondary/70 uppercase mt-0.5">
                  Very Major Error
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards 2 & 3 (Span 5 - Stacked Vertical): Patents & Regulatory */}
          <div className="md:col-span-5 flex flex-col justify-between gap-gutter">
            
            {/* Card 2: Indian Patent */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-2xl bg-[#0C0A33] border border-secondary/20 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary-container" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-secondary/80">
                      INTELLECTUAL PROPERTY
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-secondary/15 text-secondary border border-secondary/30">
                    PRIORITY FILED · 2025
                  </span>
                </div>

                <h4 className="font-headline-md text-xl font-bold text-white mb-2">
                  Indian Patent App 202541015977
                </h4>

                <p className="font-sans text-sm text-secondary/80 leading-relaxed">
                  Proprietary spatial microelectrode array tracking dynamic membrane capacitance shifts in multi-channel microfluidic cartridges.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-secondary/15 flex items-center justify-between font-mono text-[11px] text-secondary/60">
                <span>International PCT Readiness</span>
                <CheckCircle2 className="w-4 h-4 text-primary-container" />
              </div>
            </motion.div>

            {/* Card 3: CDSCO Regulatory */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#0C0A33] border border-secondary/20 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary-container" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-secondary/80">
                      REGULATORY CLEARANCE
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-secondary/15 text-secondary border border-secondary/30">
                    CLASS B IVD APPARATUS
                  </span>
                </div>

                <h4 className="font-headline-md text-xl font-bold text-white mb-2">
                  CDSCO Investigational Path
                </h4>

                <p className="font-sans text-sm text-secondary/80 leading-relaxed">
                  ISO 13485 QMS certification underway in preparation for multicenter clinical validation study across tertiary ICU networks in South India.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-secondary/15 flex items-center justify-between font-mono text-[11px] text-secondary/60">
                <span>ISO 13485 QMS · South India Cohort</span>
                <CheckCircle2 className="w-4 h-4 text-primary-container" />
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
