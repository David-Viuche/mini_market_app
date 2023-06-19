import { useSearchParams } from 'react-router-dom'
import ListProducts from '../components/ListProducts'
import { useEffect, useState } from 'react'
import { useTransaction } from '../hooks/useTransaction'
import { Toaster, toast } from 'sonner'
const Home = ({ children }) => {
  const [params] = useSearchParams()
  const [id, setId] = useState(null)
  const { transaction } = useTransaction(id)

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
    }
  }, [params, transaction])

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
