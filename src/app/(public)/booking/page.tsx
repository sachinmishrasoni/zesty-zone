import React from 'react';
import 'leaflet/dist/leaflet.css';  // For the map if required later
import BookingHero from '@/components/sections/booking/BookingHero';
import BookingInfo from '@/components/sections/booking/BookingInfo';
import BookingForm from '@/components/sections/booking/BookingForm';
import SectionBanner from '@/components/common/SectionBanner';
import BookingContact from '@/components/sections/booking/BookingContact';
import Head from 'next/head';

const Booking = () => {

  return (
    <>

      <Head>
        <title>Book a Table - Zesty Zone</title>
        <meta name="description" content="Reserve your table at Zesty Zone for a delightful dining experience." />
        <meta name="keywords" content="book a table, online reservation, Zesty Zone" />
        <meta property="og:title" content="Book a Table - Zesty Zone" />
        <meta property="og:description" content="Reserve your table at Zesty Zone for a delightful dining experience." />
        <meta property="og:image" content="/images/noise.webp" />
        <meta property="og:url" content="https://yourwebsite.com/booking" />
      </Head>

      <main className="booking-page min-h-screen relative overflow-hidden bg-gradient-to-r from-yellow-50 via-gray-50 to-yellow-100 dark:from-darkBg-500 dark:via-darkBg dark:to-darkBg-700">
        <BookingHero />
        <BookingInfo />
        <BookingForm />

        <SectionBanner backgroundImage="/images/noise.webp" overlayColor="black" overlayOpacity={0.8} padding="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">CALL US +1 777 000 111</h2>
        </SectionBanner>

        <BookingContact />
      </main>
    </>
  );
};

export default Booking;
