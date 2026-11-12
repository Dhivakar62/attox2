import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, GraduationCap, Hospital, Award } from 'lucide-react';

const PARTNERS = [
  {
    role: 'INCUBATION',
    name: 'IIT Bombay',
    desc: 'TIH Foundation for IoT & IoE',
    icon: Landmark,
    accent: 'text-primary-container',
  },
  {
    role: 'GRANT SUPPORT',
    name: 'ATMAN 3.0',
    desc: 'Department of Science & Tech',
    icon: Award,
    accent: 'text-cyan-400',
  },
  {
    role: 'BIO-INCUBATOR',
    name: 'TBI-KEC',
    desc: 'Technology Business Hub',
    icon: Building2,
    accent: 'text-amber-400',
  },
  {
    role: 'CLINICAL SITE',
    name: 'Sri Krishna Hospital',
    desc: 'Tertiary Sepsis Registry, Erode',
    icon: Hospital,
    accent: 'text-emerald-400',
  },
  {
    role: 'ACADEMIC RESEARCH',
    name: 'Karpagam Academy',
    desc: 'Higher Education & Bio-Lab',
    icon: GraduationCap,
    accent: 'text-indigo-400',
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="w-full bg-[#F5F4EE] text-[#0C0A33] px-margin lg:px-margin-desktop py-space-xl lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col space-y-space-xl">
        
        {/* Headline & Introduction */}
        <div className="max-w-2xl flex flex-col space-y-space-xs">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label-sm text-label-sm text-[#0C0A33]/60 tracking-widest uppercase font-mono"
          >
            Institutional Network
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline-lg text-headline-lg lg:text-[54px] lg:leading-[60px] text-[#0C0A33] tracking-tight"
          >
            Progress powered by collaboration.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body-lg text-body-lg text-[#0C0A33]/80 leading-relaxed pt-1"
          >
            Developed in close partnership with premier Indian technical institutes, governmental bio-innovation grant initiatives, and tertiary clinical healthcare networks.
          </motion.p>
        </div>

        {/* 5-Column Institutional Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PARTNERS.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white border border-[#0C0A33]/10 hover:border-[#0C0A33]/30 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-[#0C0A33]/60 tracking-widest uppercase font-bold">
                      {partner.role}
                    </span>
                    <Icon className="w-5 h-5 text-[#0C0A33]/50 group-hover:text-[#0C0A33] transition-colors" />
                  </div>
                  <h3 className="font-headline-md text-lg font-bold text-[#0C0A33] mb-1">
                    {partner.name}
                  </h3>
                  <p className="font-sans text-xs text-[#0C0A33]/70 leading-relaxed">
                    {partner.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#0C0A33]/10 font-mono text-[10px] text-[#0C0A33]/50">
                  Active Collaboration
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
