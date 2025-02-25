"use client";
import Container from "@/components/common/container";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types"; // Import SwiperCore type
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { Button } from "antd";
import Icon from "@/icons";

import "./index.css";

// Define TypeScript types for image data
type ImageData = {
    src: string;
    alt: string;
};

const AboutUs: React.FC = () => {
    const swiperRef = useRef<SwiperCore | null>(null); // Swiper reference with type

    const imageData: ImageData[] = [
        { src: "/images/interior1.jpg", alt: "Zesty-Zone's inviting interior with cozy seating." },
        { src: "/images/interior2.jpg", alt: "A delicious meal served at Zesty-Zone." },
        { src: "/images/interior3.jpg", alt: "Zesty-Zone's vibrant and welcoming ambiance." },
    ];

    return (
        <section className="about-us min-h-screen bg-gradient-to-r bg-white dark:bg-darkBg py-10 overflow-hidden">
            <header>
                <h1 className="text-center text-4xl font-bold text-gray-800">About Us</h1>
            </header>
            <Container maxWidth="lg" className="py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    {/* Right Section: Image for Mobile on Top */}
                    <div className="md:order-2 flex flex-col justify-center items-center">
                        <Swiper
                            effect="cards"
                            grabCursor={true}
                            loop={true}
                            modules={[EffectCards]}
                            initialSlide={1}
                            onSwiper={(swiper) => (swiperRef.current = swiper)} // Attach Swiper instance
                            className="mySwiper"
                        >
                            {imageData.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative w-full h-[320px]">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            // objectFit="cover"
                                            style={{ objectFit: "cover" }}
                                            sizes="(max-width: 768px) 100vw, 
                                                   (max-width: 1200px) 50vw, 
                                                   33vw"
                                            className="rounded-lg shadow-lg"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="flex space-x-4 mt-4">
                            <Button
                                type="text"
                                shape="circle"
                                icon={<Icon.ArrowBack />}
                                size="large"
                                onClick={() => swiperRef.current?.slidePrev()} // Navigate to previous slide
                            />
                            <Button
                                type="text"
                                shape="circle"
                                icon={<Icon.ArrowForward />}
                                size="large"
                                onClick={() => swiperRef.current?.slideNext()} // Navigate to next slide
                            />
                        </div>
                    </div>

                    {/* Left Section: Content for Mobile on Bottom */}
                    <div className="md:col-span-2 md:order-1 space-y-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Discover the Story Behind <span className="text-yellow-600">Zesty-Zone</span>
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            At Zesty-Zone, we believe that every meal tells a story. From sourcing the freshest ingredients to creating a warm and welcoming ambiance, we’re passionate about making your dining experience unforgettable.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Whether you're celebrating a special occasion, catching up with loved ones, or simply indulging in the joy of good food, Zesty-Zone is the perfect destination. Join us and let us take you on a culinary journey filled with flavors you'll never forget.
                        </p>

                        {/* Highlights with Icons */}
                        <ul className="space-y-4">
                            <li className="flex items-center group">
                                <div className="bg-yellow-100 text-yellow-600 rounded-full p-3 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                                    <Icon.Leaf
                                        size={24}
                                        className="animate-fadeIn group-hover:animate-pulse"
                                    />
                                </div>
                                <span className="ml-4 text-gray-600 text-base md:text-lg">
                                    Farm-to-Table Freshness
                                </span>
                            </li>
                            <li className="flex items-center group">
                                <div className="bg-yellow-100 text-yellow-600 rounded-full p-3 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                                    <Icon.Heart
                                        size={24}
                                        className="animate-fadeIn group-hover:animate-pulse"
                                    />
                                </div>
                                <span className="ml-4 text-gray-600 text-base md:text-lg">
                                    Family-Owned and Operated
                                </span>
                            </li>
                            <li className="flex items-center group">
                                <div className="bg-yellow-100 text-yellow-600 rounded-full p-3 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                                    <Icon.Star
                                        size={24}
                                        className="animate-fadeIn group-hover:animate-pulse"
                                    />
                                </div>
                                <span className="ml-4 text-gray-600 text-base md:text-lg">
                                    Culinary Artistry at Its Best
                                </span>
                            </li>
                        </ul>

                        {/* CTA Button with Animation */}
                        <button className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-yellow-400">
                            Learn More About Us
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutUs;
