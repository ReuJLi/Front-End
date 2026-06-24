import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../App.css"

function NewEvent() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    event_name: "",
    event_type: "",
    location: "",
    start_time: "",
    end_time: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
    }
  }, [navigate])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setLoading(true)

    fetch("http://localhost:3000/api/events", {
      method: "POST",
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
          navigate("/events")
        } else {
          setError(data.error || "Failed to create event.")
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
        <p className="page-eyebrow">Events</p>
        <h2 className="page-title">Create New Event</h2>

        {error && <div className="error-box">{error}</div>}

        <div className="divider" />

        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <label>Event Name</label>
            <input
              name="event_name"
              value={formData.event_name}
              onChange={handleChange}
              placeholder="e.g. Campus Sports Day"
              required
            />
          </div>

          <div className="field-group">
            <label>Event Type</label>
            <input
              name="event_type"
              value={formData.event_type}
              onChange={handleChange}
              placeholder="e.g. Sports, Academic, Social"
              required
            />
          </div>

          <div className="field-group">
            <label>Location</label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Main Gymnasium"
              required
            />
          </div>

          <div className="field-group">
            <label>Start Time</label>
            <input
              type="datetime-local"
              name="start_time"
              value={formData.start_time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label>End Time</label>
            <input
              type="datetime-local"
              name="end_time"
              value={formData.end_time}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Creating Event..." : "Create Event"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewEvent