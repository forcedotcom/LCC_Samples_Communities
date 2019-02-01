import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import AppContainer from './AppContainer'
import ReceiptContainer from './ReceiptContainer'
import '../styles/App.css';

const App = () => (
  <div>
    <div>
      <AppContainer />
    </div>

    <div>
      <ProductsContainer />
    </div>

    <div>
      <CartContainer />
    </div>

    <div>
      <ReceiptContainer />
    </div>
  </div>
)

export default App
