import React, { useRef, useState } from 'react'
import { useAppDispatch } from '../../../../../store/store'
import ArrowBottomSVG from '../../../../common/svg/ArrowBottomSVG/ArrowBottomSVG'
import cn from 'classnames'
import { setSortActive } from '../../../../../store/filter/filter'
import { SortItemType } from '../../../../../@types/navigation'

function Sorting(props: PropsType) {
  const dispatch = useAppDispatch()
  const { items, sortActive } = props
  const sortRef = useRef<HTMLDivElement>(null)
  const [sortShow, setSortShow] = useState<boolean>(false)

  function sortShowChange() {
    if (sortShow) {
      setSortShow(false)
      document.body.removeEventListener('click', bodyClick)
    } else {
      setSortShow(true)
      document.body.addEventListener('click', bodyClick)
    }
  }

  function changeSort(item: string) {
    dispatch(setSortActive(item))
    setSortShow(false)
    document.body.removeEventListener('click', bodyClick)
  }

  function bodyClick(e: MouseEvent) {
    const _e = e as BodyClickType
    const path = _e.path || (e.composedPath && e.composedPath()) // for firefox browser
    if (sortRef.current && !path.includes(sortRef.current)) {
      setSortShow(false)
      document.body.removeEventListener('click', bodyClick)
    }
  }

  const sortTitle =
    items?.filter((item) => item.type === sortActive)[0]?.title || ''

  return (
    <div ref={sortRef} className="product__sort sort">
      Сортировка:{' '}
      <button onClick={sortShowChange}>
        {sortTitle} <ArrowBottomSVG />
      </button>
      <div className={cn('sort__items', { show: sortShow })}>
        {items.length > 0 &&
          items?.map((item) => (
            <button key={item.id} onClick={() => changeSort(item.type)}>
              {item.title}
            </button>
          ))}
      </div>
    </div>
  )
}

export default Sorting

type PropsType = {
  items: SortItemType[]
  sortActive: string
}

type BodyClickType = MouseEvent & { path: Node[] }
