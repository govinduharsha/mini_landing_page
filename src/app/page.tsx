import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ClientsSection from './components/ClientsSection';
import FeaturesSection from './components/FeaturesSection';
import InfoSection1 from './components/InfoSection1';
import StatsSection from './components/StatsSection';
import InfoSection2 from './components/InfoSection2';
import TestimonialSection from './components/TestimonialSection';
import BlogSection from './components/BlogSection';
import CTABanner from './components/CTABanner';


export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ClientsSection />
        <FeaturesSection />
        <InfoSection1 />
        <StatsSection />
        <InfoSection2 />
        <TestimonialSection />
        <BlogSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}