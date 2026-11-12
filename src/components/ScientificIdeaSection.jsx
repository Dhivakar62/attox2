import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Waves, Gauge, Activity, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

const DRUG_PRESETS = [
  {
    id: 'cipro',
    name: 'Ciprofloxacin',
    dose: '4 µg/mL',
    status: 'SUSCEPTIBLE',
    deltaZ: '-48.2 Ω',
    color: '#C8F03C',
    borderColor: 'border-[#C8F03C]',
    badgeBg: 'bg-[#C8F03C]/20 text-[#C8F03C]',
    curveD: 'M 50 70 Q 110 75 140 160 T 210 245 L 300 252',
    breakPointX: 210,
    breakPointY: 245,
    dropRate: 'Rapid Depolarization (-92% membrane potential within 80m)',
  },
  {
    id: 'amoxi',
    name: 'Amoxicillin-Clavulanate',
    dose: '8/4 µg/mL',
    status: 'RESISTANT',
    deltaZ: '-2.1 Ω',
    color: '#FF8A5B',
    borderColor: 'border-[#FF8A5B]',
    badgeBg: 'bg-[#FF8A5B]/20 text-[#FF8A5B]',
    curveD: 'M 50 70 Q 140 72 230 75 T 320 80 L 400 85',
    breakPointX: 320,
    breakPointY: 80,
    dropRate: 'Intact Proton Pump (Beta-lactamase degradation bypasses flux)',
  },
  {
    id: 'nitro',
    name: 'Nitrofurantoin',
    dose: '32 µg/mL',
    status: 'INTERMEDIATE',
    deltaZ: '-19.4 Ω',
    color: '#C6C2EB',
    borderColor: 'border-[#C6C2EB]',
    badgeBg: 'bg-[#C6C2EB]/20 text-[#C6C2EB]',
    curveD: 'M 50 70 Q 120 90 190 140 T 280 180 L 360 195',
    breakPointX: 280,
    breakPointY: 180,
    dropRate: 'Partial Depolarization (Slow multi-target ribosomal inhibition)',
  },
];

export default function ScientificIdeaSection() {
  const [selectedDrug, setSelectedDrug] = useState(DRUG_PRESETS[0]);

  return (
    <section id="science" className="w-full bg-[#FFFFFF] text-[#0C0A33] px-margin lg:px-margin-desktop py-space-xl lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col space-y-space-xl">
        
        {/* Headline & Editorial Lead */}
        <div className="max-w-3xl flex flex-col space-y-space-sm">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label-sm text-label-sm text-[#0C0A33]/60 tracking-widest uppercase font-mono"
          >
            Biophysical Paradigm
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline-lg text-headline-lg lg:text-[54px] lg:leading-[60px] text-[#0C0A33] tracking-tight"
          >
            Don't wait for bacteria to grow. <br />
            <span className="italic font-editorial-accent font-normal text-[#0C0A33]/85 text-4xl lg:text-[52px]">
              Listen to them.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body-lg text-body-lg text-[#0C0A33]/80 leading-relaxed"
          >
            Bacteria under effective antimicrobial attack experience immediate ionic membrane collapse and cellular depolarization within tens of minutes—well before visible macroscopic biomass growth stops.
          </motion.p>
        </div>

        {/* 2-Column Core Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          
          {/* Left Column: Biophysical Mechanisms */}
          <div className="lg:col-span-5 flex flex-col space-y-space-md">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl bg-[#F5F4EE] border border-[#0C0A33]/10 hover:border-[#0C0A33]/20 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Zap className="w-4 h-4 text-[#0C0A33]" />
                <h3 className="font-headline-md text-lg font-bold text-[#0C0A33]">
                  Nanoscale Electro-Depolarization
                </h3>
              </div>
              <p className="font-sans text-sm text-[#0C0A33]/80 leading-relaxed">
                When an antibiotic penetrates a susceptible bacterium, the proton motive force fails. Potassium and calcium ion fluxes instantaneously shift the surrounding micro-electrolyte conductance.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 rounded-xl bg-[#F5F4EE] border border-[#0C0A33]/10 hover:border-[#0C0A33]/20 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Waves className="w-4 h-4 text-[#0C0A33]" />
                <h3 className="font-headline-md text-lg font-bold text-[#0C0A33]">
                  Differential Micro-Impedance (ΔZ)
                </h3>
              </div>
              <p className="font-sans text-sm text-[#0C0A33]/80 leading-relaxed">
                Bactolizer sweeps high-frequency AC signals (100 Hz to 10 MHz) across micro-electrodes, tracking real-time phase shift and interfacial capacitance anomalies in native clinical samples without fluorescent dyes.
              </p>
            </motion.div>

            {/* Card 3: Velocity Factor Highlight */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-5 rounded-xl bg-[#0C0A33] text-white shadow-xl relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-primary-container" />
                  <span className="font-mono text-xs uppercase tracking-widest text-secondary/80">
                    Velocity Factor
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-primary-container text-[#0C0A33]">
                  36X FASTER
                </span>
              </div>
              <p className="font-sans text-sm text-secondary/90 leading-relaxed">
                Standard optical OD600 turbidity requires <span className="text-white font-mono font-bold">10^7 cells/mL</span> to register visible cloudiness. Electrical impedance registers membrane flux at just <span className="text-primary-container font-mono font-bold">10^3 cells/mL</span>.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Interactive Telemetry Oscilloscope Graph */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-6 rounded-2xl bg-[#0C0A33] text-white shadow-2xl border border-secondary/20 relative overflow-hidden">
              
              {/* Graph Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-secondary/20">
                <div>
                  <h4 className="font-headline-md text-lg font-bold text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary-container" />
                    Phenotypic Signal Crash vs. Conventional Culture
                  </h4>
                  <div className="font-mono text-xs text-secondary/70 mt-0.5">
                    Real-time Impedance Telemetry (ΔZ/t)
                  </div>
                </div>

                {/* Graph Legend */}
                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-primary-container"></span>
                    <span className="text-primary-container font-bold">Bactolizer (120m)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 border-t border-dashed border-secondary"></span>
                    <span className="text-secondary/70">Standard Agar (48h)</span>
                  </div>
                </div>
              </div>

              {/* Drug Channel Selector Pills */}
              <div className="flex items-center gap-2 my-3">
                <span className="font-mono text-[10px] text-secondary/60 uppercase">
                  Select Channel:
                </span>
                {DRUG_PRESETS.map((drug) => (
                  <button
                    key={drug.id}
                    onClick={() => setSelectedDrug(drug)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                      selectedDrug.id === drug.id
                        ? `${drug.badgeBg} border ${drug.borderColor} font-bold shadow-sm`
                        : 'bg-secondary/10 text-secondary hover:bg-secondary/15'
                    }`}
                  >
                    {drug.name}
                  </button>
                ))}
              </div>

              {/* Main Oscilloscope SVG Canvas */}
              <div className="w-full aspect-[16/9] relative bg-[#0a0731] rounded-xl border border-secondary/15 p-4 flex flex-col justify-between">
                
                {/* SVG Visual Representation */}
                <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="grid-line" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#c6c2eb" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="#c6c2eb" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  <line x1="50" y1="50" x2="570" y2="50" stroke="#313059" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50" y1="120" x2="570" y2="120" stroke="#313059" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50" y1="190" x2="570" y2="190" stroke="#313059" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50" y1="260" x2="570" y2="260" stroke="#454365" strokeWidth="1.5" />

                  {/* Vertical Time Markers */}
                  <line x1="50" y1="30" x2="50" y2="260" stroke="#454365" strokeWidth="1.5" />
                  <line x1="130" y1="30" x2="130" y2="260" stroke="#313059" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="210" y1="30" x2="210" y2="260" stroke="#C8F03C" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="2 2" />
                  <line x1="380" y1="30" x2="380" y2="260" stroke="#313059" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="530" y1="30" x2="530" y2="260" stroke="#313059" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Conventional Standard Agar Curve (Dashed Lavender - slow delayed growth) */}
                  <path
                    d="M 50 255 L 340 255 Q 400 250 460 170 T 560 50"
                    fill="none"
                    stroke="#c6c2eb"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                  />

                  {/* Real-time Bactolizer Curve for selected drug */}
                  <motion.path
                    key={selectedDrug.id}
                    d={selectedDrug.curveD}
                    fill="none"
                    stroke={selectedDrug.color}
                    strokeWidth="3.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />

                  {/* Breakpoint Detection Ring Marker */}
                  <circle
                    cx={selectedDrug.breakPointX}
                    cy={selectedDrug.breakPointY}
                    r="6"
                    fill={selectedDrug.color}
                    className="animate-ping"
                    opacity="0.75"
                  />
                  <circle
                    cx={selectedDrug.breakPointX}
                    cy={selectedDrug.breakPointY}
                    r="4"
                    fill="#0C0A33"
                    stroke={selectedDrug.color}
                    strokeWidth="2.5"
                  />

                  {/* Y-Axis Label Values */}
                  <text x="15" y="55" fill="#8f937b" fontSize="11" fontFamily="JetBrains Mono">100%</text>
                  <text x="22" y="155" fill="#8f937b" fontSize="11" fontFamily="JetBrains Mono">50%</text>
                  <text x="30" y="265" fill="#8f937b" fontSize="11" fontFamily="JetBrains Mono">0%</text>

                  {/* X-Axis Time Labels */}
                  <text x="45" y="285" fill="#c6c2eb" fontSize="11" fontFamily="JetBrains Mono">T0</text>
                  <text x="115" y="285" fill="#c6c2eb" fontSize="11" fontFamily="JetBrains Mono">60m</text>
                  <text x="180" y="285" fill="#c8f03c" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">120m [AST]</text>
                  <text x="365" y="285" fill="#c6c2eb" fontSize="11" fontFamily="JetBrains Mono">24h</text>
                  <text x="495" y="285" fill="#c6c2eb" fontSize="11" fontFamily="JetBrains Mono">48-72h [Agar]</text>
                </svg>

                {/* Floating Callout on Breakpoint */}
                <div className="absolute top-6 right-6 bg-[#140C64]/90 backdrop-blur-md p-3 rounded-xl border border-secondary/25 shadow-xl max-w-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-secondary/70 uppercase">
                      PHENOTYPIC CALL
                    </span>
                    <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${selectedDrug.badgeBg}`}>
                      {selectedDrug.status}
                    </span>
                  </div>
                  <div className="font-mono text-sm text-white font-bold">
                    {selectedDrug.name} ({selectedDrug.dose})
                  </div>
                  <div className="font-mono text-xs text-primary-container font-semibold mt-0.5">
                    Differential ΔZ: {selectedDrug.deltaZ}
                  </div>
                  <div className="text-[11px] text-secondary/80 mt-1">
                    {selectedDrug.dropRate}
                  </div>
                </div>

              </div>

              {/* Graph Bottom Telemetry Bar */}
              <div className="pt-3 border-t border-secondary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-secondary/60">
                <div>Direct Signal Ingestion: Micro-Amperometric Depolarization</div>
                <div className="text-primary-container">Bactolizer Telemetry Core v4.8</div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
