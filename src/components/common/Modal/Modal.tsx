import React from 'react'
import './Modal.scss'
import cn from 'classnames'
import CloseSVG from '../svg/CloseSVG/CloseSVG'

function Modal(props: PropsType) {
  return (
    <div className={cn('modal', { full: props.full })}>
      <div className="modal__wrapper">
        <button className="modal__close" onClick={props.modaltoggle}>
          <CloseSVG />
        </button>
        <div className="modal__body">
          {props.title !== '' && (
            <div className="modal__title">{props.title}</div>
          )}
          <div className="modal__content">{props.children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal

type PropsType = {
  title: string
  full?: boolean
  children: any
  modaltoggle: () => void
}
