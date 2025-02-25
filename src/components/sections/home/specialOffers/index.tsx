"use client";
import React from "react";
import Container from "@/components/common/container";
import Image from "next/image";

const offers = [
    {
        id: 1,
        title: "Winter Specials: 20% Off on Soups",
        description: "Warm up this winter with our delicious soups, now at 20% off. Available every evening from 6 PM to 9 PM.",
        image: "/images/dishes/pasta.jpg",
        link: "/offers/winter-specials",
        isNew: true, // Add this field to indicate if the offer is new
    },
    {
        id: 2,
        title: "Happy Hour: Buy 1 Get 1 Free",
        description: "Join us every weekday from 4 PM to 6 PM for our exclusive happy hour offer on selected drinks.",
        image: "/images/dishes/burger.jpg",
        link: "/offers/happy-hour",
        isNew: false,
    },
    {
        id: 3,
        title: "Weekend Brunch: Free Dessert",
        description: "Enjoy a complimentary dessert with your weekend brunch. Available on Saturdays and Sundays only.",
        image: "/images/dishes/bread_stollen.jpg",
        link: "/offers/weekend-brunch",
        isNew: true, // Add this field to indicate if the offer is new
    },
];

const SpecialOffers = () => {
    return (
        <section className="special-offers py-16">
            <Container maxWidth="lg">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-8">
                    Special <span className="text-yellow-600">Offers</span>
                </h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                    Explore our seasonal promotions, exclusive discounts, and exciting happy hours. Don’t miss out on these limited-time deals!
                </p>

                {/* Offers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition p-4"
                        >
                            {/* New Badge */}
                            {offer.isNew && (
                                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                                    New
                                </span>
                            )}
                            {/* Offer Image */}
                            <Image
                                src={offer.image}
                                alt={offer.title}
                                className="rounded-lg mb-4 object-cover w-full h-40"
                                width={300}
                                height={200}
                            />
                            {/* Offer Title */}
                            <h3 className="text-lg font-bold mb-2">{offer.title}</h3>
                            {/* Offer Description */}
                            <p className="text-gray-600 mb-4 line-clamp-2">{offer.description}</p>
                            {/* CTA Button */}
                            <a
                                href={offer.link}
                                className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
                            >
                                Claim Offer
                            </a>
                        </div>
                    ))}
                </div>

                {/* Explore All Offers Button */}
                <div className="text-center mt-12">
                    <a
                        href="/offers"
                        className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition"
                    >
                        Explore All Deals
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default SpecialOffers;
