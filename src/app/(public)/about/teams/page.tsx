import React from 'react';
import Image from 'next/image';

const TeamsPage = () => {
  const allTeamMembers = [
    {
      name: 'John Smith',
      role: 'Head Chef',
      bio: 'With over 15 years of experience, John is passionate about crafting innovative dishes inspired by global flavors.',
      image: '/images/team/head-chef.jpg',
    },
    {
      name: 'Jane Doe',
      role: 'Sous Chef',
      bio: 'Jane brings creativity and precision to the kitchen, ensuring every dish is a masterpiece.',
      image: '/images/team/sous-chef.jpg',
    },
    {
      name: 'Michael Brown',
      role: 'Restaurant Manager',
      bio: 'Michael is dedicated to providing exceptional service and creating a welcoming atmosphere for all our guests.',
      image: '/images/team/manager.jpg',
    },
    // Add more team members as needed
  ];

  return (
    <section className="teams-page py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 lg:px-20 space-y-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Meet Our Entire Team</h2>
          <p className="text-lg leading-relaxed">
            Discover the talented individuals who make <span className="font-semibold">Zesty-Zone</span> special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {allTeamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member bg-white rounded-lg shadow-lg p-6 text-center"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsPage;
