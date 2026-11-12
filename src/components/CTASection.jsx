import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, ArrowRight, Sparkles, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CTASection() {
  const [copied, setCopied] = useState(false);

  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#C8F03C', '#0C0A33', '#140C64', '#FFFFFF']
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('suganth@attoxlabs.com');
    setCopied(true);
    handleConfetti();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="cta" className="w-full bg-[#C8F03C] text-[#0C0A33] px-margin lg:px-margin-desktop py-space-xl lg:py-24 relative overflow-hidden">
      {/* Background Decorative Graphic */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center relative z-10">
        
        {/* Left Column: Headline & Mission */}
        <div className="lg:col-span-8 flex flex-col space-y-space-md">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label-sm text-label-sm uppercase tracking-widest text-[#0C0A33]/70 font-mono font-bold"
          >
            JOIN THE COMBAT AGAINST AMR
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline-xl text-headline-xl lg:text-6xl text-[#0C0A33] font-bold tracking-tight"
          >
            Let's put the right antibiotic in every doctor's hands.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body-lg text-body-lg text-[#0C0A33]/85 max-w-2xl leading-relaxed font-medium"
          >
            Whether you run a clinical ICU microbiology wing, manage agricultural veterinary operations, or seek early-stage biomedical investment, we want to hear from you.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-space-md pt-2"
          >
            <a
              href="mailto:suganth@attoxlabs.com?subject=Inquiry%20regarding%20Bactolizer%20AST"
              onClick={handleConfetti}
              className="px-space-lg py-3 rounded-lg bg-[#0C0A33] text-white font-label-md text-label-md uppercase font-bold tracking-wider hover:bg-[#140C64] active:scale-95 transition-all shadow-xl flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-primary-container" />
              <span>Get in Touch</span>
            </a>

            <button
              onClick={copyEmail}
              className="px-space-lg py-3 rounded-lg bg-[#0C0A33]/15 text-[#0C0A33] font-label-md text-label-md uppercase font-bold tracking-wider hover:bg-[#0C0A33]/25 active:scale-95 transition-all flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-800" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Email Copied!' : 'Copy Direct Email'}</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Founder Contact Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4"
        >
          <div className="p-6 rounded-2xl bg-[#0C0A33] text-white shadow-2xl border border-secondary/20 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-secondary/15">
                <span className="font-mono text-[10px] text-primary-container uppercase tracking-wider font-bold">
                  DIRECT CLINICAL INQUIRIES
                </span>
                <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
              </div>

              <div>
                <span className="font-mono text-xs text-secondary/60 uppercase">
                  Principal Investigator
                </span>
                <h3 className="font-headline-md text-2xl font-bold text-white mt-0.5">
                  Suganth Murugaraj
                </h3>
                <div className="font-mono text-xs text-primary-container">
                  Founder &amp; Chief Investigator
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-secondary/10">
                <a 
                  href="tel:+918220869898" 
                  className="flex items-center gap-2.5 font-mono text-xs text-secondary hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary-container" />
                  <span>+91 82208 69898</span>
                </a>

                <a 
                  href="mailto:suganth@attoxlabs.com" 
                  className="flex items-center gap-2.5 font-mono text-xs text-secondary hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary-container" />
                  <span>suganth@attoxlabs.com</span>
                </a>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-secondary/15 font-mono text-[10px] text-secondary/60 leading-normal">
              Attox Research Laboratories Pvt Ltd <br />
              Tamil Nadu · Cambridge Telemetry Core
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
