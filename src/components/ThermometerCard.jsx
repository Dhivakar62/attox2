import React, { useState, useEffect } from 'react';

export default function ThermometerCard() {
  const [temp, setTemp] = useState(36.8);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Subtle realistic biological temperature micro-fluctuation between 36.7 and 36.9
      setTemp((36.8 + (Math.sin(Date.now() / 1500) * 0.1)).toFixed(1));
      setPulse(p => !p);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-[#1e3a8a]/70 to-[#0f172a]/80 backdrop-blur-md border border-cyan-400/40 rounded-2xl p-3.5 shadow-2xl shadow-cyan-950/40 flex flex-col items-center select-none w-28 sm:w-32 animate-in fade-in duration-700">
      {/* Glow aura */}
      <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-400/20 to-lime-400/20 rounded-2xl blur-sm -z-10" />

      {/* Temperature Readout */}
      <div className="text-center mb-3">
        <div className="text-white text-base sm:text-lg font-black tracking-tight drop-shadow-sm flex items-center justify-center">
          <span>{temp}</span>
          <span className="text-xs font-semibold ml-0.5">°C</span>
        </div>
        <div className="text-[#86efac] text-[11px] font-bold tracking-wider uppercase">
          Normal
        </div>
      </div>

      {/* Physical Glass Thermometer Stem & Bulb */}
      <div className="relative flex flex-col items-center">
        {/* Glass Capillary Stem */}
        <div className="relative w-4 h-32 sm:h-36 bg-white/20 rounded-full p-0.5 border border-white/50 shadow-inner flex flex-col justify-end overflow-hidden">
          {/* Internal Glowing Green Fluid Column */}
          <div 
            className="w-full bg-gradient-to-t from-[#84cc16] via-[#a3e635] to-[#bef264] rounded-full transition-all duration-1000 relative shadow-[0_0_12px_#a3e635]"
            style={{ height: '68%' }}
          >
            {/* Fluid Meniscus Highlight */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/90 rounded-full shadow-sm" />
            
            {/* Internal light sheen */}
            <div className="absolute inset-y-0 left-0.5 w-1 bg-white/40 rounded-full" />
          </div>

          {/* Graduated Tick Marks on the stem */}
          <div className="absolute inset-y-2 right-0.5 flex flex-col justify-between pointer-events-none opacity-70">
            <span className="w-1.5 h-0.5 bg-white rounded-full"></span>
            <span className="w-1 h-0.5 bg-white/70 rounded-full"></span>
            <span className="w-1.5 h-0.5 bg-white rounded-full"></span>
            <span className="w-1 h-0.5 bg-white/70 rounded-full"></span>
            <span className="w-1.5 h-0.5 bg-white rounded-full"></span>
            <span className="w-1 h-0.5 bg-white/70 rounded-full"></span>
          </div>

          {/* Glass specular glare along tube */}
          <div className="absolute inset-y-0 left-0.5 w-1 bg-gradient-to-r from-white/60 to-transparent pointer-events-none rounded-full" />
        </div>

        {/* Bottom Rounded Reservoir Bulb */}
        <div className="relative -mt-1.5 w-8 h-8 rounded-full bg-gradient-to-br from-[#bef264] via-[#84cc16] to-[#4d7c0f] border-2 border-white/60 shadow-[0_0_16px_#a3e635] flex items-center justify-center">
          {/* Bulb internal glow */}
          <div className="w-4 h-4 rounded-full bg-white/50 blur-[2px]" />
          {/* Glass highlight */}
          <div className="absolute top-1 left-1.5 w-2.5 h-1.5 rounded-full bg-white/80 transform -rotate-45" />
        </div>
      </div>
    </div>
  );
}
