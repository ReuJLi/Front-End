import { useNavigate, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "../App.css"

function Incidents() {
  const navigate = useNavigate()
  const [incidents, setIncidents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
      return
    }
    fetch("http://localhost:3000/api/incidents", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setIncidents(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error fetching incidents:", err)
        setLoading(false)
      })
  }, [navigate])

  if (loading) return <p className="loading">Loading incidents...</p>

  return (
    <div className="page">
      <p className="page-eyebrow">All Incidents</p>
      <h2 className="page-title">Incidents</h2>

      {incidents.length === 0 ? (
        <div className="card">
          <p className="empty-message">No incidents yet. File one!</p>
        </div>
      ) : (
        <div className="incident-list">
          {incidents.map(incident => (
            <Link to={`/incidents/${incident._id}`} key={incident._id} className="incident-card">
              <h3>{incident.incident_type}</h3>
              <p>Event: {incident.event_name}</p>
              <p>Student: {incident.student_name}</p>
              <p>Filed by: {incident.worker_initials}</p>
              <span className={`badge ${incident.status === "open" ? "badge-open" : "badge-resolved"}`}>
                {incident.status}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Incidents