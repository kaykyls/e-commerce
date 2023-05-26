import React from 'react'
import { Link } from 'react-router-dom'
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
                                    <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                    </a>
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
                </nav>
            </div>
        </div>
    )
}

export default Navbar