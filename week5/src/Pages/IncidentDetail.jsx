import { useParams, useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import "../App.css"

function IncidentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [incident, setIncident] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/api/incidents/${id}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => setIncident(data))
      .catch(err => console.error("Error fetching incident:", err))
  }, [id])

  function handleDelete() {
    if (!window.confirm("Are you sure you want to delete this incident?")) return

    fetch(`http://localhost:3000/api/incidents/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json().then(data => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        if (ok) {
          navigate("/")
        } else {
          alert("Delete failed: " + data.error)
        }
      })
      .catch(() => alert("Network error. Please try again."))
  }

  if (!incident) return <p className="loading">Loading incident details...</p>

  return (
    <div className="page">
      <div className="card">
        <p className="page-eyebrow">Incident Report</p>
        <h2 className="page-title">{incident.incident_type}</h2>

        <div className="divider" />

        <div className="field-group">
          <label>Description</label>
          <p>{incident.description}</p>
        </div>

        <div className="field-group">
          <label>Action Taken</label>
          <p>{incident.action_taken}</p>
        </div>

        <div className="field-group">
          <label>Status</label>
          <span className={`badge ${incident.status === "open" ? "badge-open" : "badge-resolved"}`}>
            {incident.status}
          </span>
        </div>

        <div className="btn-row">
          <Link to={`/incidents/${id}/edit`} className="btn-secondary">
            Edit Incident
          </Link>
          <button className="btn-danger" onClick={handleDelete}>
            Delete Incident
          </button>
        </div>
      </div>
    </div>
  )
}

export default IncidentDetail