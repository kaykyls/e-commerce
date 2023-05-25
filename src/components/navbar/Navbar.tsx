import React from 'react'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar-container border-bottom">
            <div className="navbar-wrapper container-sm">
                <div className="search">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-secondary" type="submit"><i className="bi bi-search"></i></button>
                    </form>
                </div>
                <nav className="navbar navbar-expand-sm">
                    <div className="container-fluid p-0">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">category 1</a></li>
                                        <li><a className="dropdown-item" href="#">category 2</a></li>
                                        <li><a className="dropdown-item" href="#">category 3</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Offers</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Sell</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar