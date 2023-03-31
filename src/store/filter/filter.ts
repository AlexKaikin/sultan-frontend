import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterStateType } from '../../@types/filter'
import { RootState } from '../store'

/**
 * фильтр товаров
 */

const initialState: FilterStateType = {
  category: 'Косметика и гигиена',
  sort: 'new',
  subCategory: '',
  priceFrom: 0,
  priceTo: 0,
  maker: [],
}

export const products = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSubCategory: (state, action) => {
      state.subCategory !== action.payload
        ? (state.subCategory = action.payload)
        : (state.subCategory = '')
    },
    setPriceFromValue: (state, action) => {
      state.priceFrom = +action.payload
    },
    setPriceToValue: (state, action) => {
      state.priceTo = +action.payload
    },
    setCategoryActive: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
    setSortActive: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    },
    setMaker: (state, action: PayloadAction<string>) => {
      const index = state.maker.indexOf(action.payload)
      if (index === -1) {
        state.maker = [...state.maker, action.payload]
      } else {
        state.maker.splice(index, 1)
      }
    },
  },
})

/**
 * Action
 */

export const {
  setSubCategory,
  setPriceFromValue,
  setPriceToValue,
  setCategoryActive,
  setSortActive,
  setMaker,
} = products.actions

export default products.reducer

/**
 * Selector
 */

export const filterSelector = (state: RootState) => state.filter
