import React from 'react'
import './home.scss'
import Slider from '../../components/slider/Slider'
import Cards from '../../components/cards/Cards'
import { featuredProducts, mostSoldProducts, newProducts } from '../../api'

const Home = () => {
    return (
        <div>
            <Slider/>
            <Cards title={"Featured"} products={featuredProducts} />
            <Cards title={"Most Sold"} products={mostSoldProducts} />
            <Cards title={"New Products"} products={newProducts} />
        </div>
    )
}

export default Home