import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom" // Import Dependencie React Router Dom
import App from './App.jsx' // Import App
import Error from "./routes/Error"; // Import Error
import Home from "./routes/Home";  // Import Home
import SignUp from './routes/SignUp'; // Import SignUp 
import Login from './routes/Login'; // Import Login
import GlobalStyle from "./styles/GlobalStyle"; // Import Global Style
import './i18n'; // Change Language

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
