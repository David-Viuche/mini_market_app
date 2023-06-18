import { useSelector } from 'react-redux'
import { useUserActions } from '../hooks/useProductActions'
import { Link } from 'react-router-dom'

const ListProducts = () => {
  const selectedProduct = useSelector(state => state.products.selectedProduct)
  const products = useSelector(state => state.products.products)
  const productsCart = useSelector(state => state.cart.products)
  const { setSelectedProduct, resetSelectedProduct } = useUserActions()

  const handleOnclick = (product) => {
    if (selectedProduct && product.id === selectedProduct?.id) {
      return resetSelectedProduct()
    }

    setSelectedProduct(product)
  }

  const getCantProductInCart = (id) => {
    const productFound = productsCart.filter(p => p.id === id)
    return (productFound[0]) ? productFound[0].cant : 0
  }

  return (
    <section className={`sm:w-3/5 ${(selectedProduct) && 'hidden'} sm:block w-full`}>
      <h1 className='text-fuchsia-600 font-bold text-xl border-b mb-4 p-2 border-fuchsia-600' >Store</h1>
      <div className='columns-1 sm:columns-2 md:columns-3 gap-10 grid place-items-center sm:block'>
        {
          !products && 'No products'
        }
        {
          products && products.map(product => (

            <div key={product.id} className={`w-full h-auto max-w-[10rem] sm:max-w-xs mb-10 relative border-2 hover:scale-110 hover:cursor-pointer ${(product.id === selectedProduct?.id) && 'border-fuchsia-600 shadow-lg shadow-fuchsia-600/40'}`}>
              <Link to={`/product/${product.id}`} onClick={() => (handleOnclick(product))}>
                <img src={product.img} alt={product.name} className={'w-full h-full'} />

                <span className={`text-fuchsia-100 shadow-md bg-fuchsia-600 rounded-3xl py-2 px-4 font-bold text-lg absolute top-4 left-4 ${(getCantProductInCart(product.id) < 1) && 'hidden'}`}>{getCantProductInCart(product.id)}</span>
              </Link>
            </div>

          ))
        }
      </div>
    </section >
  )
}

export default ListProducts
