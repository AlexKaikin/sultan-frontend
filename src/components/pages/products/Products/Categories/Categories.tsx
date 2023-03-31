import React from 'react'
import cn from 'classnames'
import {
  setSubCategory,
} from '../../../../../store/filter/filter'
import { useAppDispatch } from '../../../../../store/store'
import { ListSVG, PlitkaSVG } from '../../../../common/svg/index'
import Sorting from '../Sorting/Sorting'
import { NavigationItemType } from '../../../../../@types/navigation'
import { setCurrentPage } from '../../../../../store/pagination/pagination'
import { FilterStateType } from '../../../../../@types/filter'

function Categories(props: PropsType) {
  const dispatch = useAppDispatch()
  const { filter, navigation } = props

  function changeCategoryClick(item: string) {
    dispatch(setCurrentPage(1))
    dispatch(setSubCategory(item))
  }

  function getSubCategoriesItems() {
    const findCategory = navigation.find(
      (item) => item.url === '/products'
    )?.filter

    const findSubCategories = findCategory?.find(
      (item) => item.title === filter.category
    )?.subtitle

    return findSubCategories?.map((item) => item.title) || []
  }

  function getSortItems() {
    const items = navigation?.find((item) => item.url === '/products')?.sort
    return items || []
  }

  return (
    <>
      <div className="products__top">
        <div className="products__title">{filter.category}</div>
        <Sorting items={getSortItems()} sortActive={filter.sort} />
        <div className="products__grid grid">
          <button className="grid__item">
            <ListSVG />
          </button>
          <button className="grid__item active">
            <PlitkaSVG />
          </button>
        </div>
        <div className="subcategory__items">
          {getSubCategoriesItems().map((item) => (
            <button
              key={item}
              onClick={() => changeCategoryClick(item)}
              className={cn('subcategory__item', {
                active: item === filter.subCategory,
              })}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Categories

type PropsType = {
  navigation: NavigationItemType[]
  filter: FilterStateType
}
