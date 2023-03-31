import React from 'react'
import {
  LocationSVG,
  MailSVG
} from '../../../common/svg/index'

function Contacts() {
  return (
    <div className="header__contacts">
      <div className="header__address">
        <LocationSVG />
        <div>
          г. Кокчетав, ул. Ж. Ташенова 129Б <span>(Рынок Восточный)</span>
        </div>
      </div>
      <div className="header__mail">
        <MailSVG />
        <div>
          opt.sultan@mail.ru <span>На связи в любое время</span>
        </div>
      </div>
    </div>
  )
}

export default Contacts
