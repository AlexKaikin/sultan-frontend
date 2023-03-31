import React from 'react'

import visaImg from '../../../../assets/img/payments/visa.png'
import mcImg from '../../../../assets/img/payments/mc.png'

function Contacts() {
  return (
    <div className="footer__contacts contacts">
      <div className="footer__title">Контакты:</div>
      <div className="contacts__phone">+7 (777) 490-00-91</div>
      <div className="contacts__time">время работы: 9:00-20:00</div>
      <button className="contacts__btn">Заказать звонок</button>

      <div className="contacts__mail">
        opt.sultan@mail.ru <span>На связи в любое время</span>
      </div>

      <div className="payments__items">
        <img src={visaImg} alt="visa icon" className="paymenats__item" />
        <img src={mcImg} alt="master card icon" className="paymenats__item" />
      </div>
    </div>
  )
}

export default Contacts
