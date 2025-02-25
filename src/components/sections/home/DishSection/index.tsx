"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Container from '@/components/common/container';
import Image from 'next/image';
import './index.css';
import { Button, Tooltip } from 'antd';
import Icon from '@/icons';
import SectionBanner from '@/components/common/SectionBanner';


// const dishes = [
//     { id: 1, category: 'New', name: 'Fresh Avocado Salad', image: '/images/background1.jpg' },
//     { id: 2, category: 'Popular', name: 'Classic Margherita Pizza', image: '/images/background2.jpg' },
//     { id: 3, category: 'Trending', name: 'Spicy Tandoori Chicken', image: '/images/background1.jpg' },
//     { id: 4, category: 'Chef-Recommended', name: 'Herb-Crusted Lamb', image: '/images/background2.jpg' },
//     { id: 5, category: 'New', name: 'Mango Cheesecake', image: '/images/background2.jpg' },
//     { id: 6, category: 'Popular', name: 'Sushi Platter', image: '/images/background1.jpg' },
//     { id: 7, category: 'Trending', name: 'Thai yellow Curry', image: '/images/background2.jpg' },
//     { id: 8, category: 'Chef-Recommended', name: 'Beef Wellington', image: '/images/background2.jpg' },
//     { id: 9, category: 'New', name: 'Spaghetti Carbonara', image: '/images/background1.jpg' },
//     { id: 10, category: 'Popular', name: 'Vegetable Stir-Fry', image: '/images/background2.jpg' },
//     { id: 11, category: 'Trending', name: 'Sushi Platter', image: '/images/background1.jpg' },
//     { id: 12, category: 'Chef-Recommended', name: 'Beef Wellington', image: '/images/background2.jpg' },
//     { id: 13, category: 'New', name: 'Spaghetti Carbonara', image: '/images/background1.jpg' },
//     { id: 14, category: 'Popular', name: 'Vegetable Stir-Fry', image: '/images/background2.jpg' },
//     { id: 15, category: 'Trending', name: 'Sushi Platter', image: '/images/background1.jpg' },
//     { id: 16, category: 'Chef-Recommended', name: 'Beef Wellington', image: '/images/background2.jpg' },
//     { id: 17, category: 'New', name: 'Spaghetti Carbonara', image: '/images/background1.jpg' },
//     { id: 18, category: 'Popular', name: 'Vegetable Stir-Fry', image: '/images/background2.jpg' },
//     { id: 19, category: 'Trending', name: 'Sushi Platter', image: '/images/background1.jpg' },
//     { id: 20, category: 'Chef-Recommended', name: 'Beef Wellington', image: '/images/background2.jpg' },
// ];

const categories = [
    { id: 1, name: "Breakfast", image: "/images/dishes/breakfast.jpg" },
    { id: 2, name: "Lunch", image: "/images/dishes/lunch.jpg" },
    { id: 3, name: "Dinner", image: "/images/dishes/dinner.jpg" },
    { id: 4, name: "Drinks", image: "/images/dishes/drinks.jpg" },
];

const dishesByCategory = {
    Recent: [
        { id: 1, name: "Avocado Toast", image: "/images/dishes/breakfast.jpg" },
        { id: 2, name: "Mango Cheesecake", image: "/images/dishes/mango-cheesecake.jpg" },
        { id: 3, name: "Classic Margherita Pizza", image: "/images/dishes/classic-margherita.jpg" },
        { id: 4, name: "Sushi Platter", image: "/images/dishes/lunch.jpg" },
        { id: 5, name: "Spicy Tandoori Chicken", image: "/images/dishes/dinner.jpg" },
        // { id: 6, name: "Thai yellow Curry", image: "/images/background2.jpg" },
        // { id: 7, name: "Grilled Salmon", image: "/images/background1.jpg" },
        // { id: 8, name: "Mango Smoothie", image: "/images/background2.jpg" },
        // { id: 9, name: "Herb-Crusted Lamb", image: "/images/background1.jpg" },
        // { id: 10, name: "Beef Wellington", image: "/images/background2.jpg" },
    ],
    "New Dishes": [
        { id: 6, name: "Classic Margherita Pizza", image: "/images/dishes/classic-margherita.jpg" },
        { id: 7, name: "Sushi Platter", image: "/images/dishes/breakfast.jpg" },
        { id: 8, name: "Spicy Tandoori Chicken", image: "/images/dishes/dinner.jpg" },
    ],
    "Trending Dishes": [
        { id: 9, name: "Spicy Tandoori Chicken", image: "/images/dishes/dinner.jpg" },
        { id: 10, name: "Thai yellow Curry", image: "/images/dishes/lunch.jpg" },
        { id: 11, name: "Grilled Salmon", image: "/images/dishes/breakfast.jpg" },
    ],
    "Popular Dishes": [
        { id: 12, name: "Grilled Salmon", image: "/images/dishes/classic-margherita.jpg" },
        { id: 13, name: "Mango Smoothie", image: "/images/dishes/breakfast.jpg" },
        { id: 14, name: "Herb-Crusted Lamb", image: "/images/dishes/dinner.jpg" },
    ],
    "Chef-Recommended": [
        { id: 15, name: "Herb-Crusted Lamb", image: "/images/dishes/mango-cheesecake.jpg" },
        { id: 16, name: "Beef Wellington", image: "/images/dishes/classic-margherita.jpg" },
        { id: 17, name: "Mango Smoothie", image: "/images/dishes/breakfast.jpg" },
    ],
};

const DishSection = () => {
    // const [activeCategory, setActiveCategory] = useState('New');

    // const filteredDishes = dishes.filter((dish) => dish.category === activeCategory);

    return (
        <section className="menu-section">
            {/* <div className="container mx-auto px-6"> */}
            <SectionBanner backgroundImage="/images/restaurent.jpg" padding="py-12" overlayColor='white'>
                <div className="text-center text-gray-800 space-y-3">
                    <h2 className="text-4xl font-bold mb-0">Explore Our <span className="text-yellow-600">Delicious Dishes</span></h2> 
                    <p className="text-lg">Explore our wide range of delicious offerings, from hearty breakfasts to delectable dinners. Find your favorite dish or try something new!</p>  
                </div>  
            </SectionBanner>
            <div>
                <Container maxWidth='lg' className='py-10 pb-16'>
                    {/* <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                        Explore our wide range of delicious offerings, from hearty breakfasts to delectable dinners.
                        Find your favorite dish or try something new!
                    </p> */}

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
                        <div key={category} className="mb-6">
                            <div className='flex items-center justify-between'>
                                <h3 className="text-2xl font-bold text-gray-800">{category}</h3>
                                <div className='flex items-center'>
                                    <Tooltip title="Back" placement='bottom'>
                                        <Button type='text' shape='circle' icon={<Icon.ArrowBack />} />
                                    </Tooltip>
                                    <Tooltip title="Next" placement='bottom'>
                                        <Button type='text' shape='circle' icon={<Icon.ArrowForward />} />
                                    </Tooltip>
                                </div>
                            </div>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={1}
                                // navigation
                                breakpoints={{
                                    640: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                className="!py-5 !px-3"
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
                        <button className="bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition">
                            View Full Menu
                        </button>
                    </div>
                </Container>
            </div>
            {/* </div> */}
        </section>
    );
};

export default DishSection;
