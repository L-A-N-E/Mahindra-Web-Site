// Importando Dependencias
import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 
import { createBrowserRouter, RouterProvider } from "react-router-dom" 
import './i18n' 

// Importando Rotas
import App from './App.jsx' 
import Error from "./routes/Error" 
import Home from "./routes/Home" 
import SignUp from './routes/SignUp' 
import Login from './routes/Login' 
import AppMobile from './routes/AppMobile' 
import Pilot from './routes/Pilot.jsx' 
import Races from './routes/Races' 
import RaceTrack from './routes/RaceTrack.jsx' 
import RacesTracks from './routes/RacesTracks.jsx' 
import Pilots from './routes/Pilots.jsx'

// Importando GlobalStyle
import GlobalStyle from "./styles/GlobalStyle" 

// Criando Rotas
const router = createBrowserRouter ([
  {path: '/', element: <App/>, errorElement: <Error/>,

    children:[
      {path: '/', element: <Home/>}, 
      {path: '/sign-up', element: <SignUp/>}, 
      {path: '/login', element: <Login/>}, 
      {path: '/races', element: <Races/>,}, 

      {path: '/race-track', element: <RaceTrack/>,
        children: [
          {path: '/race-track/:slug', element: <RacesTracks/>} 
        ]},

      {path: '/pilots', element: <Pilot/>, 
        children: [
          {path: '/pilots/:slug', element: <Pilots/>} 
        ]},

      {path: '/app-mobile', element: <AppMobile/>}, 
    ]}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
    <GlobalStyle />
  </StrictMode>,
)