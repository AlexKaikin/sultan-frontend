import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { CatalogSVG, SearchSVG } from '../../common/svg/index.ts'
import './Header.scss'
import { useAppDispatch } from '../../../store/store'
import { cartSelector, getCart } from '../../../store/cart/cart'
import {
  NavBurger,
  Logo,
  Catalog,
  Search,
  Call,
  PriceList,
  Nav,
  Contacts,
  Cart,
} from './'

function Header() {
  const dispatch = useAppDispatch()
  const { cartItems, totalCost } = useSelector(cartSelector)

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])

  return (
    <header className="header">
      <div className="header__first">
        <div className="container">
          <Contacts />
          <Nav />
        </div>
      </div>
      <div className="header__second">
        <div className="container">
          <NavBurger />
          <Logo />
          <Catalog />
          <Search />
          <Call />
          <PriceList />
          <Cart cartItems={cartItems} totalCost={totalCost} />
        </div>
      </div>
      <div className="header__last last">
        <div className="container">
          <button className="last__catalog">
            <CatalogSVG color={'#3f4e65'} />
            Каталог
          </button>
          <div className="vline"></div>
          <button className="last__search">
            <SearchSVG color={'#3f4e65'} /> Поиск
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
