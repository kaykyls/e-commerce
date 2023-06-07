import React from 'react'
import './home.scss'
import Slider from '../../components/slider/Slider'
import Cards from '../../components/cards/Cards'
import { featuredProducts, mostSoldProducts, newProducts } from '../../api'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Slider/>
            <Cards title={"Featured"} products={featuredProducts} />
            <Cards title={"Most Sold"} products={mostSoldProducts} />
            <Cards title={"New Products"} products={newProducts} />
            <Footer/>
        </div>
    )
}

export default Home