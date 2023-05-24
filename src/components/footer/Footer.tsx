import React, { useState } from 'react'
import './footer.scss'

const Footer = () => {
    const [currentYear] = useState(new Date().getFullYear())

    return (
        <footer className="bg-dark text-center text-white mt-5">
            <div className="container p-5">
                <div className="mb-5 d-flex justify-content-md-between justify-content-center">
                    <div className="me-5 d-none d-md-block">
                        <span className='fs-5'>Follow us on social networks:</span>
                    </div>
                    <div className="icons d-flex gap-4">
                        <a href="" className="link-secondary">
                            <i className="bi bi-facebook text-white"></i>
                        </a>
                        <a href="" className="link-secondary">
                            <i className="bi bi-twitter text-white"></i>
                        </a>
                        <a href="" className="link-secondary">
                            <i className="bi bi-instagram text-white"></i>
                        </a>
                        <a href="" className="link-secondary">
                            <i className="bi bi-linkedin text-white"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <div className="row row-cols-2 text-start">
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 gap-3 gap-sm-1 d-flex flex-column">
                            <h5 className="text-uppercase fw-bold fs-4">Company</h5>
                            <ul className="list-unstyled mb-0 gap-2 gap-md-3 d-flex flex-column">
                                <li>
                                    <a href="#" className="text-white">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Our services</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Affiliate Program</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 gap-3 gap-sm-1 d-flex flex-column">
                            <h5 className="text-uppercase fw-bold fs-4">Products</h5>
                            <ul className="list-unstyled mb-0 gap-2 gap-md-3 d-flex flex-column">
                                <li>
                                    <a href="#" className="text-white">Product 1</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Product 2</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Product 3</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Product 4</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-5 mb-md-0 mb-lg-0 gap-3 gap-sm-1 d-flex flex-column">
                            <h5 className="text-uppercase fw-bold fs-4">Useful Links</h5>
                            <ul className="list-unstyled mb-0 gap-2 gap-md-3 d-flex flex-column">
                                <li>
                                    <a href="#" className="text-white">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Orders</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Help</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-0 mb-lg-0 gap-3 gap-sm-1 d-flex flex-column">
                            <h5 className="text-uppercase fw-bold fs-4">Contact</h5>
                            <ul className="list-unstyled mb-0 gap-2 gap-md-3 d-flex flex-column">
                                <li>
                                    <a href="#" className="text-white"><i className="bi bi-house-door-fill me-1 me-md-3"></i><span>New York, NY 69420, US</span></a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"><i className="bi bi-envelope-fill me-1 me-md-3"></i><span>e-commerce-kaykyls@email.com</span></a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"><i className="bi bi-telephone-fill me-1 me-md-3"></i><span>+ 01 234 567 89</span></a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"><i className="bi bi-whatsapp me-1 me-md-3"></i><span>+ 98 765 432 10</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-3 copyright">
                <span>{`© 2023-${currentYear} `}</span>
                <a className="text-white" href="https://e-commerce-kaykyls.vercel.app/">
                e-commerce-kaykyls.vercel.app
                </a>
            </div>
        </footer>
    )
}

export default Footer