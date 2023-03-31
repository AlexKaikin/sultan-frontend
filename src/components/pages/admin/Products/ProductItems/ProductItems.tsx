import React, { useState } from 'react'
import {
  ProductItemType,
  ProductsStateType,
} from '../../../../../@types/products'
import { DeleteSVG, EditSVG } from '../../../../common/svg'
import { DeleteProductForm, UpdateProductForm } from '../crud'

function ProductItems(props: PropsType) {
  const { productItems, status } = props.products
  const [productItem, setProductItem] = useState<ProductItemType | null>(null)
  const [updateProductShow, setUpdateProductShow] = useState<boolean>(false)
  const [deleteProductShow, setDeleteProductShow] = useState<boolean>(false)

  function updateModaltoggle() {
    setUpdateProductShow(!updateProductShow)
  }

  function updateProduct(item: ProductItemType){
    setUpdateProductShow(true)
    setProductItem(item)
  }
  
  function deleteModaltoggle(){
    setDeleteProductShow(!deleteProductShow)
  }

  function deleteProduct(item: ProductItemType){
    setDeleteProductShow(true)
    setProductItem(item)
  }

  if (status === 'error') {
    return (
      <>
        <div className="section__title">Произошла ошибка</div>
        <p>К сожалению, не удалось загрузить товары</p>
      </>
    )
  }
  
  if (status === 'loading') {
    return null
  }

  return (
    <div className="admin__items">
      <div className="admin__item item">
        <div className="item__title">Заголовок</div>
        <div>Кол-во, шт.</div>
        <div>Цена, ₸</div>
        <div></div>
        <div></div>
      </div>
      {productItems?.map((item) => {
        return (
          <div key={item.id} className="admin__item item">
            <div className="item__title">
              {item.title.slice(0, 50)}
              {item.title.length > 50 && '...'}
            </div>
            <div>{item.quantity}</div>
            <div>{item.price}</div>
            <button onClick={() => updateProduct(item)} className="item__edit">
              <EditSVG />
            </button>
            <button
              onClick={() => deleteProduct(item)}
              className="item__delete"
            >
              <DeleteSVG />
            </button>
          </div>
        )
      })}

      {updateProductShow && productItem && (
        <UpdateProductForm
          item={productItem}
          modaltoggle={updateModaltoggle}
          updateComponent={props.updateComponent}
        />
      )}

      {deleteProductShow && productItem && (
        <DeleteProductForm
          id={productItem.id}
          modaltoggle={deleteModaltoggle}
          updateComponent={props.updateComponent}
        />
      )}
    </div>
  )
}

export default ProductItems

type PropsType = {
  products: ProductsStateType
  updateComponent: () => void
}
