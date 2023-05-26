import React from 'react'
import { Link } from 'react-router-dom';
import './card.scss'

interface CardProps {
    id: number,
    title: string,
    rating: number,
    previousPrice: number,
    currentPrice: number,
    image: string
}

const Card = ({ id, title, rating, previousPrice, currentPrice, image }: CardProps) => {
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

    return (
        <Link to={`/product/${id}`} className="col">
            <div className="card">
                <img src={image} className="card-img-top" alt="..."/>
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
    )
}

export default Card