"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MeetTheTeam = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  // Team Data
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Head Chef',
      bio: 'With over 15 years of experience, John is passionate about crafting innovative dishes inspired by global flavors.',
      image: '/images/users/user1.jpg', // Replace with actual path
    },
    {
      name: 'Jane Doe',
      role: 'Sous Chef',
      bio: 'Jane brings creativity and precision to the kitchen, ensuring every dish is a masterpiece.',
      image: '/images/users/user2.jpg', // Replace with actual path
    },
    {
      name: 'Michael Brown',
      role: 'Restaurant Manager',
      bio: 'Michael is dedicated to providing exceptional service and creating a welcoming atmosphere for all our guests.',
      image: '/images/users/user3.jpg', // Replace with actual path
    },
  ];

  return (
    <motion.section
      className="meet-the-team py-16 text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-6 lg:px-20 space-y-10">
        {/* Header */}
        <motion.div className="text-center" variants={fadeIn}>
          <h2 className="text-4xl font-bold mb-6">Meet The Team</h2>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">Zesty-Zone</span>, our team of dedicated professionals works tirelessly to make your dining experience unforgettable.
          </p>
        </motion.div>

        {/* Team Members */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={staggerContainer}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-member bg-lightFg rounded-lg shadow-lg p-6 text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
              <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        <div className="text-center">
          <Link href="/about/teams"
            className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition"
          >
            Show More Team Members
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default MeetTheTeam;
