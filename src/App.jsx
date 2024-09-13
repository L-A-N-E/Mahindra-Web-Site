import { Outlet, useLocation } from "react-router-dom";  // Import Dependencie React Router Dom
import { useState, useEffect  } from "react";
import Nav from "./components/nav/Nav"  // Import Nav
import Footer from "./components/Footer"  // Import Footer
import Loading from './components/Loading'


function App() {

  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Nav/>
      {loading ? (<Loading />) : (<Outlet />)}
      <Footer/>
    </>
  )
}

export default App
