import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ children }) => (
  <div>
    <div className="flex">{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node
}

export default ProductsList
