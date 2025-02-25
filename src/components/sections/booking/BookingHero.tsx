import React from 'react'

const BookingHero = () => {
    return (
        <section
            className="relative min-h-[25vh] bg-fixed bg-cover bg-center flex flex-col justify-center items-center"
            style={{ backgroundImage: `url('/images/background1.jpg')` }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>

            {/* Content Container */}
            <div className="relative h-full px-4 z-10 max-w-screen-lg mx-auto text-center text-white flex flex-col justify-center items-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-100 via-gray-50 to-yellow-400 bg-clip-text text-transparent">
                    Reservation
                </h1>

                <p className="text-lg md:text-xl mb-6 max-w-2xl">
                    Enjoy a wonderful dining experience at <span className="font-bold text-yellow-600">Zestzone</span>
                </p>
            </div>
        </section>
    )
}

export default BookingHero