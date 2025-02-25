"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Sustainability = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="sustainability py-16 text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div className="text-center mb-10" variants={fadeIn}>
          <h2 className="text-4xl font-bold mb-6">Our Commitment to Sustainability</h2>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">Zesty-Zone</span>, we believe in preserving the planet for future generations. Sustainability is at the heart of everything we do, from sourcing ingredients to minimizing waste.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-lg leading-relaxed">
              We partner with local farmers and producers who share our values of ethical and sustainable farming practices. By sourcing seasonal and organic ingredients, we reduce our carbon footprint and support the community.
            </p>
            <p className="text-lg leading-relaxed">
              Our restaurant is designed to minimize waste. From composting food scraps to using eco-friendly packaging, we ensure that every step we take contributes positively to the environment.
            </p>
            <p className="text-lg leading-relaxed">
              Sustainability is not just a practice; it's our promise to you and the planet. Together, we can create a brighter, greener future—one meal at a time.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/images/background1.jpg" // Replace with the correct path to your image  sustainability
              alt="Sustainability Practices"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority={true}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Sustainability;
