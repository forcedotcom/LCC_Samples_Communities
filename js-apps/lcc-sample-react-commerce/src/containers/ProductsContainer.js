import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getProductsActive } from '../reducers'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import Buttons from './Buttons'

const ProductsContainer = ({ active, products, addToCart }) => (
  <div className={active > 0 ? '' : 'hide'}>

    <div className="flex">
      <div className="flex-grow margin-left-small header"><h2>SHOP ALL SHOES</h2></div>
      <div className="margin-right-small margin-top-small"><Buttons /></div>
    </div>

    <div className="flex">
      <div className="fake-left-panel" />
      <div className="flex-grow make-room" >
        <ProductsList>
          {products.map(product =>
            <ProductItem
              key={product.id}
              product={product}
              onAddToCartClicked={() => addToCart(product.id)} />
          )}
        </ProductsList>
      </div>
    </div>
  </div>
)

ProductsContainer.propTypes = {
  active: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  active: getProductsActive(state),
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
