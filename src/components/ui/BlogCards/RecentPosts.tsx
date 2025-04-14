// components/common/RecentPosts.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IPost {
  slug: string;
  image: string;
  title: string;
  date: string;
}

interface IPopularPosts {
  recentPosts: IPost[]
}

const RecentPosts = ({ recentPosts }: IPopularPosts) => {
  return (
    <section className="my-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent Posts</h3>
      <div className="space-y-4">
        {recentPosts.map((post: { slug: string; image: string; title: string; date: string }) => (
          <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            /> */}
            <div className="relative w-full h-56">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h4>
              <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
