import ListProducts from '../components/ListProducts'
import SelectecProduct from '../components/SelectecProduct'
const Home = () => {
  return (
    <main className='w-full flex justify-center'>
      <div className='max-w-6xl  px-2 flex gap-4'>
        <ListProducts />
        <SelectecProduct />
      </div>
    </main>
  )
}

export default Home
