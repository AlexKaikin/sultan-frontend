import React from 'react'
import { SearchSVG } from '../../../common/svg'

function Search() {
  return (
    <div className="header__search search">
      <form action="" className="search__form">
        <input type="text" className="search__input" placeholder="Поиск..." />
        <button className="search__btn">
          <SearchSVG color={'white'} />
        </button>
      </form>
    </div>
  )
}

export default Search
