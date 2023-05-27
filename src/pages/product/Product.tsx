import React from 'react'
import { useParams } from 'react-router-dom';
import './product.scss'
import { products } from '../../api';
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"

const Product = () => {
    const { id } = useParams();

    const [productId, setProductId] = useState<number>(0);
    const [product, setProduct] = useState<any>(null);

    const [selectedSlideIndex, setSelectedSlideIndex] = useState<number>(0);

    const getProduct = (id: number) => {
        return products.find(product => product.id === id)
    }

    useEffect(() => {
        const parsedId = parseInt(id || '', 10);
        setProductId(parsedId);

        const filteredProduct = getProduct(parsedId);
        setProduct(filteredProduct);
    }, [id]);
      
    const renderStars = () => {
        const stars = [];
        const filledStars = Math.floor(product?.rating);
        let key = 0;
    
        for (let i = 0; i < filledStars; i++) {
            stars.push(<i className="bi bi-star-fill" key={key}></i>);
            key++;
        }
    
        if (product?.rating % 1 !== 0) {
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
    }

    const images = []

    for (let i = 0; i < 10; i++) {
        images.push(<img className="img border rounded" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product"/>)
    }

    const handleSlideChange = (splide: any) => {
        setSelectedSlideIndex(splide.index)
      };

    return (
        <div className='product-container container mt-3 mt-md-5 mb-5'>
            <div className="row gx-0 gx-md-4 gx-lg-5">
                <div className="col-md-6 mb-md-0">

                <div className="product-images">
                <Splide
                    options={{
                        perPage: 1,
                        perMove: 1,
                        arrows: false,
                        autoplay: false,
                        pagination: false,
                        breakpoints: {
                        768: {
                            arrows: true,
                            pagination: true
                        }
                        }
                    }}
                    onMoved={handleSlideChange}
                    >
                    {images.map((image, index) => (
                        <SplideSlide key={index}>
                        <img className="product-image img-fluid rounded mb-5 mb-md-3" src={product?.image} alt="product" />
                        </SplideSlide>
                    ))}
                </Splide>

                </div>


                <div className="images d-none d-md-block">
                        <Splide options={{
                            perPage: 5,
                            perMove: 1,
                            arrows: true,
                            gap: "1rem",
                            autoplay: false,
                            pagination: false,
                            start: selectedSlideIndex,
                            breakpoints: {
                                1200: {
                                    perPage: 4
                                },
                                992: {
                                    perPage: 3
                                },
                                768: {
                                    perPage: 0
                                },
                            }
                        }}>
                        {images.map((image, index) => {
                            return(
                            <SplideSlide key={index}>
                                <div className="card" onClick={() => setSelectedSlideIndex(index)}>
                                    <img className="img border rounded" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product"/>
                                </div>
                            </SplideSlide>
                            )
                        })}
                        </Splide>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="product-title fs-3 mb-2">{product?.title}</h1>
                    <div className="product-price mb-2"><span className='fs-4'>${product?.currentPrice}</span></div>
                    <div className="product-rating mb-3 mb-md-5">
                        {renderStars()}
                        <span className='ms-2 total-ratings'>1739 Reviews</span>
                    </div>
                    <div className="options form p-0 mb-3 row row-cols-2 gx-2">
                        <div className="size">
                            <label className='fs-5' htmlFor="size">Size</label>
                            <select id="size" className="form-select">
                                <option value="1">38</option>
                                <option value="2">39</option>
                                <option value="3">40</option>
                            </select>
                        </div>
                        <div className="quantity">
                            <label className='fs-5' htmlFor="quantity">Quantity</label>
                            <select id="quantity" className="form-select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="buttons d-flex flex-column gap-2">
                        <button className="btn btn-dark fs-5">Add to Cart</button>
                        <button className="btn btn-outline-dark fs-5">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product