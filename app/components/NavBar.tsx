'use client';

import { useState, useEffect } from 'react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#results', label: 'Results' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#1e1e1e]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center group">
          <span className="font-barlow text-2xl font-bold tracking-widest text-[#f59e0b] group-hover:text-[#fbbf24] transition-colors">
            ELEVENTH
          </span>
          <span className="font-barlow text-2xl font-bold tracking-widest text-white">
            MEDIA
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#737373] hover:text-[#f59e0b] text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#get-started"
            className="btn-pulse inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#080808] font-bold text-sm px-5 py-2.5 rounded transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          >
            Book Free Strategy Call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#737373] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-b border-[#1e1e1e]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#a3a3a3] hover:text-[#f59e0b] text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setMenuOpen(false)}
              className="inline-block bg-[#f59e0b] text-[#080808] font-bold text-sm px-5 py-3 rounded text-center"
            >
              Book Free Strategy Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
