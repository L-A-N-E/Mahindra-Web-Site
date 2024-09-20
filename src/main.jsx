import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom" // Import Dependencie React Router Dom
import GlobalStyle from "./styles/GlobalStyle" // Import Global Style
import './i18n' // Change Language
import App from './App.jsx' // Import App
import Error from "./routes/Error" // Import Error

import Home from "./routes/Home"  // Import Home
import SignUp from './routes/SignUp' // Import SignUp 
import Login from './routes/Login' // Import Login
import AppMobile from './routes/AppMobile' // Import App Mobile
import Pilot from './routes/Pilot.jsx' // Import Pilots

import Races from './routes/Races' // Import Races
import RaceTrack from './routes/RaceTrack.jsx'
import RacesTracks from './routes/RacesTracks.jsx'
import Pilots from './routes/Pilots.jsx'


// Creating Routes
const router = createBrowserRouter ([
  {path: '/', element: <App/>,errorElement: <Error/>,

    children:[
      {path: '/', element: <Home/>}, // Home
      {path: '/sign-up', element: <SignUp/>}, //Sign Up
      {path: '/login', element: <Login/>}, // Login
      {path: '/races', element: <Races/>,}, // Races
      {path: '/race-track', element: <RaceTrack/>,

        children: [
          {path: '/race-track/:slug', element: <RacesTracks/>} // Races Tracks
        ]},

      {path: '/pilots', element: <Pilot/>, 
        
        children: [
          {path: '/pilots/:slug', element: <Pilots/>}
        ]},

      {path: '/app-mobile', element: <AppMobile/>}, // App Mobile
    ]}
])

// Main
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
    <GlobalStyle />
  </StrictMode>,
)