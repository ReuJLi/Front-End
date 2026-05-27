import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Login from './pages/login'
import Events from './pages/events'
import Incidents from './pages/incidents'
import NewIncident from './pages/NewIncident'

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <nav style={{ width: '200px', padding: '1rem' }}>
          <h3>BYUH Events</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/incidents">Incidents</NavLink></li>
            <li><NavLink to="/incidents/new">New Incident</NavLink></li>
          </ul>
        </nav>
        <main style={{ flex: 1, padding: '1rem' }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/events" element={<Events />} />
            <Route path="/incidents" element={<Incidents />} />
            <Route path="/incidents/new" element={<NewIncident />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App