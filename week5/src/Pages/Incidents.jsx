import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

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

  if (loading) return <p>Loading incidents...</p>
  return (
    <div>
      <h2>Incidents Page</h2>
      {incidents.map((incident, index) => (
        <div key={index}>
          <p>{incident.incident_type}</p>
          <p>{incident.description}</p>
          <p>{incident.action_taken}</p>
          <p>{incident.status}</p>
        </div>
      ))}
    </div>
  )
}

export default Incidents