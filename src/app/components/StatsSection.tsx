'use client';

import React from 'react';

const stats = [
  {
    icon: '/assets/images/(b1).png',
    count: '2,245,341',
    label: 'Members',
  },
  {
    icon: '/assets/images/(b2).png',
    count: '46,328',
    label: 'Clubs',
  },
  {
    icon: '/assets/images/(b3).png',
    count: '828,867',
    label: 'Event Bookings',
  },
  {
    icon: '/assets/images/(b4).png',
    count: '1,926,436',
    label: 'Payments',
  },
];

export default function AchievementsSection() {
  return (
    <section className="w-full bg-[#F5F7FA] py-16 font-['Inter']">
      <div className="max-w-360 mx-auto px-6 lg:px-36 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-135">
          <h2 className="text-[36px] font-semibold text-[#4D4D4D] leading-11 mb-2">
            Helping a local <br />
            <span className="text-[#4CAF4F]">business reinvent itself</span>
          </h2>
          <p className="text-[16px] font-normal text-[#18191F] leading-6">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-10 w-full max-w-135">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-12 h-12 object-contain shrink-0"
              />
              <div>
                <h3 className="text-[28px] font-bold text-[#4D4D4D] leading-9">
                  {stat.count}
                </h3>
                <p className="text-[16px] font-normal text-[#717171] leading-6">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}