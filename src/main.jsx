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
import Car from './routes/Car' // Import Car
import AppMobile from './routes/AppMobile' // Import App Mobile
import Pilot_1 from './routes/Pilot_1' // Import Pilot 1
import Pilot_2 from './routes/Pilot_2' // Import Pilot 2

import Races from './routes/Races' // Import Races
import RaceTrack from './routes/RaceTrack.jsx'
import Mexico from './routes/RaceTrack/Mexico.jsx'
import Diriyah from './routes/RaceTrack/Diriyah.jsx'
import SaoPaulo from './routes/RaceTrack/SaoPaulo.jsx'
import Tokio from './routes/RaceTrack/Tokio.jsx'
import Misano from './routes/RaceTrack/Misano.jsx'
import Monaco from './routes/RaceTrack/Monaco.jsx'
import Berlim from './routes/RaceTrack/Berlim.jsx'
import Shangai from './routes/RaceTrack/Shangai.jsx'
import Portland from './routes/RaceTrack/Portland.jsx'
import London from './routes/RaceTrack/London.jsx'

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
          {path: '/race-track/autodromo-hermanos-rodriguez', element: <Mexico/>},
          {path: '/race-track/diriyah-street-circuit', element: <Diriyah/>},
          {path: '/race-track/anhembi-sambadrome-circuit', element: <SaoPaulo/>},
          {path: '/race-track/tokio-street-circuit', element: <Tokio/>},
          {path: '/race-track/misano-world-circuit-marco-simoncelli', element: <Misano/>},
          {path: '/race-track/circuito-de-rua-de-monaco', element: <Monaco/>},
          {path: '/race-track/tempelhof-airport-street-circuit', element: <Berlim/>},
          {path: '/race-track/shangai-street-circuit', element: <Shangai/>},
          {path: '/race-track/portland-international-raceway', element: <Portland/>},
          {path: '/race-track/excel-london-street-circuit', element: <London/>}
        ]},

      {path: '/car', element: <Car/>}, // Car
      {path: '/app-mobile', element: <AppMobile/>}, // App Mobile
      {path: '/edoardo-mortara', element: <Pilot_1/>}, // Edoardo Mortara
      {path: '/nicky-de-vries', element: <Pilot_2/>} // Nicky de Vries
    ]}
])

// Main
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
    <GlobalStyle />
  </StrictMode>,
)