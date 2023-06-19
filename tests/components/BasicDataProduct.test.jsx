import BasicDataProduct from '../../src/components/BasicDataProduct'

describe('BasicDataProduct_function', () => {
  it('test_happy_path_renders_product_name_and_formatted_price', () => {
    const product = { name: 'Product 1', price: 1000 }
    const wrapper = shallow(<BasicDataProduct product={product} />)
    expect(wrapper.find('.text-black-400').text()).toEqual('Product 1')
    expect(wrapper.find('.text-fuchsia-600').text()).toEqual('$1,000.00')
  })

  it('test_edge_case_product_name_is_undefined', () => {
    const product = { price: 1000 }
    const wrapper = shallow(<BasicDataProduct product={product} />)
    expect(wrapper.find('.text-black-400').text()).toEqual('')
    expect(wrapper.find('.text-fuchsia-600').text()).toEqual('$1,000.00')
  })

  it('test_edge_case_product_price_is_undefined', () => {
    const product = { name: 'Product 1' }
    const wrapper = shallow(<BasicDataProduct product={product} />)
    expect(wrapper.find('.text-black-400').text()).toEqual('Product 1')
    expect(wrapper.find('.text-fuchsia-600').text()).toEqual('$NaN')
  })
})
