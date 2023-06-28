import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
    const [currentYear] = useState(new Date().getFullYear())

    // TODO: Transformar cada row em um componente

    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-5">
                <div className="d-flex justify-content-md-between justify-content-center">
                    <div className="me-5 d-none d-md-block">
                        <span className='fs-5'>Follow us on social networks:</span>
                    </div>
                    <div className="icons d-flex gap-4">
                        <a href="" className="link-secondary">
                            <i className="bi bi-instagram text-white"></i>
                        </a>
                        <a href="" className="link-secondary">
                            <i className="bi bi-facebook text-white"></i>
                        </a>
                        <a href="" className="link-secondary">
                            <i className="bi bi-twitter text-white"></i>
                        </a>
                        <a href="" className="link-secondary">
                            <i className="bi bi-youtube text-white"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="divider border-bottom"></div>

            <div className="container p-5">
                <div>
                    <div className="row row-cols-2 text-start">
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 gap-3 gap-sm-1 d-flex flex-column">
                            <h5 className="text-uppercase fw-bold fs-4">Company</h5>
                            <ul className="list-unstyled mb-0 gap-2 gap-md-3 d-flex flex-column">
                                <li>
                                    <Link to={"#"} className="text-white">About Us</Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="text-white">Our services</Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="text-white">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="text-white">Affiliate Program</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 gap-3 gap-sm-1 d-flex flex-column">
                            <h5 className="text-uppercase fw-bold fs-4">Products</h5>
                            <ul className="list-unstyled mb-0 gap-2 gap-md-3 d-flex flex-column">
                                <li>
                                    <Link to={"#"} className="text-white">Product 1</Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="text-white">Product 2</Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="text-white">Product 3</Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="text-white">Product 4</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-5 mb-md-0 mb-lg-0 gap-3 gap-sm-1 d-flex flex-column">
                            <h5 className="text-uppercase fw-bold fs-4">Useful Links</h5>
                            <ul className="list-unstyled mb-0 gap-2 gap-md-3 d-flex flex-column">
                                <li>
                                    <Link to={"#"} className="text-white">Pricing</Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="text-white">Settings</Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="text-white">Orders</Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="text-white">Help</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-0 mb-lg-0 gap-3 gap-sm-1 d-flex flex-column">
                            <h5 className="text-uppercase fw-bold fs-4">Contact</h5>
                            <ul className="list-unstyled mb-0 gap-2 gap-md-3 d-flex flex-column">
                                <li>
                                    <Link to={"#"} className="text-white"><i className="bi bi-house-door-fill me-1 me-md-3"></i><span>New York, NY 69420, US</span></Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="text-white"><i className="bi bi-envelope-fill me-1 me-md-3"></i><span>e-commerce-kaykyls@email.com</span></Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="text-white"><i className="bi bi-telephone-fill me-1 me-md-3"></i><span>+ 01 234 567 89</span></Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="text-white"><i className="bi bi-whatsapp me-1 me-md-3"></i><span>+ 98 765 432 10</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-3 copyright">
                <span>{`© 2023-${currentYear} `}</span>
                <Link to={"https://e-commerce-kaykyls.vercel.app/"} className="text-white">e-commerce-kaykyls.vercel.app</Link>
            </div>
        </footer>
    )
}

export default Footer