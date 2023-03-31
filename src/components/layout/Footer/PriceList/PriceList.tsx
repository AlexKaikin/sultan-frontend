import React from 'react'

import { DownloadSVG } from '../../../common/svg'
import telegramImg from '../../../../assets/img/messendger/telegram.png'
import waImg from '../../../../assets/img/messendger/wa.png'

function PriceList() {
  return (
    <div className="footer__pricelist pricelist">
      <div className="pricelist__content">
        <div className="footer__title">Скачать прайс-лист:</div>
        <button className="pricelist__download">
          Прайс-лист <DownloadSVG width="18" height="17" color="white" />
        </button>
      </div>
      <div className="footer__messendger">
        <div className="messendger__title">Связь в мессенджерах:</div>
        <div className="messendger__items">
          <img src={waImg} alt="whatsapp icon" className="messendger__item" />
          <img
            src={telegramImg}
            alt="telegram icon"
            className="messendger__item"
          />
        </div>
      </div>
    </div>
  )
}

export default PriceList
