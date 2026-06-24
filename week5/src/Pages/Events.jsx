import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../App.css"

function Events() {
  const navigate = useNavigate()
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
      return
    }
    fetch("http://localhost:3000/api/events", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setEvents(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error fetching events:", err)
        setLoading(false)
      })
  }, [navigate])

  if (loading) return <p className="loading">Loading events...</p>

  return (
    <div className="page">
      <div className="page-header-row">
        <div>
          <p className="page-eyebrow">All Events</p>
          <h2 className="page-title">Events</h2>
        </div>
        <Link to="/events/new" className="btn-primary-small">
          + New Event
        </Link>
      </div>

      {events.length === 0 ? (
        <div className="card">
          <p className="empty-message">No events yet. Create one!</p>
        </div>
      ) : (
        <div className="incident-list">
          {events.map(event => (
            <Link to={`/events/${event._id}`} key={event._id} className="incident-card">
              <h3>{event.event_name}</h3>
              <p>Type: {event.event_type}</p>
              <p>Location: {event.location}</p>
              <p>Start: {new Date(event.start_time).toLocaleDateString()}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Events