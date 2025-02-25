"use client";
import React from "react";
import Container from "@/components/common/container";
import Image from "next/image";

const blogs = [
    {
        id: 1,
        title: "5 Easy Recipes for Busy Weeknights",
        description: "Discover quick and delicious recipes that are perfect for those busy weeknight dinners.",
        image: "/images/dishes/breakfast.jpg",
        date: "2024-12-05T10:00:00",
        link: "/blogs/easy-weeknight-recipes",
    },
    {
        id: 2,
        title: "Behind the Scenes: A Day in the Kitchen",
        description: "Take a sneak peek into our kitchen and see how our chefs prepare your favorite dishes.",
        image: "/images/dishes/dinner.jpg",
        date: "2024-12-08T14:00:00",
        link: "/blogs/day-in-the-kitchen",
    },
    {
        id: 3,
        title: "10 Tips for the Perfect Dining Experience",
        description: "Elevate your dining experience with these simple yet effective tips.",
        image: "/images/dishes/lunch.jpg",
        date: "2024-12-10T18:30:00",
        link: "/blogs/perfect-dining-tips",
    },
];

const OurBlogs = () => {
    return (
        <section className="our-blogs py-16">
            <Container maxWidth="lg">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-8">
                    Our <span className="text-yellow-600">Blogs</span>
                </h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                    Explore our latest articles on recipes, behind-the-scenes stories, and dining tips. Stay inspired with Zesty-Zone's culinary journey!
                </p>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4">
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
                    ))}
                </div>

                {/* Button to Navigate to Blog Page */}
                <div className="text-center mt-12">
                    <a
                        href="/blogs"
                        className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition"
                    >
                        View All Blogs
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default OurBlogs;
