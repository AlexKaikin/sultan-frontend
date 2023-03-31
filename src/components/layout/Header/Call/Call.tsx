import React from 'react'

import girlImg from '../../../../assets/img/girl.png'

function Call() {
  return (
    <>
      <div className="header__call call">
        <div className="call__left">
          <div className="call__phone">+7 (777) 490-00-91</div>
          <div className="call__time">время работы: 9:00-20:00</div>
          <button className="call__btn">Заказать звонок</button>
        </div>
        <div className="call__right">
          <img src={girlImg} alt="Оператор" />
        </div>
      </div>
      <div className="vline"></div>
    </>
  )
}

export default Call
