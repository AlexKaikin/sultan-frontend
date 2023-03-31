import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  getProducts,
  productsSelector,
} from '../../../../store/products/products'
import { useAppDispatch } from '../../../../store/store'
import { Breadcrumbs, Pagination } from '../../../common/index'
import { navigationSelector } from '../../../../store/navigation/navigation'
import { Categories, Aside, ProductsItems, Lorem } from './index'
import './Products.scss'
import { paginationSelector } from '../../../../store/pagination/pagination'
import { filterSelector } from '../../../../store/filter/filter'

function Products() {
  const dispatch = useAppDispatch()
  const { navigation } = useSelector(navigationSelector)
  const productsState = useSelector(productsSelector)
  const pagination = useSelector(paginationSelector)
  const filter = useSelector(filterSelector)
  const { productItems, status } = productsState

  useEffect(() => {
    dispatch(getProducts())
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [dispatch, filter, pagination.currentPage])

  return (
    <>
      <Breadcrumbs />
      <section className="products">
        <div className="container">
          <Categories navigation={navigation} filter={filter} />
          <div className="products__content">
            <Aside navigation={navigation} filter={filter} />
            <div>
              <ProductsItems items={productItems} status={status} />
              {status === 'success' && <Pagination pagination={pagination} />}
              <Lorem />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
