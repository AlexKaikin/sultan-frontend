import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PaginationStateType } from '../../@types/pagination'
import { RootState } from '../store'

const initialState: PaginationStateType = {
  pagesCount: 0,
  totalItems: 0,
  limitItems: 15,
  currentPage: 1,
}

export const pagination = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setTotalItems: (state, action: PayloadAction<string>) => {
      state.totalItems = +action.payload
      state.pagesCount = Math.ceil(+action.payload / initialState.limitItems)
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
  },
})

/**
 * Action
 */

export const { setTotalItems, setCurrentPage } = pagination.actions

export default pagination.reducer

/**
 * Selector
 */

export const paginationSelector = (state: RootState) => state.pagination
