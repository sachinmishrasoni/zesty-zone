'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogData = [
  {
    title: 'The Secret to Perfectly Grilled Meat',
    excerpt: 'Discover our grilling techniques that bring out the best flavors...',
    date: '2023-10-01',
    image: '/images/grilled-meat.jpg',
    slug: 'perfectly-grilled-meat',
    category: 'Recipes',
  },
  {
    title: 'How to Pair Wine with Your Meal',
    excerpt: 'Explore our guide to wine and food pairing...',
    date: '2023-09-15',
    image: '/images/wine-pairing.jpg',
    slug: 'wine-pairing',
    category: 'Events',
  },
  {
    title: 'ZestyZone: The Story Behind Our Name',
    excerpt: 'Learn how we came up with the name ZestyZone...',
    date: '2023-08-30',
    image: '/images/story-behind.jpg',
    slug: 'story-behind-name',
    category: 'Restaurant Tips',
  },
  // Add more posts here as needed
];

const categories = ['All', 'Recipes', 'Events', 'Restaurant Tips'];

const BlogPostList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const filteredPosts = selectedCategory === 'All'
    ? blogData
    : blogData.filter(post => post.category === selectedCategory);

  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Paginate posts
  const displayedPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset pagination when category changes
  };

  return (
    <section className="py-12">
      <div className="max-w-screen-lg mx-auto">
        {/* Featured Blog Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Post</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* <img src={filteredPosts[0].image} alt={filteredPosts[0].title} className="w-full h-80 object-cover" /> */}
              <Image
                src={filteredPosts[0].image}
                alt={filteredPosts[0].title}
                width={800}       // adjust based on your layout
                height={320}      // should match or maintain aspect ratio with h-80 (~20rem)
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  <Link href={`/blog/${filteredPosts[0].slug}`} className="hover:text-yellow-600">
                    {filteredPosts[0].title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{filteredPosts[0].excerpt}</p>
                <Link href={`/blog/${filteredPosts[0].slug}`} className="text-yellow-600 hover:text-yellow-700">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* <img src={post.image} alt={post.title} className="w-full h-56 object-cover" /> */}
              <div className="relative w-full h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  <Link href={`/blog/${post.slug}`} className="hover:text-yellow-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-yellow-600 hover:text-yellow-700">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="text-center my-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Filter by Category</h3>
          <div className="inline-flex gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <button
            className="px-4 py-2 bg-yellow-600 text-white rounded-lg mr-4"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-yellow-600 text-white rounded-lg"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPostList;
