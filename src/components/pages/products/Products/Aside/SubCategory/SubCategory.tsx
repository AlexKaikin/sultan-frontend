import React from 'react'
import cn from 'classnames'
import { useAppDispatch } from '../../../../../../store/store'
import { setCurrentPage } from '../../../../../../store/pagination/pagination'
import { setSubCategory } from '../../../../../../store/filter/filter'
import { NavigationItemType } from '../../../../../../@types/navigation'
import { FilterStateType } from '../../../../../../@types/filter'

function SubCategory(props: PropsType) {
  const { navigation, filter } = props
  const dispatch = useAppDispatch()

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

  return (
    <div className="filter__subcategory subcategory">
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
  )
}

export default SubCategory

type PropsType = {
  navigation: NavigationItemType[]
  filter: FilterStateType
}
