import React from 'react'
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <div className="footer__category">
      <div className="footer__title">Категории:</div>
      <nav className="footer__nav nav">
        <NavLink to="#" className="nav__link">
          Бытовая химия
        </NavLink>
        <NavLink to="#" className="nav__link">
          Косметика и гигиена
        </NavLink>
        <NavLink to="#" className="nav__link">
          Товары для дома
        </NavLink>
        <NavLink to="#" className="nav__link">
          Товары для детей и мам
        </NavLink>
        <NavLink to="#" className="nav__link">
          Посуда
        </NavLink>
      </nav>
    </div>
  )
}

export default Category
