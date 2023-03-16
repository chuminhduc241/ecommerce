import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutDashboard from './layout/LayoutDashboard'
import StartProductPage from './pagesAdmin/StartProductPage'

const SingUpPage = lazy(() => import('./pages/SignUpPage'))
const SignInPage = lazy(() => import('./pages/SignInPage'))
function App() {
  const router = createBrowserRouter([
    { path: '/', element: <SingUpPage /> },
    {
      path: '/sign-in',
      element: <SignInPage />
    },
    {
      path: '/register',
      element: <SingUpPage />
    },
    {
      path: '/admin/',
      element: <LayoutDashboard />,
      children: [
        {
          path: 'create-product',
          element: <StartProductPage />
        }
      ]
    }
  ])

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
