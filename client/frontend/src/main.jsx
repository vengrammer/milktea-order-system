import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import routers from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import { UserContextProvider } from './Context/UserContextProvider.jsx'
import { AdminContextProvider } from './Context/AdminContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AdminContextProvider>
    <UserContextProvider>
      <RouterProvider router={routers} />
    </UserContextProvider>
  </AdminContextProvider>
)
