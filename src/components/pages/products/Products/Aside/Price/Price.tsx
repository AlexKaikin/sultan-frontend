import debounce from 'lodash.debounce'
import React, { useMemo, useState } from 'react'
import { setCurrentPage } from '../../../../../../store/pagination/pagination'

import {
  setPriceFromValue,
  setPriceToValue,
} from '../../../../../../store/filter/filter'
import { useAppDispatch } from '../../../../../../store/store'

function Price() {
  const dispatch = useAppDispatch()
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')

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
          value={priceFrom}
          type="text"
          className="price__input"
          placeholder="0"
        />
        <div>-</div>
        <input
          onChange={priceToChange}
          value={priceTo}
          type="text"
          className="price__input"
          placeholder="10000"
        />
      </form>
    </div>
  )
}

export default Price
