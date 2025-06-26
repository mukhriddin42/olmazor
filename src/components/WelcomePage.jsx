import React from 'react'
import welcomeImg1 from '../assets/images/welcome-image-1.png'
import welcomeImg2 from '../assets/images/welcome-image-2.png'
import welcomeImg3 from '../assets/images/welcome-image-3.png'
import welcomeImg4 from '../assets/images/welcome-image-4.png'
import welcomeImg5 from '../assets/images/welcome-image-5.png'

const WelcomePage = () => {
    return (
        <div>
            <div className='flex min-[320px]:px-4 overflow-hidden min-[320px]:flex-col min-[320px]:h-[40rem] lg:flex-row md:px-12 lg:px-24 bg-[#211C24] w-full lg:h-[30rem]'>
                <div className='w-[50%] pt-30 '>
                    <h4 className='text-gray-300 font-bold text-xl'>Pro.Beyond.</h4>
                    <h1 className='text-white text-8xl font-extralight'>Iphone 14 <span className='font-bold'> Pro</span></h1>
                    <p className='pt-8 text-gray-300 text-xsl'>Created to change everything for the better. For everyone</p>
                    <button className='mt-4 text-xl cursor-pointer rounded-md text-white py-2 px-8 border-2 border-white'>Shop now</button>
                </div>
                <div className=' lg:w-[50%] relative'>
                    <img className='w-[21rem] absolute top-14 left-[8em] text-center' src={welcomeImg1} alt="" />
                </div>
            </div>
            <div className='flex min-[320px]:flex-col sm:flex-col  lg:flex-row'>
                <div className='md:w-full lg:w-1/2'>
                    <div className='lg:flex items-center h-[14rem] bg-white'>
                        <div className='w-[20em] -ml-18'>
                            <img className='w-full' src={welcomeImg5} alt="" />
                        </div>
                        <div className='w-[50%] my-10'>
                            <h1 className='text-3xl'>Playstation 5</h1>
                            <p className='my-2'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                        </div>
                    </div>
                    <div className='flex min-[320px]:flex-col sm:flex-row'>
                        <div className='flex relative min-[320px]:px-4 md:px-12 lg:px-24 h-[14rem] min-[320px]:w-full w-1/2 bg-[#EDEDED]'>
                            <div className='absolute -left-25 w-[12em] '>
                                <img src={welcomeImg4} alt="" />
                            </div>
                            <div className='absolute right-8 top-8 w-[12em] '>
                                <h1 className='text-3xl'>Apple AirPods Max</h1>
                                <p className='my-2'> Computational audio. Listen, it's powerful</p>
                            </div>
                        </div>
                        <div className='relative overflow-hidden min-[320px]:px-4 md:px-12 lg:px-24 h-[14rem] min-[320px]:w-full w-1/2 bg-[#353535]'>
                            <div className=' h-50 absolute top-10 -right-20  w-[16em]'>
                                <img src={welcomeImg3} alt="" />
                            </div>
                            <div className='absolute left-8 top-12 w-[12em] '>
                                <h1 className='text-3xl text-white'>Apple Vision Pro</h1>
                                <p className='my-2 text-white'>An immersive way to experience entertainment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-6 justify-between items-center sm:w-full md:w-full lg:w-1/2 bg-[#EDEDED] h-[28rem]'>
                    <div className='ml-[5em]'>
                        <h1 className='text-6xl font-extralight'>Macbook <br /><span className='font-bold'>Air</span></h1>
                        <p className='my-2'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                        <button className='mt-4 text-xl cursor-pointer rounded-md text-[#211C24] py-2 px-8 border-2 border-[#211C24]'>Shop now</button>
                    </div>
                    <div className='w-[18em] '>
                        <img className='w-full' src={welcomeImg2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage