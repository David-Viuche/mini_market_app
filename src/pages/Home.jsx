import { useSelector } from 'react-redux'
import { useUserActions } from '../hooks/useProductActions'
const Home = () => {
  const products = useSelector(state => state.products.products)
  const selectedProduct = useSelector(state => state.products.selectedProduct)
  const { setSelectedProduct } = useUserActions()

  const handleOnclick = (product) => {
    setSelectedProduct(product)
  }

  return (
    <main className='w-full flex justify-center'>
      <div className='max-w-6xl  px-2 flex gap-4'>
        <section className='sm:w-3/5'>
          <h1 className='text-fuchsia-600 font-bold text-xl border-b mb-4 p-2 border-fuchsia-600' >Store</h1>
          <div className='columns-1 sm:columns-2 md:columns-3 gap-10'>
            {
              !products && 'No products'
            }
            {
              products && products.map(product => (

                <img onClick={() => (handleOnclick(product))} key={product.id} src={product.img} alt={product.name} className='w-full h-auto border-2 max-w-[10rem] sm:max-w-xs mb-10 hover:scale-110' />

              ))
            }
          </div>
        </section>
        <section className='sm:w-2/5'>
          <h1 className='text-fuchsia-600 font-bold text-xl border-b mb-4 p-2 border-fuchsia-600' >Product</h1>
          {
            !selectedProduct && <h2 className='text-gray-400 font-semibold'>Please choose a product in the left.</h2>
          }
          {
            selectedProduct && (
              <div>
                <h2 className='text-gray-400 font-semibold'>{selectedProduct.name}</h2>
                <h3 className='text-gray-400 font-semibold'>{selectedProduct.description}</h3>
                <h3 className='text-gray-400 font-semibold'>{selectedProduct.price}</h3>
              </div>
            )
          }
        </section>
      </div>
    </main>
  )
}

export default Home
