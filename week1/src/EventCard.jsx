function EventCard({ eventName, eventType, date, location, organizer, description }) {
  return (
    <div>
      <h2>{eventName}</h2>
      <p><strong>Type:</strong> {eventType}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Organizer:</strong> {organizer}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  )
}

export default EventCard