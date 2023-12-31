import { useEffect } from 'react'

function WidgetPayment(props) {
  const { total } = props

  useEffect(() => {
    const form = document.querySelector('#form')
    const url = window.location
    if (form && total > 0) {
      const script = document.createElement('script')
      const attributes = {
        type: 'text/javascript',
        src: 'https://checkout.wompi.co/widget.js',
        class: 'current',
        'data-render': 'button',
        'data-redirect-url': url.origin,
        'data-public-key': 'pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf',
        'data-currency': 'COP',
        'data-amount-in-cents': `${total}00`,
        'data-reference': `TESTPRUEBA${Math.floor(Math.random() * 100000)}`
      }
      Object.keys(attributes).forEach((key) => {
        script.setAttribute(key, attributes[key])
      })
      form.appendChild(script)
    }
  }, [total])

  return <form id='form'></form>
}

export default WidgetPayment
