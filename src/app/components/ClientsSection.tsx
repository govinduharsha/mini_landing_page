import React from 'react';

const clients = [
  {
    name: 'Clients Delta',
    icon: '/assets/images/(1).png',
  },
  {
    name: 'Clients Omega',
    icon: '/assets/images/(2).png',
  },
  {
    name: 'Clients Sigma',
    icon: '/assets/images/(3).png',
  },
  {
    name: 'Clients Apex',
    icon: '/assets/images/(4).png',
  },
  {
    name: 'Clients Nova',
    icon: '/assets/images/(5).png',
  },
  {
    name: 'Clients Link',
    icon: '/assets/images/(6).png',
  },
  {
    name: 'Clients Bolt',
    icon: '/assets/images/(7).png',
  },
];

export default function ClientsSection() {
  return (
    <section className="w-full bg-white py-10 font-['Inter']">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-[36px] font-semibold leading-11 text-[#4D4D4D] tracking-normal mb-2">
            Our Clients
          </h2>
          <p className="text-[16px] font-normal leading-6 text-[#717171] tracking-normal">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className="w-full h-24.5 flex items-center justify-between gap-4">
          {clients?.map((client) => (
            <div
              key={client?.name}
              className="flex items-center justify-center cursor-pointer transition-opacity duration-200 opacity-90 hover:opacity-100"
              title={client?.name}
            >
              <img
                src={client?.icon}
                alt={client?.name}
                className="w-12 h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}