'use client';
import React from 'react'
import { Tag } from 'antd'

const BlogCategories = () => {
    return (
        <section className='blog-categories'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>Categories</h3>
            <div className='flex flex-wrap gap-2'>
                {['Food', 'Travel', 'Lifestyle', 'Health', 'Business', 'Technology', 'Culture', 'Politics', 'Food', 'Travel', 'Lifestyle', 'Health', 'Business', 'Technology', 'Culture', 'Politics'].map(
                    (chip, index) => (
                        <Tag.CheckableTag
                            key={index}
                            checked={1 === index} // Active state
                            className={`chip !px-4 !py-1 !m-0 !rounded-full !font-medium whitespace-nowrap capitalize !border !border-gray-300 ${1 === index ? 'bg-blue-500 text-white shadow-md !border-transparent' : ''
                                }`}
                        // onClick={() => scrollToChip(index)}
                        >
                            {chip}
                        </Tag.CheckableTag>
                    )
                )}
            </div>
        </section>
    )
}

export default BlogCategories