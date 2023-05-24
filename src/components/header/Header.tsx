import React from 'react'
import './header.scss'

const Header = () => {
    return (
        <div className="header-container border-bottom">
            <div className="header-wrapper pb-3 pt-3 container-sm">
                <nav className="navbar navbar-expand-sm">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#"><h1 className="fs-1 fw-bold">Shoes</h1></a>
                        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title fs-1 fw-bold" id="offcanvasNavbarLabel">Shoes</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1">
                                    <li className="nav-item fs-5">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">category 1</a></li>
                                            <li><a className="dropdown-item" href="#">category 2</a></li>
                                            <li><a className="dropdown-item" href="#">category 3</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item fs-5">
                                        <a href="#" className="nav-link">Offers</a>
                                    </li>
                                    <li className="nav-item fs-5">
                                        <a href="#" className="nav-link">Sell</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="logo">
                    <a href='#'>
                        <h1 className="fs-1 fw-bold">Shoes</h1>
                    </a>
                </div>
                <div className="search">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-secondary" type="submit"><i className="bi bi-search"></i></button>
                    </form>
                </div>
                <div className="buttons">
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-cart"></i>
                    <i className="bi bi-person"></i>
                </div>
            </div>
      </div>
    )
}

export default Header