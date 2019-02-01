import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartActive, getCartProducts } from '../reducers'
import Cart from '../components/Cart'
import Buttons from './Buttons'

const CartContainer = ({ active, products, total, checkout }) => (
  <div className={active > 0 ? '' : 'hide'}>
    <div className="flex">
      <div className="flex flex-grow margin-left-small header"><h2>Your Cart</h2></div>
     <div className="margin-right-small margin-top-small"><Buttons /></div>
    </div>
    <Cart
      products={products}
      total={total}
      onCheckoutClicked={() => checkout(products)} />
  </div>
)

CartContainer.propTypes = {
  active: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  active: getCartActive(state),
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
