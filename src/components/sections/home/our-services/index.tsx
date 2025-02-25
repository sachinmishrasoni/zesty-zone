"use client";
import Container from "@/components/common/container";
import Icon from "@/icons";
import React, { useState } from "react";

const servicesItem = [
    {
        title: "Breakfast",
        icon: <Icon.Breakfast size={50} />,
        description: "Start your day with a variety of freshly prepared, healthy breakfast options.",
    },
    {
        title: "Lunch",
        icon: <Icon.Lunch size={50} />,
        description: "Satisfy your midday hunger with our delicious and wholesome lunch offerings.",
    },
    {
        title: "Dinner",
        icon: <Icon.Dinner size={50} />,
        description: "End your day with hearty, flavorful dinner choices made just for you.",
    },
    {
        title: "Customizable Orders",
        icon: <Icon.Customize size={50} />,
        description: "Personalize your meals with your favorite ingredients, toppings, or dietary preferences.",
    },
    {
        title: "Fast Delivery",
        icon: <Icon.Delivery size={50} />,
        description: "Get your meals delivered hot and fresh within 30 minutes, ensuring maximum convenience.",
    },
    {
        title: "Quality Ingredients",
        icon: <Icon.Restaurant size={50} />,
        description: "We source premium, locally-sourced ingredients to guarantee freshness and flavor in every bite.",
    },
    {
        title: "Healthy Choices",
        icon: <Icon.Heart size={50} />,
        description: "Enjoy a variety of nutritious meal options, tailored to support your lifestyle and fitness goals.",
    },
    {
        title: "Affordable Prices",
        icon: <Icon.Wallet size={50} />,
        description: "Delicious meals priced to fit every budget without compromising on quality or taste.",
    },
    {
        title: "Eco-Friendly Packaging",
        icon: <Icon.Leaf size={50} />,
        description: "Our sustainable packaging is designed to reduce waste while keeping your meals fresh.",
    },
    {
        title: "Rewards Program",
        icon: <Icon.Reward size={50} />,
        description: "Earn points on every order and redeem them for discounts or exclusive perks.",
    },
    {
        title: "24/7 Customer Support",
        icon: <Icon.Support size={50} />,
        description: "Have questions? Our friendly support team is available around the clock to assist you.",
    },
];

const OurServices = () => {
    const [visibleItems, setVisibleItems] = useState(4); // State to control visible items

    const handleShowMore = () => {
        setVisibleItems(servicesItem.length); // Show all items
    };

    const handleShowLess = () => {
        setVisibleItems(4); // Show only 4 items
    };

    return (
        <section className="our-services py-10">
            <Container maxWidth="lg" className="py-10">
                <h1 className="text-4xl font-bold text-center">Our Services</h1>
                <p className="text-center text-gray-600 mt-2 max-w-3xl mx-auto">
                    Discover a world of delightful meals and unmatched services. From fresh ingredients to eco-friendly
                    packaging and lightning-fast delivery, our services are crafted to satisfy every craving while
                    keeping convenience in mind.
                </p>

                {/* Services Grid */}
                <div className="services-box mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesItem.slice(0, visibleItems).map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center rounded-lg p-4 shadow-md hover:cursor-pointer hover:shadow-lg transition transform hover:scale-105 bg-white"
                        >
                            {/* Animated Icon */}
                            <div className="mb-3 text-yellow-500 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                                {item.icon}
                            </div>
                            <p className="text-center text-lg font-bold">{item.title}</p>
                            <p className="text-center text-sm text-gray-600 line-clamp-2">{item.description}</p>
                            <a href="#service-details" className="mt-3 text-blue-500 text-sm hover:underline">
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>

                {/* Show More/Less Button */}
                <div className="text-center mt-8">
                    {visibleItems < servicesItem.length ? (
                        <button
                            onClick={handleShowMore}
                            className="px-6 py-3 bg-yellow-600 text-white rounded-md shadow-lg hover:bg-yellow-700 transition"
                        >
                            See More
                        </button>
                    ) : (
                        <button
                            onClick={handleShowLess}
                            className="px-6 py-3 bg-yellow-600 text-white rounded-md shadow-lg hover:bg-yellow-700 transition"
                        >
                            See Less
                        </button>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default OurServices;
