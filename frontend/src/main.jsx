import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faGlobe, faCaretDown, faXmark } from '@fortawesome/free-solid-svg-icons'

library.add({ faBars, faGlobe, faCaretDown, faXmark })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
