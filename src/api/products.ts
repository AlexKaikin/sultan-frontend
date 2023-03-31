import axios from 'axios'
import { FilterStateType } from '../@types/filter'
import { PaginationStateType } from '../@types/pagination'
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

export const productsAPI = {
  getProducts(filter: FilterStateType, pagination: PaginationStateType) {
    function createMaker(maker: string[]) {
      return maker.join('_')
    }
    const { category, subCategory, priceFrom, priceTo, maker } = filter
    const { currentPage, limitItems } = pagination
    const $category = category === 'Все чаи' ? `` : `category=${category}&`
    const $subCategory =
      subCategory === '' ? `` : `sub_category=${subCategory}&`
    const $maker = maker.length === 0 ? `` : `maker=${createMaker(maker)}&`
    const $priceFromValue = priceFrom === 0 ? `` : `price_gte=${priceFrom}&`
    const $priceToValue = priceTo === 0 ? `` : `price_lte=${priceTo}&`
    const $pagination = `_page=${currentPage}&_limit=${limitItems}`
    const sorting = (sortActive: string) => {
      switch (sortActive) {
        case 'priceDecrease':
          return `_sort=price&_order=desc&`
        case 'priceIncrease':
          return `_sort=price&_order=asc&`
        case 'titleIncrease':
          return `_sort=title&_order=asc&`
        case 'titleDecrease':
          return `_sort=title&_order=desc&`
        default:
          return `_sort=id&_order=desc&`
      }
    }

    return instance.get<ProductItemType[]>(
      `products/?${
        $category +
        $maker +
        $subCategory +
        $priceFromValue +
        $priceToValue +
        sorting(filter.sort) +
        $pagination
      }`
    )
  },
}
