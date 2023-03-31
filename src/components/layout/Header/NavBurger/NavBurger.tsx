import React from 'react'
import { ListSVG } from '../../../common/svg'

function NavBurger() {
  return (
    <div className="header__navburger navburger">
      <button className="navburger__btn">
        <ListSVG />
      </button>
    </div>
  )
}

export default NavBurger
