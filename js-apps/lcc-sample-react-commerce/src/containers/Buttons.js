import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { goToCart, goToProducts } from '../actions'

const Buttons = ({ goToCart, goToProducts }) => (
    <div>
        <button className="btn btn-info btn-lg margin-right-small" onClick={goToProducts}>
            <span>Products</span>
        </button>

        <button className="btn btn-info btn-lg" onClick={goToCart}>
            <span className="glyphicon glyphicon-shopping-cart"></span><span> Shopping Cart</span>
        </button>
    </div>
)

Buttons.propTypes = {
    goToCart: PropTypes.func.isRequired,
    goToProducts: PropTypes.func.isRequired
}

export default connect(
    null, { goToCart, goToProducts }
)(Buttons)
