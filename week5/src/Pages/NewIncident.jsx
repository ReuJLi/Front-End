import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react" 

function NewIncident({addIncident}) {

   const navigate = useNavigate() 
  const [incidentType, setIncidentType] = useState("")
  const [studentName, setStudentName] = useState("")
  const [eventName, setEventName] = useState("")
  const [filedBy, setFiledBy] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
  if (!localStorage.getItem("token")) {
        navigate("/login")
  }
} , [navigate]) 

  function handleSubmit(e) {
    e.preventDefault()
    const newIncident = {
      incidentType,
      studentName,
      eventName,
      filedBy,
      date,
      description
    }
    addIncident(newIncident)
  }

  return (
  <form action=""> 
  <label>Incident Type </label>
  <input value={incidentType} onChange={e => setIncidentType(e.target.value)}/>
  <label>Student Name</label>
  <input value={studentName} onChange={e => setStudentName(e.target.value)}/>
  <label>Event Name</label>
  <input value={eventName} onChange={e => setEventName(e.target.value)}/>
  <label>Filed By</label>
  <input value={filedBy} onChange={e => setFiledBy(e.target.value)}/>
  <label>Date</label>
  <input value={date} onChange={e => setDate(e.target.value)}/>
  <label>Description</label>
  <input value={description} onChange={e => setDescription(e.target.value)}/>
  <button onClick={handleSubmit}>Submit Report</button>
  </form>
  )
}

export default NewIncident