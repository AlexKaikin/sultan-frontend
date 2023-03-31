import axios from 'axios'
import { LoginType } from '../@types/auth'

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL + '/',
  //withCredentials: true,
})

instance.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = window.localStorage.getItem('token')
  }
  return config
})

export const authAPI = {
  register(values: LoginType) {
    return instance.post<any>(`auth/register`, values)
  },
  login(values: LoginType) {
    return instance.post<any>(`auth/login`, values)
  },
  getMe() {
    return instance.get<any>(`auth/me`)
  },
}
