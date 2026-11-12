import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Sparkles, X, RotateCcw } from 'lucide-react';
import machinePedestal from '../assets/hd_clean_machine_pedestal.png';
import doctorImg from '../assets/hd_doctor_transparent.png';
import ThermometerCard from './ThermometerCard';
import BactolizerMachine from './BactolizerMachine';

export default function HeroSection() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [showLiveTray, setShowLiveTray] = useState(false);

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* 1. DISTINCT LARGE ELEVATED HERO CARD CONTAINER                 */}
        {/* ============================================================== */}
        <div className="bg-white/90 backdrop-blur-xl border border-white/90 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-2xl shadow-blue-950/10 relative overflow-hidden transition-all duration-300">
          
          {/* Subtle Ambient Refined Background Gradient within Card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-100/60 via-sky-50/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-50/60 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

          {/* ============================================================== */}
          {/* 2. BALANCED THREE-COLUMN HERO GRID COMPOSITION                 */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* ------------------------------------------------------------ */}
            {/* LEFT COLUMN: TEXT CONTENT (5 COLS)                           */}
            {/* ------------------------------------------------------------ */}
            <div className="lg:col-span-5 text-left z-10 flex flex-col justify-center">
              
              {/* Next-Gen Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-cyan-300/60 shadow-sm shadow-blue-900/5 mb-4 w-fit">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-[#0C0A33] tracking-wide">
                  Next-Gen Anti-Bacterial Solution
                </span>
              </div>

              {/* H1 Main Heading */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#0C0A33] tracking-tight leading-[0.95] mb-2 font-headline-xl">
                Bactolizer
              </h1>

              {/* H2 Secondary Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0C0A33] tracking-tight leading-tight mb-4">
                Fighting Bacteria.{' '}
                <span className="text-[#65A30D] block font-black drop-shadow-sm">
                  Smarter. Faster.
                </span>
              </h2>

              {/* Supporting Description */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4 font-normal">
                Advanced UV-C technology to eliminate harmful bacteria and ensure a healthier world.
              </p>

              {/* Clinical Timing Subtext */}
              <p className="text-slate-500 text-xs sm:text-sm leading-normal mb-8">
                Today a doctor waits <strong className="text-slate-800 font-semibold">2–3 days</strong> to identify the right antibiotic. Bactolizer listens to bacteria and gives that answer in <strong className="text-slate-800 font-semibold">about 2 hours</strong>.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#how-it-works"
                  className="bg-[#0C0A33] hover:bg-[#181358] active:scale-95 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full flex items-center gap-2 shadow-lg shadow-blue-950/20 transition-all group"
                >
                  <span>Explore How It Works</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() => setDemoOpen(true)}
                  className="bg-white hover:bg-slate-50 active:scale-95 text-[#0C0A33] font-semibold text-sm sm:text-base px-5 py-3.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-2.5 transition-all hover:shadow-md"
                >
                  <span className="w-6 h-6 rounded-full bg-[#0C0A33] text-white flex items-center justify-center">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </span>
                  <span>Watch Demo</span>
                </button>
              </div>

            </div>

            {/* ------------------------------------------------------------ */}
            {/* CENTER COLUMN: BACTOLIZER MACHINE (4 COLS)                   */}
            {/* ------------------------------------------------------------ */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative my-4 lg:my-0">
              
              {/* Subtle Cyan Pedestal Glow Backdrop */}
              <div className="absolute w-64 h-64 sm:w-72 sm:h-72 bg-cyan-400/20 rounded-full blur-3xl -z-10 pointer-events-none" />

              <div className="relative group max-w-xs sm:max-w-sm md:max-w-md w-full flex flex-col items-center">
                
                {showLiveTray ? (
                  /* Live Animated Machine from index.html */
                  <div className="relative w-full flex items-center justify-center py-2" style={{ '--k': 0.28 }}>
                    <BactolizerMachine />
                  </div>
                ) : (
                  /* Prominent 3D Bactolizer Machine on Pedestal */
                  <div className="relative transform transition-transform duration-500 hover:scale-105">
                    <img
                      src={machinePedestal}
                      alt="Bactolizer Diagnostic Machine on Pedestal"
                      className="w-full h-auto object-contain drop-shadow-2xl"
                      loading="eager"
                    />

                    {/* Animated UV-C Chamber Glow Pulse */}
                    <div 
                      className="absolute top-[28%] left-[23%] w-[24%] h-[32%] rounded-lg bg-cyan-400/30 mix-blend-screen pointer-events-none animate-pulse"
                      style={{ animationDuration: '2s' }}
                    />

                    {/* Subdued Scanning Beam */}
                    <div 
                      className="absolute top-[30%] left-[24%] w-[22%] h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent pointer-events-none animate-bounce"
                      style={{ animationDuration: '3s' }}
                    />
                  </div>
                )}

                {/* Machine Interactive Controls & Status */}
                <div className="mt-3 flex items-center justify-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200/80 text-[11px] font-semibold text-[#0C0A33] shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16] animate-ping" />
                    <span>UV-C Active Cycle Ready</span>
                  </div>

                  <button
                    onClick={() => setShowLiveTray(!showLiveTray)}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 transition-colors flex items-center gap-1"
                    title="Toggle between 3D Model and Live Assay Tray Simulation"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{showLiveTray ? '3D View' : 'Tray Flow'}</span>
                  </button>
                </div>

              </div>

            </div>

            {/* ------------------------------------------------------------ */}
            {/* RIGHT COLUMN: DOCTOR AND THERMOMETER (3 COLS)                */}
            {/* ------------------------------------------------------------ */}
            <div className="lg:col-span-3 flex items-center justify-center lg:justify-end gap-3 sm:gap-4 relative">
              
              {/* Existing 3D Doctor Holding Report */}
              <div className="relative z-10 max-w-[160px] sm:max-w-[185px] lg:max-w-[195px] transform transition-transform duration-500 hover:scale-105">
                <img
                  src={doctorImg}
                  alt="Medical Specialist with Bactolizer Digital Diagnostics"
                  className="w-full h-auto object-contain drop-shadow-xl"
                  loading="eager"
                />
              </div>

              {/* Existing Animated Thermometer Card */}
              <div className="relative z-20 -ml-4 sm:-ml-2 transform transition-transform duration-500 hover:scale-105 hover:-translate-y-1">
                <ThermometerCard />
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ============================================================== */}
      {/* DEMO SIMULATION MODAL WITH LIVE ASSAY WORKFLOW                 */}
      {/* ============================================================== */}
      {demoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0C0A33] text-white border border-cyan-500/30 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative">
            <button
              onClick={() => setDemoOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4 text-cyan-400">
              <Sparkles className="w-5 h-5" />
              <h3 className="text-xl font-bold">Bactolizer 18-Second Automated AST Workflow</h3>
            </div>

            {/* Live Interactive Machine Sequence inside modal */}
            <div className="bg-slate-950/80 rounded-2xl p-4 border border-cyan-500/20 mb-5 flex items-center justify-center overflow-hidden" style={{ minHeight: '340px' }}>
              <div style={{ '--k': 0.32 }}>
                <BactolizerMachine />
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-2xl p-4 border border-white/10 mb-5 space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C8F03C] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300"><strong className="text-white">Automated Tray & Plate Loading:</strong> Sample plate is placed directly into the intake guide rails without centrifugation.</p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300"><strong className="text-white">Active Impedance Analysis:</strong> AC excitation sweep measures ion flux changes and bacterial membrane response in ~2 hours.</p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setDemoOpen(false)}
                className="bg-[#C8F03C] hover:bg-[#b7e226] text-[#0C0A33] font-bold text-sm px-6 py-2.5 rounded-full shadow-md"
              >
                Close Simulation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
