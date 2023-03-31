import React, { useState } from 'react'
import cn from 'classnames'

import { ArrowBottomSVG } from '../../../../../common/svg'

function Description(props: PropsType) {
  const { text } = props
  const [descriptionShow, setDescriptionShow] = useState(true)

  function descriptionClick() {
    setDescriptionShow(!descriptionShow)
  }

  return (
    <>
      <div className="product__description description">
        <button onClick={descriptionClick} className="description__title">
          Описание{' '}
          <div className={cn({ up: descriptionShow })}>
            <ArrowBottomSVG />
          </div>
        </button>
        <div className={cn('description__text', { show: descriptionShow })}>
          {text}
        </div>
      </div>

      <div className="product__line"></div>
    </>
  )
}

export default Description

type PropsType = {
  text: string
}