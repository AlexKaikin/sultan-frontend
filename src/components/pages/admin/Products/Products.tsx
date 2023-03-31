import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../store/store'
import Pagination from '../../../common/Pagination/Pagination'
import { CreateProductForm } from './crud'
import { authSelector } from '../../../../store/auth/auth'
import './Products.scss'
import {
  getProducts,
  productsSelector,
} from '../../../../store/products/products'
import { paginationSelector } from '../../../../store/pagination/pagination'
import ProductItems from './ProductItems/ProductItems'

function Products() {
  const dispatch = useAppDispatch()
  const auth = useSelector(authSelector)
  const products = useSelector(productsSelector)
  const pagination = useSelector(paginationSelector)
  const [createProductShow, setCreateProductShow] = useState<boolean>(false)
  const [update, setUpdate] = useState(false)

  function createModaltoggle() {
    setCreateProductShow(!createProductShow)
  }

  function updateComponent() {
    setUpdate(true)
  }

  useEffect(() => {
    dispatch(getProducts())
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setUpdate(false)
  }, [dispatch, pagination.currentPage, update])

  if (!auth.data) return <Navigate to="/login" />

  return (
    <>
      <div className="section admin">
        <div className="container">
          <button
            onClick={() => setCreateProductShow(true)}
            className="item__add"
          >
            Добавить товар
          </button>
          <ProductItems products={products} updateComponent={updateComponent} />
          <Pagination pagination={pagination} />
        </div>
      </div>
      {createProductShow && (
        <CreateProductForm
          modaltoggle={createModaltoggle}
          updateComponent={updateComponent}
        />
      )}
    </>
  )
}

export default Products
