import React from 'react'
import Header from '../components/Header'
import WelcomePage from '../components/WelcomePage'
import Categories from '../components/Categories'
import ProductsList from '../components/ProductsList'
import BrendProducts from '../components/BrendProducts'

const Home = () => {
  return (
    <div>
        <Header/>
        <WelcomePage/>
        <Categories/>
        <ProductsList/>
        <BrendProducts/>
    </div>
  )
}

export default Home