import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductItemType, ProductStateType } from '../../@types/products'
import { productAPI } from '../../api/product'
import { RootState } from '../store'

/**
 * загрузка товара
 * 
 * status: 'loading' | 'loading' | 'success' | 'error'
 */

const initialState: ProductStateType = {
  productItem: null,
  status: 'loading',
}

export const product = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProductItemType>) => {
      state.productItem = action.payload
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

export const { setProduct, setStatus} = product.actions

export default product.reducer

/**
 * Selector
 */

export const productSelector = (state: RootState) => state.product

/**
 * thunk
 */

/**
 * загрузка товара
 */

export const getProduct = (id: number) => async (dispatch: Function) => {
  dispatch(setStatus('loading'))
  try {
    const res = await productAPI.getProduct(id)
    dispatch(setProduct(res.data))
  } catch (err) {
    dispatch(setStatus('error'))
    console.log(err)
  }
}

/**
 * создать товар
 */
export const createProduct =
  (data: ProductItemType) => async (dispatch: Function) => {
    try {
      const res = await productAPI.createProduct(data)
      dispatch(setProduct(res.data))
    } catch (err) {
      console.log(err)
    }
  }

/**
 * обновить товар
 */
export const updateProduct =
  (data: ProductItemType) => async (dispatch: Function) => {
    try {
      await productAPI.updateProduct(data)
      dispatch(setProduct(data))
    } catch (err) {
      console.log(err)
    }
  }

/**
 * удалить товар
 */
export const deleteProduct = (id: number) => async (dispatch: Function) => {
  try {
    await productAPI.deleteProduct(id)
  } catch (err) {
    console.log(err)
  }
}