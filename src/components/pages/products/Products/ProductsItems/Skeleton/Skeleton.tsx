import React from 'react'
import './Skeleton.scss'

function Skeleton() {
  return (
    <div className="skeleton products__item item">
      <div className="item__img"></div>
      <div className="item__size"></div>
      <div className="item__title"></div>
      <div className="item__property">
        <div className="item__code"></div>
        <div className="item__maker"></div>
        <div className="item__brand"></div>
      </div>
      <div className="item__bottom">
        <div className="item__price"></div>
        <div className="item__btn"></div>
      </div>
    </div>
  )
}

export default Skeleton
