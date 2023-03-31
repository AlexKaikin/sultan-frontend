import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className="footer__nav">
      <div className="footer__title">Меню сайта:</div>
      <nav className="footer__nav nav">
        <NavLink to="#" className="nav__link">
          О компании
        </NavLink>
        <NavLink to="#" className="nav__link">
          Доставка и оплата
        </NavLink>
        <NavLink to="#" className="nav__link">
          Возврат
        </NavLink>
        <NavLink to="#" className="nav__link">
          Контакты
        </NavLink>
      </nav>
    </div>
  )
}

export default Nav
