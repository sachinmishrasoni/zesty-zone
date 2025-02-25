import React from 'react'
import HeroSection from '@/components/sections/home/heroSection'
import dynamic from 'next/dynamic'

const AboutUs = dynamic(() => import("@/components/sections/home/about-us"), { ssr: false });
const DishSection = dynamic(() => import("@/components/sections/home/DishSection"), { ssr: false });
const BookTable = dynamic(() => import("@/components/sections/home/bookTable"), { ssr: false });
const OurServices = dynamic(() => import("@/components/sections/home/our-services"), { ssr: false });
const OurChef = dynamic(() => import("@/components/sections/home/ourChef"), { ssr: false });
const UpcomingEvents = dynamic(() => import("@/components/sections/home/upcomingEvents"), { ssr: false });
const OurBlogs = dynamic(() => import("@/components/sections/home/ourBlogs"), { ssr: false });
const SpecialOffers = dynamic(() => import("@/components/sections/home/specialOffers"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/home/testimonials"), { ssr: false });

// Todo
// hero section-- video and photo and resto name
// Brief About Us
// Dish Section
//   - New
//   - Popular
//   - Trending
//   - chef - recommended 
// Our Menu - Recent, Trending, Popular, etc
// Book A Table
// our services
// Our Chief
// Upcoming Events
// Our Blogs
// Testimonials / Reviews
// Special Offers / Discounts
// Footer

const HomePage = () => {
  return (
    <main className='home-page min-h-screen bg-gradient-to-r from-yellow-50 via-gray-50 to-yellow-100'>
      <HeroSection />
      <section className="min-h-screen bg-gradient-to-r from-yellow-50 via-gray-50 to-yellow-100 dark:from-darkBg-500 dark:via-darkBg dark:to-darkBg-700 py-10">
        <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-gray-100">
          Welcome to the Dark Side
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg text-center mt-4">
          This is an example of a gradient background for light and dark themes.
        </p>
      </section>
      <AboutUs />
      <DishSection />
      <div className='free-delivery w-full h-[150px] bg-black text-white flex justify-center items-center'>
        <p className='text-4xl font-bold text-center'>Free Delivery on Order Over $59</p>
      </div>
      <BookTable />
      {/* <Parallax /> */}
      <OurServices />
      <OurChef />
      <UpcomingEvents />
      <OurBlogs />
      <SpecialOffers />
      <Testimonials />
    </main>
  )
}

export default HomePage