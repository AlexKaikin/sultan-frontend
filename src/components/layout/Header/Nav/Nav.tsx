import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="header__nav nav">
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
  )
}

export default Nav
