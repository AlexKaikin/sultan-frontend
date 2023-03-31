import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthDataType, AuthType, LoginType, RegisterType } from '../../@types/auth'
import { authAPI } from '../../api/auth'
import { RootState } from '../store'

/**
 * status: 'loading' | 'success' | 'error'
 */

const initialState: AuthType = {
  data: null,
  status: 'loading',
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null
    },
    setLogin: (state, action: PayloadAction<AuthDataType>) => {
      state.data = action.payload
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

export const { setLogin, setStatus, logout } = auth.actions

export default auth.reducer

/**
 * Selector
 */

export const authSelector = (state: RootState) => state.auth

/**
 * регистрация пользователя
 */

export const register =
  (values: RegisterType) => async (dispatch: Function) => {
    dispatch(setStatus('loading'))
    try {
      const res = await authAPI.register(values)
      dispatch(setLogin(res.data))
      window.localStorage.setItem('token', res.data.token)
    } catch (err) {
      dispatch(setStatus('error'))
      console.log(err)
    }
  }

/**
 * авторизация
 */

export const login = (values: LoginType) => async (dispatch: Function) => {
  dispatch(setStatus('loading'))
  try {
    const res = await authAPI.login(values)
    dispatch(setLogin(res.data))
    window.localStorage.setItem('token', res.data.token)
  } catch (err) {
    dispatch(setStatus('error'))
    console.log(err)
  }
}

/**
 * проверка авторизации
 */

export const authMe = () => async (dispatch: Function) => {
  dispatch(setStatus('loading'))
  try {
    const res = await authAPI.getMe()
    dispatch(setLogin(res.data))
  } catch (err) {
    dispatch(setStatus('error'))
    console.log(err)
  }
}


