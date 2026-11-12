import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'The Idea', href: '#the-idea' },
    { name: 'Our Impact', href: '#our-impact' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 transition-all duration-300">
      <div className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg border border-white/80 shadow-xl shadow-blue-950/10 py-2.5 px-6' 
          : 'bg-white/80 backdrop-blur-md border border-white/60 shadow-md shadow-blue-900/5 py-3 px-6'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Logo className="h-8 md:h-9" inverted={false} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeNav === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveNav(link.name)}
                  className={`relative text-sm font-medium transition-colors py-1 ${
                    isActive ? 'text-[#0C0A33] font-bold' : 'text-slate-600 hover:text-[#0C0A33]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#84CC16] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#how-it-works"
              className="bg-[#C8F03C] hover:bg-[#b7e226] active:scale-95 text-[#0C0A33] font-semibold text-sm px-5 py-2 rounded-full flex items-center gap-1.5 transition-all shadow-sm hover:shadow-md"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-md mx-auto mt-2 bg-white/95 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl p-5 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveNav(link.name);
                setMobileMenuOpen(false);
              }}
              className={`px-3 py-2 rounded-xl text-base font-medium transition-colors ${
                activeNav === link.name
                  ? 'bg-[#C8F03C]/20 text-[#0C0A33] font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#C8F03C] hover:bg-[#b7e226] text-[#0C0A33] font-semibold text-center py-2.5 rounded-full flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
