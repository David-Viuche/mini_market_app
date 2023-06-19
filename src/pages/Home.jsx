import { useSearchParams, useLocation } from 'react-router-dom'
import ListProducts from '../components/ListProducts'
import { useEffect, useState } from 'react'
import { useTransaction } from '../hooks/useTransaction'
import { useCartActions } from '../hooks/useCartActions'
import { Toaster, toast } from 'sonner'
import { useSelector } from 'react-redux'

const Home = ({ children }) => {
  const [params] = useSearchParams()
  const [id, setId] = useState(null)
  const { transaction, setTransaction } = useTransaction(id)
  const { toggleActiveCartAction } = useCartActions()
  const { pathname } = useLocation()
  const activeCart = useSelector(state => state.cart.active)

  useEffect(() => {
    const idTransaccion = params.get('id')
    setId(idTransaccion)

    if (transaction && transaction.data) {
      if (transaction.data.status === 'APPROVED') {
        toast.success('Transaction approved')
      }
      if (transaction.data.status === 'DECLINED') {
        toast.success('Transaction declined')
      }
      if (transaction.data.status === 'ERROR') {
        toast.success('Transaction error')
      }
      setTransaction(null)
    }
  }, [params, setTransaction, transaction])

  useEffect(() => {
    if (activeCart && pathname !== '/cart') {
      toggleActiveCartAction(false)
    }
  }, [activeCart, pathname, toggleActiveCartAction])

  return (
    <main className='w-full flex justify-center'>
      <Toaster position='top-center' />
      <div className='max-w-6xl w-full px-2 flex gap-4'>
        <ListProducts />
        {children}
      </div>
    </main>
  )
}

export default Home
