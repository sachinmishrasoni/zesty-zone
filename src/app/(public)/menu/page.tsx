'use client'
import Container from '@/components/common/container'
// import MenuCategories from '@/components/sections/menu/menuCategories'
import { Drawer } from 'antd'
import React from 'react'
import '../../../styles/menu.page.css'
import Search from 'antd/es/input/Search'
import Icons from '@/icons'
import DishCard from '@/components/ui/DishCard'
import CategoriesBar from '@/components/ui/CategoriesBar'
import AllCategoriesDrawer from '@/components/ui/AllCategoriesDrawer'

const dishes = [
  {
    name: "Pancakes",
    price: "12.99",
    image: "/images/pancakes.jpg",
    description: "Fluffy pancakes served with syrup and fresh fruits.",
  },
  {
    name: "Grilled Steak",
    price: "24.99",
    image: "/images/grilled-steak.jpg",
    description: "Juicy grilled steak cooked to perfection with a side of veggies.",
  },
  {
    name: "Caesar Salad",
    price: "10.99",
    image: "/images/caesar-salad.jpg",
    description: "Crisp lettuce, creamy dressing, and crunchy croutons.",
  },
  {
    name: "Caesar Salad",
    price: "10.99",
    image: "/images/caesar-salad.jpg",
    description: "Crisp lettuce, creamy dressing, and crunchy croutons.",
  },
  {
    name: "Caesar Salad",
    price: "10.99",
    image: "/images/caesar-salad.jpg",
    description: "Crisp lettuce, creamy dressing, and crunchy croutons.",
  },
  {
    name: "Caesar Salad",
    price: "10.99",
    image: "/images/caesar-salad.jpg",
    description: "Crisp lettuce, creamy dressing, and crunchy croutons.",
  },
];

const Menu = () => {
  return (
    <main className='menu-page min-h-screen pb-10 bg-gradient-to-r from-yellow-50 via-gray-50 to-yellow-100'>
      <section className='menu-banner flex flex-col items-center justify-center p-5 space-y-2'>
        <div className='flex flex-col items-center'>
          <h4 className='text-lg font-semibold leading-3'>Explore Our Delicious</h4>
          <h1 className='text-4xl font-bold text-yellow-600'>Menu & Dishes</h1>
        </div>
        <Search size='large' placeholder="Search delicious dishes" prefix={<Icons.Search />} onSearch={value => console.log(value)} enterButton="Search" allowClear className='w-full md:!w-1/2' />
        <p className="text-lg md:text-xl mb-6 text-white text-center">
          Discover the finest flavors crafted with love. Perfect for every occasion!
        </p>
      </section>

      <CategoriesBar />

      <section className=''>
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {dishes.map((dish, index) => (
              <DishCard
                key={index}
              />
            ))}
          </div>
          {/* <DishCard /> */}
        </Container>
      </section>

      <Drawer
        height={'85vh'}
        title="All Categories"
        placement="bottom"
        open={false}
        onClose={() => { }}
        className='bg-black'
      // getContainer={false}
      >
        <Container>
          <p>Sklsk</p>
        </Container>
      </Drawer>

      <AllCategoriesDrawer />

    </main>
  )
}

export default Menu