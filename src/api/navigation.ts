import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL + '/',
  //withCredentials: true,
})

export const navigationhAPI = {
  getNavigation() {
    return instance.get<any>(`navigation`)
  },
}