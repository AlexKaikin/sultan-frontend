import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItemType, CartStateType } from '../../@types/cart'
import { getLocalStorage } from '../../utils/utils'
import { RootState } from '../store'

const initialState: CartStateType = {
  cartItems: [],
  totalCost: 0,
}

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItemType[]>) => {
      state.cartItems = action.payload || []
      state.totalCost = action.payload?.reduce(
        (totalCost: number, item: CartItemType) => totalCost + item.cost,
        0
      )
    },
  },
})

/**
 * Action
 */

export const { setCart } = cart.actions

export default cart.reducer

/**
 * Selector
 */

export const cartSelector = (state: RootState) => state.cart

/**
 * thunk
 */

export const getCart = () => (dispatch: Function) => {
  dispatch(setCart(getLocalStorage('cart')))
}


