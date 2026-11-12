import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Clock, Sparkles, XCircle } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    feature: 'Turnaround Time',
    conventional: '48 to 72 Hours',
    bactolizer: '~120 Minutes',
    bactolizerHighlight: true,
  },
  {
    feature: 'Consumables & Media',
    conventional: 'Petri Dishes, Broth Agar, Dyes',
    bactolizer: 'Pre-coated Microfluidic Chip',
    bactolizerHighlight: false,
  },
  {
    feature: 'Testing Infrastructure',
    conventional: 'Central BSL-2 Incubator Suite',
    bactolizer: 'Tabletop Instrument (Bedside)',
    bactolizerHighlight: false,
  },
  {
    feature: 'Operator Qualification',
    conventional: 'Trained Microbiologist Required',
    bactolizer: 'Any Clinical Staff (<90s prep)',
    bactolizerHighlight: false,
  },
  {
    feature: 'Direct Operational Cost',
    conventional: '₹810 - ₹1,039 Per Sample',
    bactolizer: '₹500 Target Cost',
    bactolizerHighlight: true,
  },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="w-full bg-[#FFFFFF] text-[#0C0A33] px-margin lg:px-margin-desktop py-space-xl lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col space-y-space-xl">
        
        {/* Headline */}
        <div className="max-w-3xl flex flex-col space-y-space-xs">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label-sm text-label-sm text-[#0C0A33]/60 tracking-widest uppercase font-mono"
          >
            Technological Superiority
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline-lg text-headline-lg lg:text-[54px] lg:leading-[60px] text-[#0C0A33] tracking-tight"
          >
            A faster way to get the answer.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body-lg text-body-lg text-[#0C0A33]/80 leading-relaxed pt-1"
          >
            Compare standard microbiology central workflows against Bactolizer's direct bedside telemetric assay.
          </motion.p>
        </div>

        {/* Side-by-Side Dual Stage Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-desktop items-stretch">
          
          {/* Left Card: Conventional Central AST */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#F5F4EE] border border-[#0C0A33]/10 p-6 lg:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#0C0A33]/10 mb-6">
                <div>
                  <span className="font-mono text-xs uppercase text-[#0C0A33]/60 tracking-wider">
                    STANDARD PROTOCOL
                  </span>
                  <h3 className="font-headline-md text-2xl font-bold text-[#0C0A33] mt-0.5">
                    Conventional Central AST
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded font-mono text-xs bg-[#0C0A33]/5 text-[#0C0A33]/70 border border-[#0C0A33]/10">
                  Lagging Paradigm
                </span>
              </div>

              {/* Rows */}
              <div className="space-y-4">
                {COMPARISON_ROWS.map((row) => (
                  <div key={row.feature} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-2 border-b border-[#0C0A33]/5">
                    <span className="font-mono text-xs text-[#0C0A33]/60">
                      {row.feature}
                    </span>
                    <span className="font-sans text-sm font-semibold text-[#0C0A33]/90">
                      {row.conventional}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Warning Callout */}
            <div className="pt-6 mt-6 border-t border-[#0C0A33]/10 flex items-start gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="font-sans text-xs text-amber-900 leading-relaxed font-medium">
                Forces a 48-hour empiric guessing window during critical septic escalation.
              </div>
            </div>
          </motion.div>

          {/* Right Card: Direct Telemetric AST (Bactolizer) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#0C0A33] text-white border border-secondary/20 p-6 lg:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-secondary/20 mb-6">
                <div>
                  <span className="font-mono text-xs uppercase text-primary-container tracking-wider font-semibold">
                    BACTOLIZER™ SYSTEM
                  </span>
                  <h3 className="font-headline-md text-2xl font-bold text-white mt-0.5">
                    Direct Telemetric AST
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded font-mono text-xs font-bold bg-primary-container text-[#0C0A33] shadow-md">
                  NEXT-GEN AST
                </span>
              </div>

              {/* Rows */}
              <div className="space-y-4">
                {COMPARISON_ROWS.map((row) => (
                  <div key={row.feature} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-2 border-b border-secondary/10">
                    <span className="font-mono text-xs text-secondary/70">
                      {row.feature}
                    </span>
                    <span className={`font-sans text-sm font-bold ${
                      row.bactolizerHighlight ? 'text-primary-container font-mono text-base' : 'text-white'
                    }`}>
                      {row.bactolizer}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Success Callout */}
            <div className="pt-6 mt-6 border-t border-secondary/20 flex items-start gap-3 p-3 rounded-xl bg-primary-container/10 border border-primary-container/30 relative z-10">
              <CheckCircle2 className="w-5 h-5 text-primary-container shrink-0 mt-0.5" />
              <div className="font-sans text-xs text-primary-container leading-relaxed font-semibold">
                Targeted narrow-spectrum antimicrobial therapy initiated in the same operational shift.
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
