'use client';

import { useState, useEffect } from 'react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-white font-extrabold text-xl tracking-tight">
          <span className="text-amber-400">Eleventh</span>Media
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-slate-300 hover:text-white text-sm font-medium transition">How It Works</a>
          <a href="#services" className="text-slate-300 hover:text-white text-sm font-medium transition">Services</a>
          <a href="#why-us" className="text-slate-300 hover:text-white text-sm font-medium transition">Why Us</a>
          <a href="#faq" className="text-slate-300 hover:text-white text-sm font-medium transition">FAQ</a>
        </div>

        <button
          onClick={scrollToForm}
          className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:scale-105"
        >
          Get More Leads
        </button>
      </div>
    </nav>
  );
}
