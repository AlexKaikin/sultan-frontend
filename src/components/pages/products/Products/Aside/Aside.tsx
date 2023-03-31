import React, { useState } from 'react'
import cn from 'classnames'

import { ArrowLeftSVG } from '../../../../common/svg/index'
import { Price, Maker, SubCategory } from './index'
import './Aside.scss'
import { NavigationItemType } from '../../../../../@types/navigation'
import { FilterStateType } from '../../../../../@types/filter'

function Aside(props: PropsType) {
  const { navigation, filter } = props
  const [filterShow, setFilterShow] = useState(false)

  function filterClick() {
    setFilterShow(!filterShow)
  }

  return (
    <aside className="aside">
      <div className="filter">
        <div onClick={filterClick} className="filter__title title">
          Подбор по параметрам
          <div className={cn('title__icon', { up: filterShow })}>
            <ArrowLeftSVG />
          </div>
        </div>
        <div className={cn('filter__params', { show: filterShow })}>
          <Price />
          <Maker />
          <SubCategory navigation={navigation} filter={filter} />
        </div>
      </div>
    </aside>
  )
}

export default Aside

type PropsType = {
  navigation: NavigationItemType[]
  filter: FilterStateType
}
