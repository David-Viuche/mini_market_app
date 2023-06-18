import { useSelector } from 'react-redux'
import { useUserActions } from '../hooks/useProductActions'
const ListProducts = () => {
  const selectedProduct = useSelector(state => state.products.selectedProduct)
  const products = useSelector(state => state.products.products)
  const { setSelectedProduct, resetSelectedProduct } = useUserActions()

  const handleOnclick = (product) => {
    if (selectedProduct && product.id === selectedProduct?.id) {
      return resetSelectedProduct()
    }

    setSelectedProduct(product)
  }

  return (
    <section className='sm:w-3/5'>
      <h1 className='text-fuchsia-600 font-bold text-xl border-b mb-4 p-2 border-fuchsia-600' >Store</h1>
      <div className='columns-1 sm:columns-2 md:columns-3 gap-10'>
        {
          !products && 'No products'
        }
        {
          products && products.map(product => (

            <img onClick={() => (handleOnclick(product))} key={product.id} src={product.img} alt={product.name} className={`w-full h-auto border-2 max-w-[10rem] sm:max-w-xs mb-10 hover:scale-110 ${(product.id === selectedProduct?.id) && 'border-fuchsia-600 shadow-lg shadow-fuchsia-600/40'}`} />

          ))
        }
      </div>
    </section>
  )
}

export default ListProducts
