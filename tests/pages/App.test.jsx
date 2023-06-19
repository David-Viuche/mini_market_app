import { BrowserRouter } from 'react-router-dom'
import App from '../../src/App'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Cart from '../../src/components/Cart'
import SelectecProduct from '../../src/components/SelectecProduct'
import { store } from '../../src/store/store'

describe('App_function', () => {
  it('test_render_app', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('test_render_selectec_product_with_existing_product', () => {
    const mockStore = store
    const store = mockStore({
      products: {
        selectedProduct: {
          id: 1,
          name: 'Product 1',
          description: 'Description 1',
          img: 'img1.png',
          price: 10
        }
      }
    })
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SelectecProduct />
        </BrowserRouter>
      </Provider>
    )
    expect(screen.getByText('Product')).toBeInTheDocument()
  })

  it('test_render_selectec_product_with_non_existing_product', () => {
    const mockStore = store()
    const store = mockStore({
      products: {
        selectedProduct: null
      }
    })
    const { history } = renderWithRouter(
      <Provider store={store}>
        <SelectecProduct />
      </Provider>
    )
    expect(screen.getByText('Please choose a product in the left.')).toBeInTheDocument()
    expect(history.location.pathname).toBe('/')
  })

  it('test_render_cart_with_products', () => {
    const mockStore = store()
    const store = mockStore({
      cart: {
        active: true,
        total: 20,
        products: [
          {
            id: 1,
            name: 'Product 1',
            description: 'Description 1',
            img: 'img1.png',
            price: 10,
            cant: 2
          },
          {
            id: 2,
            name: 'Product 2',
            description: 'Description 2',
            img: 'img2.png',
            price: 5,
            cant: 1
          }
        ]
      }
    })
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    )
    expect(screen.getByText('Shopping Cart')).toBeInTheDocument()
    expect(screen.getByText('Total:')).toBeInTheDocument()
  })
})
