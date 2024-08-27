// Imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// App Import
import App from './App.jsx'

// Routes Imports
import Error from "./routes/Error";
import Home from "./routes/Home"; 


// Creating Routes
const router = createBrowserRouter ([
  {
    // Primary
    path: '/',
    element: <App/>,
    errorElement: <Error/>,

    // Second
    children:[
      {
        path: '/',
        element: <Home/>
      }
    ]
  }
])

// Main
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
