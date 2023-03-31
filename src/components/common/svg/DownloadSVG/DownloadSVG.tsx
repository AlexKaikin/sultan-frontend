import React from 'react'

function DownloadSVG(props: PropsType) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.958 6.375H11.1247V2.125H6.87467V6.375H4.04134L8.99967 12.0417L13.958 6.375ZM3.33301 13.4583H14.6663V14.875H3.33301V13.4583Z"
        fill={props.color}
      />
    </svg>
  )
}

export default DownloadSVG

type PropsType = {
  width: string
  height: string
  color: string
}
