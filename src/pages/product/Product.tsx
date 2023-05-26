import React from 'react'
import { useParams } from 'react-router-dom';
import './product.scss'
import { products } from '../../api';
import { useEffect, useState } from 'react';


const Product = () => {
    const { id } = useParams();

    const [productId, setProductId] = useState<number>(0);
    const [product, setProduct] = useState<any>(null);

    const getProduct = (id: number) => {
        console.log(id);
        return products.find(product => product.id === id); // Usando o método "find" para retornar o primeiro item correspondente
    }

    useEffect(() => {
        const parsedId = parseInt(id || '', 10);
        setProductId(parsedId);

        const filteredProduct = getProduct(parsedId);
        setProduct(filteredProduct);
    }, [id]);

    console.log(product)
      
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

    return (
        <div className='product-container container mt-3 mt-md-5'>
            <div className="row">
                <div className="col-md-6 mb-md-0">
                    <img className="product-image img-fluid rounded mb-3" src={product?.image} alt="product"/>
                    <div className="images d-none d-md-flex container-fluid p-0 gap-2 d-flex overflow-x-hidden">
                        <img className="img border rounded" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product"/>
                        <img className="img border rounded" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product"/>
                        <img className="img border rounded" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product"/>
                        <img className="img border rounded" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product"/>
                        <img className="img border rounded" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="product-title fs-3 mb-2">{product?.title}</h1>
                    <div className="product-price mb-2"><span className='fs-4'>${product?.currentPrice}</span></div>
                    <div className="product-rating mb-3 mb-md-5">
                        {renderStars()}
                        <span className='ms-2 total-ratings'>1739 Reviews</span>
                    </div>
                    <div className="options form p-0 mb-3 row row-cols-2">
                        <div className="size pe-1">
                            <label htmlFor="size">Size</label>
                            <select id="size" className="form-select">
                                <option value="1">38</option>
                                <option value="2">39</option>
                                <option value="3">40</option>
                            </select>
                        </div>
                        <div className="quantity ps-1">
                            <label htmlFor="quantity">Quantity</label>
                            <select id="quantity" className="form-select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>


                    <div className="buttons d-flex flex-column gap-2">
                        <button className="btn btn-dark">Add to Cart</button>
                        <button className="btn btn-outline-dark">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product