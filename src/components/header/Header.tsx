import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import {FiLogOut, FiLogIn} from 'react-icons/fi'

const Header = () => {
    return (
        <div className="header-container border-bottom">
            <div className="header-wrapper pb-3 pt-3 container-sm">
                <nav className="navbar navbar-expand-sm">
                    <div className="container-fluid p-0 gap-3">
                        <button className="navbar-toggler p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link to={"/"} className="navbar-brand p-0 m-0"><h1 className="fs-1 fw-bold">Shoes</h1></Link>
                        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title fs-1 fw-bold" id="offcanvasNavbarLabel">Shoes</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1">
                                    <li className="nav-item fs-5">
                                        <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link to={"#"} className="nav-link dropdown-toggle fs-5" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link to={"#"} className="dropdown-item">category 1</Link></li>
                                            <li><Link to={"#"} className="dropdown-item">category 2</Link></li>
                                            <li><Link to={"#"} className="dropdown-item">category 3</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item fs-5">
                                        <Link to={"#"} className="nav-link">Offers</Link>
                                    </li>
                                    <li className="nav-item fs-5">
                                        <Link to={"#"} className="nav-link">Sell</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="logo">
                    <Link to={"/"}>
                        <h1 className="fs-1">Shoes</h1>
                    </Link>
                </div>
                <div className="search">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-dark" type="submit"><i className="bi bi-search"></i></button>
                    </form>
                </div>
                <div className="buttons">
                    <i className="bi bi-heart"></i>
                    <Link to={"/cart"}><i className="bi bi-cart"></i></Link>
                    <div className="dropdown d-flex">
                        <i className="bi bi-person d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false"></i>
                        <ul className="dropdown-menu">
                            <li><Link to={"/login"} className="dropdown-item"><FiLogIn/> Login</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link to={"/account"} className="dropdown-item">Your Account</Link></li>
                            <li><a className="dropdown-item" href="#">Orders</a></li>
                            <li><a className="dropdown-item" href="#">Wishlist</a></li>
                            {/* <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#"><FiLogOut/> Logout  </a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Header