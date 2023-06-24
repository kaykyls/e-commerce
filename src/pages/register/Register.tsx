import React from 'react';
import { Link } from 'react-router-dom';
import { TbArrowNarrowLeft } from 'react-icons/tb';
import './register.scss';

interface RegisterProps {
    fromLogin: boolean;
}

const Register = (props: RegisterProps) => {
  return (
    <div className="register d-flex align-items-center justify-content-center">
      <form action="" className="register-form-wrapper border p-4 p-md-5 gap-3 d-flex flex-column justify-content-center">
        {props.fromLogin && <Link to={"/"} className="back-btn fs-6 text-decoration-underline">
          <TbArrowNarrowLeft />
          Return
        </Link>}
        <h1 className="fs-2 fw-bold">Register</h1>
        <div className="name-wrapper">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" placeholder="Name" />
        </div>
        <div className="email-wrapper">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" className="form-control" placeholder="Email" />
        </div>
        <div className="password-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" placeholder="Password" />
        </div>
        <div className="confirm-password-wrapper">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>
        <button className="btn btn-primary">Register</button>
        <div className="d-flex gap-3">
          <span>
            Already have an account? <Link className="text-decoration-underline" to={"/login"}>Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;