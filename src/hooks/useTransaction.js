import { useEffect, useState } from 'react'
import { getTransaction } from '../services/getTransaction'

export const useTransaction = (id) => {
  const [transaction, setTransaction] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await getTransaction(id)
        setTransaction(data)
        setisLoading(false)
      }
    }
    fetchData()
  }, [id])

  return {
    transaction,
    isLoading,
    setTransaction
  }
}
