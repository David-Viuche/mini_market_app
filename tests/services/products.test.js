import getProducts from '../../src/services/getProducts'

describe('products_function', () => {
  it('test_returns_array_with_correct_properties', () => {
    const products = getProducts()
    expect(products).toEqual(expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        price: expect.any(Number),
        img: expect.any(String),
        descripcion: expect.any(String)
      })
    ]))
  })

  it('test_returns_array_with_at_least_one_product', () => {
    const products = getProducts()
    expect(products.length).toBeGreaterThan(0)
  })
})
