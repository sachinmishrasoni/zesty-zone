import Icons from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = () => {
    return (
        <div className="relative bg-lightFg rounded-lg shadow-md hover:shadow-lg transition-all p-1 group border">
            {/* Blog Image */}
            <div className="w-full h-56 md:h-40  relative overflow-hidden rounded-lg">
                {/* Skeleton loader for image */}
                {/* {loadingImage && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                )} */}

                <Image
                    src={"/images/interior1.jpg"}
                    alt={"Burger - Delicious and Juicy"}
                    fill
                    loading="lazy"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                // onLoad={handleImageLoad}
                />
            </div>

            <div className="content p-2 pt-0">

                {/* Blog Info */}
                <div className="mt-2 space-y-2">
                    <h1 className="text-xl font-semibold text-gray-800">The Art of Interior Design</h1>
                    <p className="text-sm text-gray-500 line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eaque fuga libero assumenda amet, sapiente necessitatibus, culpa dolores repudiandae, fugit ab quasi animi accusamus sunt in ducimus tempore inventore ad quod modi veniam consectetur reiciendis alias rem. Exercitationem eaque, dolorem nemo, possimus esse eligendi quaerat commodi nesciunt fugit veritatis aliquid!
                    </p>

                    <div className='flex justify-between'>
                        <div className="flex items-center space-x-2">
                            <Icons.Calendar2 className="w-4 h-4 text-gray-500" />
                            <span className="text-xs text-gray-500">April 10, 2024</span>
                        </div>
                        <Link href="/blog/interior-design" className="text-yellow-600 font-semibold text-sm">Read More</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogCard