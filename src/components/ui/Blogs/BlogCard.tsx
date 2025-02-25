import Image from 'next/image'
import React from 'react'

interface IBlogCard {
    blog: any
}
const BlogCard: React.FC<IBlogCard> = ({ blog }) => {
    return (
        <div className="bg-lightFg rounded-lg shadow-md hover:shadow-lg transition p-4">
            {/* Blog Image */}
            <Image
                src={blog.image}
                alt={blog.title}
                className="rounded-lg mb-4 object-cover w-full h-40"
                width={300}
                height={200}
            />
            {/* Blog Title */}
            <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
            {/* Blog Description */}
            <p className="text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
            {/* Blog Date & Time */}
            <p className="text-sm text-gray-800 font-semibold mb-2">
                {new Date(blog.date).toLocaleDateString()} |{" "}
                {new Date(blog.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </p>
            {/* Read More Link */}
            <a
                href={blog.link}
                className="inline-block text-yellow-600 mt-3 font-semibold hover:underline"
            >
                Read More
            </a>
        </div>
    )
}

export default BlogCard