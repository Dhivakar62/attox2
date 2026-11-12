import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Milk, ShieldCheck, HeartPulse, ArrowUpRight } from 'lucide-react';

export default function ApplicationsSection() {
  return (
    <section id="applications" className="w-full bg-[#EAE9F5] text-[#0C0A33] px-margin lg:px-margin-desktop py-space-xl lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col space-y-space-xl">
        
        {/* Headline */}
        <div className="max-w-3xl flex flex-col space-y-space-xs">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label-sm text-label-sm text-[#0C0A33]/60 tracking-widest uppercase font-mono"
          >
            Translational Scope
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline-lg text-headline-lg lg:text-[54px] lg:leading-[60px] text-[#0C0A33] tracking-tight"
          >
            Built for hospitals and clinics, <br className="hidden sm:inline" />
            <span className="italic font-editorial-accent font-normal text-[#0C0A33]/85 text-4xl lg:text-[52px]">
              and for farms too.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body-lg text-body-lg text-[#0C0A33]/80 leading-relaxed pt-1"
          >
            A One-Health biophysical sensing architecture deployed where minutes dictate clinical outcomes and food safety.
          </motion.p>
        </div>

        {/* Two Editorial Image-Led Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-desktop">
          
          {/* Card 1: Vector 01 // Human Health */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#0C0A33]/10 flex flex-col justify-between group hover:shadow-xl transition-all"
          >
            <div>
              {/* Photo */}
              <div className="w-full aspect-[16/10] overflow-hidden relative bg-[#0C0A33]">
                <img 
                  alt="Doctor reviewing bedside telemetry in modern ICU" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHhJ9zzmqjsuyZ5qpERiaY-_v5EMvXBQsid85jO4ZS_JiEYat9Ma7R9Ivp_DE9SEtjcVP7t5tmSjdM4gIFc5YOB45T3szd13f2ItwekOQJTjUXGZ30Atxb9GAS-J-OF7Mlf3cDDrw4ZmyAsUhHgxr0iGg4Y-DWt70gfqFaoTUyIgjPtC03BctJQorc7RfR4ha2wJhXLkd6Td2lv3X5Uy_lDWHMeXs3uK_JWubpiQ0" 
                />
                <div className="absolute top-4 left-4 bg-[#0C0A33]/85 backdrop-blur-md px-3 py-1 rounded-full text-white font-mono text-[10px] uppercase tracking-wider flex items-center gap-1.5 border border-white/10">
                  <HeartPulse className="w-3.5 h-3.5 text-primary-container" />
                  <span>Vector 01 // Human Health</span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 lg:p-8 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#0C0A33]/60">
                  ICU, Emergency & Sepsis Units
                </span>
                <h3 className="font-headline-md text-2xl font-bold text-[#0C0A33]">
                  Urinary Tract Infections & Sepsis Escalation
                </h3>
                <p className="font-sans text-sm text-[#0C0A33]/80 leading-relaxed">
                  Catheter-associated urinary tract infections and septic shock require rapid de-escalation from broad-spectrum carbapenems. Bactolizer confirms targeted narrow-spectrum options within two hours of admission.
                </p>
              </div>
            </div>

            {/* Bottom Stat Badge */}
            <div className="px-6 lg:px-8 pb-6 pt-2">
              <div className="p-3 rounded-xl bg-[#0C0A33] text-white flex items-center justify-between">
                <div className="font-mono text-xs text-secondary/80">
                  Prospective Cohort Study:
                </div>
                <div className="font-mono text-xs font-bold text-primary-container flex items-center gap-1">
                  <span>15,000 Patient Target</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Vector 02 // Agri & One-Health */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#0C0A33]/10 flex flex-col justify-between group hover:shadow-xl transition-all"
          >
            <div>
              {/* Photo */}
              <div className="w-full aspect-[16/10] overflow-hidden relative bg-[#0C0A33]">
                <img 
                  alt="Veterinary technician testing raw bovine milk" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsfykR-_XCPU-bM0xt4LJes92kypwKN5NGPtGgOeYd90OfHTPoGMMndXqEkG804umhPMnvbiNxARaW2xCcgrODQj3ChHkTmL6JlRBBqJyqss_NR88wzGTD-Cni_on-bjz-xk7ffUsatiUO8Oc6ObC-N3xnX7DGiPYllaCkWHjB5FsicUU683HHLl1fx9YPAn6S6a7_BSlB327FRjZnxqev85NFEaJkbaGa3qH9slI" 
                />
                <div className="absolute top-4 left-4 bg-[#0C0A33]/85 backdrop-blur-md px-3 py-1 rounded-full text-white font-mono text-[10px] uppercase tracking-wider flex items-center gap-1.5 border border-white/10">
                  <Milk className="w-3.5 h-3.5 text-primary-container" />
                  <span>Vector 02 // Agri & One-Health</span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 lg:p-8 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#0C0A33]/60">
                  Dairy Herds & Agricultural Cooperatives
                </span>
                <h3 className="font-headline-md text-2xl font-bold text-[#0C0A33]">
                  Bovine Mastitis & Milk Supply Protection
                </h3>
                <p className="font-sans text-sm text-[#0C0A33]/80 leading-relaxed">
                  Over 70% of dairy farm antibiotic usage is blind empirical mastitis treatment. Field technicians run direct raw milk samples at milking parlors to isolate resistant staphylococci and eliminate chemical residues in commercial milk.
                </p>
              </div>
            </div>

            {/* Bottom Stat Badge */}
            <div className="px-6 lg:px-8 pb-6 pt-2">
              <div className="p-3 rounded-xl bg-[#0C0A33] text-white flex items-center justify-between">
                <div className="font-mono text-xs text-secondary/80">
                  Agricultural Safety:
                </div>
                <div className="font-mono text-xs font-bold text-primary-container flex items-center gap-1">
                  <span>Zero-Residue Milk Cleared</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
