import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import beakersImg from '../assets/hd_asset_beakers.png';

export default function IdeaSection() {
  const [activeBeaker, setActiveBeaker] = useState(null);

  return (
    <section id="the-idea" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Elevated Card Container */}
        <div className="bg-white/85 backdrop-blur-xl border border-white/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl shadow-blue-950/5 relative overflow-hidden transition-all duration-300">
          
          {/* Subtle Ambient Background Gradient Inside Card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-100/50 via-lime-100/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column (5 cols) */}
            <div className="lg:col-span-5 text-left">
              {/* Green Dash Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-8 h-1 bg-[#84cc16] rounded-full" />
                <span className="text-sm font-bold text-[#0C0A33] tracking-wider uppercase">
                  The Idea
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0C0A33] tracking-tight leading-tight mb-5 font-headline-lg">
                Harnessing the Power of UV-C Technology.
              </h2>

              {/* Subtitle / Description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                Our innovative approach uses ultraviolet light to break down bacteria's DNA, stopping their growth and spread.
              </p>

              {/* CTA Button */}
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 bg-[#0C0A33] hover:bg-[#181358] active:scale-95 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-blue-950/20 transition-all group"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right Visual Column: Dual Beakers with Liquid Metrics (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Composite Beakers Stage from Reference */}
                <div className="relative rounded-2xl overflow-hidden group">
                  <img
                    src={beakersImg}
                    alt="Laboratory Beakers demonstrating 75% Bacteria Reduction and 99.9% Sterilization Efficiency"
                    className="w-full h-auto object-contain drop-shadow-xl"
                  />

                  {/* Interactive Wave Overlays for 75% Blue Beaker */}
                  <div 
                    onMouseEnter={() => setActiveBeaker('blue')}
                    onMouseLeave={() => setActiveBeaker(null)}
                    className="absolute top-[18%] left-[23%] w-[27%] h-[60%] cursor-pointer group/blue"
                    title="75% Bacteria Reduction"
                  >
                    {/* Hover Pulse Glow */}
                    <div className="absolute inset-0 bg-cyan-400/10 rounded-lg group-hover/blue:bg-cyan-400/20 transition-colors pointer-events-none" />
                  </div>

                  {/* Interactive Wave Overlays for 99.9% Green Beaker */}
                  <div 
                    onMouseEnter={() => setActiveBeaker('green')}
                    onMouseLeave={() => setActiveBeaker(null)}
                    className="absolute top-[18%] right-[23%] w-[27%] h-[60%] cursor-pointer group/green"
                    title="99.9% Sterilization Efficiency"
                  >
                    {/* Hover Pulse Glow */}
                    <div className="absolute inset-0 bg-lime-400/10 rounded-lg group-hover/green:bg-lime-400/20 transition-colors pointer-events-none" />
                  </div>
                </div>

                {/* Subtext info under the beakers */}
                <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    Rapid Cellular Lysis
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#84cc16]" />
                    99.9% DNA Inactivation
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
