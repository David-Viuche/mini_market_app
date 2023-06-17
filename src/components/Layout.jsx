import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
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
