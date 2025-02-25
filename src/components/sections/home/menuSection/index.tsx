"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const categories = [
  { id: 1, name: "Breakfast", image: "/images/background1.jpg" },
  { id: 2, name: "Lunch", image: "/images/lunch.jpg" },
  { id: 3, name: "Dinner", image: "/images/dinner.jpg" },
  { id: 4, name: "Drinks", image: "/images/drinks.jpg" },
];

const dishesByCategory = {
  Recent: [
    { id: 1, name: "Avocado Toast", image: "/images/background1.jpg" },
    { id: 2, name: "Mango Cheesecake", image: "/images/background2.jpg" },
    { id: 3, name: "Classic Margherita Pizza", image: "/images/background1.jpg" },
    { id: 4, name: "Sushi Platter", image: "/images/background2.jpg" },
    { id: 5, name: "Spicy Tandoori Chicken", image: "/images/background1.jpg" },
    { id: 6, name: "Thai yellow Curry", image: "/images/background2.jpg" },
    { id: 7, name: "Grilled Salmon", image: "/images/background1.jpg" },
    { id: 8, name: "Mango Smoothie", image: "/images/background2.jpg" },
    { id: 9, name: "Herb-Crusted Lamb", image: "/images/background1.jpg" },
    { id: 10, name: "Beef Wellington", image: "/images/background2.jpg" },
  ],
  "New Dishes": [
    { id: 3, name: "Classic Margherita Pizza", image: "/images/margherita-pizza.jpg" },
    { id: 4, name: "Sushi Platter", image: "/images/sushi-platter.jpg" },
  ],
  "Trending Dishes": [
    { id: 5, name: "Spicy Tandoori Chicken", image: "/images/tandoori-chicken.jpg" },
    { id: 6, name: "Thai yellow Curry", image: "/images/yellow-curry.jpg" },
  ],
  "Popular Dishes": [
    { id: 7, name: "Grilled Salmon", image: "/images/grilled-salmon.jpg" },
    { id: 8, name: "Mango Smoothie", image: "/images/mango-smoothie.jpg" },
  ],
  "Chef-Recommended": [
    { id: 9, name: "Herb-Crusted Lamb", image: "/images/herb-crusted-lamb.jpg" },
    { id: 10, name: "Beef Wellington", image: "/images/beef-wellington.jpg" },
  ],
};

const MenuSection = () => {
  return (
    <section className="menu-section py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold mb-6">
          Our <span className="text-yellow-600">Menu</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore our wide range of delicious offerings, from hearty breakfasts to delectable dinners. 
          Find your favorite dish or try something new!
        </p>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                width={300}
                height={160}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>

        

        {/* Swiper Sections for Each Category */}
        {Object.entries(dishesByCategory).map(([category, dishes]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{category}</h3>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="py-4"
            >
              {dishes.map((dish) => (
                <SwiperSlide key={dish.id}>
                  <div className="relative group overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                      width={500}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-white text-lg font-semibold">{dish.name}</h4>
                      <span className="mt-2 text-sm text-yellow-400">{category}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
