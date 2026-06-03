import { useState } from "react"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom" 
import Incidents from "./pages/Incidents"
import NewIncident from "./pages/NewIncident"

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
        </nav>
      <Routes>
        <Route path="/" element={<Incidents incidents={incidents}/>} />
        <Route path="/new" element={<NewIncident addIncident={addIncident}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App