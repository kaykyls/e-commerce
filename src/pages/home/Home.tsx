import React from 'react'
import './home.scss'
import Slider from '../../components/slider/Slider'
import Cards from '../../components/cards/Cards'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <div>
            <Slider/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default Home