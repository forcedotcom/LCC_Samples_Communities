import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Payment from './Payment'

const Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div className="product-card-no-grow flex-center">
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          img={product.img}
          message="in cart."
          key={product.id}
        />
      </div>
    )
  ) : (<em>Please add some products to cart.</em>)

  return (
    <div className="margin-left-small">
      <div className="flex-no-wrap padding">
        <div className="padding flex">
          {nodes}
        </div>
        <div className="padding bordered w-100">
          <div className="flex w-100">
            <span className="padding"><b>Subotal</b></span>
            <span className="padding flex-grow"></span>
            <span className="padding">&#36;{parseFloat(total).toFixed(2)}</span>
          </div >
          <div className="flex w-100 border-top">
            <span className="padding"><b>Tax</b></span>
            <span className="padding flex-grow"></span>
            <span className="padding">&#36;{parseFloat(total / 10).toFixed(2)}</span>
          </div>
          <div className="flex w-100">
            <span className="padding"><b>Shipping</b></span>
            <span className="padding flex-grow"></span>
            <span className="padding">&#36;{parseFloat(total / 10).toFixed(2)}</span>
          </div>
          <div className="flex w-100 border-top">
            <span className="padding"><b>Final Total</b></span>
            <span className="padding flex-grow"></span>
            <span className="padding">&#36;{parseFloat(total * 1.2).toFixed(2)}</span>
          </div>
          <br />
        </div>
      </div>
      <div className="checkout-container padding">
        <Payment></Payment>
        <div className="flex padding bordered">
          <div className="flex-grow" />
          <button className='btn btn-primary wide' onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
            Place your order.
          </button>
          <div className="flex-grow" />
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
