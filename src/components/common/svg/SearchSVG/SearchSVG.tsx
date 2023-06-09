import React from 'react'

function SearchSVG(props: PropsType) {
  const { color } = props
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5294 16.5294L13.0989 13.0928L16.5294 16.5294ZM15 8.5C15 10.2239 14.3152 11.8772 13.0962 13.0962C11.8772 14.3152 10.2239 15 8.5 15C6.77609 15 5.12279 14.3152 3.90381 13.0962C2.68482 11.8772 2 10.2239 2 8.5C2 6.77609 2.68482 5.12279 3.90381 3.90381C5.12279 2.68482 6.77609 2 8.5 2C10.2239 2 11.8772 2.68482 13.0962 3.90381C14.3152 5.12279 15 6.77609 15 8.5V8.5Z"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default SearchSVG

type PropsType = {
  color: string
}