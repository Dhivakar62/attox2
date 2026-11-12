import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IdeaSection from './components/IdeaSection';
import HowItWorksSection from './components/HowItWorksSection';
import ProvenResultsSection from './components/ProvenResultsSection';
import MissionFutureSection from './components/MissionFutureSection';
import Footer from './components/Footer';
import labBg from './assets/lab_bg_clean.jpg';

export default function App() {
  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-[#C8F03C] selection:text-[#0C0A33] overflow-x-hidden bg-[#071330]">
      {/* 1. Global Laboratory Background from Reference Image 2 (Cleaned) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={labBg}
          alt="Attox Futuristic Laboratory Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft atmospheric gradient wash matching Reference Image 1:
            Luminous frosty cyan-white at the Hero for high-contrast readability,
            subtle blue laboratory glow in the center,
            deep midnight navy at the base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EBF3FC]/90 via-[#DCEBFC]/50 via-40% to-[#050C24]/90" />
      </div>

      {/* 2. Floating Frosted Glass Header */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* 3. Main Content Sections Recreated Exactly as Reference Image 1 */}
      <main className="w-full flex-1 relative z-10">
        {/* Hero: Bactolizer Hardware Deck + 3D Doctor + Glowing Thermometer */}
        <HeroSection />

        {/* The Idea: Harnessing the Power of UV-C Technology + 75% & 99.9% Beakers */}
        <IdeaSection />

        {/* How It Works: A Simple Process. A Healthier Tomorrow (01 Detect, 02 Eliminate, 03 Stay Safe) */}
        <HowItWorksSection />

        {/* Proven Results: Real Impact (92% Bacteria Control, 96% Sterilization Rate, Petri Dish & Pipette) */}
        <ProvenResultsSection />

        {/* Why Bactolizer & Where We're Going: Dual Side-by-Side Cards (Shield & Cyber Globe) */}
        <MissionFutureSection />
      </main>

      {/* 4. Deep Navy Curved Wave Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
