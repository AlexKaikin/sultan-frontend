import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'

import { useAppDispatch } from '../../../../store/store'
import { authSelector, login } from '../../../../store/auth/auth'
import './Login.scss'
import { LoginType } from '../../../../@types/auth'

function Login() {
  const dispatch = useAppDispatch()
  const auth = useSelector(authSelector)
  const formState: LoginType = {
    email: '',
    password: '',
  }

  if (auth.data) return <Navigate to="/admin/products" />

  return (
    <div className="section auth">
      <div className="container">
        <div className="auth__title">Вход</div>
        <Formik
          initialValues={formState}
          validate={formValidate}
          onSubmit={(values) => dispatch(login(values))}
        >
          <Form className="auth__form form">
            <div className="form__field">
              <label>Логин</label>
              <Field type="text" name="email" required />
            </div>
            <div className="form__field">
              <label>Пароль</label>
              <Field type="password" name="password" required />
            </div>
            <p>
              У вас нет аккаунта? <Link to="/register">Регистрация</Link>
            </p>
            <button type="submit" className="form__btn">
              Отправить
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Login

const formValidate = (values: LoginType) => {
  const errors = {}
  return errors
}
