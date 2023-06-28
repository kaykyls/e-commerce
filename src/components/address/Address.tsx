import React from 'react'
import './address.scss'

const Address = () => {
    return (
        <div>
                        <div className="address-form">
                            <form action="" className="d-flex flex-column gap-2">
                                <div className="name-wrapper">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" className="form-control" placeholder="Name" />
                                </div>
                                <div className="address-wrapper">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" id="address" className="form-control" placeholder="Address" />
                                </div>
                                <div className='row'>
                                    <div className="col-6 pe-1 zip-wrapper">
                                        <label htmlFor="zip">Zip</label>
                                        <input type="text" id="zip" className="form-control" placeholder="Zip" />
                                    </div>
                                    <div className="col-6 ps-1 phone-wrapper">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text" id="phone" className="form-control" placeholder="Phone" />
                                    </div>
                                </div>
                                <div className="city-wrapper">
                                    <label htmlFor="city">City</label>
                                    <input type="text" id="city" className="form-control" placeholder="City" />
                                </div>
                                

                                <div className='row'>
                                    <div className="col-6 pe-1 state-wrapper">
                                        <label htmlFor="state">State</label>
                                        <input type="text" id="state" className="form-control" placeholder="State" />
                                    </div>      
                                    <div className="col-6 ps-1 country-wrapper">
                                        <label htmlFor="country">Country</label>
                                        <input type="text" id="country" className="form-control" placeholder="Country" />
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                        </div>
    )
}

export default Address