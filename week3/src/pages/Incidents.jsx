function Incidents({ incidents }) {
  return (
    <div>
      <h2>Incidents Page</h2>
      {incidents.map((incident, index) => (
        <div key={index}>
          <p>{incident.incidentType}</p>
          <p>{incident.studentName}</p>
        </div>
      ))}
    </div>
  )
}
export default Incidents