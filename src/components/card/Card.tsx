import React from 'react'
import { Link } from 'react-router-dom';
import './card.scss'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { useState } from 'react';

interface CardProps {
    id: string,
    title: string,
    rating: number,
    previousPrice: number,
    currentPrice: number,
    image: string
}

const Card = ({ id, title, rating, previousPrice, currentPrice, image }: CardProps) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const renderStars = () => {
        const stars = [];
        const filledStars = Math.floor(rating);
        let key = 0;
    
        for (let i = 0; i < filledStars; i++) {
            stars.push(<i className="bi bi-star-fill" key={key}></i>);
            key++;
        }
    
        if (rating % 1 !== 0) {
            stars.push(<i className="bi bi-star-half" key={key}></i>);
            key++
            for (let i = 0; i < 4 - filledStars; i++) {
                stars.push(<i className="bi bi-star" key={key}></i>);
                key++
            }
        } else {
            for (let i = 0; i < 5 - filledStars; i++) {
                stars.push(<i className="bi bi-star" key={key}></i>);
                key++
            }
        }

        return stars;
    };

    const handleAddToFavorites = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className='card-container'>
            <div onClick={handleAddToFavorites} className="favorite-btn fs-4">
                {isFavorite ? <AiFillHeart/> : <AiOutlineHeart/>}
                <span></span>
            </div>
            <Link to={`/product/${id}`} className="col">
                <div className="card">
                    <div className="card-image">
                        <img src={image} className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <div className="rating mb-2">
                            {renderStars()}
                        </div>
                        <div className='price'>
                            <p className='previous-price mb-0'>${previousPrice}</p>
                            <p className='current-price mb-0 fs-5'>${currentPrice}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card