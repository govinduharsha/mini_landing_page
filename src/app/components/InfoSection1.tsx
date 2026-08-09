'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function InfoSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.info-animate');
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
    <section id="info1" ref={sectionRef} className="w-full bg-white py-12 font-['Inter']">
      <div className="max-w-[1152px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="info-animate opacity-100 flex justify-center items-center">
            <div className="relative w-full max-w-[442px] h-[433px] flex items-center justify-center">
              <AppImage
                src="/assets/images/Frame35.png"
                alt="The unseen of spending three years at Pixelgrade"
                width={442}
                height={433}
                className="w-[442px] h-[433px] object-contain opacity-100 rotate-0"
              />
            </div>
          </div>

          <div className="max-w-[601px]">
            <h2 className="info-animate opacity-100 w-full max-w-[601px] text-[36px] font-semibold text-[#4D4D4D] leading-[44px] tracking-[0%] mb-4 opacity-100 rotate-0">
              The unseen of spending three years at Pixelgrade
            </h2>

            <p className="info-animate opacity-100 delay-100 w-full max-w-[601px] text-[14px] font-normal text-[#717171] leading-[20px] tracking-[0%] mb-8 opacity-100 rotate-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>

            <div className="info-animate opacity-100 delay-200">
              <button
                type="button"
                className="w-[151px] h-[52px] bg-[#4CAF4F] hover:bg-[#388E3C] text-white rounded-[4px] py-[14px] px-[32px] gap-[10px] flex items-center justify-center transition-colors duration-200 cursor-pointer opacity-100 rotate-0"
              >
                <span className="w-[87px] h-[24px] text-[16px] font-medium leading-[24px] text-[#FFFFFF] text-center tracking-[0%] flex items-center justify-center">
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