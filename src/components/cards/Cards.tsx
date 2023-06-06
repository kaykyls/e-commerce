import React from 'react'
import './cards.scss'
import Card from '../card/Card'

interface Product {
    id: string,
    title: string,
    rating: number,
    previousPrice: number,
    currentPrice: number,
    image: string
}

interface CardsProps {
    title: string
    products: Product[],
}

const Cards = ({ title, products }: CardsProps) => {
    return (
        <div className="cards-container container-sm mb-5">
            <div className="info">
                <div className="info-title mb-4">
                    <h3>{title}</h3>
                </div>
            </div>
            {/* TODO: Transformar em um slider */}
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-sm-3">
                {products.map((product, index) => (
                    <Card
                        key={index}
                        id={product.id}
                        title={product.title}
                        rating={product.rating}
                        previousPrice={product.previousPrice}
                        currentPrice={product.currentPrice}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Cards
