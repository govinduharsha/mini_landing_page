'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Service', href: '#features' },
  { label: 'Feature', href: '#info1' },
  { label: 'Product', href: '#stats' },
  { label: 'Testimonial', href: '#testimonial' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F7FA]/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-[#F5F7FA]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-2 group">
            <AppLogo size={32} />
            <span className="font-bold text-xl text-foreground tracking-tight">
              Nexcent
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-muted"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#"
              className="px-5 py-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Login
            </Link>
            <Link
              href="#"
              className="btn-primary text-sm py-2 px-5"
            >
              Sign up
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl flex flex-col pt-20 pb-8 px-6 transition-transform duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-muted"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        <nav className="flex flex-col gap-1 flex-1">
          {navLinks?.map((link) => (
            <Link
              key={link?.label}
              href={link?.href}
              onClick={handleNavClick}
              className="px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors min-h-11 flex items-center"
            >
              {link?.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 pt-6 border-t border-border">
          <Link
            href="#"
            onClick={handleNavClick}
            className="btn-outline text-center justify-center min-h-11"
          >
            Login
          </Link>
          <Link
            href="#"
            onClick={handleNavClick}
            className="btn-primary text-center justify-center min-h-11"
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
}