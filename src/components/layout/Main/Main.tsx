import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const Products = React.lazy(
  () => import('../../pages/products/Products/Products')
)
const Product = React.lazy(() => import('../../pages/products/Product/Product'))
const Cart = React.lazy(() => import('../../pages/products/Cart/Cart'))
const Login = React.lazy(() => import('../../pages/account/Login/Login'))
const Register = React.lazy(
  () => import('../../pages/account/Register/Register')
)
const AdminProducts = React.lazy(() => import('../../pages/admin/Products/Products'))

function Main() {
  return (
    <main className="main">
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/admin/products" element={<AdminProducts />} />
        </Routes>
      </Suspense>
    </main>
  )
}

export default Main
