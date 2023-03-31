import React from 'react'

import { Logo, Subscribe, Nav, Category, PriceList, Contacts } from './index'
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo logo">
          <Logo />
          <Subscribe />
        </div>
        <Nav />
        <Category />
        <PriceList />
        <Contacts />
      </div>
    </footer>
  )
}

export default Footer
