import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom" // Import Dependencie React Router Dom
import GlobalStyle from "./styles/GlobalStyle"; // Import Global Style
import './i18n' // Change Language
import App from './App.jsx' // Import App
import Error from "./routes/Error" // Import Error
import Home from "./routes/Home"  // Import Home
import SignUp from './routes/SignUp' // Import SignUp 
import Login from './routes/Login' // Import Login
import Races from './routes/Races.jsx' // Import Races
import Car from './routes/Car.jsx' // Import Car
import AppMobile from './routes/AppMobile.jsx' // Import App Mobile

// Creating Routes
const router = createBrowserRouter ([
  {
    // Primary
    path: '/',
    element: <App/>,
    errorElement: <Error/>,

    // Second
    children:[
      // Page Home
      {
        path: '/',
        element: <Home/>
      },
      // Page Sign Up
      {
        path: '/sign-up',
        element: <SignUp/>
      },
      // Page Login
      {
        path: '/login',
        element: <Login/>
      },
      // Page Races
      {
        path: '/races',
        element: <Races/>
      },
      // Page Car
      {
        path: '/car',
        element: <Car/>
      },
      // Page App Mobile
      {
        path: '/app-mobile',
        element: <AppMobile/>
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
