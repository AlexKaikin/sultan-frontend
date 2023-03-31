import React from 'react'
import { setMaker } from '../../../../../../store/filter/filter'
import { setCurrentPage } from '../../../../../../store/pagination/pagination'
import { useAppDispatch } from '../../../../../../store/store'
import { SearchSVG } from '../../../../../common/svg'

function Maker() {
  const dispatch = useAppDispatch()
  const makerItems = ['Procter and Gamble', 'Нэфис', 'Сплат-Косметика']

  function changeMaker(item: string) {
    dispatch(setMaker(item))
    dispatch(setCurrentPage(1))
  }

  return (
    <div className="filter__maker maker">
      <div className="maker__title">Производитель</div>

      <form id="maker__form" className="maker__form">
        <input type="text" className="maker__input" placeholder="Поиск..." />
        <button className="maker__btn">
          <SearchSVG color={'white'} />
        </button>
      </form>

      <div className="maker__items">
        {makerItems.map((item) => (
          <div key={item} className="maker__item">
            <input
              type="checkbox"
              form="maker__form"
              id={item}
              onClick={() => changeMaker(item)}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
        {/* <div className="maker__more">
          Показать все <ArrowBottomSVG />
        </div> */}
      </div>
    </div>
  )
}

export default Maker
