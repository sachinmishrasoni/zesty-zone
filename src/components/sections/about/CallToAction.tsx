"use client";
import React from 'react';
import { motion } from 'framer-motion';
import SectionBanner from '@/components/common/SectionBanner';

const CallToAction = () => {
    // Animation Variants
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <>
            <SectionBanner
                backgroundImage="/images/restaurent.jpg"
                overlayColor="black"
                overlayOpacity={0.5}
                padding="py-16"
            >
                <motion.h2
                    className="text-4xl font-extrabold mb-6 tracking-wide text-gray-100"
                    variants={fadeIn}
                >
                    Experience the Best at <span className="text-yellow-300">Zesty-Zone</span>
                </motion.h2>
                <motion.p
                    className="text-xl leading-relaxed mb-8 text-gray-200"
                    variants={fadeIn}
                >
                    Join us for an unforgettable dining experience. Reserve your table now or explore our
                    menu to discover the flavors that set us apart.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="flex justify-center space-x-4"
                    variants={fadeIn}
                >
                    <button
                        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
                        onClick={() => window.location.href = "/reserve"}
                    >
                        Reserve a Table
                    </button>
                    <button
                        className="bg-white text-yellow-600 px-6 py-3 rounded-md hover:bg-yellow-700 hover:text-white transition"
                        onClick={() => window.location.href = "/menu"}
                    >
                        Explore Menu
                    </button>
                </motion.div>
            </SectionBanner>
        </>
    );
};

export default CallToAction;
