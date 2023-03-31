import { Formik, Form, Field } from 'formik'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { ProductItemType } from '../../../../../@types/products'
import { productAPI } from '../../../../../api/product'
import { navigationSelector } from '../../../../../store/navigation/navigation'
import { createProduct } from '../../../../../store/product/product'
import { useAppDispatch } from '../../../../../store/store'
import Modal from '../../../../common/Modal/Modal'
import { DeleteSVG } from '../../../../common/svg'

function CreateProductForm(props: PropsType){
  const dispatch = useAppDispatch()
  const { navigation } = useSelector(navigationSelector)
  const [imgUrl, setImgUrl] = useState('')
  const imgRef = useRef(null)
  const [categoryActive, setCategoryActive] = useState('Косметика и гигиена')

  async function handleChangeFile(e: any){
    try {
      const formData = new FormData()
      const file = e.target.files[0]
      formData.append('image', file)
      const { data } = await productAPI.uploadProductImg(formData)
      setImgUrl(data.url)
    } catch (err) {
      console.warn(err)
      alert('Ошибка загрузки изображения')
    }
  }

  function uploadImgClick(){
    // @ts-ignore
    if (imgRef.current) imgRef.current.click()
  }

  function removeImageClick(){
    setImgUrl('')
  }

  const categories = [{ id: 2, title: 'Косметика и гигиена' }] //navigation.find((item) => item.url === '/products')?.filter.slice(1)

  function findSubCategory(cat: string) {
    const catalog = navigation.find(
      (item: any) => item.url === '/products'
    )?.filter
    const subCategories = catalog?.find((item) => item.title === cat)?.subtitle
    const array = subCategories?.map((item) => item.title) //['a','b']
    return array
  }

  const subCategoryItems = findSubCategory(categoryActive) || []

  const productId = new Date().getTime()
  const formState: ProductItemType = {
    _id: '',
    id: productId,
    title: '',
    category: categoryActive,
    subCategory: [],
    price: 1,
    quantity: 1,
    sizeType: 'Бутылка',
    maker: '',
    brand: '',
    code: 0,
    size: '',
    text: '',
    imgUrl: '',
    currency: '₸',
  }

  function formSubmit(values: ProductItemType){
    values.imgUrl = imgUrl
    dispatch(createProduct(values))
    props.modaltoggle()
    props.updateComponent()
  }

  return (
    <Modal title="Добавить товар" modaltoggle={props.modaltoggle} full>
      <Formik
        initialValues={formState}
        validate={formValidate}
        onSubmit={formSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form create-product">
            <div className="form__left">
              <h3>Описание</h3>
              <div className="form__field">
                <label>Заголовок</label>
                <Field type="text" name="title" required />
              </div>

              <div className="form__select">
                <label>Категория</label>
                <Field
                  type="text"
                  name="category"
                  as="select"
                  value={categoryActive}
                  onChange={(e: any) => setCategoryActive(e.target.value)}
                >
                  {categories?.map((item) => (
                    <option key={item.id} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </Field>
              </div>

              <div className="form__checks">
                <label className="title">Подкатегория</label>
                {subCategoryItems.length > 0 &&
                  subCategoryItems.map((item) => (
                    <div key={item} className="form__checkbox">
                      <Field
                        id={item}
                        type="checkbox"
                        name="subCategory"
                        value={item}
                      />
                      <label htmlFor={item}>{item}</label>
                    </div>
                  ))}
              </div>

              <div className="form__field">
                <label>Цена, ₸</label>
                <Field type="number" name="price" required />
              </div>

              <div className="form__field">
                <label>Количество</label>
                <Field type="number" name="quantity" required />
              </div>

              <div hidden>
                <Field type="number" name="id" />
                <Field type="text" name="currency" />
              </div>
            </div>
            <div className="form__right">
              <h3>Характеристики</h3>
              <div className="form__field">
                <label>Производитель</label>
                <Field type="text" name="maker" required />
              </div>

              <div className="form__field">
                <label>Бренд</label>
                <Field type="text" name="brand" required />
              </div>

              <div className="form__field">
                <label>Штрихкод</label>
                <Field type="number" name="code" required />
              </div>

              <div className="form__col">
                <div className="form__select">
                  <label>Тип товара</label>
                  <Field type="text" name="sizeType" as="select">
                    <option value="Бутылка">Бутылка</option>
                    <option value="Коробка">Коробка</option>
                  </Field>
                </div>

                <div className="form__field">
                  <label>Размер</label>
                  <Field type="text" name="size" required />
                </div>
              </div>
            </div>

            <div className="form__full">
              <div className="form__field">
                <label>Описание</label>
                <Field type="text" name="text" as="textarea" required />
              </div>
            </div>

            <div className="form__left">
              <h3>Обложка</h3>
              {imgUrl && (
                <div className="img__item">
                  <button onClick={removeImageClick} className="remove">
                    <DeleteSVG />
                  </button>
                  <img
                    src={(process.env.REACT_APP_SERVER_URL || '') + imgUrl}
                    alt="фото"
                  />
                </div>
              )}
              <div onClick={uploadImgClick} className="btn btn-light">
                Загрузить фото
              </div>
              <input
                ref={imgRef}
                type="file"
                name="imgUrl"
                onChange={handleChangeFile}
                hidden
                required
              />
            </div>

            <div className="form__right"></div>

            <div className="form__full">
              <button
                className="form__btn"
                type="submit"
                disabled={isSubmitting}
              >
                Отправить
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default CreateProductForm

const formValidate = (values: ProductItemType) => {
  const errors = {}
  return errors
}

type PropsType = {
  updateComponent: () => void
  modaltoggle: () => void
}
