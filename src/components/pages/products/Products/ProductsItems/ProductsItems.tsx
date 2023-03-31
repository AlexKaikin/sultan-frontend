import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { CartItemType } from '../../../../../@types/cart'
import { ProductItemType } from '../../../../../@types/products'
import { getCart } from '../../../../../store/cart/cart'
import { useAppDispatch } from '../../../../../store/store'
import { getLocalStorage } from '../../../../../utils/utils'
import { AddCartSVG, BottleSVG, BoxSVG } from '../../../../common/svg/index'
import Skeleton from './Skeleton/Skeleton'

function ProductsItems(props: PropsType) {
  const { items, status } = props
  const dispatch = useAppDispatch()
  const addCartRef = useRef<HTMLButtonElement>(null)

  function addCart(id: number) {
    const productItem = items.find((item) => item.id === id)
    if (!productItem) return null
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
      quantity: 1,
      cost: productItem.price,
    }

    if (!findProduct) {
      cartItems.push(product)
    } else {
      findProduct.quantity = 1
      findProduct.cost = productItem.price
    }

    localStorage.setItem('cart', JSON.stringify(cartItems))

    dispatch(getCart())

    // сообщение о добавлении
    const msg = document.createElement('div')
    msg.classList.add('msg')
    msg.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>'
    const btn = document.querySelector(`#p${id}`)
    btn?.append(msg)
    setTimeout(() => msg.remove(), 5000)
  }

  if (status === 'error') {
    return (
      <>
        <div className="section__title">Произошла ошибка</div>
        <p>К сожалению, не удалось загрузить товары</p>
        <br/>
      </>
    )
  }
  if (status === 'loading') {
    return (
      <div className="products__items">
        {Array(6)
          .fill('item')
          .map((item, i) => (
            <Skeleton key={i} />
          ))}
      </div>
    )
  }
  if (!items.length) return <div className="noitems">Товаров нет</div>

  return (
    <section className="products__items">
      {items.map((item) => {
        return (
          <div key={item.id} className="products__item item">
            <Link to={`/products/${item.id}`} className="item__img">
              <img
                src={(process.env.REACT_APP_SERVER_URL || '') + item.imgUrl}
                alt={item.title}
              />
            </Link>

            <div className="item__size">
              {item.sizeType === 'Бутылка' ? <BottleSVG /> : <BoxSVG />}
              <span>
                {item.size} {item.sizeType === 'Бутылка' ? 'мл' : 'г'}
              </span>
            </div>

            <Link to={`/products/${item.id}`} className="item__title">
              {item.title}
            </Link>

            <div className="item__property">
              <div className="item__code">
                <span>Штрихкод:</span> {item.code}
              </div>
              <div className="item__maker">
                <span>Производитель:</span> {item.maker}
              </div>
              <div className="item__brand">
                <span>Бренд:</span> {item.brand}
              </div>
            </div>

            <div className="item__bottom">
              <div className="item__price">
                {item.price} {item.currency}
              </div>
              <div className="item__btn">
                <button
                  ref={addCartRef}
                  id={`p${item.id}`}
                  className="addcart"
                  onClick={() => addCart(item.id)}
                >
                  В корзину <AddCartSVG width="27" height="27" color="white" />
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ProductsItems

type PropsType = {
  items: ProductItemType[]
  status: string
}
