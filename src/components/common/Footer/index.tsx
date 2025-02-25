import { Footer as AntFooter } from 'antd/es/layout/layout';
import Link from 'next/link';
import React from 'react';
import AppName from '../AppName';
import { Button, Tooltip } from 'antd';
import Icon from '@/icons';

const socialLinks = [
    { name: 'Facebook', icon: <Icon.Facebook size={25} />, link: 'https://www.facebook.com/zestyzone' },
    { name: 'Instagram', icon: <Icon.Instagram size={25} />, link: 'https://www.instagram.com/zestyzone' },
    { name: 'Twitter', icon: <Icon.Twitter size={25} />, link: 'https://www.twitter.com/zestyzone' },
];

const Footer = () => {
    return (
        <AntFooter className="space-y-5 rounded-t-2xl bg-gray-100 lg:!py-10 !px-6 !pb-28">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* About Section */}
                <div className="flex flex-col items-center text-center">
                    <AppName />
                    <p className="mt-3 text-gray-700">
                        Welcome to Zesty Zone, where flavors come alive! Our mission is to serve fresh, delicious meals in a
                        cozy ambiance that creates unforgettable dining experiences for you and your loved ones.
                    </p>
                    <div className="mt-5">
                        <h3 className="font-bold text-center text-gray-800">Follow Us</h3>
                        <div className="flex gap-3 mt-2">
                            {socialLinks.map((link, index) => (
                                <Tooltip key={index} title={link.name} placement="bottom">
                                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                                        <Button type="text" shape="circle" size="large" icon={link.icon} />
                                    </a>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="half-underline font-bold mb-3 text-gray-800">Contact Us</h3>
                    <div className="text-gray-700">
                        <p><strong>Main Branch:</strong></p>
                        <address>123 Flavor Street, Karol Bagh, New Delhi - 110005</address>
                        <p className="mt-2">
                            <strong>Phone:</strong> +91 987-654-3210
                        </p>
                        <p>
                            <strong>Email:</strong>{' '}
                            <a href="mailto:support@zestyzone.com" className="text-blue-600 hover:underline">
                                support@zestyzone.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Branches */}
                <div>
                    <h3 className="half-underline font-bold mb-3 text-gray-800">Our Branches</h3>
                    <ul className="text-gray-700 space-y-2">
                        <li>Branch 1: 123 Food Plaza, Mumbai</li>
                        <li>Branch 2: 456 Spice Avenue, Bangalore</li>
                        <li>Branch 3: 789 Gourmet Lane, Kolkata</li>
                        <li>Branch 4: 321 Savory Street, Hyderabad</li>
                    </ul>
                </div>

                {/* Opening Hours */}
                <div>
                    <h3 className="half-underline font-bold mb-3 text-gray-800">Opening Hours</h3>
                    <ul className="text-gray-700 space-y-1">
                        <li>Monday - Friday: 10:00 AM - 11:00 PM</li>
                        <li>Saturday: 9:00 AM - 12:00 AM</li>
                        <li>Sunday: 9:00 AM - 10:00 PM</li>
                        <li className="text-red-600 font-bold">Closed on Public Holidays</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-300 pt-6">
                <div className="flex justify-center gap-6 mb-3 text-gray-600">
                    <Link href="/privacy-policy" className="hover:underline">
                        Privacy Policy
                    </Link>
                    <Link href="/terms-and-conditions" className="hover:underline">
                        Terms & Conditions
                    </Link>
                </div>
                <p className="text-center text-gray-600">
                    Copyright &copy; {new Date().getFullYear()} All rights reserved by{' '}
                    <span className="font-bold text-yellow-600">Zesty Zone</span>
                </p>
            </div>
        </AntFooter>
    );
};

export default Footer;
