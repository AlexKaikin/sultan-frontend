import React from 'react'
import { Link } from 'react-router-dom'

import { LogoSVG } from '../../../common/svg'

function Logo() {
  return (
    <Link to='/' className="header__logo">
      <LogoSVG />
    </Link>
  )
}

export default Logo
