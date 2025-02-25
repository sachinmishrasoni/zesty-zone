"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import AppName from "@/components/common/AppName";

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-gray-50 to-yellow-100 text-center">
            <AppName />
            {/* Error Illustration */}
            <div className="relative w-64 h-64">
                <Image
                    src="/images/404-illustration.png" // Replace with your illustration image path
                    alt="404 Not Found"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                />
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Oops! Page Not Found
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8">
                The page you&apos;re looking for might have been removed or is temporarily unavailable.
            </p>

            {/* CTA Button */}
            <Link href="/" className="bg-yellow-600 text-white px-6 py-2 rounded-md text-lg font-semibold shadow-lg hover:bg-yellow-700 transition">
                Go Back to Home
            </Link>
        </div>
    );
};

export default PageNotFound;
