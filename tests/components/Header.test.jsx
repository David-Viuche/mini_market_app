import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../../src/components/Header'

describe('Header_component', () => {
  it('test_header_renders_without_errors', () => {
    render(<Header />)
    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeInTheDocument()

    const imgElement = screen.getByAltText('store icon')
    expect(imgElement).toBeInTheDocument()
  })

  it('test_store_icon_image_is_displayed', () => {
    render(<Header />)
    expect(screen.getByAltText('store icon')).toBeInTheDocument()
  })

  it('test_header_renders_correctly', () => {
    render(<Header />)
    const images = screen.getAllByRole('img')

    expect(images.length).toBe(1)
  })
})
