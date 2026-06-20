import { useState } from "react"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom" 
import Incidents from "./pages/Incidents"
import NewIncident from "./pages/NewIncident"
import Login from "./pages/Login" 
import SignUp from "./pages/SignUp" 

function App() {
const [incidents, setIncidents] = useState([])

function addIncident(incident) {
  setIncidents([...incidents, incident])
}

  return (
    <BrowserRouter> 
        <nav> 
          <NavLink to="/">Incidents</NavLink>
          <NavLink to="/new">New Incident</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </nav>
      <Routes>
        <Route path="/" element={<Incidents incidents={incidents}/>} />
        <Route path="/new" element={<NewIncident addIncident={addIncident}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App