import React from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const Payment = ({ }) => {
  return (
    <div className="flex bordered padding">
      <div className="flex-grow" />
      <div className="margin-left-small margin-right-small flex flex-30">
        <Cards
          number="1234567891234567"
          name="John Doe"
          expiry="10/22"
          cvc="1234"
        />
      </div>
      <div className="margin-left-small margin-right-small flex flex-30">
        <form className="w-100">
          <div>
            <input
              className="padding w-100"
              type="tel"
              name="number"
              placeholder="Card Number"
            />
          </div>
          <div>
            <input
              className="padding w-100"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              className="padding w-100"
              type="tel"
              name="expiry"
              placeholder="Valid Thru"
            />
          </div>
          <div>
            <input
              className="padding w-100"
              type="tel"
              name="cvc"
              placeholder="CVC"
            />
          </div>
        </form>
      </div>
      <div className="flex-grow" />
    </div>
  )
}

export default Payment
