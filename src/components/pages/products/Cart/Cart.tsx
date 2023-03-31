import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { cartSelector, getCart } from '../../../../store/cart/cart'
import {Modal, Breadcrumbs} from '../../../common/index'
import CartItems from './CartItems/CartItems'
import DoubleCheckSVG from '../../../common/svg/DoubleCheckSVG/DoubleCheckSVG'
import { useAppDispatch } from '../../../../store/store'
import './Cart.scss'

function Cart() {
  const dispatch = useAppDispatch()
  const { cartItems, totalCost } = useSelector(cartSelector)
  const [modalShow, setModalShow] = useState(false)

  function modaltoggle(){
    const body = document.querySelector('body')
    body?.classList.toggle("scrolloff")
    localStorage.clear()
    setModalShow(!modalShow)
  }

  function orderFormClick(){
    const body = document.querySelector('body')
    body?.classList.toggle("scrolloff")
    localStorage.clear()
    dispatch(getCart())
    setModalShow(!modalShow)
  }
  
  return (
    <>
      <Breadcrumbs />
      <section className="cart">
        <div className="container">
          <div className="cart__title">Корзина</div>
          {cartItems.length > 0 ? (
            <>
              <CartItems cartItems={cartItems} />
              <div className="cart__bottom">
                <div className="cart__btn">
                  <Link
                    onClick={orderFormClick}
                    to="#"
                    className="btn btn__buy"
                  >
                    Оформить заказ
                  </Link>
                </div>
                <div className="cart__total">{totalCost} ₸</div>
              </div>
            </>
          ) : (
            <div className="cart__null">В корзине пусто</div>
          )}
        </div>
      </section>
      {modalShow && (
        <Modal title="" modaltoggle={modaltoggle}>
          <div className='modal__icon'>
            <span><DoubleCheckSVG /></span>
          </div>
          <div className='modal__title'>Спасибо за заказ</div>
          <div className='modal__text'>Наш менеджер свяжется с вами в ближайшее время</div>
        </Modal>
      )}
    </>
  )
}

export default Cart
