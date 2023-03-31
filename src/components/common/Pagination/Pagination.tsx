import React from 'react'
import cn from 'classnames'

import './Pagination.scss'
import { ArrowLeft, ArrowRight } from '../svg/index'
import { PaginationStateType } from '../../../@types/pagination'
import { setCurrentPage } from '../../../store/pagination/pagination'
import { useAppDispatch } from '../../../store/store'

function Pagination(props: PropsType) {
  const dispatch = useAppDispatch()
  const { pagination } = props
  const { pagesCount, currentPage } = pagination
  const pages: number[] = createPages(pagesCount, currentPage) // массив страниц
  const prevPage = currentPage > 1 ? currentPage - 1 : 1
  const nextPage = currentPage < pages.length ? currentPage + 1 : pages.length

  function changePage(number: number) {
    dispatch(setCurrentPage(number))
  }

  function createPages(pagesCount: number, currentPage: number) {
    const pages = []
    if (pagesCount > 5) {
      if (currentPage > 4) {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i)
          if (i === pagesCount) break
        }
      } else {
        for (let i = 1; i <= 5; i++) {
          pages.push(i)
          if (i === pagesCount) break
        }
      }
    } else {
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
      }
    }

    return pages
  }

  if (pages.length < 2) return null // если 1 страница то не показываем пагинацию

  return (
    <div className="pagination">
      <button onClick={() => changePage(prevPage)} className="page prev">
        <ArrowLeft />
      </button>
      {pages?.map((page) => (
        <button
          key={page}
          onClick={() => currentPage !== page && changePage(page)}
          className={cn('page', { active: currentPage === page })}
        >
          {page}
        </button>
      ))}
      <button onClick={() => changePage(nextPage)} className="page next">
        <ArrowRight />
      </button>
    </div>
  )
}

export default Pagination

type PropsType = {
  pagination: PaginationStateType
}
