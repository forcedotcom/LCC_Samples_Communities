import {
  GO_TO_CART, GO_TO_PRODUCTS, CHECKOUT_SUCCESS
} from '../constants/ActionTypes'

const initialState = {
  homeActive: 1,
  cartActive: 0,
  productsActive: 0,
  receiptActive: 0
}

const cartState = {
  homeActive: 0,
  cartActive: 1,
  productsActive: 0,
  receiptActive: 0
}

const productsState = {
  homeActive: 0,
  cartActive: 0,
  productsActive: 1,
  receiptActive: 0
}

const receiptState = {
  homeActive: 0,
  cartActive: 0,
  productsActive: 0,
  receiptActive: 1
}

const buttons = (state = initialState, action) => {
  switch (action.type) {
    case GO_TO_CART:
      return cartState;
    case GO_TO_PRODUCTS:
      return productsState;
    case CHECKOUT_SUCCESS:
      return receiptState;
    default:
      return state;
  }
}

export default buttons
