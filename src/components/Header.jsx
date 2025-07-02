import { FavoriteBorderOutlined, PersonOutlineOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className=' flex items-center justify-between py-4 px-24 main-shadow'>
            <Link to={'/'}>
                <p className='text-2xl font-medium'>Olmazor</p>
            </Link>
            <div className='border  flex items-center gap-2 px-2 py-1'>
                <input className='outline-none' type="text" placeholder='Search' />
                <SearchOutlined />
            </div>
            <div className='flex gap-8'>
                <NavLink to={'/'}><p className='font-medium'>Home</p></NavLink>
                <NavLink><p className='font-medium'>About</p></NavLink>
                <NavLink><p className='font-medium'>Contact Us</p></NavLink>
                <NavLink><p className='font-medium'>Blog</p></NavLink>
            </div>
            <div className='flex gap-6'>
                <NavLink><FavoriteBorderOutlined /></NavLink>
                <NavLink to={'/cart'}><ShoppingCartOutlined /></NavLink>
                <NavLink><PersonOutlineOutlined /></NavLink>
            </div>
        </div>
    )
}

export default Header