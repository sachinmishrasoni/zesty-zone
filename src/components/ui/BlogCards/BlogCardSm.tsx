import Image from 'next/image'
import React from 'react'

const BlogCardSm = () => {
    return (
        <div className="flex gap-3 bg-lightFg rounded-lg shadow-md overflow-hidden p-2">
            {/* Image on the left */}
            <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden relative">  {/* Reduced size of image */}
                <Image
                    src="/images/interior1.jpg"
                    alt={`Blog `}
                    className="object-cover "
                    fill
                // width={48}   // Reduced width (12 * 4)
                // height={48}  // Reduced height (12 * 4)
                />
            </div>

            {/* Content on the right */}
            <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800">
                    Blog Title
                </h4>

                <p className="text-sm leading-4 text-gray-500 line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint adipisci libero eos quibusdam, nobis sequi.
                </p>

                <div className="flex justify-between">
                    <p className="text-xs text-gray-400 mt-2">01/01/2023</p>
                    <p className="text-xs text-gray-400 mt-2">
                        <span className="font-semibold">~:</span> John Doe
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogCardSm