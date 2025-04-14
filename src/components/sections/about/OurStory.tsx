"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/common/container';

const OurStory = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
    <motion.section
      id="our-story"
      className="our-story py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* First Section: Image on the Right */}
        <motion.div
          className="md:col-span-2 order-1 md:order-1 space-y-6"
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Our Story</h2>
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-semibold">Zesty-Zone</span>, where every dish tells
            a story. Our journey began with a passion for creating unforgettable dining
            experiences, inspired by flavors from around the globe. From humble beginnings,
            we&#39;ve grown into a beloved destination for food lovers.
          </p>
          <p className="text-lg leading-relaxed">
            Our mission has always been simple: to bring people together through delicious
            meals, warm hospitality, and a commitment to excellence. Whether you&#39;re here for
            a quick bite, a family dinner, or a celebration, we aim to make every moment
            special.
          </p>
        </motion.div>

        <motion.div
          className="md:col-span-1 order-2 md:order-2 flex justify-center items-center"
          variants={scaleIn}
        >
          <Image
            src="/images/interior1.jpg"
            alt="Zesty-Zone Restaurant"
            width={300}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full max-w-md"
          />
        </motion.div>

        {/* Second Section: Image on the Left */}
        <motion.div
          className="md:col-span-1 order-4 md:order-3 flex justify-center items-center"
          variants={scaleIn}
        >
          <Image
            src="/images/interior2.jpg"
            alt="Zesty-Zone Ambiance"
            width={300}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full max-w-md"
          />
        </motion.div>

        <motion.div
          className="md:col-span-2 order-3 md:order-4 space-y-6"
          variants={fadeIn}
        >
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded in 2010, <span className="font-semibold">Zesty-Zone</span> was born out of a
            passion for fresh, delicious food and a desire to bring people together through
            exceptional dining experiences. From our locally sourced ingredients to our
            innovative culinary creations, every dish tells a story of flavor, tradition, and
            creativity.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We take pride in our commitment to sustainability, our strong connections with
            local farmers, and our unwavering dedication to quality and customer satisfaction.
          </p>
        </motion.div>

        {/* Third Section */}
        <motion.div
          className="order-5 col-span-1 md:col-span-3 space-y-3"
          variants={fadeIn}
        >
          <p className="text-gray-600 text-lg leading-relaxed">
            At <span className="font-semibold">Zesty-Zone</span>, we believe that every meal is an experience worth cherishing. Our philosophy revolves around the idea that food is not just about sustenance—it&#39;s a celebration of life, culture, and creativity.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            With a team of passionate chefs and dedicated staff, we strive to make every visit memorable. From the moment you walk in, you&#39;ll be greeted with warm hospitality, a cozy ambiance, and the aroma of freshly prepared dishes made with the finest ingredients.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you&#39;re seeking a quiet corner for an intimate dinner, a lively space to celebrate with friends, or a place to explore exciting flavors, <span className="font-semibold">Zesty-Zone</span> is here to cater to your desires.
          </p>
          <p className="text-lg leading-relaxed">
            Visit us and be a part of our story. Together, let’s make unforgettable memories over great food, delightful drinks, and shared laughter.
          </p>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default OurStory;
