import React from 'react'
import { CatalogSVG } from '../../../common/svg'

function Catalog() {
  return (
    <div className="header__catalog">
      <button className="btn-catalog">
        Каталог <CatalogSVG color={'white'} />
      </button>
    </div>
  )
}

export default Catalog
