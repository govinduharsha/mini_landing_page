'use client';

import React from 'react';

const updates = [
  {
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    image: '/assets/images/image18.png',
    link: '#',
  },
  {
    title:
      'What are your safeguarding responsibilities and how can you manage them?',
    image: '/assets/images/image19.png',
    link: '#',
  },
  {
    title: 'Revamping the Membership Model with Triathlon Australia',
    image: '/assets/images/image20.png',
    link: '#',
  },
];

export default function CommunityUpdates() {
  return (
    <section className="w-full bg-white py-12 font-['Inter']">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[144px]">
        <div className="text-center max-w-[1110px] mx-auto mb-[16px]">
          <h2 className="text-[36px] font-semibold leading-[44px] text-[#4D4D4D] tracking-[0%] mb-2">
            Caring is the new market
          </h2>
          <p className="text-[16px] font-normal leading-[24px] text-[#717171] tracking-[0%] max-w-[628px] mx-auto">
            The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who’s joining the community, read about how others are increasing their membership income and lot’s more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 pb-12">
          {updates.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-start group cursor-pointer mb-12 md:mb-0"
            >
              <div className="w-full h-[286px] rounded-[8px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="absolute -bottom-[48px] w-[calc(100%-48px)] bg-[#F5F7FA] rounded-[8px] p-4 text-center shadow-[0px_8px_16px_rgba(171,190,209,0.4)] flex flex-col items-center justify-between min-h-[176px] z-10 transition-shadow duration-300 group-hover:shadow-xl">
                <h3 className="text-[20px] font-semibold leading-[28px] text-[#717171] mb-4">
                  {item.title}
                </h3>

                <a
                  href={item.link}
                  className="inline-flex items-center justify-center gap-2 text-[20px] font-semibold leading-[28px] text-[#4CAF4F] hover:text-[#388E3C] transition-colors"
                >
                  <span>Readmore</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 12L10 18M16 12L10 6M16 12H3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}