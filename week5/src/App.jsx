import { useState } from "react"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom" 
import Incidents from "./pages/Incidents"
import NewIncident from "./pages/NewIncident"
import Login from "./pages/Login" 
import SignUp from "./pages/SignUp" 
import IncidentDetail from "./pages/IncidentDetail"
import EditIncident from "./pages/EditIncident"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"))

  function handleLogout() {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    alert("Logged out!")
  }


  return (
    <BrowserRouter> 
        <nav> 
          {isLoggedIn && (
            <>
          <NavLink to="/">Incidents</NavLink>
          <NavLink to="/new">New Incident</NavLink>
          <button onClick={handleLogout}>Logout</button>
          </> 
          )}
          {!isLoggedIn && (
            <>
           <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          </>
          )}
        </nav>
      <Routes>
        <Route path="/" element={<Incidents/>} />
        <Route path="/new" element={<NewIncident/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/incidents/:id" element={<IncidentDetail />} />
        <Route path="/incidents/:id/edit" element={<EditIncident />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App