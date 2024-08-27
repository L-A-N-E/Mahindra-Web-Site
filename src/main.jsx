import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom" // Import Dependencie React Router Dom
import App from './App.jsx' // Import App
import Error from "./routes/Error"; // Import Error
import Home from "./routes/Home";  // Import Home
import GlobalStyle from "./styles/GlobalStyle"; // Import Global Style


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
    <GlobalStyle />
  </StrictMode>,
)
