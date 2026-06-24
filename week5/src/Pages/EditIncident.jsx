import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "../App.css"

function EditIncident() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [events, setEvents] = useState([])
  const [formData, setFormData] = useState({
    incident_type: "",
    description: "",
    action_taken: "",
    status: "open",
    event_id: "",
    student_id: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
      return
    }

    // Fetch existing incident to pre-fill the form
    fetch(`http://localhost:3000/api/incidents/${id}`, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then(res => res.json())
      .then(data => {
        setFormData({
          incident_type: data.incident_type || "",
          description: data.description || "",
          action_taken: data.action_taken || "",
          status: data.status || "open",
          event_id: data.event_id || "",
          student_id: data.student_id || "",
        })
      })
      .catch(() => setError("Could not load incident."))

    // Fetch events for dropdown
    fetch("http://localhost:3000/api/events", {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(() => setError("Could not load events."))
  }, [id, navigate])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setLoading(true)

    fetch(`http://localhost:3000/api/incidents/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json().then(data => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        setLoading(false)
        if (ok) {
          navigate(`/incidents/${id}`)
        } else {
          setError(data.error || "Failed to update incident.")
        }
      })
      .catch(() => {
        setLoading(false)
        setError("Network error. Please try again.")
      })
  }

  return (
    <div className="page">
      <div className="card">
        <p className="page-eyebrow">Incident Report</p>
        <h2 className="page-title">Edit Incident</h2>

        {error && <div className="error-box">{error}</div>}

        <div className="divider" />

        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <label>Incident Type</label>
            <input
              name="incident_type"
              value={formData.incident_type}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label>Action Taken</label>
            <textarea
              name="action_taken"
              value={formData.action_taken}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="open">Open</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>

          <div className="field-group">
            <label>Event</label>
            <select name="event_id" value={formData.event_id} onChange={handleChange} required>
              <option value="">-- Select an Event --</option>
              {events.map(event => (
                <option key={event._id} value={event._id}>
                  {event.event_name}
                </option>
              ))}
            </select>
          </div>

          <div className="field-group">
            <label>Student ID</label>
            <input
              name="student_id"
              value={formData.student_id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="btn-row">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </button>
            <button type="button" className="btn-secondary" onClick={() => navigate(`/incidents/${id}`)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditIncident