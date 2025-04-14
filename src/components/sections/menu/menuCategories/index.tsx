"use client";
import { Image } from "antd";
import React, { useState } from "react";

const categories = ["Breakfast", "Lunch", "Dinner", "Drinks", "Desserts"];

const dishes = [
    { id: 1, name: "Pancakes", category: "Breakfast", image: "/images/pancakes.jpg" },
    { id: 2, name: "Caesar Salad", category: "Lunch", image: "/images/caesar-salad.jpg" },
    { id: 3, name: "Grilled Steak", category: "Dinner", image: "/images/grilled-steak.jpg" },
    { id: 4, name: "Margarita", category: "Drinks", image: "/images/margarita.jpg" },
    { id: 5, name: "Cheesecake", category: "Desserts", image: "/images/cheesecake.jpg" },
];

const MenuCategories = () => {
    const [activeCategory, setActiveCategory] = useState("Breakfast");

    const filteredDishes = dishes.filter((dish) => dish.category === activeCategory);

    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                {/* Categories Tabs */}
                <div className="flex overflow-x-auto gap-4 mb-6 scrollbar-hide">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full font-medium whitespace-nowrap ${activeCategory === category
                                ? "bg-yellow-600 text-white"
                                : "bg-gray-200 text-gray-800 hover:bg-yellow-100"
                                } transition`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Filtered Dishes */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredDishes.map((dish) => (
                        <div
                            key={dish.id}
                            className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            {/* <img
                                src={dish.image}
                                alt={dish.name}
                                className="w-full h-40 object-cover"
                            /> */}
                            <div className="relative w-full h-40">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    // fill
                                    className="object-cover rounded" // add rounded or shadow classes as needed
                                    sizes="100vw"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <h3 className="text-white text-lg font-semibold">{dish.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuCategories;
