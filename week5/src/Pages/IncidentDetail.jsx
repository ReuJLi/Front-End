import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

function IncidentDetail() {
  const { id } = useParams()
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

  if (!incident) return <p>Loading incident details...</p>
  return (
    <div>
      <h2>Incident Detail</h2>
      <p>Type: {incident.incident_type}</p>
      <p>Description: {incident.description}</p>
      <p>Action Taken: {incident.action_taken}</p>
      <p>Status: {incident.status}</p>
    </div>
  )
}

export default IncidentDetail