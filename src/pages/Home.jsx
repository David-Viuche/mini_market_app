import ListProducts from '../components/ListProducts'
const Home = ({ children }) => {
  return (
    <main className='w-full flex justify-center'>
      <div className='max-w-6xl w-full px-2 flex gap-4'>
        <ListProducts />
        {children}
      </div>
    </main>
  )
}

export default Home
