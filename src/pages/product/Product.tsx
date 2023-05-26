import React from 'react'
import './product.scss'

const Product = () => {
    const rating = 4;

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
    }

    return (
        <div className='product-container container mt-5'>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid rounded" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product"/>
                    <div className="images container-fluid p-0 gap-2 justify-content-between d-flex overflow-x-hidden">
                        <img className="img-thumbnail" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product"/>
                        <img className="img-thumbnail" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product"/>
                        <img className="img-thumbnail" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product"/>
                        <img className="img-thumbnail" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="product-title fs-3 mb-2">Adidas 1</h1>
                    <div className="product-price mb-2"><span className='fs-4'>$99.99</span></div>
                    <div className="product-rating">
                        {renderStars()}
                        <span className='ms-2 total-ratings'>55 Reviews</span>
                    </div>
                    <div className="options d-flex">
                        <div className="form d-flex container-fluid p-0">
                            <div className="size col-md-6">
                            <div className="size-label">
                                <label htmlFor="size">Size</label>
                            </div>
                            <select id='size' className="form-select">
                                <option value="1">38</option>
                                <option value="2">39</option>
                                <option value="3">40</option>
                            </select>
                            </div>
                            <div className="quantity col-md-6">
                            <div className="size-label">
                                <label htmlFor="quantity">Quantity</label>
                            </div>
                            <select id="quantity" className="form-select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            </div>
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