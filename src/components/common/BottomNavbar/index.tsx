"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For active route detection
import Icon from "@/icons";

const navItems = [
    { label: "Home", href: "/", icon: <Icon.Home size={24} /> },
    { label: "Menu", href: "/menu", icon: <Icon.Hamburger size={24} /> },
    { label: "Booking", href: "/booking", icon: <Icon.Calendar size={24} /> },
    { label: "Blog", href: "/blog", icon: <Icon.Blogger size={24} /> },
    { label: "Profile", href: "/profile", icon: <Icon.User size={24} /> },
];

const BottomNavbar = () => {
    const pathname = usePathname(); // Get current active route

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200">
            <div className="flex justify-around items-center py-3">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col items-center group"
                    >
                        {/* Icon with Bounce Animation */}
                        <div
                            className={`text-gray-600 group-hover:text-yellow-600 transition duration-300 ${
                                pathname === item.href ? "text-yellow-600 animate-bounce" : ""
                            }`}
                        >
                            {item.icon}
                        </div>

                        {/* Label with Slide Animation */}
                        <span
                            className={`mt-1 text-xs font-medium text-gray-600 group-hover:text-yellow-600 transition-transform duration-300 ${
                                pathname === item.href
                                    ? "text-yellow-600 font-bold translate-y-[-2px]"
                                    : "group-hover:translate-y-[-2px]"
                            }`}
                        >
                            {item.label}
                        </span>

                        {/* Indicator for Active Item */}
                        {pathname === item.href && (
                            <div className="w-1 h-1 rounded-full bg-yellow-600 mt-1 animate-pulse"></div>
                        )}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default BottomNavbar;
