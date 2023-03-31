import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NavigationItemType, NavigationType } from '../../@types/navigation'
import { navigationhAPI } from '../../api/navigation'
import { RootState } from '../store'

/**
 * status: 'loading' | 'success' | 'error'
 */

const initialState: NavigationType = {
  navigation: [],
  status: 'loading',
}

export const navigation = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavigation: (state, action: PayloadAction<NavigationItemType[]>) => {
      state.navigation = action.payload
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

export const { setNavigation, setStatus } = navigation.actions

export default navigation.reducer

/**
 * Selector
 */

export const navigationSelector = (state: RootState) => state.navigation

/**
 * thunk
 * загрузка навигации
 */

export const getNavigation = () => async (dispatch: Function) => {
  dispatch(setStatus('loading'))

  try {
    const res = await navigationhAPI.getNavigation()
    dispatch(setNavigation(res.data))
  } catch (err) {
    dispatch(setStatus('error'))
    console.log(err)
  }
}
