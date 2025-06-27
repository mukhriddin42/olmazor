import { ArrowBackIos, ArrowForwardIos, PhoneAndroidOutlined } from '@mui/icons-material'
import { useQuery } from '@tanstack/react-query'
import { Carousel } from 'antd'
import React, { useRef } from 'react'
import { fetchProducts } from '../api/products'

const chunkArray = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )
}

const Categories = () => {

  const carouselRef = useRef(null)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchProducts,
  })

  if (isLoading) return <h1>Loading ... </h1>
  if (isError) return <h1>Xatolik keldi: {isError.message}</h1>
  console.log(data.products)

  const groupedData = chunkArray(data.products, 6)

  return (
    <div className='px-24 mt-16'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl'>Browse By Category</h1>
        <div className='flex flex-row gap-4'>
          <span onClick={() => carouselRef.current?.prev()}><ArrowBackIos className='cursor-pointer' /></span>
          <span onClick={() => carouselRef.current?.next()}><ArrowForwardIos className='cursor-pointer' /></span>
        </div>
      </div>

      <Carousel ref={carouselRef} autoplaySpeed={2000} infinite={false}>
        {groupedData.map((group, idx) => (
          <div key={idx} className='my-6 !flex justify-between'>
            {group.map((category) => (
              <div key={category.id} className='flex flex-col items-center bg-[#EDEDED] py-8 px-12 rounded-md cursor-pointer hover:bg-[#c9c7c7]'>
                <PhoneAndroidOutlined style={{ fontSize: '2.3em' }} />
                <p className='text-xl'>{category.category}</p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Categories