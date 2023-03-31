import React from 'react'
import { Link } from 'react-router-dom'
import { CartSVG } from '../../../common/svg'

function Cart(props: PropsType) {
  const { cartItems, totalCost } = props
  return (
    <Link to="/cart" className="header__cart cart">
      <div className="cart__icon">
        <CartSVG />
        {cartItems.length > 0 && (
          <div className="cart__quantity">{cartItems.length}</div>
        )}
      </div>

      <div className="cart__text">
        Корзина{' '}
        {cartItems.length > 0 && (
          <span className="cart__coast">{totalCost} ₸ </span>
        )}
      </div>
    </Link>
  )
}

export default Cart

type PropsType = {
  cartItems: []
  totalCost: number
}
