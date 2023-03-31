import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { RegisterType } from '../../../../@types/auth'
import {
  authSelector,
  register,
} from '../../../../store/auth/auth'
import { useAppDispatch } from '../../../../store/store'
import './Register.scss'

function Register() {
  const dispatch = useAppDispatch()
  const auth = useSelector(authSelector)
  const formState: RegisterType = {
    email: '',
    fullName: '',
    password: '',
  }

  if (auth.data) return <Navigate to="/admin/products" />

  return (
    <div className="section auth">
      <div className="container">
        <div className="auth__title">Регистрация</div>
        <Formik
          initialValues={formState}
          validate={formValidate}
          onSubmit={(values) => dispatch(register(values))}
        >
          <Form className="auth__form form">
            <div className="form__field">
              <label>Логин</label>
              <Field type="text" name="fullName" required />
            </div>
            <div className="form__field">
              <label>Почта</label>
              <Field type="email" name="email" required />
            </div>
            <div className="form__field">
              <label>Пароль</label>
              <Field type="password" name="password" required />
            </div>
            <p>
              У вас есть аккаунт? <Link to="/login">Вход</Link>
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

export default Register

const formValidate = (values: RegisterType) => {
  const errors = {}
  return errors
}
