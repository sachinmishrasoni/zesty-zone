'use client';
import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/free-mode';

// Define the interface for the component props
interface ISlider {
    options: ReactNode[]; // Array of slide content
    className?: string; // Additional class names
    config?: {
        navigation?: boolean;
        pagination?: boolean;
        effect?: 'fade' | 'slide';
        loop?: boolean;
        autoplay?: boolean;
        speed?: number;
        spaceBetween?: number;
        slidesPerView?: number;
        centeredSlides?: boolean;
        grabCursor?: boolean;
        breakpoints?: {
            [key: number]: {
                slidesPerView: number;
                spaceBetween: number;
            };
        };
        freeMode?: boolean;
    };
}

const Slider: React.FC<ISlider> = ({
    options,
    className = '',
    config = {} // Default config is empty
}) => {
    // Destructure options from the config prop or fallback to default values
    const {
        navigation = false,
        pagination = false,
        effect = 'slide',
        loop = false,
        autoplay = false,
        speed = 300,
        spaceBetween = 10,
        slidesPerView = 1,
        centeredSlides = false,
        grabCursor = false,
        breakpoints = {},
        freeMode = false,
    } = config;

    return (
        <Swiper
            className={`slider ${className}`}
            modules={[Navigation, Pagination, Autoplay, EffectFade, FreeMode]} // Import necessary modules
            navigation={navigation} // Enable navigation buttons
            pagination={pagination ? { clickable: true } : false} // Enable pagination if needed
            autoplay={autoplay ? { delay: 2500, disableOnInteraction: false } : false} // Autoplay settings
            loop={loop} // Loop slides
            effect={effect} // Slide transition effect
            speed={speed} // Transition speed
            spaceBetween={spaceBetween} // Space between slides
            slidesPerView={slidesPerView} // Number of slides per view
            centeredSlides={centeredSlides} // Center slides if needed
            grabCursor={grabCursor} // Show grab cursor
            freeMode={freeMode} // Free mode
            breakpoints={breakpoints} // Breakpoints for responsiveness
        >
            {options.map((item, index) => (
                <SwiperSlide key={index}>{item}</SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
