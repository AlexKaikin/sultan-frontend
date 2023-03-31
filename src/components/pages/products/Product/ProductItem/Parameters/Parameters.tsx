import React, { useState } from 'react'
import cn from 'classnames'

import { ArrowBottomSVG } from '../../../../../common/svg'
import { ProductItemType } from '../../../../../../@types/products'

function Parameters(props: PropsType) {
  const { productItem } = props
  const [parametersShow, setParametersShow] = useState(true)

  function parametersClick() {
    setParametersShow(!parametersShow)
  }

  return (
    <div className="product__parameters parameters">
      <button onClick={parametersClick} className="parameters__title">
        Характеристики{' '}
        <div className={cn({ up: parametersShow })}>
          <ArrowBottomSVG />
        </div>
      </button>
      <div className={cn('parameters__items', { show: parametersShow })}>
        <div className="parameters__item">
          <span>Производитель:</span> {productItem.maker}
        </div>
        <div className="parameters__item">
          <span>Бренд:</span> {productItem.brand}
        </div>
        <div className="parameters__item">
          <span>Артикул:</span> 460404
        </div>
        <div className="parameters__item">
          <span>Кол-во в коробке:</span> 2
        </div>
        <div className="parameters__item">
          <span>Штрихкод:</span> {productItem.code}
        </div>
        <div className="parameters__item">
          <span>Размеры коробки(Д*Ш*В):</span> 10х10х10
        </div>
        <div className="parameters__item">
          <span>Вес коробки:</span> 1020 г
        </div>
      </div>
    </div>
  )
}

export default Parameters

type PropsType = {
  productItem: ProductItemType
}
