'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CuisinePhilosophy = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="cuisine-philosophy py-16 text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div className="text-center mb-10" variants={fadeIn}>
          <h2 className="text-4xl font-bold mb-6">Our Cuisine Philosophy</h2>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">Zesty-Zone</span>, we believe that food is more than just nourishment—it's an experience, a story, and a journey of flavors that connect us to the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Philosophy Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-lg leading-relaxed">
              Every dish we create is inspired by our passion for bringing together fresh, locally
              sourced ingredients and culinary traditions from around the globe. From the farms
              that grow our produce to the hands that craft each dish, we are committed to
              delivering an unforgettable dining experience.
            </p>
            <p className="text-lg leading-relaxed">
              We take pride in sourcing high-quality, seasonal ingredients from trusted farmers and
              producers, ensuring every bite is packed with authenticity and flavor. Sustainability
              is at the heart of our philosophy, guiding every choice we make in the kitchen.
            </p>
            <p className="text-lg leading-relaxed">
              Our chefs combine creativity and expertise to craft dishes that not only taste
              incredible but also tell a story. Whether it’s a modern twist on a classic recipe or a
              completely new creation, our menu is designed to delight your palate and ignite your
              curiosity.
            </p>
          </motion.div>

          {/* Philosophy Image */}
          <motion.div
            className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/images/background1.jpg" // Replace with your actual image path
              alt="Cuisine Philosophy"
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

export default CuisinePhilosophy;
