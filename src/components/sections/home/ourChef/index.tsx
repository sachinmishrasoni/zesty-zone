"use client";
import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";

const OurChef = () => {
    return (
        <section className="our-chef py-16">
            <Container maxWidth="lg" className="py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Section: Photo */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/chef.jpg"
                            alt="Chef in Action"
                            className="rounded-lg h-[400px] shadow-lg object-cover w-full max-w-md hover:scale-105 transition-transform duration-300"
                            width={400}
                            height={400}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    {/* Right Section: Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">
                            Meet Our <span className="text-yellw-600">Head Chef</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Chef Antonio Rossi brings over 20 years of culinary experience to Zesty-Zone.
                            Specializing in Italian and fusion cuisine, Chef Antonio has worked in
                            Michelin-starred kitchens around the globe. His philosophy centers around
                            simplicity, freshness, and delivering flavors that leave lasting memories.
                        </p>

                        {/* Chef Quote */}
                        <blockquote className="bg-gray-100 p-4 italic border-l-4 border-yellow-600">
                            <p>
                                &#34;Cooking is not just about feeding the body; it&#39;s about creating an
                                unforgettable experience that nourishes the soul.&#34;
                            </p>
                            <footer className="text-right font-bold mt-2">- Chef Antonio Rossi</footer>
                        </blockquote>

                        {/* CTA Link */}
                        <div>
                            <a
                                href="/about/team"
                                className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition"
                            >
                                Meet Our Team
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OurChef;
