"use client";
import React from 'react';
import { motion } from 'framer-motion';

const MissionValues = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const hoverEffect = {
    rest: { scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className="mission-values py-16 text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-6 lg:px-20 space-y-10">
        {/* Mission Statement */}
        <motion.div className="text-center" variants={fadeIn}>
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">Zesty-Zone</span>, our mission is to create
            unforgettable dining experiences by offering high-quality, innovative cuisine in a
            welcoming and inspiring atmosphere. We aim to bring people together, one delicious meal
            at a time.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div className="space-y-8" variants={staggerContainer}>
          <h3 className="text-3xl font-bold text-center mb-4">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Value 1 */}
            <motion.div
              className="text-center"
              variants={fadeIn}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div
                className="bg-yellow-100 rounded-full w-16 h-16 flex justify-center items-center mx-auto mb-4"
                variants={hoverEffect}
              >
                <span className="text-yellow-600 text-2xl font-bold">🌟</span>
              </motion.div>
              <h4 className="text-xl font-semibold mb-2">Excellence</h4>
              <p className="text-gray-600">
                We strive to deliver exceptional food, service, and experiences that exceed our
                customers' expectations.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              className="text-center"
              variants={fadeIn}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div
                className="bg-yellow-100 rounded-full w-16 h-16 flex justify-center items-center mx-auto mb-4"
                variants={hoverEffect}
              >
                <span className="text-yellow-600 text-2xl font-bold">🌍</span>
              </motion.div>
              <h4 className="text-xl font-semibold mb-2">Sustainability</h4>
              <p className="text-gray-600">
                We are committed to eco-friendly practices and sourcing the finest local
                ingredients to support our community and planet.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              className="text-center"
              variants={fadeIn}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div
                className="bg-yellow-100 rounded-full w-16 h-16 flex justify-center items-center mx-auto mb-4"
                variants={hoverEffect}
              >
                <span className="text-yellow-600 text-2xl font-bold">❤️</span>
              </motion.div>
              <h4 className="text-xl font-semibold mb-2">Community</h4>
              <p className="text-gray-600">
                We believe in fostering a sense of belonging and creating moments of connection
                through food and hospitality.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MissionValues;
