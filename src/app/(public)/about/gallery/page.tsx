"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import galleryImages from '@/constants/galleryImages';

const GalleryPage = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <main className="gallery-page min-h-screen py-16 bg-gradient-to-r from-yellow-50 via-gray-50 to-yellow-100">
      <section className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-yellow-600">Gallery</span></h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Dive deeper into the world of <span className="font-semibold">Zesty-Zone</span> and explore all the vibrant dishes and spaces we have to offer.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                // objectFit="cover"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
