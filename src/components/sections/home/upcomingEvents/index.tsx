"use client";
import React, { useState, useEffect } from "react";
import Container from "@/components/common/container";
import Image from "next/image";

const events = [
    {
        id: 1,
        title: "Live Music Night",
        date: "2024-12-10T19:00:00",
        description: "Experience an unforgettable evening with live music and delicious cuisine.",
        image: "/images/music-night.jpg",
        link: "/events/live-music-night",
    },
    {
        id: 2,
        title: "Italian Cooking Class",
        date: "2024-12-15T14:00:00",
        description: "Learn the secrets of Italian cooking from our expert chefs.",
        image: "/images/cooking-class.jpg",
        link: "/events/cooking-class",
    },
    {
        id: 3,
        title: "Holiday Brunch Special",
        date: "2024-12-20T10:00:00",
        description: "Celebrate the holiday season with a festive brunch at Zesty-Zone.",
        image: "/images/holiday-brunch.jpg",
        link: "/events/holiday-brunch",
    },
];

const UpcomingEvents = () => {
    const [nextEvent, setNextEvent] = useState(events[0]);
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        // Calculate the countdown for the next event
        const interval = setInterval(() => {
            const eventDate = new Date(nextEvent.date).getTime();
            const now = new Date().getTime();
            const difference = eventDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            } else {
                setTimeLeft("Event has started!");
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [nextEvent]);

    return (
        <section className="upcoming-events py-16">
            <Container maxWidth="lg">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-8">
                    Upcoming <span className="text-yellow-600">Events</span>
                </h2>

                {/* Featured Event */}
                <div className="featured-event bg-white rounded-lg shadow-lg p-6 mb-12">
                    <h3 className="text-2xl font-bold mb-4">Featured Event</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Event Image */}
                        <div className="flex justify-center">
                            <Image
                                src={nextEvent.image}
                                alt={nextEvent.title}
                                className="rounded-lg shadow-lg object-cover w-full max-w-md"
                                width={400}
                                height={300}
                            />
                        </div>

                        {/* Event Details */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold">{nextEvent.title}</h4>
                            <p className="text-gray-600">{nextEvent.description}</p>
                            <p className="text-gray-800 font-semibold">
                                Date: {new Date(nextEvent.date).toLocaleDateString()} <br />
                                Time: {new Date(nextEvent.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </p>

                            {/* Countdown Timer */}
                            <div className="text-yellow-600 text-lg font-semibold">
                                Starts in: <span className="font-bold">{timeLeft}</span>
                            </div>

                            <a
                                href={nextEvent.link}
                                className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

                {/* Events List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div key={event.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4">
                            <Image
                                src={event.image}
                                alt={event.title}
                                className="rounded-lg mb-4 object-cover w-full h-40"
                                width={300}
                                height={200}
                            />
                            <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                            <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                            <p className="text-sm text-gray-800 font-semibold">
                                {new Date(event.date).toLocaleDateString()} |{" "}
                                {new Date(event.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </p>
                            <a
                                href={event.link}
                                className="inline-block text-yellow-600 mt-3 font-semibold hover:underline"
                            >
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default UpcomingEvents;
