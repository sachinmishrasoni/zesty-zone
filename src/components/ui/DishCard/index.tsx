import Icons from "@/icons";
import { Button, Select, Tooltip } from "antd";
import Ribbon from "antd/es/badge/Ribbon";
import Image from "next/image";
import React, { useState } from "react";

const DishCard: React.FC = () => {
    const [isFavorite, setIsFavorite] = useState(false); // Toggle favorite
    const [quantity, setQuantity] = useState(0); // Quantity in cart
    // const [selectedSize, setSelectedSize] = useState("small"); // Dish size
    const [loadingImage, setLoadingImage] = useState(true); // Loading state for image

    // Toggle favorite handler
    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite);
        // Persist favorite status if needed (e.g., localStorage or API)
    };

    // Add to Cart logic
    const handleAddToCart = () => {
        setQuantity(1); // Add the first item
    };

    // Increment quantity
    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    // Decrement quantity
    const handleDecrement = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 0)); // Decrease or remove item
    };

    // Handle image loading
    const handleImageLoad = () => {
        setLoadingImage(false);
    };

    return (
        <Ribbon text="New" color="red" placement="start">
            <div className="relative bg-lightFg rounded-lg shadow-md hover:shadow-lg transition-all p-1 group border">
                {/* Dish Image */}
                <div className="w-full h-40  relative overflow-hidden rounded-lg">
                    {/* Skeleton loader for image */}
                    {loadingImage && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    )}
                    {/* Heart Icon for Favorites */}
                    <div className="absolute top-0 right-0 p-1 z-50">
                        <Tooltip title={isFavorite ? "" : "Favorites"} placement="bottom">
                            <Button
                                type="text"
                                shape="circle"
                                size="large"
                                className="!bg-black/20 backdrop-blur-sm"
                                aria-label={isFavorite ? "Unfavorite dish" : "Favorite dish"}
                                onClick={handleFavoriteToggle}
                                icon={
                                    <div
                                        className={`transform ${isFavorite ? "animate-ping-once" : ""
                                            }`}
                                    >
                                        {isFavorite ? (
                                            <Icons.HeartFull size={25} className="text-red-500 transition-all duration-300" />
                                        ) : (
                                            <Icons.HeartEmpty size={25} className="text-gray-400 transition-all duration-300" />
                                        )}
                                    </div>
                                }
                            />
                        </Tooltip>
                    </div>

                    {/* <div className="flex items-center gap-1 absolute bottom-2 right-2 z-20">
                        <Icons.Dot size={18} className="text-red-500" />
                        <p className="text-xs text-white">{'Out of Stock'}</p>
                    </div> */}
                    <Image
                        src={"/images/dishes/burger.jpg"}
                        alt={"Burger - Delicious and Juicy"}
                        fill
                        loading="lazy"
                        className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                        onLoad={handleImageLoad}
                    />
                </div>

                <div className="content p-2 pt-0">

                    {/* Dish Info */}
                    <div className="mt-2">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-xl font-semibold text-gray-800">Burger</h1>
                                <h3 className="text-yellow-600 font-bold">Price: ₹299</h3>
                            </div>
                            <Tooltip title="Vegetarian">
                                {/* <img
                                    src="/svg/vegetarian-icon.svg"
                                    alt="Vegetarian dish"
                                    className="w-10 h-10"
                                /> */}
                                <Image
                                    src="/svg/vegetarian-icon.svg"
                                    alt="Vegetarian dish"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10"
                                />
                            </Tooltip>
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Praesentium ipsam nihil inventore porro rerum. Corporis.
                        </p>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="flex justify-between mt-2 items-center">
                        <Select
                            defaultValue="small"
                            className="!rounded-full !hidden md:!block"
                            style={{ borderRadius: "50px" }}
                            size="small"
                            // onChange={setSelectedSize}
                            aria-label="Select dish size"
                            options={[
                                { value: "small", label: "Small" },
                                { value: "medium", label: "Medium" },
                                { value: "large", label: "Large" },
                                { value: "extra-large", label: "Extra Large" },
                                { value: "custom", label: "Custom" },
                            ]}
                        />
                        {quantity > 0 ? (
                            <div className="flex items-center gap-2">
                                <Tooltip title="Decrease quantity">
                                    <Button
                                        type="text"
                                        shape="circle"
                                        size="middle"
                                        icon={<Icons.Minus />}
                                        aria-label="Decrease quantity"
                                        onClick={handleDecrement}
                                    />
                                </Tooltip>
                                <span className="text-sm font-medium">{quantity}</span>
                                <Tooltip title="Increase quantity">
                                    <Button
                                        type="text"
                                        shape="circle"
                                        size="middle"
                                        icon={<Icons.Plus />}
                                        aria-label="Increase quantity"
                                        onClick={handleIncrement}
                                    />
                                </Tooltip>
                            </div>
                        ) : (
                            <Tooltip title="Add to cart" placement="bottom">
                                <button
                                    className="w-full md:w-auto bg-yellow-600 text-white py-2 px-4 rounded-full text-sm font-medium shadow hover:bg-yellow-600 transition"
                                    aria-label="Add to cart"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </button>
                            </Tooltip>
                        )}
                    </div>
                </div>
            </div>
        </Ribbon>
    );
};

export default DishCard;
