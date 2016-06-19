import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from 'components/app'
import 'styles/browser.css'

const root = document.getElementById('root')
const Bootstrap = () => (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
)

ReactDOM.render(<Bootstrap />, root)

