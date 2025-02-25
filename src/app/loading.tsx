import AppName from "@/components/common/AppName";
import React from "react";

const Loading = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-gray-50 to-yellow-100 flex flex-col items-center justify-center">
            {/* App Name at the top center */}
            <div className="absolute top-8 w-full flex justify-center">
                <AppName />
            </div>

            {/* Spinner and Loading Text */}
            <div className="flex flex-col items-center">
                {/* Spinner */}
                <div className="w-16 h-16 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin"></div>

                {/* Loading Text */}
                <p className="mt-4 text-lg font-semibold text-gray-700">Loading, please wait...</p>
            </div>
        </div>
    );
};

export default Loading;
