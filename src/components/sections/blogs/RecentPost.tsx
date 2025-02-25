import Slider from '@/components/common/Slider'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogCard from '@/components/ui/BlogCard'


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
const RecentPost = () => {
    return (
        <section className='recent-blogs'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-4'>Recent Post</h3>

            {/* <Slider
        options={[<div className='bg-gray-100 h-36 py-2 px-4'>enumsam</div>, 'enum2', 'enum3']}
        config={{ pagination: false, slidesPerView: 2, freeMode: true }}
      /> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {blogs.map((blog, index) => (
                    // <div key={index} className="bg-lightFg rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    //     <Image
                    //         src={blog.image}
                    //         alt={blog.title}
                    //         width={500}
                    //         height={300}
                    //         className="w-full h-56 object-cover"
                    //     />
                    //     <div className="p-4">
                    //         <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    //             <Link href={`/blog/${blog.slug}`}>
                    //                 {blog.title}
                    //             </Link>
                    //         </h3>
                    //         <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                    //         <p className="text-gray-600">{blog.description}</p>
                    //         <Link href={`/blog/${blog.slug}`}>
                    //             <button className="mt-4 text-yellow-600 font-semibold">Read More</button>
                    //         </Link>
                    //     </div>
                    // </div>
                    <BlogCard key={index} />
                ))}
            </div>
        </section>
    )
}

export default RecentPost