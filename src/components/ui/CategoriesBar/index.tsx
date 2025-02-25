'use client';
import Container from '@/components/common/container'
import Icons from '@/icons'
import { Button, Tag, Tooltip } from 'antd'
import React, { useRef, useState } from 'react'

const CategoriesBar = () => {
    const chipsContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0); // Manage active chip

    const scrollToChip = (index: number): void => {
        if (!chipsContainerRef.current) return;

        const chips = chipsContainerRef.current.querySelectorAll<HTMLButtonElement>(
            ".chip"
        );
        const targetChip = chips[index];
        if (targetChip) {
            const chipOffset = targetChip.offsetLeft;
            const chipWidth = targetChip.offsetWidth;
            const containerWidth = chipsContainerRef.current.offsetWidth;

            // Calculate scroll position to bring chip into view
            const scrollToPosition = chipOffset - containerWidth / 2 + chipWidth / 2;
            chipsContainerRef.current.scrollTo({
                left: scrollToPosition,
                behavior: "smooth",
            });

            setActiveIndex(index); // Update active state
        }
    };

    return (
        <div className='categories-bar py-1 pb-3 bg-gradient-to-r from-yellow-50 via-gray-50 to-yellow-100 static top-[62px] z-[199]'>
            <Container className='!px-2' >
                <div className='flex items-center justify-between'>
                    <p className='text-lg font-semibold text-gray-800'>Categories</p>
                    <div className='flex gap-2'>
                        <Tooltip title="See all categories">
                            <Button type="text" shape='circle' size='middle' icon={<Icons.Search size={20} />} />
                        </Tooltip>
                        <Tooltip title="Filter">
                            <Button type="text" shape='circle' size='middle' icon={<Icons.Filter size={20} />} />
                        </Tooltip>
                    </div>
                </div>

                <section className='flex items-center'>
                    <div
                        ref={chipsContainerRef}
                        className='flex overflow-x-auto whitespace-nowrap scrollbar-hide grow'
                    >
                        {["All", "Breakfast", "Lunch", "Dinner", "Drinks", "Desserts", "Pizza", "Burger", "Sushi", "Tacos", "Sandwich", "Pancakes", "Pasta", "Ice Cream"].map(
                            (chip, index) => (
                                <Tag.CheckableTag
                                    key={index}
                                    checked={activeIndex === index} // Active state
                                    className={`chip !px-4 !py-1 !rounded-full !font-medium whitespace-nowrap capitalize !border !border-gray-300 ${activeIndex === index ? 'bg-blue-500 text-white shadow-md !border-transparent' : ''
                                        }`}
                                    onClick={() => scrollToChip(index)}
                                >
                                    {chip}
                                </Tag.CheckableTag>
                            )
                        )}
                    </div>
                    <div className='flex gap-2 border-l-2 pl-1'>
                        <Tooltip title="See all">
                            <Button type="text" shape='circle' size='middle' icon={<Icons.CircleList size={20} />} />
                        </Tooltip>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default CategoriesBar;
