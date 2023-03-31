import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import {
  auth,
  cart,
  navigation,
  products,
  filter,
  product,
  pagination,
} from './'

export const store = configureStore({
  reducer: {
    products,
    filter,
    product,
    pagination,
    cart,
    navigation,
    auth,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
