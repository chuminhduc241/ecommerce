import { useState } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

import './App.css'

import SignInPage from './pages/SignInPage'
import SingUpPage from './pages/SingUpPage'

function App() {
  const [count, setCount] = useState(0)
  let routes = useRoutes([{ path: '/', element: <SingUpPage /> }])
  return routes
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper
