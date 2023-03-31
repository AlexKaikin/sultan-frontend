import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useAppDispatch } from '../../../../store/store'
import { Breadcrumbs } from '../../../common/index'
import ProductItem from './ProductItem/ProductItem'
import './Product.scss'
import { getProduct, productSelector } from '../../../../store/product/product'

function Product() {
  const dispatch = useAppDispatch()
  const { productItem, status } = useSelector(productSelector)
  const productId: string | undefined = useParams().id 

  useEffect(() => {
    if (productId !== undefined) dispatch(getProduct(+productId))
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [dispatch, productId])

  if (
    productItem === null ||
    (productId !== undefined && +productId !== productItem.id)
  ) {
    return null
  }

  if (status === 'error') {
    return (
      <>
        <Breadcrumbs />
        <section className="product">
          <div className="container">
            <h2>Произошла ошибка</h2>
            <p>К сожалению, не удалось загрузить товар</p>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Breadcrumbs />
      <ProductItem productItem={productItem} />
    </>
  )
}

export default Product
