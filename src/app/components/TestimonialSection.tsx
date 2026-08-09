'use client';

import React from 'react';

const clientLogos = [
  { name: 'Logo 1', icon: '/assets/images/(1).png' },
  { name: 'Logo 2', icon: '/assets/images/(2).png' },
  { name: 'Logo 3', icon: '/assets/images/(3).png' },
  { name: 'Logo 4', icon: '/assets/images/(4).png' },
  { name: 'Logo 5', icon: '/assets/images/(5).png' },
  { name: 'Logo 6', icon: '/assets/images/(6).png' },
];

export default function CustomerSection() {
  return (
    <section className="w-full bg-[#F5F7FA] py-8 font-['Inter']">
      <div className="max-w-360 mx-auto px-6 lg:px-36 flex flex-col lg:flex-row items-center gap-19.5">
        <div className="w-81.5 h-81.5 shrink-0 rounded-lg overflow-hidden shadow-md flex items-center justify-center bg-black">
          <img
            src="/assets/images/image9.png"
            alt="Customer Logo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <p className="text-[16px] font-medium leading-6 text-[#717171] mb-4">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim met. Vivamus sed augue vitae enim sollicitudin ultrices. Cras sem leo, mattis ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque urna dui, tristique ac dui quis, pharetra molestie sem. Morbi sed ligula imperdiet, varius sodales magna pretium, tincidunt urna. Vivamus at urna magna.
          </p>

          <h4 className="text-[20px] font-semibold leading-7 text-[#4CAF4F] mb-1">
            Tim Smith
          </h4>

          <p className="text-[14px] font-normal leading-5 text-[#89939E] mb-8">
            British Dragon Boat Racing Association
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-2">
            <div className="flex items-center gap-8 flex-wrap">
              {clientLogos.map((client, index) => (
                <img
                  key={index}
                  src={client.icon}
                  alt={client.name}
                  className="w-12 h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>

            <a
              href="#"
              className="flex items-center gap-2 text-[20px] font-semibold text-[#4CAF4F] hover:text-[#388E3C] transition-colors"
            >
              <span>Meet all customers</span>
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
      </div>
    </section>
  );
}