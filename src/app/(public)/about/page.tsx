import React, { lazy, Suspense } from 'react';
import SectionBanner from '@/components/common/SectionBanner';
import GallerySection from '@/components/sections/about/GallerySection';

const OurStory = lazy(() => import('@/components/sections/about/OurStory'));
const MissionValues = lazy(() => import('@/components/sections/about/MissionValues'));
const MeetTheTeam = lazy(() => import('@/components/sections/about/MeetTheTeam'));
const CuisinePhilosophy = lazy(() => import('@/components/sections/about/CuisinePhilosophy'));
const Achievements = lazy(() => import('@/components/sections/about/Achievements'));
const Sustainability = lazy(() => import('@/components/sections/about/Sustainability'));
const CallToAction = lazy(() => import('@/components/sections/about/CallToAction'));

// const SectionWrapper = ({ children }: { children: React.ReactNode }) => <section className="py-16">{children}</section>;

const About = () => {
  return (
    <main className="about-page min-h-screen relative overflow-hidden bg-gradient-to-r from-yellow-50 via-gray-50 to-yellow-100 dark:from-darkBg-500 dark:via-darkBg dark:to-darkBg-700">
      <SectionBanner
        backgroundImage="/images/background1.jpg"
        overlayColor="black"
        overlayOpacity={0.5}
        padding="py-16"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          About <span className="text-yellow-600">Us</span>
        </h1>
        <p className="text-white mt-4 text-lg">
          Discover the <a href="#our-story" className="text-yellow-600 underline">story behind Zesty-Zone</a>, our passion for culinary art, and our commitment to creating unforgettable dining experiences.
        </p>
      </SectionBanner>

      <Suspense fallback={<div>Loading...</div>}>
        <OurStory />
        <MissionValues />
        <Sustainability />
        <MeetTheTeam />
        <CuisinePhilosophy />
        <Achievements />
        <CallToAction />
        <GallerySection />
      </Suspense>
    </main>
  );
};

export default About;
