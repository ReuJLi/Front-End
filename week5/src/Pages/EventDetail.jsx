import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import "../App.css"

function EventDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/api/events/${id}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => setEvent(data))
      .catch(err => console.error("Error fetching event:", err))
  }, [id])

  if (!event) return <p className="loading">Loading event details...</p>

  return (
    <div className="page">
      <div className="card">
        <p className="page-eyebrow">Event Details</p>
        <h2 className="page-title">{event.event_name}</h2>

        <div className="divider" />

        <div className="field-group">
          <label>Event Type</label>
          <p>{event.event_type}</p>
        </div>

        <div className="field-group">
          <label>Location</label>
          <p>{event.location}</p>
        </div>

        <div className="field-group">
          <label>Start Time</label>
          <p>{new Date(event.start_time).toLocaleString()}</p>
        </div>

        <div className="field-group">
          <label>End Time</label>
          <p>{new Date(event.end_time).toLocaleString()}</p>
        </div>

        <div className="btn-row">
          <button className="btn-secondary" onClick={() => navigate("/events")}>
            Back to Events
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventDetail