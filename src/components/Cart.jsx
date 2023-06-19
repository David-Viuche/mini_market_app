import { useSelector } from 'react-redux'
import { formatCurrency } from '../utils/utils'
import { useCartActions } from '../hooks/useCartActions'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const total = useSelector(state => state.cart.total)
  const products = useSelector(state => state.cart.products)

  const { toggleActiveCartAction } = useCartActions()

  useEffect(() => {
    toggleActiveCartAction()
    return () => {
      toggleActiveCartAction()
    }
  }, [toggleActiveCartAction])

  const getCantProductInCart = (id) => {
    const productFound = products.filter(p => p.id === id)
    return (productFound[0]) ? productFound[0].cant : 0
  }

  return (
    <section className={'sm:w-2/5 absolute z-10 top-24 bg-white inset-x-0 sm:block  sm:relative sm:top-0 h-screen'}>
      <h1 className='text-fuchsia-600 font-bold text-xl border-b mb-4 p-2 border-fuchsia-600' >Shopping Cart</h1>
      <div className='sm:block p-2'>
        <div className='w-full p-2 flex flex-col'>
          {
            !products.length && <h2 className='text-gray-400 font-semibold'>Please add products to your shopping cart.</h2>
          }
          {
            products && products.map(p => (
              <div key={p.id} className='flex items-center justify-start gap-10 p-4 border-b'>
                <span className={'text-fuchsia-100 shadow-md bg-fuchsia-600 rounded-3xl py-2 px-4 font-bold text-lg'}>{getCantProductInCart(p.id)}</span>
                <Link to={`/product/${p.id}`} className={'w-1/3 sm:w-1/2 h-auto max-w-[10rem] sm:max-w-[5rem]'}>
                  <img src={p.img} alt={p.name} />
                </Link>
              </div>
            ))
          }
        </div>
        <h2 className='text-fuchsia-600 font-bold text-xl text-end p-2'><span className='text-gray-400 mr-2'>Total:</span>{formatCurrency(total)}</h2>
      </div>
    </section >
  )
}

export default Cart
