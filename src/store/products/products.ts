import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductItemType, ProductsStateType } from '../../@types/products'
import { productsAPI } from '../../api/products'
import { setTotalItems } from '../pagination/pagination'
import { RootState } from '../store'

/**
 * загрузка товаров
 *
 * status: 'loading' | 'success' | 'error'
 */

const initialState: ProductsStateType = {
  productItems: [],
  status: 'loading',
}

export const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductItemType[]>) => {
      state.productItems = action.payload
      state.status = 'success'
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload
    },
  },
})

/**
 * Action
 */

export const { setProducts, setStatus } = products.actions

export default products.reducer

/**
 * Selector
 */

export const productsSelector = (state: RootState) => state.products

/**
 * thunk
 * загрузка товаров
 */

export const getProducts =
  () => async (dispatch: Function, getState: Function) => {
    dispatch(setStatus('loading'))
    try {
      const res = await productsAPI.getProducts(
        getState().filter,
        getState().pagination
      )
      dispatch(setProducts(res.data))
      res.headers['x-total-count'] &&
        dispatch(setTotalItems(res.headers['x-total-count']))
    } catch (err) {
      dispatch(setStatus('error'))
      console.log(err)
    }
  }
