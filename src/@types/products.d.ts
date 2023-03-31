export type ProductsStateType = {
  productItems: ProductItemType[]
  status: string
}

export type ProductStateType = {
  productItem: ProductItemType| null,
  status: string
}

export type ProductsType = {
  productItems: ProductItemType[]
  productItem: ProductItemType | null
  filter: FilterType
  pagination: PaginationType
  status: string
}

export type ProductItemType = {
  _id: string
  id: number
  title: string
  sizeType: string
  maker: string
  brand: string
  code: number
  size: string
  imgUrl: string
  currency: string
  price: number
  quantity: number
  category: string
  subCategory: string[]
  text: string
}
