import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogCard from '@/components/ui/BlogCard'

const BlogListings = () => {
  // Sample data for blog posts
  const blogs = [
    {
      title: 'The Art of Interior Design',
      description: 'Explore the latest trends in interior design and learn how to elevate your home decor.',
      date: 'April 10, 2024',
      image: '/images/interior1.jpg',
      slug: 'interior-design', // slug for the blog post URL
    },
    {
      title: 'Top 10 Travel Destinations for 2024',
      description: 'Discover the most exciting travel destinations you should visit in 2024.',
      date: 'March 5, 2024',
      image: '/images/travel1.jpg',
      slug: 'top-travel-destinations', // slug for the blog post URL
    },
    {
      title: 'Healthy Eating for a Better Life',
      description: 'Learn how to eat healthily and incorporate better nutrition into your lifestyle.',
      date: 'February 20, 2024',
      image: '/images/food1.jpg',
      slug: 'healthy-eating', // slug for the blog post URL
    },
    {
      title: 'Modern Office Design Ideas',
      description: 'Transform your workspace with modern and efficient office design ideas.',
      date: 'January 15, 2024',
      image: '/images/office1.jpg',
      slug: 'modern-office-design', // slug for the blog post URL
    },
  ]

  return (
    <section className="blogs-listings">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">All Blogs</h2>

        {/* Blog Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {blogs.map((blog, index) => (
            <BlogCard />
          ))}
        </div>
    </section>
  )
}

export default BlogListings
