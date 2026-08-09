'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;
    const els = section?.querySelectorAll('.animate-on-enter');
    els?.forEach((el) => el?.classList?.add('fade-in-up'));
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="bg-[#F5F7FA] min-h-[calc(100vh-4rem)] flex items-center pt-16"
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center justify-center">
          <div className="max-w-164.25 mx-auto lg:mx-0 lg:mr-auto">
            <h1 className="animate-on-enter text-[64px] font-semibold leading-19 tracking-normal text-[#2B2D2F] mb-4">
              <span className="block">Lessons and insights</span>
              <span className="block text-[#3DBE73]">from 8 years</span>
            </h1>

            <p className="animate-on-enter text-[16px] font-normal leading-6 tracking-normal text-[#717171] max-w-164.25 mb-8">
              Where to grow your business as a photographer: site or social media?
            </p>

            <div className="animate-on-enter">
              <button className="bg-[#3DBE73] text-white text-base font-medium rounded-md px-8 py-3.5 shadow-sm transition hover:opacity-95">
                Register
              </button>
            </div>
          </div>

          <div className="animate-on-enter flex justify-center lg:justify-end">
            <div className="relative w-full max-w-125">
              <AppImage
                src="/assets/images/illustration.png"
                alt="Hero illustration"
                width={700}
                height={520}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center items-center">
          <div className="flex items-center gap-3">
            <span className="block h-2.5 w-2.5 rounded-full bg-[#3DBE73]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#B8B8B8]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#B8B8B8]" />
          </div>
        </div>
      </div>
    </section>
  );
}