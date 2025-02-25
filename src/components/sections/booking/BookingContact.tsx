'use client';
import React from 'react';
import Container from '@/components/common/container';
import Icons from '@/icons';
import { useRouter } from 'next/navigation';

const BookingContact = () => {
    const router = useRouter();

    // Real data for contact information
    const contactInfo = [
        {
            id: 1,
            icon: <Icons.Email className="text-yellow-600 text-5xl mb-4" />,
            title: 'Email',
            data: ['0Nt8d@example.com', 'zestyzone@gmail.com'],
        },
        {
            id: 2,
            icon: <Icons.Phone className="text-yellow-600 text-5xl mb-4" />,
            title: 'Phone',
            data: ['+1 (800) 123-456', '+1 (800) 789-012'],
        },
        {
            id: 3,
            icon: <Icons.MapMarker className="text-yellow-600 text-5xl mb-4" />,
            title: 'Location',
            data: ['123 Flavor Street, Zesty Zone', 'New York City, NY 10001'],
        }
    ];

    return (
        <section className="py-16">
            <Container>
                <div className='text-center mb-12 space-y-1'>
                    <p className='text-yellow-600 text-sm'>Have any questions?</p>
                    <h3 className="text-4xl font-bold text-gray-800">Contact Us</h3>
                    <p className='text-gray-600'>We're here to help!</p>
                </div>

                {/* Contact Information Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {contactInfo.map((info) => (
                        <div key={info.id} className="flex flex-col items-center bg-lightFg p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-102 hover:shadow-lg hover:bg-yellow-50">
                            {info.icon}
                            <h4 className="text-2xl font-semibold text-gray-800 mb-2">{info.title}</h4>
                            {info.data.map((line, index) => (
                                <p key={index} className="text-gray-600">{line}</p>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white text-lg font-semibold rounded-lg shadow-md"
                        onClick={() => router.push('/contact')}
                    >
                        Submit a Query
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default BookingContact;
