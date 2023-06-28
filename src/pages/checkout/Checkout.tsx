import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { TbArrowNarrowLeft } from 'react-icons/tb';
import './checkout.scss';
import Header from '../../components/header/Header';
import { products } from '../../api';
import Address from '../../components/address/Address';
import Payment from '../../components/payment/Payment';
import Footer from '../../components/footer/Footer';

const Checkout = () => {
  const location = useLocation();
  const [fromBuyNow, setFromBuyNow] = useState(false);
  const [singleProduct, setSingleProduct] = useState<any>({});

  useEffect(() => {
    setFromBuyNow(location.state?.fromBuyNow);
    setSingleProduct(products.find((product) => product.id === location.state?.productId));
  }, []);

  //futuramente trocar para user
  const cart = useSelector((state: any) => state.cart);

  const [currentStep, setCurrentStep] = useState(1);
  const [title, setTitle] = useState("1. Address");

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep === 1) return;
    setCurrentStep(currentStep - 1);
  };

  let steps = [
    <Address goToNextStep={handleNextStep} />,
    <Payment goToNextStep={handleNextStep} />
  ];

  useEffect(() => {
    switch (currentStep) {
      case 1:
        setTitle("1. Address");
        break;
      case 2:
        setTitle("2. Payment");
        break;
      default:
        setTitle("1. Address");
        break;
    }
  }, [currentStep]);

  return (
    <>
      <Header />
      <div className="container mt-4 mb-4">
        {currentStep > 1 &&
          <div onClick={handlePreviousStep} className="return-btn fs-5 mb-4 text-decoration-underline">
            <TbArrowNarrowLeft />
            <span>Return</span>
          </div>
        }
        <h1 className="fs-2 mb-4">{title}</h1>
        <div className="row justify-content-between gap-4 gap-lg-0">
          <div className="d-flex flex-column col-lg-6">
            {steps[currentStep - 1]}
          </div>

          <div className="col col-lg-4 col-xxl-3">
            <div className="cart-items p-4 rounded border">
              <div className='d-flex justify-content-between'>
                <h3 className="fs-4 mb-4">Your items</h3>
                <Link to={"/cart"} className='text-decoration-underline'>edit</Link>
              </div>
              {fromBuyNow ?
                <div className="cart-item d-flex justify-content-between align-items-center mb-4">
                  <div className="cart-item-image">
                    <img className='cart-item-product-image rounded' src={singleProduct?.image} alt="" />
                  </div>
                  <div className="cart-item-info">
                    <h3 className="fs-5">{singleProduct?.title}</h3>
                    <p className="fs-6">Quantity: {location?.state.quantity}</p>
                  </div>
                  <div className="cart-item-price">
                    <p className="fs-5">${singleProduct?.currentPrice * location?.state.quantity}</p>
                  </div>
                </div>
                :
                <div className="cart-items-wrapper">
                  {cart?.cartItems.map((item: any, index: number) => {
                    const product = products.find((product) => product.id === item.id);

                    return (
                      <div key={index} className="cart-item d-flex justify-content-between align-items-center mb-4">
                        <div className="cart-item-image">
                          <img className='cart-item-product-image rounded' src={product?.image} alt="" />
                        </div>
                        <div className="cart-item-info">
                          <h3 className="fs-5">{product?.title}</h3>
                          <p className="fs-6">Quantity: {item?.quantity}</p>
                        </div>
                        <div className="cart-item-price">
                          <p className="fs-5">${product?.currentPrice}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              }

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Checkout;