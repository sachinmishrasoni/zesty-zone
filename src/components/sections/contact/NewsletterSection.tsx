import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/common/container";

const NewsletterSection: React.FC = () => {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail(""); // Clear the email field after subscription
        }
    };

    return (
        <section className="py-16 bg-gradient-to-r from-yellow-50 via-gray-50 to-yellow-100">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    {/* Left Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-gray-800">
                            Join Our <span className="text-yellow-600">Newsletter</span>
                        </h2>
                        <p className="text-gray-600">
                            Be the first to know about exclusive offers, exciting events, and our latest updates. Sign up now and never miss out!
                        </p>
                        <ul className="text-gray-600 space-y-3">
                            <li className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-yellow-600 rounded-full"></span>
                                Get exclusive discounts and offers.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-yellow-600 rounded-full"></span>
                                Be informed about upcoming events and menu updates.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-yellow-600 rounded-full"></span>
                                Stay inspired with seasonal recipes and tips.
                            </li>
                        </ul>
                        {!isSubscribed ? (
                            <form
                                onSubmit={handleSubscribe}
                                className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full sm:w-auto px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 transition duration-300"
                                >
                                    Subscribe
                                </button>
                            </form>
                        ) : (
                            <p className="mt-4 text-green-600 font-semibold">
                                Thank you for subscribing to our newsletter!
                            </p>
                        )}
                    </div>
                    {/* Right Content */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/newsletter.jpg" // Replace with your image path
                            alt="Newsletter"
                            className="rounded-lg shadow-lg"
                            width={300}
                            height={300}
                            priority
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default NewsletterSection;
