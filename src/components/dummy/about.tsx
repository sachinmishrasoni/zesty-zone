import Container from '@/components/common/container'
import Icon from '@/icons';
import { Button } from 'antd'
import React from 'react'

const items = [
  {
    title: 'Fast Delivery',
    icon: <Icon.Delivery size={50} />,
    description: 'Get your meals delivered hot and fresh within 30 minutes, ensuring maximum convenience.',
  },
  {
    title: 'Quality Ingredients',
    icon: <Icon.Restaurant size={50} />,
    description: 'We source premium, locally-sourced ingredients to guarantee freshness and flavor in every bite.',
  },
  {
    title: 'Healthy Choices',
    icon: <Icon.Heart size={50} />,
    description: 'Enjoy a variety of nutritious meal options, tailored to support your lifestyle and fitness goals.',
  },
  {
    title: 'Affordable Prices',
    icon: <Icon.Wallet size={50} />,
    description: 'Delicious meals priced to fit every budget without compromising on quality or taste.',
  },
];

const about = () => {
  return (
    <>
      <section className='about min-h-screen py-[50px] relative'>
        <div className="mini-card-box bg-gray-100 p-5 absolute -top-[10%] left-0 right-0 mx-auto rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[calc(100%-20px)]">
          {
            items.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.icon}
                <p className="text-center text-md font-bold">{item.title}</p>
                <p className="text-center text-xs">{item.description}</p>
              </div>
            ))
          }
        </div>
        <Container className='grid grid-cols-1 md:grid-cols-2 gap-4' >
          <div>
            <h2 className='text-3xl font-bold mb-4'>About Zesty Zone</h2>
            <p>
              At Zesty Zone, we blend fresh ingredients with passion to serve you an unforgettable dining experience.
            </p>
            <Button className='mt-4'>Read More</Button>
          </div>
          <div >
            image
          </div>
        </Container>


        {/* <MenuCategories /> */}


        {/* <section className="relative min-h-[80vh] bg-gradient-to-br from-yellow-50 via-gray-50 to-yellow-100 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url('/images/dishes/breakfast.jpg')`,
          }}
        ></div>
        <div className="relative z-10 text-center text-gray-800 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our <span className="text-yellow-600">Delicious Menu</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Discover the finest flavors crafted with love. Perfect for every occasion!
          </p>
          <div className="flex justify-center gap-4">
            <Button
              type="primary"
              className="!bg-yellow-600 !text-white !px-6 !py-3 rounded-lg hover:!bg-yellow-700"
            >
              View Popular Dishes
            </Button>
            <Button
              type="default"
              className="!border-yellow-600 !text-yellow-600 !px-6 !py-3 rounded-lg hover:!bg-yellow-100"
            >
              Explore Categories
            </Button>
          </div>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </section> */}
      </section>

      <Container maxWidth="lg" className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16">
        {/* Right Section and Image */}
        <div className="md:col-span-1 order-1 md:order-2 flex justify-center items-center">
          <img
            src="/images/interior1.jpg"
            alt="Zesty-Zone Restaurant"
            className="rounded-lg shadow-lg object-cover w-full max-w-md"
          />
        </div>

        {/* Left Section */}
        <div className="md:col-span-2 order-2 md:order-1 space-y-6">
          <h3 className="text-5xl font-bold">
            <span>We invite you to</span> <br />
            <span className="text-yellow-600">visit our restaurant</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Zesty-Zone, we’re passionate about crafting unforgettable dining experiences. From farm-to-table ingredients to the artful presentation of every dish, our mission is to delight your senses.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you're celebrating a special occasion, catching up with loved ones, or simply indulging in the joy of good food, Zesty-Zone is the perfect destination. Join us and let us take you on a culinary journey filled with flavors you'll never forget.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition">
            Learn More About Us
          </button>
        </div>
      </Container>
    </>
  )
}

export default about