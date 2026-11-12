import React from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative bg-[#050C24] text-white pt-16 pb-12 overflow-hidden mt-12">
      {/* Top Wave Divider SVG with Glowing Accent Stroke */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-10 sm:h-14"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,0 L0,0 Z"
            fill="transparent"
          />
          {/* Glowing Top Wave Accent Line */}
          <path
            d="M0,30 Q300,90 600,30 T1200,40"
            fill="none"
            stroke="url(#wave-gradient)"
            strokeWidth="3"
            className="opacity-80"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#C8F03C" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        {/* Upper Row: Logo + Slogan + CTA + Socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-10 border-b border-blue-900/50">
          
          {/* Logo & Headline */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <Logo className="h-9 sm:h-10" inverted={true} />
            
            <div className="hidden sm:block h-10 w-px bg-white/20" />

            <div>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Let's Build a Healthier, Safer World Together
              </h4>
              <p className="text-xs sm:text-sm text-blue-200/70">
                Experience the next generation of antibacterial technology.
              </p>
            </div>
          </div>

          {/* Action Button & Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#how-it-works"
              className="bg-[#C8F03C] hover:bg-[#b7e226] active:scale-95 text-[#0C0A33] font-bold text-sm px-6 py-2.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-lime-400/20 transition-all"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            {/* Social Icons matching Reference Image 1 */}
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors text-xs font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors text-xs font-bold"
                aria-label="X (Twitter)"
              >
                𝕏
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Row: Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300/60 text-center sm:text-left">
          <p>© 2025 Attox. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
