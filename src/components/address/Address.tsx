import React, { useState } from 'react';

interface AddressProps {
  goToNextStep: () => void;
}

const Address: React.FC<AddressProps> = ({ goToNextStep }) => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [zip, setZip] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")

  const isAddressValid = () => {
    return (
      name !== "" &&
      address !== "" &&
      zip !== "" &&
      phone !== "" &&
      city !== "" &&
      state !== "" &&
      country !== ""
    )
  }

  const handleNextStep = () => {
    if (isAddressValid()) {
      goToNextStep()
    } else {
      alert('Please fill in all address fields.')
    }
  }

  return (
    <>
      <div className="address-form">
        <form action="" className="d-flex flex-column gap-2">
          <div className="name-wrapper">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="address-wrapper">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="form-control"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col-6 pe-1 zip-wrapper">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                id="zip"
                className="form-control"
                placeholder="Zip"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="col-6 ps-1 phone-wrapper">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                className="form-control"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="city-wrapper">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              className="form-control"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col-6 pe-1 state-wrapper">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                className="form-control"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="col-6 ps-1 country-wrapper">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                className="form-control"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <button onClick={handleNextStep} className="btn btn-dark mt-4 align-self-end">
        Continue
      </button>
    </>
  )
}

export default Address