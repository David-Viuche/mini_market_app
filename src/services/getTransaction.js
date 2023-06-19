export const getTransaction = async (id) => {
  const url = `https://sandbox.wompi.co/v1/transactions/${id}`

  const resp = await fetch(url)

  const data = await resp.json()

  return data
}
