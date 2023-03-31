import React from 'react'

import { LogoLightSVG } from '../../../common/svg'

function Logo() {
  return (
    <div className="logo__content">
      <LogoLightSVG />
      <p className="logo__desc">
        Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в
        Кокчетаве и Акмолинской области
      </p>
    </div>
  )
}

export default Logo
