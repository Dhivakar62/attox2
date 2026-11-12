import React from 'react';
import { ArrowRight, Search, ShieldCheck, Heart } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      numberBg: 'bg-blue-600 text-white',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
      icon: Search,
      title: 'Detect',
      description: 'Identify harmful bacteria',
    },
    {
      number: '02',
      numberBg: 'bg-[#84cc16] text-[#0C0A33]',
      iconBg: 'bg-lime-50 text-[#65a30d] border-lime-100',
      icon: ShieldCheck,
      title: 'Eliminate',
      description: 'Destroy with UV-C technology',
    },
    {
      number: '03',
      numberBg: 'bg-amber-500 text-white',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
      icon: Heart,
      title: 'Stay Safe',
      description: 'Enjoy a cleaner, healthier environment',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Elevated Card Container */}
        <div className="bg-white/85 backdrop-blur-xl border border-white/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl shadow-blue-950/5 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column (5 cols) */}
            <div className="lg:col-span-5 text-left">
              {/* Green Dash Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-8 h-1 bg-[#84cc16] rounded-full" />
                <span className="text-sm font-bold text-[#0C0A33] tracking-wider uppercase">
                  How It Works
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0C0A33] tracking-tight leading-tight mb-5 font-headline-lg">
                A Simple Process. A Healthier Tomorrow.
              </h2>

              {/* Subtext description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                Bactolizer uses powerful UV-C light to destroy bacteria, ensuring maximum safety and hygiene.
              </p>

              {/* CTA Button */}
              <a
                href="#proven-results"
                className="inline-flex items-center gap-2 border border-slate-300 hover:border-[#0C0A33] text-[#0C0A33] font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-all group hover:bg-slate-50"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right Flow Column: 3 Connected Cards (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <React.Fragment key={step.number}>
                      {/* Individual Step Card */}
                      <div className="relative bg-white/95 rounded-2xl p-6 border border-slate-100 shadow-md shadow-blue-900/5 flex flex-col items-center text-center w-full sm:w-44 group hover:-translate-y-1 transition-transform duration-300">
                        {/* Floating Number Badge on top */}
                        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full ${step.numberBg} text-[11px] font-black flex items-center justify-center shadow-sm`}>
                          {step.number}
                        </div>

                        {/* Circular Icon Container */}
                        <div className={`w-14 h-14 rounded-full ${step.iconBg} border flex items-center justify-center mb-4 mt-2 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 stroke-[2.2]" />
                        </div>

                        {/* Step Title */}
                        <h3 className="text-lg font-bold text-[#0C0A33] mb-1">
                          {step.title}
                        </h3>

                        {/* Step Description */}
                        <p className="text-xs text-slate-500 leading-snug">
                          {step.description}
                        </p>
                      </div>

                      {/* Connecting Arrow between cards (hidden on mobile, shown on sm+) */}
                      {index < steps.length - 1 && (
                        <div className="hidden sm:flex items-center text-slate-400 font-bold shrink-0">
                          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
