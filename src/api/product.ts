import axios from 'axios'
import { ProductItemType } from '../@types/products'

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

export const productAPI = {
  getProduct(id: number) {
    return instance.get<ProductItemType>(`products/${id}`)
  },

  createProduct(data: ProductItemType) {
    return instance.post<ProductItemType>(`products/`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },

  updateProduct(data: ProductItemType) {
    return instance.patch<ProductItemType>(`products/${data.id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },

  deleteProduct(id: number) {
    return instance.delete<ProductItemType>(`products/${id}`)
  },

  uploadProductImg(formData: any) {
    return instance.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}