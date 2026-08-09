import React from 'react';

const communityCards = [
  {
    title: 'Membership Organisations',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
    icon: '/assets/images/ac1.png',
  },
  {
    title: 'National Associations',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
    icon: '/assets/images/ac2.png',
  },
  {
    title: 'Clubs And Groups',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
    icon: '/assets/images/ac3.png',
  },
];

export default function CommunitySection() {
  return (
    <section className="w-full bg-white py-12 font-['Inter']">
      <div className="max-w-[1152px] mx-auto px-4">
        <div className="text-center max-w-[542px] mx-auto mb-10">
          <h2 className="text-[36px] font-semibold leading-[44px] text-[#4D4D4D] tracking-[0%] mb-2">
            Manage your entire community in a single system
          </h2>
          <p className="text-[16px] font-normal leading-[24px] text-[#717171] tracking-[0%]">
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {communityCards.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-[299px] bg-white rounded-lg p-6 text-center shadow-[0px_2px_4px_rgba(171,190,209,0.2)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-between min-h-[280px]"
            >
              <div>
                <div className="relative w-[65px] h-[56px] mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-[28px] font-bold leading-[36px] text-[#4D4D4D] tracking-[0%] mb-2">
                  {card.title}
                </h3>

                <p className="text-[14px] font-normal leading-[20px] text-[#717171] tracking-[0%] max-w-[251px] mx-auto">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}