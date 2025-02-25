import React from 'react'
// import BlogPostList from '@/components/sections/blogs/BlogPostList'
// import NewsletterSignup from '@/components/common/NewsletterSignup'
import BlogHero from '@/components/sections/blogs/BlogHero'
import Container from '@/components/common/container'
// import BlogCategories from '@/components/ui/Blogs/BlogCategories'
// import RecentBlog from '@/components/ui/Blogs/RecentBlog'
// import PopularBlogs from '@/components/ui/Blogs/PopularBlogs'
import FeaturedBlogSection from '@/components/sections/blogs/FeaturedBlogSection'
import BlogListings from '@/components/sections/blogs/BlogListings'
import RecentPost from '@/components/sections/blogs/RecentPost'

const Blog = () => {
  return (
    <main className='blog-page min-h-screen bg-gradient-to-r from-yellow-50 via-gray-50 to-yellow-100 dark:from-darkBg-500 dark:via-darkBg dark:to-darkBg-700'>
      <BlogHero />
      <Container className='py-12 !pt-8 space-y-5'>
        <FeaturedBlogSection />

        <RecentPost />

        <RecentPost />

        <BlogListings />
      </Container>
      {/* <Container className='py-12'>
        <section className="grid grid-cols-3 gap-5">
          <aside className="space-y-6">
            <BlogCategories />
            <RecentBlog />
            <PopularBlogs />
          </aside>
          <main className="col-span-2 space-y-3">
            <FeaturedBlogSection />
            <BlogListings />
          </main>
        </section>
      </Container> */}

      {/* <BlogPostList /> */}
      {/* <NewsletterSignup /> */}
    </main>
  )
}

export default Blog