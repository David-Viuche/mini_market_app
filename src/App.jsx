import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import SelectecProduct from './components/SelectecProduct'
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Home>
          <Routes>
            <Route path='/product/:productId' element={<SelectecProduct />} />
            <Route path='/' element={<SelectecProduct />} />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </Home>
      </Layout>
    </BrowserRouter>
  )
}

export default App
