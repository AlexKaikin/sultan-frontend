import React from 'react'
import { ProductItemType } from '../../../../../@types/products'

import {
  DownloadSVG,
  ShareSVG,
  BottleSVG,
  BoxSVG,
} from '../../../../common/svg/index'
import { Description, Parameters, Quantity } from './index'

function ProductItem(props: PropsType) {
  const { productItem } = props

  return (
    <section className="product">
      <div className="container">
        <div className="product__img img">
          <div className="img__wrap">
            <img
              src={
                (process.env.REACT_APP_SERVER_URL || '') + productItem.imgUrl
              }
              alt={productItem.title}
            />
          </div>
        </div>
        <div className="product__content">
          <div className="product__available">В наличии</div>
          <div className="product__title">{productItem.title}</div>
          <div className="product__subcategory">
            {productItem.subCategory.map((item) => (
              <div className='subcategory__item'>{item}</div>
            ))}
          </div>
          <div className="product__size">
            {productItem.sizeType === 'Бутылка' ? <BottleSVG /> : <BoxSVG />}
            {productItem.size} {productItem.sizeType === 'Бутылка' ? 'мл' : 'г'}
          </div>
          <Quantity productItem={productItem} />
          <div className="product__link link">
            <button className="link__share" disabled>
              <ShareSVG />
            </button>
            <div className="link__text">
              При покупке от <span>10 000 ₸</span> бесплатная доставка по
              Кокчетаву и области
            </div>
            <button className="link__pricelist" disabled>
              Прайс-лист <DownloadSVG width="17" height="17" color="#3f4e65" />
            </button>
          </div>
          <div className="product__property property__items">
            <div className="property__item">
              <span>Производитель:</span> {productItem.maker}
            </div>
            <div className="property__item">
              <span>Бренд:</span> {productItem.brand}
            </div>
            <div className="property__item">
              <span>Артикул:</span> 460404
            </div>
            <div className="property__item">
              <span>Штрихкод:</span> {productItem.code}
            </div>
          </div>
          <Description text={productItem.text} />
          <Parameters productItem={productItem} />
        </div>
      </div>
    </section>
  )
}

export default ProductItem

type PropsType = {
  productItem: ProductItemType
}
