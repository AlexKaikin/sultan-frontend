import React from 'react'
import { ArrowRightSVG } from '../../../common/svg'

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe__title">Подпишись на скидки и акции</div>
      <form action="" className="subscribe__form">
        <input
          type="text"
          className="subscribe__input"
          placeholder="Введите ваш E-mail"
        />
        <button className="subscribe__btn">
          <ArrowRightSVG />
        </button>
      </form>
    </div>
  )
}

export default Subscribe
