'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function InfoSection2() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.info2-animate');
            els.forEach((el, i) => {
              setTimeout(() => el.classList.add('fade-in-up'), i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer?.observe(section);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-12 font-['Inter']">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="info2-animate opacity-100 flex justify-center items-center">
            <div className="relative w-full max-w-110.25 h-108.25 flex items-center justify-center">
              <AppImage
                src="/assets/images/pana.png"
                alt="How to design your site footer like we did"
                width={441}
                height={433}
                className="w-full h-auto object-contain opacity-100 rotate-0"
              />
            </div>
          </div>

          <div className="max-w-150.25">
            <h2 className="info2-animate opacity-100 w-full max-w-150.25 text-[36px] font-semibold text-[#4D4D4D] leading-11 tracking-normal mb-4">
              How to design your site footer like we did
            </h2>
            <p className="info2-animate opacity-100 delay-100 w-full max-w-150.25 text-[14px] font-normal text-[#717171] leading-5 tracking-normal mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In suscipit augue vitae nisi ultricies, nec aliquet urna tincidunt. Integer in ipsum sed odio suscipit bibendum. Fusce dictum laoreet odio nec bibendum. Praesent felis leo, tincidunt et nisl ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            <div className="info2-animate opacity-100 delay-200">
              <button
                type="button"
                className="w-37.75 h-13 bg-[#4CAF4F] hover:bg-[#388E3C] text-white rounded-sm py-3.5 px-8 gap-2.5 flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <span className="w-21.75 h-6 text-[16px] font-medium leading-6 text-[#FFFFFF] text-center tracking-normal flex items-center justify-center">
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}