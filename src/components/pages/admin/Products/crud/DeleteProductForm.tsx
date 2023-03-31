import React from 'react'
import { deleteProduct } from '../../../../../store/product/product'
import { useAppDispatch } from '../../../../../store/store'
import Modal from '../../../../common/Modal/Modal'

function DeleteProductForm(props: PropsType){
  const dispatch = useAppDispatch()

  const deleteClick = () => {
    dispatch(deleteProduct(props.id))
    props.updateComponent()
    props.modaltoggle()
  }

  return (
    <Modal title="Удалить товар" modaltoggle={props.modaltoggle}>
      <p>Вы действительно хотите удалить товар?</p>
      <div className="button-wrapper">
        <button className="btn btn-warning" onClick={deleteClick}>
          Удалить
        </button>
        <button className="btn btn-light" onClick={props.modaltoggle}>
          Отмена
        </button>
      </div>
    </Modal>
  )
}

export default DeleteProductForm

type PropsType = {
  id: number
  modaltoggle: () => void
  updateComponent: () => void
}
