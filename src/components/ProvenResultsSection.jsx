import React from 'react';
import { ArrowRight, Shield, FlaskConical } from 'lucide-react';
import petriImg from '../assets/hd_petri_transparent.png';

export default function ProvenResultsSection() {
  return (
    <section id="our-impact" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Dark Navy Card Container */}
        <div className="bg-[#071330] border border-blue-900/60 rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden text-white">
          
          {/* Subtle Ambient Radial Lighting Inside */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Content Column (4 cols) */}
            <div className="lg:col-span-4 text-left z-10">
              {/* Green Dash Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-8 h-1 bg-[#C8F03C] rounded-full" />
                <span className="text-xs font-bold text-[#C8F03C] tracking-wider uppercase">
                  How It Have Today
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4 font-headline-lg">
                Proven Results.<br />Real Impact.
              </h2>

              {/* Subtitle / Description */}
              <p className="text-blue-200/80 text-base sm:text-lg leading-relaxed mb-8">
                Bactolizer is already making a difference in healthcare and beyond.
              </p>

              {/* CTA Button */}
              <a
                href="#mission"
                className="inline-flex items-center gap-2 bg-[#C8F03C] hover:bg-[#b7e226] active:scale-95 text-[#071330] font-bold text-sm sm:text-base px-6 py-3 rounded-full shadow-lg shadow-lime-400/20 transition-all group"
              >
                <span>View Impact</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Center Column: Two Radial Gauges (4 cols) */}
            <div className="lg:col-span-4 flex items-center justify-center gap-6 sm:gap-8 z-10">
              
              {/* Radial Gauge 1: 92% Bacteria Control */}
              <div className="flex flex-col items-center">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background Track */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-blue-950/80"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    {/* Glowing Progress Arc 92% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#38BDF8"
                      strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 40 * 0.92} ${2 * Math.PI * 40 * 0.08}`}
                      strokeLinecap="round"
                      fill="transparent"
                      className="drop-shadow-[0_0_8px_#38bdf8]"
                    />
                  </svg>

                  {/* Centered Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <Shield className="w-4 h-4 text-cyan-400 mb-0.5" />
                    <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      92%
                    </span>
                  </div>
                </div>

                <span className="text-xs sm:text-sm font-semibold text-blue-200 mt-2 text-center">
                  Bacteria Control
                </span>
              </div>

              {/* Radial Gauge 2: 96% Sterilization Rate */}
              <div className="flex flex-col items-center">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background Track */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-blue-950/80"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    {/* Glowing Progress Arc 96% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#A3E635"
                      strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 40 * 0.96} ${2 * Math.PI * 40 * 0.04}`}
                      strokeLinecap="round"
                      fill="transparent"
                      className="drop-shadow-[0_0_8px_#a3e635]"
                    />
                  </svg>

                  {/* Centered Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <FlaskConical className="w-4 h-4 text-[#a3e635] mb-0.5" />
                    <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      96%
                    </span>
                  </div>
                </div>

                <span className="text-xs sm:text-sm font-semibold text-blue-200 mt-2 text-center">
                  Sterilization Rate
                </span>
              </div>

            </div>

            {/* Right Column: Glowing Petri Dish & Pipette (4 cols) */}
            <div className="lg:col-span-4 flex items-center justify-center relative">
              <div className="relative max-w-[240px] sm:max-w-[280px] w-full transform transition-transform duration-500 hover:scale-105">
                <img
                  src={petriImg}
                  alt="Petri Dish with bacteria and precision pipette"
                  className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                />

                {/* Concentric Animated Droplet Ripple */}
                <div className="absolute top-[40%] right-[32%] w-6 h-6 rounded-full border border-cyan-400/60 animate-ping pointer-events-none" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
