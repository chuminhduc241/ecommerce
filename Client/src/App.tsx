import { useState } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

import './App.css'
import Hello from './components/Hello/Hello'
import SignInPage from './pages/SignInPage'

function App() {
  const [count, setCount] = useState(0)
  let routes = useRoutes([{ path: '/', element: <SignInPage /> }])
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
