import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../../src/App'
import Layout from '../../src/components/Layout'
import Home from '../../src/pages/Home'
import { render, screen } from '@testing-library/react'

describe('App_function', () => {
  it('test_rendering_with_no_errors', () => {
    render(<App />)
    expect(screen.getByText(/home page/i)).toBeTruthy()
  })

  // Tests that the user can navigate to the home page successfully
  it('test_navigating_to_home_page', () => {
    render(
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    )
    expect(screen.getByText(/home page/i)).toBeTruthy()
  })

  // Tests that the app renders with no children passed to the Layout component
  it('test_rendering_with_no_children_passed_to_layout', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    )
    expect(screen.queryByText(/home page/i)).not.toBeTruthy()
  })

  // Tests that the user is redirected to a 404 page when navigating to a non-existent route
  it('test_navigating_to_non_existent_route', () => {
    render(
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='*' element={<div>404 Page</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    )
    expect(screen.getByText(/404 Page/i)).toBeTruthy()
  })

  // Tests that the header and footer components are rendered
  it('test_header_and_footer_components_rendered', () => {
    render(<Layout />)
    expect(screen.getByText(/header/i)).toBeTruthy()
    expect(screen.getByText(/footer/i)).toBeTruthy()
  })

  // Tests that the Routes component is rendered
  it('test_routes_component_rendered', () => {
    render(
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    )
    expect(screen.getByText(/home page/i)).toBeTruthy()
  })
})