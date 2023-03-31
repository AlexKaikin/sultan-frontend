export type CartStateType = {
  cartItems: CartItemType[]
  totalCost: number
}

export type CartItemType = {
  id: number
  title: string
  imgUrl: string
  price: number
  cost: number
  quantity: number
  text: string
  size: string
  sizeType: string
}