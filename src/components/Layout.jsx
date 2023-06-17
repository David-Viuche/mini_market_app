const Layout = ({ children }) => {
  return (
    <>
      <header className='w-full'>
        Header
      </header>
      <main>

        {
          children
        }

      </main>

      <footer>
        footer
      </footer>
    </>
  )
}

export default Layout
