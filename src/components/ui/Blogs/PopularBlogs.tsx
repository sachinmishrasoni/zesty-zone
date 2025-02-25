import React from 'react'
import BlogCardSm from '../BlogCards/BlogCardSm'

const PopularBlogs = () => {
    return (
        <section className="recent-blog">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Blog</h3>
            <div className="space-y-4">
                {
                    Array(5).fill(0).map((_, index) => (
                        <BlogCardSm key={index} />
                    ))
                }
            </div>
        </section>
    )
}

export default PopularBlogs