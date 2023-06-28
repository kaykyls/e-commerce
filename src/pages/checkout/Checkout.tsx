import React from 'react'
import './checkout.scss'
import Header from '../../components/header/Header'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { products } from '../../api'
import Address from '../../components/address/Address'
import { useState } from 'react'

const Checkout = () => {
    //futuramente trocar para user
    const cart = useSelector((state: any) => state.cart)

    const [currentStep, setCurrentStep] = useState(1)

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1)
    }

    return (
        <>
            <Header/>
            <div className="container mt-4">
                <h1 className="fs-2 mb-4">1. Address</h1>
                <div className="row justify-content-between gap-4 gap-lg-0">
                    <div className="d-flex flex-column col-lg-6">
                    {currentStep === 1 && <Address/>}
                        <div className='align-self-end'>
                            <button onClick={handleNextStep} className="btn btn-dark mt-4">Continue</button>
                        </div>
                    </div>
                    
                        <div className="col col-lg-4 col-xxl-3">
                            <div className="cart-items p-4 rounded border">
                                <div className='d-flex justify-content-between'>
                                    <h3 className="fs-4 mb-4">Your items</h3>
                                    <Link to={"/cart"} className='text-decoration-underline'>edit</Link>
                                </div>
                                <div className="cart-items-wrapper">
                                    {cart?.cartItems.map((item: any, index: number) => {
                                        const product = products.find((product) => product.id === item.id)

                                        return (
                                            <div key={index} className="cart-item d-flex justify-content-between align-items-center mb-4">
                                                <div className="cart-item-image">
                                                    <img className='cart-item-product-image rounded' src={product?.image} alt="" />
                                                </div>
                                                <div className="cart-item-info">
                                                    <h3 className="fs-5">{product?.title}</h3>
                                                    <p className="fs-6">Quantity: {item?.quantity}</p>
                                                </div>
                                                <div className="cart-item-price">
                                                    <p className="fs-5">${product?.currentPrice}</p>
                                                </div>
                                            </div>
                                    )})}
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Checkout