import { useSelector } from 'react-redux'
import ButtonsAddProduct from './ButtonsAddProduct'
import BasicDataProduct from './BasicDataProduct'

const SelectecProduct = () => {
  const selectedProduct = useSelector(state => state.products.selectedProduct)
  return (
    <section className='sm:w-2/5'>
      <h1 className='text-fuchsia-600 font-bold text-xl border-b mb-4 p-2 border-fuchsia-600' >Product</h1>
      {
        !selectedProduct && <h2 className='text-gray-400 font-semibold'>Please choose a product in the left.</h2>
      }
      {
        selectedProduct && (
          <div className='w-full h-full flex flex-col items-center'>
            <img src={selectedProduct.img} alt={selectedProduct.name} className={'w-1/2 h-auto max-w-[10rem] sm:max-w-xs mb-10'} />
            <div className='flex flex-col lg:flex-row justify-between w-full pb-4 border-b border-fuchsia-600'>
              <BasicDataProduct product={selectedProduct} />
              <ButtonsAddProduct />
            </div>
            <p className='text-gray-400 font-semibold py-4 border-b border-fuchsia-600'>{selectedProduct.description}</p>
          </div>
        )
      }
    </section>
  )
}

export default SelectecProduct
