import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import { getReceiptActive } from '../reducers'
import { addToCart } from '../actions'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import Buttons from './Buttons'

const ReceiptContainer = ({ active, products, addToCart }) => (
  <div className={active > 0 ? '' : 'hide'}>
    <div className="flex">
      <div className="flex flex-grow margin-left-small header"><h2>Thank you for your purchase.</h2></div>
      <div className="margin-right-small margin-top-small"><Buttons /></div>
    </div>
    <br />
    <div className="padding">
      <div>
        You'll receive an e-mail confirmation of your order shortly.
    </div>
      <br />

      <div>
        Not done yet?  Try out these hot new items!
    </div>
      <br />

      <div className="flex">
        <div className="flex-grow">
          <ProductsList>
            {products.slice(0, 4).map(product =>
              <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product.id)} />
            )}
          </ProductsList>
        </div>
      </div>
    </div>
  </div>
)

ReceiptContainer.propTypes = {
  active: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  active: getReceiptActive(state),
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ReceiptContainer)
