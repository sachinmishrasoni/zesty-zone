"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  // Achievement Data
  const achievements = [
    {
      icon: '🏆',
      title: 'Best Restaurant Award',
      description: 'Awarded Best Restaurant of the Year 2023 for excellence in food and service.',
    },
    {
      icon: '🌟',
      title: '500+ 5-Star Reviews',
      description: 'Proudly recognized by our customers for consistent quality and hospitality.',
    },
    {
      icon: '🍴',
      title: '50K Meals Served',
      description: 'Celebrating over 50,000 meals served with love and passion since opening.',
    },
    {
      icon: '🌍',
      title: 'Sustainability Leader',
      description:
        'Recognized for eco-friendly practices and commitment to sustainable sourcing.',
    },
  ];

  return (
    <motion.section
      className="achievements py-16 text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-6 lg:px-20 space-y-10">
        {/* Section Title */}
        <motion.div className="text-center" variants={fadeIn}>
          <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">Zesty-Zone</span>, we take pride in the milestones we’ve achieved, thanks to our dedicated team and loyal customers.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={staggerContainer}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-item bg-lightFg rounded-lg shadow-lg p-6 text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{achievement.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Achievements;
