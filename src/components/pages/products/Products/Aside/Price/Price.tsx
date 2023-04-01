import debounce from 'lodash.debounce'
import React, { useMemo, useState } from 'react'
import { setCurrentPage } from '../../../../../../store/pagination/pagination'

import {
  setPriceFromValue,
  setPriceToValue,
} from '../../../../../../store/filter/filter'
import { useAppDispatch } from '../../../../../../store/store'
import { FilterStateType } from '../../../../../../@types/filter'

function Price(props: PropsType) {
  const {filter} = props
  const dispatch = useAppDispatch()
  const [priceFrom, setPriceFrom] = useState(filter.priceFrom)
  const [priceTo, setPriceTo] = useState(filter.priceTo)

  const fromeSearchDebounce = useMemo(
    () =>
      debounce((from) => {
        dispatch(setPriceFromValue(from))
        dispatch(setCurrentPage(1))
      }, 3000),
    [dispatch]
  )

  const priceFromChange = (e: any) => {
    setPriceFrom(e.target.value)
    fromeSearchDebounce(e.target.value)
  }

  const toSearchDebounce = useMemo(
    () =>
      debounce((to) => {
        dispatch(setPriceToValue(to))
        dispatch(setCurrentPage(1))
      }, 3000),
    [dispatch]
  )

  const priceToChange = (e: any) => {
    setPriceTo(e.target.value)
    toSearchDebounce(e.target.value)
  }

  return (
    <div className="filter__price price">
      <div className="price__title">
        Цена <span>₸</span>
      </div>
      <form action="" className="price__form">
        <input
          onChange={priceFromChange}
          value={priceFrom === 0 ? '' : priceFrom}
          type="number"
          className="price__input"
          placeholder="0"
        />
        <div>-</div>
        <input
          onChange={priceToChange}
          value={priceTo === 0 ? '' : priceTo}
          type="number"
          className="price__input"
          placeholder="10000"
        />
      </form>
    </div>
  )
}

export default Price

type PropsType = {
  filter: FilterStateType
}