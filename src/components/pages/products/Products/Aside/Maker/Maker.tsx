import React, { useState } from 'react'
import { FilterStateType } from '../../../../../../@types/filter'
import { setMaker } from '../../../../../../store/filter/filter'
import { setCurrentPage } from '../../../../../../store/pagination/pagination'
import { useAppDispatch } from '../../../../../../store/store'
import { SearchSVG } from '../../../../../common/svg'

function Maker(props: PropsType) {
  const { filter } = props
  const dispatch = useAppDispatch()
  const makers = ['Procter and Gamble', 'Нэфис', 'Сплат-Косметика']
  const [makerItems, setMakerItems] = useState(makers)
  const [makerInput, setMakerInput] = useState('')

  function changeMaker(item: string) {
    dispatch(setMaker(item))
    dispatch(setCurrentPage(1))
  }

  function searchMakerClick(e: any) {
    e.preventDefault()
    console.log(makerInput)
    if (makerInput.length > 0) {
      const list = makers.filter(
        (item) => item.toLowerCase() === makerInput.toLowerCase()
      )
      setMakerItems(list)
    } else if (makerInput === '') {
      setMakerItems(makers)
    }
  }

  function changeMakerInput(e: any) {
    setMakerInput(e.target.value)
  }

  function checkActive(item: string) {
    return filter.maker.find((el) => el === item)
  }

  function clearInput() {
    setMakerItems(makers)
    setMakerInput('')
  }

  return (
    <div className="filter__maker maker">
      <div className="maker__title">Производитель</div>

      <form onSubmit={searchMakerClick} id="maker__form" className="maker__form">
        <input
          onChange={(e) => changeMakerInput(e)}
          value={makerInput}
          type="text"
          className="maker__input"
          placeholder="Поиск..."
        />
        <button
          type="button"
          className="maker__btn"
          onClick={(e) => searchMakerClick(e)}
        >
          <SearchSVG color={'white'} />
        </button>
      </form>

      <div className="maker__items">
        {makerItems.length > 0 ? (
          makerItems.map((item) => (
            <div key={item} className="maker__item">
              <input
                type="checkbox"
                form="maker__form"
                id={item}
                onClick={() => changeMaker(item)}
                checked={item === checkActive(item)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))
        ) : (
          <div>
            Совпадений не найдно{' '}
            <button onClick={clearInput}>Сбросить</button>
          </div>
        )}
        {/* <div className="maker__more">
          Показать все <ArrowBottomSVG />
        </div> */}
      </div>
    </div>
  )
}

export default Maker

type PropsType = {
  filter: FilterStateType
}
