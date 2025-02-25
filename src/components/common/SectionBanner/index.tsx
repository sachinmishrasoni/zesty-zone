import React, { ReactNode } from "react";
import Container from "../container";

interface IBannerProps {
    backgroundImage: string;
    overlayColor?: string;
    overlayOpacity?: number;
    padding?: string;
    bgFixed?: boolean;
    children?: ReactNode;
}

const SectionBanner: React.FC<IBannerProps> = ({
    backgroundImage,
    overlayColor = "black",
    overlayOpacity = 0.5,
    padding = "py-10",
    bgFixed = true,
    children,
}) => {
    return (
        <section
            className={`relative text-center flex flex-col justify-center ${bgFixed ? "bg-fixed" : "bg-scroll"
                } bg-center bg-cover bg-no-repeat ${padding}`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: overlayColor,
                    opacity: overlayOpacity,
                }}
            ></div>
            {/* Content */}
            <div className="relative z-10">
                <Container>
                    {children}
                </Container>
            </div>
        </section>
    );
};

export default SectionBanner;
