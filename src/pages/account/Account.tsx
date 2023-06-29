import React from 'react'
import './account.scss'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import {FaUser, FaHeart, FaStar} from 'react-icons/fa'
import {BsCartFill} from 'react-icons/bs'

const Account = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <div className="account container mt-4 mb-4 mt-md-5 mb-md-5">
                <h1 className='mb-4 mb-md-5 fs-2'>Account</h1>
                <div className="row gap-3 gap-md-0">
                    <div className="account-item col-md-3">
                        <div className="border d-flex justify-content-center align-items-center py-5 px-3 rounded gap-1">
                            <FaUser/>
                            <h3 className="account-item-title fs-5 m-0">Profile</h3>
                        </div>
                    </div>
                    <div className="account-item col-md-3">
                        <div className="border d-flex justify-content-center align-items-center py-5 px-3 rounded gap-1">
                            <BsCartFill/>
                            <h3 className="account-item-title fs-5 m-0">My Orders</h3>
                        </div>
                    </div>
                    <div className="account-item col-md-3">
                        <div className="border d-flex justify-content-center align-items-center py-5 px-3 rounded gap-1">
                            <FaHeart/>
                            <h3 className="account-item-title fs-5 m-0">Wishlist</h3>
                        </div>
                    </div>
                    <div className="account-item col-md-3">
                        <div className="border d-flex justify-content-center align-items-center py-5 px-3 rounded gap-1">
                            <FaStar/>
                            <h3 className="account-item-title fs-5 m-0">Reviews</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>        
        </>
    )
}

export default Account