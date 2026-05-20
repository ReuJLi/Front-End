function IncidentCard({ incidentType, studentName, eventName, filedBy, date, description }) {
  return (
    <div>
      <h2>Incident Report</h2>
      <p><strong>Type:</strong> {incidentType}</p>
      <p><strong>Student:</strong> {studentName}</p>
      <p><strong>Event:</strong> {eventName}</p>
      <p><strong>Filed by:</strong> {filedBy}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  )
}

export default IncidentCard