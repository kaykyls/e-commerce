import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import { TbArrowNarrowLeft } from 'react-icons/tb'

const Login = () => {
    return (
        <div className="login d-flex align-items-center justify-content-center">
            <form action="" className="form-wrapper border p-4 p-md-5 gap-3 d-flex flex-column justify-content-center">
                <Link to={"/"} className="back-btn fs-6 text-decoration-underline"><TbArrowNarrowLeft/>Return</Link>
                <h1 className="fs-2 fw-bold">Login</h1>
                <div className="email-wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' className="form-control" placeholder='Email'/>
                </div>
                <div className="password-wrapper">
                    <label htmlFor="email">Password</label>
                    <input type="text" id='email' className="form-control" placeholder='Password'/>
                </div>
                <div className="d-flex justify-content-between gap-3">
                    <div>
                        <input className='me-1 form-check-input border-2' type="checkbox" id='remember-me'/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <div>
                        <Link to={"/"}><span className="forgot-password text-decoration-underline">Forgot Password?</span></Link>
                    </div>
                </div>
                
                <button className="btn btn-primary">Login</button>
                <div className="d-flex gap-3">
                    <span>Don't have an account? <Link className='text-decoration-underline' to={"/register"}>Register</Link></span>
                    
                </div>
            </form>
        </div>

    )
}

export default Login