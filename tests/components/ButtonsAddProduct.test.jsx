import ButtonsAddProduct from '../../src/components/ButtonsAddProduct'
describe('ButtonsAddProduct_function', () => {
  it('test_add_to_cart_button_click', () => {
    const selectedProduct = { id: 1, name: 'Test Product', price: 10, img: 'test.jpg', description: 'Test description' }
    const addProductToCartAction = jest.fn()
    const removeProductToCartAction = jest.fn()
    const wrapper = mount(<ButtonsAddProduct />)
    wrapper.find('button').at(1).simulate('click')
    expect(addProductToCartAction).toHaveBeenCalledWith(selectedProduct)
    expect(removeProductToCartAction).not.toHaveBeenCalled()
  })

  it('test_remove_from_cart_button_click', () => {
    const selectedProduct = { id: 1, name: 'Test Product', price: 10, img: 'test.jpg', description: 'Test description' }
    const addProductToCartAction = jest.fn()
    const removeProductToCartAction = jest.fn()
    const wrapper = mount(<ButtonsAddProduct />)
    wrapper.find('button').at(0).simulate('click')
    expect(removeProductToCartAction).toHaveBeenCalledWith(selectedProduct)
    expect(addProductToCartAction).not.toHaveBeenCalled()
  })

  it('test_buttons_have_correct_text_and_styling', () => {
    const wrapper = mount(<ButtonsAddProduct />)
    const addButton = wrapper.find('button').at(1)
    const removeButton = wrapper.find('button').at(0)
    expect(addButton.text()).toBe('+')
    expect(removeButton.text()).toBe('-')
    expect(addButton.hasClass('bg-fuchsia-600')).toBe(true)
    expect(removeButton.hasClass('bg-gray-300')).toBe(true)
  })

  it('test_buttons_have_correct_hover_effects', () => {
    const wrapper = mount(<ButtonsAddProduct />)
    const addButton = wrapper.find('button').at(1)
    const removeButton = wrapper.find('button').at(0)
    addButton.simulate('mouseenter')
    expect(addButton.hasClass('hover:bg-fuchsia-400')).toBe(true)
    expect(addButton.hasClass('hover:scale-110')).toBe(true)
    removeButton.simulate('mouseenter')
    expect(removeButton.hasClass('hover:bg-gray-200')).toBe(true)
    expect(removeButton.hasClass('hover:scale-110')).toBe(true)
  })
})
