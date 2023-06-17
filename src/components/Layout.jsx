import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {
        children
      }

      <footer className='w-full text-center py-14  max-w-6xl'>
        <h2 className='text-gray-400 font-semibold border-fuchsia-600 border-t py-4'>2023</h2>
      </footer>
    </>
  )
}

export default Layout
