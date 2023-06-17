import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CartButton from '../../src/components/CartButton'

describe('CartButton_function', () => {
  // Tests that the button renders with correct background and text color
  it('test_button_renders_correctly', () => {
    render(<CartButton active={false} />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-fuchsia-600 text-fuchsia-100')
  })

  it('test_button_renders_correctly_is_false', () => {
    render(<CartButton active={true} />)
    const button = screen.getAllByRole('button')
    expect(button[0]).toHaveClass('bg-fuchsia-100 text-fuchsia-600')
  })

  // Tests that the price displays as $0
  it('test_price_displays_as_zero', () => {
    render(<CartButton active={false} />)
    const price = screen.getByText('$0')
    expect(price).toBeTruthy()
  })

  // Tests that the button behaves correctly when active prop is false
  it('test_active_prop_is_false', () => {
    render(<CartButton active={false} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons[1]).toBeFalsy()
  })

  // Tests that the button behaves correctly when active prop is true
  it('test_active_prop_is_true', () => {
    render(<CartButton active={true} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons[1]).toBeTruthy()
  })

  // Tests that the button behaves correctly when active prop is not provided
  it('test_active_prop_not_provided', () => {
    render(<CartButton />)
    const buttons = screen.getAllByRole('button')
    expect(buttons[1]).toBeFalsy()
  })
})
