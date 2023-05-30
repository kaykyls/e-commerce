import React from 'react'

const Cart = () => {
    return (
        <div className='container cart mt-5 mb-5'>
            <div className="row">
                <div className="col-8">
                    <div className="cart-products">
                        <div className="cart-product border border-3 rounded p-4 row row-cols-4">
                            <div className="product-picture d-flex justify-content-center">
                                <img src="https://via.placeholder.com/150" alt="product" />
                            </div>
                            <div className="product-details">
                                <div className="product-name">
                                    <h2>Product Name</h2>
                                </div>
                                <div className="product-color">
                                    <span>Color: Red </span>
                                </div>
                                <div className="product-size">
                                    <span>Size: 38 </span>
                                </div>
                            </div>
                            <div className="product-amount d-flex align-items-start justify-content-center">
                                <button className="decrease-amount btn btn-dark border border-2">
                                    <i className="bi bi-dash"></i>
                                </button>
                                <div className="d-flex align-items-center px-4 py-2">
                                    <span>1</span>
                                </div>
                                <button className="increase-amount btn btn-dark border border-2">
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>
                            <div className="product-price d-flex flex-column justify-content-between">
                                <div className="price">
                                    <h2 className='text-center'>$100</h2>
                                </div>
                                <div className="delete d-flex justify-content-center">
                                    <span>Delete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="summary border p-4  border-3 rounded d-flex flex-column gap-3">
                        <div className="summary-title">
                            <h3>Summary</h3>
                        </div>
                        <div className="summary-details">
                            <div className="summary-subtotal d-flex justify-content-between">
                                <h5>Subtotal</h5>
                                <h5>$100</h5>
                            </div>
                        </div>
                        <div className="summary-shipping d-flex justify-content-between">
                            <h5>Shipping</h5>
                            <h5>$10</h5>
                        </div>
                        <div className="summary-total d-flex justify-content-between">
                            <h5>Total</h5>
                            <h5>$110</h5>
                         </div>
                        <div className="summary-checkout">
                            <button className="btn btn-dark">Checkout</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart