import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#000] px-24 py-18'>

            <div className='flex justify-between'>
                <div className='w-[33%]'>
                    <h1 className='text-white mb-4 text-xl'>Olmazor</h1>
                    <p className='text-[#ababab] w-[22em]'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                </div>
                <div className='w-[33%]'>
                    <h1 className='text-white mb-4 text-xl'>Services</h1>
                    <p className='text-[#ababab]'>Bonus program</p>
                    <p className='text-[#ababab]'>Gift cards</p>
                    <p className='text-[#ababab]'>Credit and payment</p>
                    <p className='text-[#ababab]'>Service contracts</p>
                    <p className='text-[#ababab]'>Non-cash account</p>
                    <p className='text-[#ababab]'>Payment</p>
                </div>
                <div className='w-[33%]'>
                    <h1 className='text-white mb-4 text-xl'>Assistance to the buyer</h1>
                    <p className='text-[#ababab]'>Find an order</p>
                    <p className='text-[#ababab]'>Terms of delivery</p>
                    <p className='text-[#ababab]'>Terms of delivery</p>
                    <p className='text-[#ababab]'>Find an order</p>
                    <p className='text-[#ababab]'>Find an order</p>
                    <p className='text-[#ababab]'>Terms of delivery</p>
                    <p className='text-[#ababab]'>Find an order</p>
                </div>
            </div>
            <div className='flex gap-8'>
                <span className='text-white'>Icon</span>
                <span className='text-white'>Icon</span>
                <span className='text-white'>Icon</span>
                <span className='text-white'>Icon</span>
            </div>
        </div>
    )
}

export default Footer