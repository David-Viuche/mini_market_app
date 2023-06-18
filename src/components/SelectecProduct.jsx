import { useSelector } from 'react-redux'
import ButtonsAddProduct from './ButtonsAddProduct'
import BasicDataProduct from './BasicDataProduct'
import Close from './svg/Close'
import { useUserActions } from '../hooks/useProductActions'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import getProducts from '../services/getProducts'

const SelectecProduct = () => {
  const selectedProduct = useSelector(state => state.products.selectedProduct)
  const productsCart = useSelector(state => state.cart.products)
  const { resetSelectedProduct, setSelectedProduct } = useUserActions()

  const { productId } = useParams()
  const navigate = useNavigate()

  const handleOnclick = () => {
    resetSelectedProduct()
  }

  const getCantProductInCart = (id) => {
    const productFound = productsCart.filter(p => p.id === id)
    return (productFound[0]) ? productFound[0].cant : 0
  }

  useEffect(() => {
    if (!selectedProduct && productId) {
      const allProducts = getProducts()
      const productFound = allProducts.filter(p => p.id === Number(productId))

      if (productFound.length > 0) {
        setSelectedProduct(productFound[0])
      } else {
        navigate('/')
      }
    }
  }, [navigate, productId, selectedProduct, setSelectedProduct])

  return (
    <section className={`sm:w-2/5 ${(!selectedProduct) && 'hidden'} absolute z-10 top-24 bg-white inset-x-0 sm:block  sm:relative sm:top-0`}>
      <div className='border-b mb-4 p-2 border-fuchsia-600 flex items-center justify-between'>
        <h1 className='text-fuchsia-600 font-bold text-xl '>Product</h1>
        {
          selectedProduct && <button onClick={() => (handleOnclick())} className='sm:hidden font-bold text-xl text-white hover:scale-110 bg-fuchsia-600 h-full flex items-center justify-center p-2'>
            <Close />
          </button>
        }
      </div>
      {
        !selectedProduct && <h2 className='text-gray-400 font-semibold'>Please choose a product in the left.</h2>
      }
      {
        selectedProduct && (
          <div className='w-full h-full flex flex-col items-center relative'>
            <img src={selectedProduct.img} alt={selectedProduct.name} className={'w-1/2 h-auto max-w-[10rem] sm:max-w-xs mb-10'} />
            <span className={`text-fuchsia-100 shadow-md bg-fuchsia-600 rounded-3xl py-2 px-4 font-bold text-lg absolute top-4 left-4 ${(getCantProductInCart(selectedProduct.id) < 1) && 'hidden'}`}>{getCantProductInCart(selectedProduct.id)}</span>
            <div className='flex flex-col lg:flex-row justify-between w-full pb-4 border-b border-fuchsia-600'>
              <BasicDataProduct product={selectedProduct} />
              <ButtonsAddProduct />
            </div>
            <p className='text-gray-400 font-semibold p-4 border-b border-fuchsia-600'>{selectedProduct.description}</p>
          </div>
        )
      }
    </section>
  )
}

export default SelectecProduct
