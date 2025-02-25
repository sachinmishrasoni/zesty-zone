import QuantityAdjuster from '@/components/common/QuantitySelector'
import Container from '@/components/common/container'
import Icons from '@/icons'
import { Avatar, Button, Tooltip } from 'antd'
import React from 'react'

const DeleteIcon = "/svg/delete.svg";

const MyCart = () => {
  return (
    <div className=''>

      <Container>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
        <div className="flex flex-col gap-4">
          {
            Array(15).fill(0).map((_, index) => (
              <div key={index} className='bg-lightFg p-2 rounded-lg shadow-sm flex gap-2'>
                <Avatar shape='square' size={85} src="https://via.placeholder.com/100" className='min-w-[85px]' />
                <div className='w-full flex justify-between'>
                  <div className='g'>
                    <h2 className="text-lg font-semibold">Product Name</h2>
                    <p className="text-gray-500">Price: $12.99</p>
                    <QuantityAdjuster />
                  </div>
                  <div className='flex flex-col items-end justify-center'>
                    {/* <QuantityAdjuster /> */}
                    {/* <Button danger type='link' icon={<img src={DeleteIcon} className='!text-red-600' alt="" width={14} />} > Remove </Button> */}
                    <Button danger type='link' color='danger' className='!px-2' icon={<Icons.Delete />} >Remove</Button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {/* Right Side */}
        <div className='space-y-4'>
          <div className='border border-dashed border-gray-300 p-4 rounded-md bg-lightFg shadow-sm '>
            <div>
              <p className='text-lg font-semibold mb-2'>Price Details</p>

              <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                  <p>Price(2 items)</p>
                  <p>1000 Rs</p>
                </div>
                <div className='flex justify-between'>
                  <p>Discount</p>
                  <p>250 Rs</p>
                </div>
                <div className='flex justify-between'>
                  <p>Delivery Charges</p>
                  <p>100 Rs</p>
                </div>
              </div>
              {/* <div className='border-b border-dashed border-gray-400 my-3'></div> */}
              <div className="relative border-b border-dashed border-gray-400 my-5 
                              before:content-[''] before:absolute before:top-1/2 before:-left-7 before:w-6 before:h-6 before:bg-[#FCFBEF] before:rounded-full before:transform before:-translate-y-1/2
                              after:content-[''] after:absolute after:top-1/2 after:-right-7 after:w-6 after:h-6 after:bg-[#FCF9C8] after:rounded-full after:transform after:-translate-y-1/2">
              </div>
              <div>
                <div className='flex justify-between relative'>
                  <p className='font-semibold'>Total Amount</p>
                  <p>1250 Rs</p>
                </div>

                {/* <div className="relative border-b border-dashed border-gray-400 my-5 
  before:content-[''] before:absolute before:top-1/2 before:-left-7 before:w-6 before:h-6 before:bg-[#FCFBEF] before:rounded-full before:transform before:-translate-y-1/2
  after:content-[''] after:absolute after:top-1/2 after:-right-7 after:w-6 after:h-6 after:bg-[#FCF9C8] after:rounded-full after:transform after:-translate-y-1/2">
            </div> */}

                <p className='text-sm text-green-500 mt-2'>You will save 250 Rs</p>
              </div>
            </div>
            <div></div>
          </div>

          <div className=' justify-between items-center bg-lightFg p-4 rounded-lg sticky bottom-[60px] hidden md:flex shadow-sm'>
            <div>
              <p className='line-through'>Total: 1350</p>
              <p className='font-semibold text-lg'>Payble: 1250</p>
            </div>
            <Button type='primary' >Place order</Button>
          </div>
        </div>
      </div>
      </Container>

      <div className='flex justify-between items-center bg-lightFg p-4 rounded-lg sticky bottom-[60px] mt-4 md:hidden'>
        <div>
          <p className='line-through text-gray-400'>Total: 1350</p>
          <p className='font-semibold text-lg'>Payble: 1250</p>
        </div>
        <Button type='primary' className='!px-6 !py-5 !font-semibold !text-base'>Place order</Button>
      </div>

      {/* Suggestion */}
      <Container className='mt-4'>
        <p className='text-lg font-semibold'>Suggested for you</p>
        lorem555
      </Container>
    </div>
  )
}

export default MyCart