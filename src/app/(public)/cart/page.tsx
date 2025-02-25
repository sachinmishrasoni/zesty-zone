'use client';
import Container from '@/components/common/container';
import MyCart from '@/components/sections/cart/myCart/inedex';
import MyFavorites from '@/components/sections/cart/myFavorites';
import CustomTab from '@/components/ui/CustomTab';
import Icons from '@/icons';
import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';

const Cart = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTabQuery = searchParams.get('tab') || 'cart';

  const [activeTab, setActiveTab] = useState<string>(activeTabQuery);

  const handleTabChange = (newActiveTab: string) => {
    setActiveTab(newActiveTab);
    router.push(`?tab=${newActiveTab}`, undefined);
  };

  const tabs = [
    { id: 'cart', icon: <Icons.ShoppingBag className="h-5 w-5" /> },
    { id: 'favorites', icon: <Icons.Heart className="h-5 w-5" /> },
  ];

  useEffect(() => {
    if (activeTabQuery && activeTabQuery !== activeTab) {
      setActiveTab(activeTabQuery);
    }
  }, [activeTabQuery, activeTab]);

  // const tabContentVariants = {
  //   initial: { opacity: 0, x: 50 },
  //   animate: { opacity: 1, x: 0 },
  //   exit: { opacity: 0, x: -50 },
  // };

  return (
    <>
      <main className="cart-page min-h-screen bg-gradient-to-r from-yellow-50 via-gray-50 to-yellow-100 dark:from-darkBg-500 dark:via-darkBg dark:to-darkBg-700 pb-8">
        {/* <Container> */}
        <Container>
          <div className="flex justify-between items-center py-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
              {activeTab === 'cart' ? 'My Cart' : 'My Favorites'}
            </h1>
            <CustomTab tabs={tabs} initialActiveTab={activeTab} onTabChange={handleTabChange} />
          </div>
          <div className="h-[1px] w-full bg-gray-100"></div>
        </Container>
        {/* Animate tab content */}
        <div className="mt-2 relative">
          {/* <AnimatePresence mode="wait"> */}
          {activeTab === 'cart' ? (
            // <motion.div
            //   key="cart"
            //   variants={tabContentVariants}
            //   initial="initial"
            //   animate="animate"
            //   exit="exit"
            //   transition={{ duration: 0.3 }}
            // >
            <MyCart />
            // </motion.div>
          ) : (
            // <motion.div
            //   key="favorites"
            //   variants={tabContentVariants}
            //   initial="initial"
            //   animate="animate"
            //   exit="exit"
            //   transition={{ duration: 0.3 }}
            // >
            <MyFavorites />
            // </motion.div>
          )}
          {/* </AnimatePresence> */}
        </div>
        {/* </Container> */}
      </main>
      {/* <div className="sticky bottom-0 bg-white p-4 z-[100] h-[100px]">stiky footer</div> */}
    </>
  );
};

export default Cart;
