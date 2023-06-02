import React, { useEffect } from 'react'
import './cart.scss'
import { products } from '../../api'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../redux/cartSlice'

const Cart = () => {
    let items = []

    const user = useSelector((state: any) => state.user)
    const cart = useSelector((state: any) => state.cart)

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


    return (
        <div className='container cart mt-5 mb-5'>
            <div className="row row-md-2">
                <div className="col-md-8">
                    <div className="cart-products mb-4 border rounded border-2">
                        {cart.cartItems.map((item: any) => {
                            const product = products.find((product) => product.id === item.id)
                            return (
                                <div className="cart-product m-0 border-bottom p-4 row row-cols-3 row-cols-md-4">
                                    <div className="product-picture d-flex justify-content-center align-items-center">
                                        <img className='rounded'src={product?.image} alt="product" />
                                    </div>
                                    <div className="product-details">
                                        <div className="product-name">
                                            <span className='fw-bold fs-4'>{product?.title}</span>
                                        </div>
                                        <div className="product-color">
                                            {/* <span>Color: {product?.color} </span> */}
                                        </div>
                                        <div className="product-size">
                                            {/* <span>Size: {product?.size} </span> */}
                                        </div>
                                        <div className="product-price d-block d-md-none mt-3">
                                            <span className='fw-bold'>${product?.currentPrice}</span>
                                        </div>
                                    </div>
                                    <div className="product-amount d-flex flex-column flex-md-row align-items-center align-items-start justify-content-center gap-3 gap-md-0">
                                        <button className="decrease-amount btn btn-dark border d-flex">
                                            <i className="bi bi-dash"></i>
                                        </button>
                                        <div className="d-flex align-items-center justify-content-center px-md-4 py-md-2">
                                            <span>{item.quantity}</span>
                                        </div>
                                        <button className="increase-amount btn btn-dark border">
                                            <i className="bi bi-plus"></i>
                                        </button>
                                    </div>
                                    <div className="product-price d-none d-md-flex flex-column justify-content-between">
                                        <div className="price">
                                            <h2 className='text-center'>${product?.currentPrice}</h2>
                                        </div>
                                        <div className="remove-product d-flex justify-content-center">
                                            <button className='btn btn-danger'>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {/* <div className="cart-product m-0 border-bottom p-4 row row-cols-3 row-cols-md-4">
                            <div className="product-picture d-flex justify-content-center align-items-center">
                                <img className='rounded' src={products[4].image} alt="product" />
                            </div>
                            <div className="product-details">
                                <div className="product-name">
                                    <span className='fw-bold fs-4'>Product Name</span>
                                </div>
                                <div className="product-color">
                                    <span>Color: Red </span>
                                </div>
                                <div className="product-size">
                                    <span>Size: 38 </span>
                                </div>
                                <div className="product-price d-block d-md-none mt-3">
                                    <span className='fw-bold'>$100</span>
                                </div>
                            </div>
                            <div className="product-amount d-flex flex-column flex-md-row align-items-center align-items-start justify-content-center gap-3 gap-md-0">
                                <button className="decrease-amount btn btn-dark border d-flex">
                                    <i className="bi bi-dash"></i>
                                </button>
                                <div className="d-flex align-items-center justify-content-center px-md-4 py-md-2">
                                    <span>1</span>
                                </div>
                                <button className="increase-amount btn btn-dark border">
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>
                            <div className="product-price d-none d-md-flex flex-column justify-content-between">
                                <div className="price">
                                    <h2 className='text-center'>$100</h2>
                                </div>
                                <div className="delete d-flex justify-content-center">
                                    <span>Delete</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="summary border p-4 border-2 rounded d-flex flex-column gap-3">
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