import { ArrowBackIos, ArrowForwardIos, PhoneAndroidOutlined } from '@mui/icons-material'
import { Carousel } from 'antd'
import React, { useRef } from 'react'

const Categories = () => {

  const carouselRef = useRef(null)
  return (
    <div className='px-24 mt-16'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl'>Browse By Category</h1>
        <div className='flex flex-row gap-4'>
          <span onClick={() => carouselRef.current?.prev()}><ArrowBackIos className='cursor-pointer' /></span>
          <span onClick={() => carouselRef.current?.next()}><ArrowForwardIos className='cursor-pointer' /></span>
        </div>
      </div>

      <Carousel ref={carouselRef} arrows autoplaySpeed={2000} infinite={false}>
        <div className='my-6 !flex justify-between'>
          <div className='flex flex-col items-center bg-[#EDEDED] py-8 px-12 rounded-md cursor-pointer hover:bg-[#c9c7c7]'>
            <PhoneAndroidOutlined style={{ fontSize: '2.3em' }} />
            <p className='text-xl'>Phones</p>
          </div>
          <div className='flex flex-col items-center bg-[#EDEDED] py-8 px-12 rounded-md cursor-pointer hover:bg-[#c9c7c7]'>
            <PhoneAndroidOutlined style={{ fontSize: '2.3em' }} />
            <p className='text-xl'>Phones</p>
          </div>
          <div className='flex flex-col items-center bg-[#EDEDED] py-8 px-12 rounded-md cursor-pointer hover:bg-[#c9c7c7]'>
            <PhoneAndroidOutlined style={{ fontSize: '2.3em' }} />
            <p className='text-xl'>Phones</p>
          </div>
          <div className='flex flex-col items-center bg-[#EDEDED] py-8 px-12 rounded-md cursor-pointer hover:bg-[#c9c7c7]'>
            <PhoneAndroidOutlined style={{ fontSize: '2.3em' }} />
            <p className='text-xl'>Phones</p>
          </div>
          <div className='flex flex-col items-center bg-[#EDEDED] py-8 px-12 rounded-md cursor-pointer hover:bg-[#c9c7c7]'>
            <PhoneAndroidOutlined style={{ fontSize: '2.3em' }} />
            <p className='text-xl'>Phones</p>
          </div>
          <div className='flex flex-col items-center bg-[#EDEDED] py-8 px-12 rounded-md cursor-pointer hover:bg-[#c9c7c7]'>
            <PhoneAndroidOutlined style={{ fontSize: '2.3em' }} />
            <p className='text-xl'>Phones</p>
          </div>
        </div>
        <div className='my-6 !flex justify-between'>
          <div className='flex flex-col items-center bg-[#EDEDED] py-8 px-12 rounded-md cursor-pointer hover:bg-[#c9c7c7]'>
            <PhoneAndroidOutlined style={{ fontSize: '2.3em' }} />
            <p className='text-xl'>Phones</p>
          </div>
          <div className='flex flex-col items-center bg-[#EDEDED] py-8 px-12 rounded-md cursor-pointer hover:bg-[#c9c7c7]'>
            <PhoneAndroidOutlined style={{ fontSize: '2.3em' }} />
            <p className='text-xl'>Phones</p>
          </div>
          <div className='flex flex-col items-center bg-[#EDEDED] py-8 px-12 rounded-md cursor-pointer hover:bg-[#c9c7c7]'>
            <PhoneAndroidOutlined style={{ fontSize: '2.3em' }} />
            <p className='text-xl'>Phones</p>
          </div>
          <div className='flex flex-col items-center bg-[#EDEDED] py-8 px-12 rounded-md cursor-pointer hover:bg-[#c9c7c7]'>
            <PhoneAndroidOutlined style={{ fontSize: '2.3em' }} />
            <p className='text-xl'>Phones</p>
          </div>
          <div className='flex flex-col items-center bg-[#EDEDED] py-8 px-12 rounded-md cursor-pointer hover:bg-[#c9c7c7]'>
            <PhoneAndroidOutlined style={{ fontSize: '2.3em' }} />
            <p className='text-xl'>Phones</p>
          </div>
          <div className='flex flex-col items-center bg-[#EDEDED] py-8 px-12 rounded-md cursor-pointer hover:bg-[#c9c7c7]'>
            <PhoneAndroidOutlined style={{ fontSize: '2.3em' }} />
            <p className='text-xl'>Phones</p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Categories