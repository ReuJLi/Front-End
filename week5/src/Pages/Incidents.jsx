import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Incidents({ incidents }) {
    const navigate = useNavigate() 

    useEffect(() => {
    if (!localStorage.getItem("token")) {
        navigate("/login")
    }
} , [navigate]) 

  return (
    <div>
      <h2>Incidents Page</h2>
      {incidents.map((incident, index) => (
        <div key={index}>
          <p>{incident.incidentType}</p>
          <p>{incident.studentName}</p>
          <p>{incident.eventName}</p>
          <p>{incident.filedBy}</p>
          <p>{incident.date}</p>
          <p>{incident.description}</p>
        </div>
      ))}
    </div>
  )
}
export default Incidents