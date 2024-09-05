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
import Races from './routes/Races' // Import Races
import Car from './routes/Car' // Import Car
import AppMobile from './routes/AppMobile' // Import App Mobile
import Pilot_1 from './routes/Pilot_1' // Import Pilot 1
import Pilot_2 from './routes/Pilot_2' // Import Pilot 2

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
      },
      // Page Pilot Edoardo Mortara
      {
        path: '/edoardo-mortara',
        element: <Pilot_1/>
      },
      // Page Pilot Nick De Vries
      {
        path: '/nicky-de-vries',
        element: <Pilot_2/>
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
