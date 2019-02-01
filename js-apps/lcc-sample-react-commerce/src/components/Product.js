import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title, img, message }) => (
  <div className="w-100">
    <div className="product-image">
      <img src={"./images/" + `${img}` + ".jpg"} />
    </div>
    <div className="product-info">
      <h3 className="h-120">{title}</h3>
      <h6>&#36;{price}.00</h6>
      <h6>{quantity ? ` ${quantity} ${message}` : null}</h6>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
