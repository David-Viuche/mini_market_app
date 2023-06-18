const BasicDataProduct = ({ product }) => {
  return (
    <div className='flex items-center justify-center'>
      <h2 className='text-black-400 font-bold text-xl'>{product.name}</h2>
      <span className='text-4xl p-2 text-fuchsia-200'>·</span>
      <h2 className='text-fuchsia-600 font-bold text-xl'>{product?.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</h2>
    </div>
  )
}

export default BasicDataProduct
