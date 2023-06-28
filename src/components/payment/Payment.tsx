import React, { useState } from 'react';

interface PaymentProps {
  goToNextStep: () => void;
}

const Payment: React.FC<PaymentProps> = ({ goToNextStep }) => {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");

  const isPaymentValid = () => {
    return (
      nameOnCard !== "" &&
      cardNumber !== "" &&
      expiration !== "" &&
      cvv !== ""
    );
  };

  const handleNextStep = () => {
    if (isPaymentValid()) {
      goToNextStep();
    } else {
      alert('Please fill in all payment fields.');
    }
  };

  return (
    <>
      <div className="payment-form">
        <form action="" className="d-flex flex-column gap-2">
          <div className="name-on-card-wrapper">
            <label htmlFor="nameOnCard">Name on Card</label>
            <input
              type="text"
              id="nameOnCard"
              className="form-control"
              placeholder="Name on Card"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
            />
          </div>
          <div className="card-number-wrapper">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              className="form-control"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col-6 pe-1 expiration-wrapper">
              <label htmlFor="expiration">Expiration</label>
              <input
                type="text"
                id="expiration"
                className="form-control"
                placeholder="Expiration"
                value={expiration}
                onChange={(e) => setExpiration(e.target.value)}
              />
            </div>
            <div className="col-6 ps-1 cvv-wrapper">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                className="form-control"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <button onClick={handleNextStep} className="btn btn-dark mt-4 align-self-end">
        Continue
      </button>
    </>
  );
};

export default Payment;
