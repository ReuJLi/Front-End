import { useState } from "react"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom" 
import Incidents from "./pages/Incidents"
import NewIncident from "./pages/NewIncident"

function App() {
const [incidents, setIncidents] = useState([])

  return (
    <BrowserRouter> 
        <nav> 
          <NavLink to="/">Incidents</NavLink>
          <NavLink to="/new">New Incident</NavLink>
        </nav>
      <Routes>
        <Route path="/" element={<Incidents />} />
        <Route path="/new" element={<NewIncident />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App