import React, { useState } from 'react';
import Container from '@/components/common/container';
import { Avatar, Drawer } from 'antd';
import { Grid } from 'antd';
import Image from 'next/image';
import './index.css';

const { useBreakpoint } = Grid;

const AllCategoriesDrawer = () => {
    const screens = useBreakpoint();
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    // Determine placement based on the current screen size
    const placement = screens.md ? 'right' : 'bottom'; // `md` breakpoint and above use 'right', otherwise 'bottom'

    return (
        <Drawer
            height={placement === 'bottom' ? '85vh' : undefined}
            width={placement === 'right' ? '350px' : undefined}
            title="All Categories"
            placement={placement}
            open={false}
            onClose={() => setIsDrawerOpen(false)}
            className="all-categories-drawer !bg-gradient-to-r !from-yellow-50 !via-gray-50 !to-yellow-100"
        >
            <Container className="grid grid-cols-1 gap-4">
                {Array(10).fill(0).map((_, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center bg-lightFg shadow-md p-2 rounded-full"
                    >
                        <div className="flex items-center gap-2">
                            <Avatar
                                size={40}
                                icon={
                                    <Image
                                        src="/images/background1.jpg"
                                        alt="categories"
                                        width={40}
                                        height={40}
                                    />
                                }
                            />
                            <p className="text-lg font-bold text-gray-800">Pizza</p>
                        </div>
                        <p className="text-green-500 mr-5">01</p>
                    </div>
                ))}
            </Container>
        </Drawer>
    );
};

export default AllCategoriesDrawer;
