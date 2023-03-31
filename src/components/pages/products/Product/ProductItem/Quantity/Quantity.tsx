import React, { useRef, useState } from 'react'
import { useAppDispatch } from '../../../../../../store/store'
import { getCart } from '../../../../../../store/cart/cart'
import { AddCartSVG } from '../../../../../common/svg'
import { getLocalStorage } from '../../../../../../utils/utils'
import { CartItemType } from '../../../../../../@types/cart'
import { ProductItemType } from '../../../../../../@types/products'

function Quantity(props: PropsType) {
  const dispatch = useAppDispatch()
  const { productItem } = props
  const [quantity, setQuantity] = useState(1)
  const [cost, setCost] = useState(productItem.price)

  function increment() {
    // увеличить количество товара на 1
    setQuantity((prevQuantity) => prevQuantity + 1)
    setCost((prevCost) => +(prevCost + productItem.price).toFixed(2))
  }

  function decriment() {
    // уменьшить количество товара на 1
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
      setCost((prevCost) => +(prevCost - productItem.price).toFixed(2))
    }
  }

  function quantityBlur(e: React.FocusEvent<HTMLInputElement>) {
    // проверка введённого значения в количество товара
    let number = +e.target.value
    if (Number.isNaN(number) || number < 1) {
      // если значение NaN или отрицательное, то
      setQuantity(1)
      setCost(productItem.price)
    }
  }

  function quantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    // изменить количество товара через input
    if (!Number.isNaN(+e.target.value)) {
      // если значение не NaN, то...
      setQuantity(+e.target.value)
      setCost(+(productItem.price * +e.target.value).toFixed(2))
    }
  }

  const addCartRef = useRef<HTMLButtonElement>(null)

  // добавить товар в корзину
  function addCartClick() {
    const cartItems: CartItemType[] = getLocalStorage('cart') // запросить localStorage
    const findProduct = cartItems.find((item) => item.id === productItem.id) // проверить наличие товара в корзине
    const product = {
      // создание товара
      id: productItem.id,
      imgUrl: productItem.imgUrl,
      title: productItem.title,
      text: productItem.text,
      size: productItem.size,
      sizeType: productItem.sizeType,
      price: productItem.price,
      quantity: quantity,
      cost: cost,
    }
    if (!findProduct) {
      cartItems.push(product)
    } else {
      findProduct.quantity = quantity
      findProduct.cost = cost
    }
    localStorage.setItem('cart', JSON.stringify(cartItems))
    dispatch(getCart())

    // сообщение о добавлении
    const msg = document.createElement('div')
    msg.classList.add('msg')
    msg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>'
    addCartRef.current?.append(msg)
    setTimeout(() => msg.remove(), 5000)
  }

  return (
    <div className="product__quantity quantity">
      <div className="quantity__price">
        {cost} {productItem.currency}
      </div>
      <div className="quantity__form">
        <div className="quantity__decrement">
          <button onClick={decriment} className="quantity__btn">
            -
          </button>
        </div>
        <input
          onBlur={quantityBlur}
          onChange={quantityChange}
          value={quantity}
          min="1"
          max="7"
          type="text"
          className="quantity__number"
        />
        <div className="quantity__increment">
          <button onClick={increment} className="quantity__btn">
            +
          </button>
        </div>
      </div>
      <button
        ref={addCartRef}
        onClick={addCartClick}
        className="quantity__addcart"
      >
        В корзину <AddCartSVG width="23" height="23" color="white" />
      </button>
    </div>
  )
}

export default Quantity

type PropsType = {
  productItem: ProductItemType
}
