import React from 'react'
import bootstrap from "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import img from "./1.jpg"

function App() {
  return (
    <div className="App">
      <div className="header-container border-bottom">
        <div className="header-wrapper container-sm">
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <a className="navbar-brand" href="#"><h1>Shoes</h1></a>
              <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
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
            </div>
          </nav>
          <div className="logo">
            <a href='#'>
              <h1>Shoes</h1>
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

      <div className="navbar-container border-bottom">
          <div className="navbar-wrapper container-sm">
          <div className="search">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-secondary" type="submit"><i className="bi bi-search"></i></button>
            </form>
          </div>
          <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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

        

        <div className="slider-container">
          {/* <div className="info mt-5">
            <div className="h3">
              <h3>Recommended</h3>
            </div>
          </div> */}
          <div id='recommended-carousel' className="carousel slide carousel-dark" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#recommended-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#recommended-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#recommended-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                <img src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..."/>
                {/* <div className="carousel-caption d-none d-md-block">
                  <h5>This is a shoe</h5>
                  <p>Just some nice shoe passing through.</p>
                </div> */}
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" className="d-block w-100" alt="..."/>
                {/* <div className="carousel-caption d-none d-md-block">
                  <h5>This is a shoe</h5>
                  <p>Just some nice shoe passing through.</p>
                </div> */}
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" className="d-block w-100" alt="..."/>
                {/* <div className="carousel-caption d-none d-md-block">
                  <h5>This is a shoe</h5>
                  <p>Just some nice shoe passing through.</p>
                </div> */}
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#recommended-carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#recommended-carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="cards-container container-sm">
        <div className="info mt-5">
          <div className="h3">
            <h3>Featured</h3>
          </div>
        </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-sm-3">
            <div className="col">
              <div className="card">
                <img src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Adidas 1</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <div className='price'>
                    <p className='previous-price'>$99.99</p>
                    <p className='current-price'>$49.99</p>
                  </div>
                  {/* <a href="#" className="btn btn-primary">Go to Product</a> */}
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Nike 1</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <div className='price'>
                    <p className='previous-price'>$99.99</p>
                    <p className='current-price'>$49.99</p>
                  </div>
                  {/* <a href="#" className="btn btn-primary">Go to Product</a> */}
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Nike 2</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <div className='price'>
                    <p className='previous-price'>$99.99</p>
                    <p className='current-price'>$49.99</p>
                  </div>
                  {/* <a href="#" className="btn btn-primary">Go to Product</a> */}
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Adidas 1</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <div className='price'>
                    <p className='previous-price'>$99.99</p>
                    <p className='current-price'>$49.99</p>
                  </div>
                  {/* <a href="#" className="btn btn-primary">Go to Product</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
