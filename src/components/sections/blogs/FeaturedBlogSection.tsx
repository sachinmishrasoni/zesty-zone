'use client'; // Needed for Next.js when using Swiper in the client-side

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const FeaturedBlogSection = () => {
    // Sample data for the featured blogs
    const featuredBlogs = [
        {
            title: 'The Art of Interior Design',
            description: 'Discover the latest trends in interior design and how to incorporate them into your home.',
            image: '/images/interior1.jpg',
            date: 'April 10, 2024',
        },
        {
            title: 'Top 10 Travel Destinations for 2024',
            description: 'Explore the most exciting travel destinations to visit in the upcoming year.',
            image: '/images/interior2.jpg',
            date: 'March 5, 2024',
        },
        {
            title: 'Healthy Eating for a Better Life',
            description: 'Learn how to incorporate healthy eating habits into your daily life.',
            image: '/images/interior3.jpg',
            date: 'February 20, 2024',
        },
        {
            title: 'Modern Office Design Ideas',
            description: 'Transform your workspace with these modern and productive office design ideas.',
            image: '/images/interior1.jpg',
            date: 'January 15, 2024',
        },
    ];

    return (
        <section className="featured-post">
            <Swiper
                spaceBetween={30} // Space between slides
                slidesPerView={1} // Number of slides visible at once
                // pagination={{ clickable: true }} // Pagination dots
                // navigation // Add navigation arrows (previous & next)
                loop // Infinite loop (optional)
                className="featured-blog-swiper !py-5 !px-1"
            >
                {/* Map through the featured blogs */}
                {featuredBlogs.map((blog, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative bg-lightFg rounded-lg shadow-md overflow-hidden">
                            {/* Image with 25vh height and background overlay */}
                            <div className="relative h-[35vh]">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                            </div>

                            {/* Content at the bottom of the image */}
                            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                                <h3 className="text-xl font-semibold text-white mb-2">{blog.title}</h3>
                                {/* <p className="text-sm text-white mb-2">{blog.date}</p> */}
                                <p className="text-white line-clamp-2">{blog.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default FeaturedBlogSection;
