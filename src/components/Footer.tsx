'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';


export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-[#2B3B3D] text-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_0.8fr_0.8fr_1.3fr] gap-10 lg:gap-12 items-start">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-7">
              <AppLogo width={43.27129364013672} height={29.671743392944336} size={29.671743392944336} className="leading-none" />
              <span className="font-bold text-4xl leading-none tracking-tight">Nexcent</span>
            </div>

            <p className="text-lg text-white/80 leading-relaxed mb-2">Copyright © 2020 Nexcent Itd.</p>
            <p className="text-lg text-white/80 leading-relaxed mb-8">All rights reserved</p>

            <div className="flex items-center gap-3">
              {[
                { label: 'Instagram', image: '/assets/images/insta.png' },
                { label: 'Dribbble', image: '/assets/images/dribble.png' },
                { label: 'Twitter', image: '/assets/images/twitter.png' },
                { label: 'YouTube', image: '/assets/images/youtube.png' }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-[#3B4346] border border-white/10 flex items-center justify-center text-white/80 hover:opacity-90 transition-opacity"
                >
                  {social.image ? (
                    <img src={social.image} alt={social.label} className="w-4 h-4 object-cover" />
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d={(social as any).path} />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-[1.1rem] mb-7">Company</h4>
            <ul className="space-y-4 text-[0.95rem] text-white/80">
              {['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-[1.1rem] mb-7">Support</h4>
            <ul className="space-y-4 text-[0.95rem] text-white/80">
              {['Help center', 'Terms of service', 'Legal', 'Privacy policy', 'Status'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-1">
            <h4 className="font-semibold text-white text-[1.1rem] mb-7">Stay up to date</h4>
            <form onSubmit={handleSubscribe} className="flex items-center bg-[#C9C9C9] rounded-[14px] overflow-hidden max-w-[20rem] w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 min-w-0 bg-[#D9DBE1] border-0 text-[#2B3B3D] placeholder:text-[#4D5757] text-base px-5 py-3.5 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-transparent p-3 pr-4 text-[#2B3B3D] hover:opacity-80 transition-opacity flex items-center justify-center"
                aria-label="Subscribe"
              >
                <img src="/assets/images/send.png" alt="Send" className="w-4.5 h-4.5 object-contain" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}