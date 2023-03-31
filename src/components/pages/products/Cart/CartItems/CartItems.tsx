import React from 'react'
import { Link } from 'react-router-dom'
import { CartItemType } from '../../../../../@types/cart'
import { getCart } from '../../../../../store/cart/cart'
import { useAppDispatch } from '../../../../../store/store'
import { getLocalStorage } from '../../../../../utils/utils'
import {BottleSVG, DeleteSVG, BoxSVG} from '../../../../common/svg/index'

function CartItems(props: PropsType) {
  const dispatch = useAppDispatch()

  function increment(id: number){
    const cartItems: CartItemType[] = getLocalStorage('cart') // запросить localStorage
    const findProduct = cartItems.find((item) => item.id === id) // проверить наличие товара в корзине
    if (findProduct) {
      findProduct.quantity += 1
      findProduct.cost = +(findProduct.cost + findProduct.price).toFixed(2)
    }
    localStorage.setItem('cart', JSON.stringify(cartItems))
    dispatch(getCart())
  }

  function decriment(id: number){
    const cartItems: CartItemType[] = getLocalStorage('cart') // запросить localStorage
    const findProduct = cartItems.find((item) => item.id === id) // проверить наличие товара в корзине
    if (findProduct && findProduct.quantity > 1) {
      findProduct.quantity -= 1
      findProduct.cost = +(findProduct.cost - findProduct.price).toFixed(2)
    }
    localStorage.setItem('cart', JSON.stringify(cartItems))
    dispatch(getCart())
  }

  function deleteProductClick(id: number){
    const cartItems: CartItemType[] = getLocalStorage('cart') // запросить localStorage
    const findProduct = cartItems.find((item) => item.id === id) // проверить наличие товара в корзине
    findProduct && cartItems.splice(cartItems.indexOf(findProduct), 1)
    localStorage.setItem('cart', JSON.stringify(cartItems))
    dispatch(getCart())
  }

  function changeQuantity(id: number) {
    
  }

  return (
    <div className="cart__items">
      {props.cartItems?.map((item) => {
        return (
          <div key={item.id} className="cart__item product">
            <div className="product__img img">
              <div className="img__wrap">
                <img
                  src={(process.env.REACT_APP_SERVER_URL || '') + item.imgUrl}
                  alt={item.title}
                />
              </div>
            </div>
            <div className="product__title">
              <div className="product__size">
                {item.sizeType === 'Бутылка' ? <BottleSVG /> : <BoxSVG />}
                {item.size} {item.sizeType === 'Бутылка' ? 'мл' : 'г'}
              </div>
              <Link to={`/products/${item.id}`}>
                {item.title.slice(0, 50)}
                {item.title.length > 50 && '...'}
              </Link>
              <p className="product__description">
                {item.text.slice(0, 150)}
                {item.title.length > 150 && '...'}
              </p>
            </div>

            <div className="vline notmobile"></div>

            <div className="product__quantity quantity">
              <div className="quantity__content">
                <div className="quantity__decrement">
                  <button
                    onClick={() => decriment(item.id)}
                    className="quantity__btn"
                  >
                    -
                  </button>
                </div>

                <input
                  type="text"
                  value={item.quantity}
                  onChange={() => changeQuantity(item.id)}
                  className="quantity__number"
                  min="1"
                  max="7"
                />
                <div className="quantity__increment">
                  <button
                    onClick={() => increment(item.id)}
                    className="quantity__btn"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="vline"></div>

            <div className="product__cost">
              <span>{item.cost}</span> ₸
            </div>

            <div className="vline"></div>

            <div className="product__delete delete">
              <button
                onClick={() => deleteProductClick(item.id)}
                className="delete__btn"
              >
                <DeleteSVG />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CartItems

type PropsType = {
  cartItems: CartItemType[]
}
