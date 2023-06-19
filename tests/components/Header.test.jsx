import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../../src/components/Header'
import { Provider } from 'react-redux'
import { store } from '../../src/store/store'
import { MemoryRouter } from 'react-router-dom'

describe('Header_component', () => {
  it('test_header_renders_without_errors', () => {
    render(
      <Provider store={store}>
        <MemoryRouter basename='/'>
          <Header />
        </MemoryRouter>
      </Provider >
    )
    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeInTheDocument()

    const imgElement = screen.getByAltText('store icon')
    expect(imgElement).toBeInTheDocument()
  })

  it('test_store_icon_image_is_displayed', () => {
    render(
      <Provider store={store}>
        <MemoryRouter basename='/'>
          <Header />
        </MemoryRouter>
      </Provider >
    )
    expect(screen.getByAltText('store icon')).toBeInTheDocument()
  })
})
