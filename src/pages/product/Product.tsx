import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import './product.scss'
import { products } from '../../api';
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import { useDispatch } from 'react-redux';
import { addToUserCart } from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const Product = () => {
    const { id } = useParams();

    // const [productId, setProductId] = useState<number>(0);
    const [product, setProduct] = useState<any>(null);
    const primarySliderRef = useRef<Splide | null>(null);
    const secondarySliderRef = useRef<Splide | null>(null);
    const [selectedSlideIndex, setSelectedSlideIndex] = useState<number>(0);
    const images: any[] = [];

    const dispatch = useDispatch();

    const user = useSelector((state: any) => state.user)

    const getProduct = (id: number) => {
        return products.find(product => product.id === id)
    }

    useEffect(() => {
        const parsedId = parseInt(id || '', 10);
        // setProductId(parsedId);

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

    for (let i = 0; i < 10; i++) {
        images.push(<img className="img border rounded" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product"/>)
    }

    const handleSlideChange = (splide: any) => {
        setSelectedSlideIndex(splide.index)
        secondarySliderRef.current?.go(splide.index);
    }

    const handleSecondarySliderClick = (index: number) => {
        if (primarySliderRef.current) {
            primarySliderRef.current.go(index);
        }
    }

    const handleAddToCart = () => {
        if (user.isLogged) {
          dispatch(addToUserCart(product.id));
        } else {
          dispatch(addToCart({ id: product.id, quantity: 1, size: product.size, color: product.color}));
        }
      };
      

    return (
        <div className='product-container container mt-3 mt-md-5 mb-5'>
            <div className="row gx-0 gx-md-4 gx-lg-5">
                <div className="col-md-6 mb-md-0">
                    <div className="product-images">
                    <Splide
                        ref={primarySliderRef}
                        options={{
                            perPage: 1,
                            perMove: 1,
                            arrows: false,
                            autoplay: false,
                            pagination: true,
                            drag: false,
                            breakpoints: {
                                768: {
                                    arrows: true,
                                    pagination: true,
                                },
                            },
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
                        <Splide
                        options={{
                            perPage: 5,
                            perMove: 1,
                            arrows: true,
                            gap: ".5rem",
                            autoplay: false,
                            pagination: false,
                            breakpoints: {
                                1200: {
                                    perPage: 4,
                                },
                                992: {
                                    perPage: 3,
                                },
                                768: {
                                    perPage: 0,
                                },
                            },
                        }}
                        >
                        {images.map((image, index) => (
                            <SplideSlide key={index}>
                                <div className={`card${index === selectedSlideIndex ? " image-is-selected" : ""}`} onClick={() => handleSecondarySliderClick(index)}>
                                    <img className="img border rounded" src={product?.image} alt="product" />
                                </div>
                            </SplideSlide>
                        ))}
                        </Splide>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="product-title fs-3 mb-2">{product?.title}</h1>
                            
                    <div className="product-price mb-2">
                        <span className='fs-2 fw-bold me-1 product-current-price'>${product?.currentPrice}</span>
                        {product?.isOnSale && <span className='fs-6 product-previous-price'>${product?.previousPrice}</span>}
                    </div>

                    <div className="product-rating mb-3">
                        {renderStars()}
                        <span className='ms-2 total-ratings'>1739 Reviews</span>
                    </div>

                    <div className="product-color mb-3">
                        <label className='fs-5' htmlFor="color">Color</label>
                        <div className="colors d-flex gap-2">
                            <div className="color-option border border-3 rounded-circle" style={{backgroundColor: "#000"}}></div>
                            <div className="color-option border border-3 rounded-circle" style={{backgroundColor: "#00f"}}></div>
                            <div className="color-option border border-3 rounded-circle" style={{backgroundColor: "#fff"}}></div>
                            <div className="color-option border border-3 border rounded-circle" style={{backgroundColor: "#eee"}}></div>
                        </div>
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
                        <button onClick={handleAddToCart} className="btn btn-dark fs-5">Add to Cart</button>
                        <button className="btn btn-outline-dark fs-5">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product