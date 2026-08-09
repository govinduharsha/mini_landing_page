'use client';

import React from 'react';

export default function Frame16() {
  return (
    <section className="w-full bg-[#F5F7FA] py-[32px] font-['Inter']">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[144px] flex flex-col items-center text-center">
        <h2 className="max-w-[887px] text-[64px] font-semibold leading-[76px] text-[#263238] tracking-[0%] mb-[32px]">
          Pellentesque suscipit fringilla libero eu.
        </h2>

        <button
          type="button"
          className="bg-[#4CAF4F] hover:bg-[#388E3C] text-white text-[16px] font-medium leading-[24px] py-[14px] px-[32px] rounded-[4px] inline-flex items-center gap-[8px] transition-colors duration-200 cursor-pointer shadow-sm"
        >
          <span>Get a Demo</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4L14 8M14 8L10 12M14 8H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}