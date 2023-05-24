import React from 'react'
import './home.scss'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import Cards from '../../components/cards/Cards'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Slider/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default Home