import React, { useEffect } from 'react'
import './cart.scss'
import { products } from '../../api'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearCart, updateCartItem } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'
import { updateUserCartItem } from '../../redux/userSlice'
import { useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Cart = () => {
    let items = []

    const user = useSelector((state: any) => state.user)
    const cart = useSelector((state: any) => state.cart)

    const [shippingPrice, setShippingPrice] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        if(user.isLogged) {
            items = [...user.cartItems, ...cart.cartItems]
            dispatch(clearCart())
            console.log(items)

        } else {
            items = cart.cartItems
            console.log(items)
        }
    }, [user])

    const handleUpdateItemQuantity = (id: number, color: string, size: number, quantity: number) => {
        if(user.isLogged) {
            const itemIndex = user.cartItems.findIndex((item: any) => item.id === id && item.color === color && item.size === size)
            if(itemIndex !== -1) {
                dispatch(updateUserCartItem({productIndex: itemIndex, quantity}))
            }
            return
        }

        const itemIndex = cart.cartItems.findIndex((item: any) => item.id === id && item.color === color && item.size === size)
        if(itemIndex !== -1) {
            console.log(itemIndex)
            dispatch(updateCartItem({productIndex: itemIndex, quantity}))
        }
    }

    const calculateTotalPrice = () => {
        let total = 0
        cart.cartItems.forEach((item: any) => {
            const product = products.find((product) => product.id === item.id)
            total += product ? product.currentPrice * item.quantity : 0
        })
        return Number(total.toFixed(2))
    }

    return (
        <>
        <Header/>
        <Navbar/>
        <div className='container cart mt-5 mb-5'>
            <div className="row">
                <div className="col-md-8">
                    {(cart.cartItems.length === 0 && user.cartItems.length === 0) &&
                        <div className='mb-5 mb-md-0 d-flex justify-content-center'>
                            <span className='fs-5'>
                                your cart is empty
                            </span>
                        </div>
                    }
                    {(cart.cartItems.length > 0 || user.cartItems.length > 0) && <div className="cart-products mb-4 border rounded">
                        {cart.cartItems.map((item: any, index: number) => {
                            const product = products.find((product) => product.id === item.id)
                            return (
                                <div key={index} className="cart-product m-0 border-bottom p-4 row row-cols-3 row-cols-md-4">
                                    <Link to={`/product/${product?.id}`}>
                                        <div className="product-picture d-flex justify-content-center align-items-center">
                                            <img className='rounded'src={product?.image} alt="product" />
                                        </div>
                                    </Link> 
                                    <div className="product-details">
                                        <Link to={`/product/${product?.id}`}>
                                            <div className="product-name">
                                                <span className='fs-4'>{product?.title}</span>
                                            </div>
                                        </Link>
                                        <div className="product-color">
                                            <span>Color: {item?.color} </span>
                                            {/* <span>Color: blue </span> */}
                                        </div>
                                        <div className="product-size">
                                            <span>Size: {item?.size} </span>
                                            {/* <span>Size: 39 </span> */}
                                        </div>
                                        <div className="product-price d-block d-md-none mt-3">
                                            <span className='fw-bold'>${product?.currentPrice}</span>
                                        </div>
                                    </div>
                                    <div className="product-amount d-flex flex-column flex-md-row align-items-center align-items-start justify-content-center gap-3 gap-md-0">
                                        <button onClick={() => handleUpdateItemQuantity(item?.id, item?.color, item?.size, -1)} className="decrease-amount btn btn-dark border d-flex">
                                            <i className="bi bi-dash"></i>
                                        </button>
                                        <div className="d-flex align-items-center justify-content-center px-md-4 py-md-2">
                                            <span>{item.quantity}</span>
                                        </div>
                                        <button onClick={() => handleUpdateItemQuantity(item?.id, item?.color, item?.size, 1)} className="increase-amount btn btn-dark border">
                                            <i className="bi bi-plus"></i>
                                        </button>
                                    </div>
                                    <div className="product-price d-none d-md-flex flex-column justify-content-between text-end">
                                        <div className="price">
                                            <h2>${product?.currentPrice}</h2>
                                        </div>
                                        {/* <div className="remove-product d-flex justify-content-end">
                                            <button className='remove-btn btn'>
                                                delete
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                            )
                        })}
                    </div> }
                </div> 
                <div className="col-md-4">
                    <div className="summary border p-4 rounded d-flex flex-column gap-3">
                        <div className="summary-title">
                            <h3>Summary</h3>
                        </div>
                        <div className="summary-details">
                            <div className="summary-subtotal d-flex justify-content-between">
                                <h5>Subtotal</h5>
                                <h5>${calculateTotalPrice()}</h5>
                            </div>
                        </div>
                        <div className="summary-shipping d-flex justify-content-between">
                            <h5>Shipping</h5>
                            <h5>$0</h5>
                        </div>
                        <div className="summary-total d-flex justify-content-between">
                            <h5>Total</h5>
                            <h5>${calculateTotalPrice() + shippingPrice}</h5>
                         </div>
                        <div className="summary-checkout">
                            <Link to={"/checkout"}><button className="btn btn-dark">Checkout</button></Link>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Cart