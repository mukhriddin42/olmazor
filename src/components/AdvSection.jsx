import React from 'react'
import advBgImage from '../assets/images/adv-img.png'
import { Link } from 'react-router-dom'

const AdvSection = () => {
    return (
        <div className='relative'>
            <img src={advBgImage} alt="" />
            <div className='flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-5xl text-center text-white'>Big Summer <b>Sale</b></h1>
                <p className='text-center mt-4 text-[#787878]'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                <Link to={'/'}>
                    <button className='shopw-now-button mt-4 text-xl cursor-pointer rounded-md text-white py-2 px-8 border-2 border-white'>Shop now</button>
                </Link>
            </div>
        </div>
    )
}

export default AdvSection