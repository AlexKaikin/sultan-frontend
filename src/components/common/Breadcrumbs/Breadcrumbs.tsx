import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import cn from 'classnames'
import ArrowLeftSVG from '../svg/ArrowLeftSVG/ArrowLeftSVG'
import './Breadcrumbs.scss'
import { productSelector } from '../../../store/product/product'
import { filterSelector } from '../../../store/filter/filter'

function Breadcrumbs() {
  const { productItem } = useSelector(productSelector)
  const filter = useSelector(filterSelector)
  const { pathname } = useLocation()
  const breadcrumbs: BreadcrumbsType = {
    category: getCategory() || '',
    product: getProduct() || '',
    cart: getCart() || '',
  }

  function getCategory() {
    if (pathname.includes('/products')) {
      return filter.category
    }
  }

  function getProduct() {
    if (pathname !== '/products' && pathname.includes('/products')) {
      return productItem?.title
    }
  }

  function getCart() {
    if (pathname === '/cart') return 'Корзина'
  }

  return (
    <section className="breadcrumbs">
      <div className="container">
        <Link to="/" className="breadcrumbs__prev prev">
          <div className="prev__icon">
            <ArrowLeftSVG />
          </div>{' '}
          Назад
        </Link>

        <Link to="/" className="breadcrumbs__link">
          Главная
        </Link>

        {breadcrumbs.category && (
          <Link
            to="/products"
            className={cn('breadcrumbs__link', {
              active: !breadcrumbs.product,
            })}
          >
            {breadcrumbs.category}
          </Link>
        )}

        {breadcrumbs.product && (
          <div className="breadcrumbs__link active">{breadcrumbs.product}</div>
        )}

        {breadcrumbs.cart && (
          <div className="breadcrumbs__link active">{breadcrumbs.cart}</div>
        )}
      </div>
    </section>
  )
}

export default Breadcrumbs

type BreadcrumbsType = {
  category: string
  product: string
  cart: string
}
