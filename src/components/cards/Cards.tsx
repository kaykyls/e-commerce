import React from 'react'
import './cards.scss'
import Card from '../card/Card'

const Cards = () => {
    return (
        <div className="cards-container container-sm">
            <div className="info">
            <div className="h3">
                <h3>Featured</h3>
            </div>
            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-sm-3">
                <Card title={"Adidas 1"} rating={4.5} previousPrice={99.99} currentPrice={49.99} image={"https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
                <Card title={"Nike 1"} rating={3.5} previousPrice={99.99} currentPrice={49.99} image={"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"}/>
                <Card title={"Nike 2"} rating={4} previousPrice={49.99} currentPrice={29.99} image={"https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"}/>
                <Card title={"Nike 3"} rating={1} previousPrice={99.99} currentPrice={49.99} image={"https://images.unsplash.com/photo-1608363789638-70e879a9d988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}/>
                <Card title={"Idk 1"} rating={3} previousPrice={99.99} currentPrice={49.99} image={"https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1131&q=80"}/>
            </div>
        </div>
    )
}

export default Cards