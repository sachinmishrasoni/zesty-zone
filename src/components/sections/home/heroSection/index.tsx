"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";
import Icon from "@/icons";
import Image from "next/image";

const HeroSection = () => {
    const heroImages = [
        { src: "/images/background1.jpg", alt: "Background 1" },
        { src: "/images/background2.jpg", alt: "Background 2" },
        { src: "/images/background3.jpg", alt: "Background 3" },
    ];

    return (
        <section className="relative min-h-screen">
            {/* Fixed Background Swiper */}
            <div className="absolute inset-0 w-full h-full">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    effect="fade"
                    loop
                    slidesPerView={1}
                >
                    {heroImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            {/* <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundAttachment: "fixed",
                                    minHeight: "100vh",
                                }}
                            /> */}
                             <div className="relative w-full h-screen">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    style={{ objectFit: 'cover'}}
                                    priority={index === 0} // Preload the first image
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white px-4 py-20 min-h-screen flex flex-col justify-center items-center bg-black bg-opacity-50 backdrop-blur-[2px]">
                {/* Restaurant Icon */}
                <div className="p-3 border-4 border-yellow-600 rounded-full">
                    <Icon.Restaurant size={50} className="text-yellow-600 " />
                </div>
                <h1 className="text-5xl font-bold mb-4">
                    Welcome to <span className="text-yellow-600">Zesty Zone</span>
                </h1>
                <p className="text-lg mb-6">Where Flavor Meets Freshness</p>

                {/* Highlights */}
                <div className="flex justify-center gap-6 mb-8">
                    <div className="flex flex-col items-center group transform transition-transform duration-300 hover:scale-110">
                        <Icon.Delivery
                            size={40}
                            className="text-yellow-600 mb-2 animate-fadeIn group-hover:animate-pulse"
                        />
                        <p className="text-sm font-semibold">Fast Delivery</p>
                    </div>
                    <div className="flex flex-col items-center group transform transition-transform duration-300 hover:scale-110">
                        <Icon.Heart
                            size={40}
                            className="text-yellow-600 mb-2 animate-fadeIn group-hover:animate-pulse"
                        />
                        <p className="text-sm font-semibold">Healthy Choices</p>
                    </div>
                    <div className="flex flex-col items-center group transform transition-transform duration-300 hover:scale-110">
                        <Icon.Leaf
                            size={40}
                            className="text-yellow-600 mb-2 animate-fadeIn group-hover:animate-pulse"
                        />
                        <p className="text-sm font-semibold">Eco-Friendly</p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="cta-buttons flex justify-center gap-4">
                    <button className="btn-primary px-6 py-2 text-lg font-semibold rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-yellow-500 text-black">
                        Order Now
                    </button>
                    <button className="btn-secondary px-6 py-2 text-lg font-semibold rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-2 border-yellow-500 text-yellow-500 bg-transparent">
                        Reserve a Table
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10">
                    <div className="flex flex-col items-center">
                        <p className="text-sm font-semibold text-gray-300 mb-2">
                            Scroll Down
                        </p>
                        <div className="w-6 h-6 border-2 border-yellow-600 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
