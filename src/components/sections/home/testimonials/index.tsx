"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Avatar } from "antd";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        review: "The food here is amazing! The flavors are out of this world, and the staff is so friendly. Highly recommended!",
        rating: 5,
        photo: "/images/users/user1.jpg",
    },
    {
        id: 2,
        name: "Jane Smith",
        review: "Zesty-Zone offers the best dining experience in town. The ambiance is perfect, and the service is top-notch!",
        rating: 4,
        photo: "/images/users/user2.jpg",
    },
    {
        id: 3,
        name: "Robert Brown",
        review: "I’ve never tasted anything like their desserts. Absolutely heavenly! Will definitely come back.",
        rating: 5,
        photo: "/images/users/user3.jpg",
    },
    {
        id: 4,
        name: "Emily Davis",
        review: "The happy hour deals are unbeatable. Great food, great drinks, and great prices!",
        rating: 4,
        photo: "/images/users/user1.jpg",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials py-16">
            <div className="container mx-auto px-6">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-8">
                    What Our <span className="text-yellow-600">Customers Say</span>
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    Hear from our happy customers who have enjoyed our food, ambiance, and service. Their words inspire us to keep delivering the best!
                </p>

                {/* Testimonials Carousel */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
                                {/* Profile Photo */}
                                <div className="flex items-center mb-4">
                                    {/* <Image
                                        src={testimonial.photo}
                                        alt={testimonial.name}
                                        className="rounded-full object-cover w-14 h-14"
                                        width={56}
                                        height={56}
                                    /> */}
                                    <Avatar size={56} src={testimonial.photo}>{testimonial.name.charAt(0).toUpperCase()}</Avatar>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold">{testimonial.name}</h3>
                                        <div className="flex">
                                            {[...Array(testimonial.rating)].map((_, index) => (
                                                <span key={index} className="text-yellow-500">
                                                    ★
                                                </span>
                                            ))}
                                            {[...Array(5 - testimonial.rating)].map((_, index) => (
                                                <span key={index} className="text-gray-300">
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Review Text */}
                                <p className="text-gray-600 line-clamp-3">{testimonial.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Write a Review Button */}
                <div className="text-center mt-12">
                    <a
                        href="/reviews"
                        className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition"
                    >
                        Write a Review
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
