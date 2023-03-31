import React from 'react'
import { DownloadSVG } from '../../../common/svg'

function PriceList() {
  return (
    <>
      <div className="header__pricelist">
        <button className="btn-pricelist">
          Прайс-лист <DownloadSVG width="17" height="17" color="white" />
        </button>
      </div>
      <div className="vline"></div>
    </>
  )
}

export default PriceList
