import React from 'react'
import './slider.scss'
import { useState, useEffect } from 'react'
import { featuredProducts, products } from '../../api'
import { Link } from 'react-router-dom'

const Slider = () => {
    const [featured, setFeatured] = useState<any[]>([])

    useEffect(() => {
        const featuredProducts = products.filter(product => product.isFeatured)
        setFeatured(featuredProducts) 
    }, [])

    return (
        <div className="slider-container mb-5">
            <div id='recommended-carousel' className="carousel slide carousel-dark" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#recommended-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#recommended-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#recommended-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <Link to={`/product/${featuredProducts[0].id}`}>
                            <img className='featured-image' src={featuredProducts[0].image} alt="..."/>
                        </Link>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <Link to={`/product/${featuredProducts[1].id}`}>
                            <img className='featured-image' src={featuredProducts[1].image} alt="..."/>
                        </Link>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <Link to={`/product/${featuredProducts[2].id}`}>
                            <img className='featured-image' src={featuredProducts[2].image} alt="..."/>
                        </Link>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#recommended-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#recommended-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider