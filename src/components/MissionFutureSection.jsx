import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import shieldImg from '../assets/hd_shield_transparent.png';
import globeImg from '../assets/hd_clean_globe.png';

export default function MissionFutureSection() {
  const whyPoints = [
    'Ultra-Fast UV-C Technology',
    'Broad Spectrum Protection',
    'Safe & Reliable',
  ];

  return (
    <section id="mission" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Why Bactolizer? */}
          <div className="bg-white/90 backdrop-blur-xl border border-white/80 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-blue-950/5 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
            {/* Ambient Cyan Background Flare */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Content (7 cols) */}
              <div className="sm:col-span-7 text-left">
                {/* Eyebrow Tag */}
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-8 h-1 bg-[#84cc16] rounded-full" />
                  <span className="text-xs font-bold text-[#0C0A33] tracking-wider uppercase">
                    Why Bactolizer?
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-2xl sm:text-3xl font-black text-[#0C0A33] tracking-tight leading-tight mb-5 font-headline-md">
                  A Smarter Choice for a Safer World.
                </h3>

                {/* Bullet Points with Green Checkmarks */}
                <div className="space-y-3 mb-6">
                  {whyPoints.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#84cc16] text-[#0C0A33] flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm font-bold text-slate-800">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 border border-slate-300 hover:border-[#0C0A33] text-[#0C0A33] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all group/btn hover:bg-slate-50"
                >
                  <span>Join Our Mission</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Visual 3D Shield (5 cols) */}
              <div className="sm:col-span-5 flex items-center justify-center relative">
                <div className="relative max-w-[150px] sm:max-w-[170px] w-full transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={shieldImg}
                    alt="3D Glowing Medical Cross Shield"
                    className="w-full h-auto object-contain drop-shadow-xl"
                  />
                  {/* Glowing orbital pulse */}
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl -z-10 animate-pulse pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Where We're Going */}
          <div className="bg-white/90 backdrop-blur-xl border border-white/80 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-blue-950/5 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
            {/* Ambient Blue Background Flare */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Content (7 cols) */}
              <div className="sm:col-span-7 text-left">
                {/* Eyebrow Tag */}
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-8 h-1 bg-[#84cc16] rounded-full" />
                  <span className="text-xs font-bold text-[#0C0A33] tracking-wider uppercase">
                    Where We're Going
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-2xl sm:text-3xl font-black text-[#0C0A33] tracking-tight leading-tight mb-4 font-headline-md">
                  A Healthier Future with Bactolizer.
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  Our mission is to make advanced sterilization accessible everywhere — hospitals, labs and beyond.
                </p>

                {/* CTA Button */}
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 border border-slate-300 hover:border-[#0C0A33] text-[#0C0A33] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all group/btn hover:bg-slate-50"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Visual 3D Holographic Globe (5 cols) */}
              <div className="sm:col-span-5 flex items-center justify-center relative">
                <div className="relative max-w-[190px] sm:max-w-[220px] w-full transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={globeImg}
                    alt="3D Holographic Cyber Globe"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                  {/* Subtle glowing ring aura */}
                  <div className="absolute inset-0 bg-blue-400/25 rounded-full blur-xl -z-10 animate-pulse pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
