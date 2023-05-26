import React from 'react'
import './home.scss'
import Slider from '../../components/slider/Slider'
import Cards from '../../components/cards/Cards'
import Footer from '../../components/footer/Footer'

const Home = () => {
    //Futuramente esses dados virão de uma API
    const featuredProducts = [
        {
            id: 1,
            title: "Adidas 1",
            rating: 4.5,
            previousPrice: 99.99,
            currentPrice: 49.99,
            image: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 2,
            title: "Nike 1",
            rating: 3.5,
            previousPrice: 99.99,
            currentPrice: 49.99,
            image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
        },
        {
            id: 3,
            title: "Nike 2",
            rating: 4,
            previousPrice: 49.99,
            currentPrice: 29.99,
            image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
        },
        {
            id: 4,
            title: "Idk 1",
            rating: 3,
            previousPrice: 99.99,
            currentPrice: 49.99,
            image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1131&q=80"
        }
    ];
    
    const mostSoldProducts = [
        {
            id: 5,
            title: "Nike 3",
            rating: 4.5,
            previousPrice: 99.99,
            currentPrice: 49.99,
            image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 6,
            title: "Nike 4",
            rating: 2.5,
            previousPrice: 99.99,
            currentPrice: 49.99,
            image: "https://images.unsplash.com/photo-1524532787116-e70228437bbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
        },
        {
            id: 7,
            title: "Puma 1",
            rating: 4,
            previousPrice: 49.99,
            currentPrice: 29.99,
            image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        },
        {
            id: 8,
            title: "All Star 1",
            rating: 3,
            previousPrice: 99.99,
            currentPrice: 49.99,
            image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80"
        }
    ];
    
    const newProducts = [
        {
            id: 9,
            title: "Idk 2",
            rating: 3,
            previousPrice: 99.99,
            currentPrice: 49.99,
            image: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 10,
            title: "Puma 2",
            rating: 4,
            previousPrice: 99.99,
            currentPrice: 49.99,
            image: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
        },
        {
            id: 11,
            title: "New Balance 1",
            rating: 4,
            previousPrice: 49.99,
            currentPrice: 29.99,
            image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
        },
        {
            id: 12,
            title: "Nike 6",
            rating: 4.5,
            previousPrice: 99.99,
            currentPrice: 49.99,
            image: "https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
    ];
    

    return (
        <div>
            <Slider/>
            <Cards title={"Featured"} products={featuredProducts} />
            <Cards title={"Most Sold"} products={mostSoldProducts} />
            <Cards title={"New Products"} products={newProducts} />
            <Footer/>
        </div>
    )
}

export default Home
