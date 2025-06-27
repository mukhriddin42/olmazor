import React from 'react'
import Header from '../components/Header'
import WelcomePage from '../components/WelcomePage'
import Categories from '../components/Categories'
import ProductsList from '../components/ProductsList'
import BrendProducts from '../components/BrendProducts'
import Discounts from '../components/Discounts'
import AdvSection from '../components/AdvSection'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Header/>
        <WelcomePage/>
        <Categories/>
        <ProductsList/>
        <BrendProducts/>
        <Discounts/>
        <AdvSection/>
        <Footer/>
    </div>
  )
}

export default Home