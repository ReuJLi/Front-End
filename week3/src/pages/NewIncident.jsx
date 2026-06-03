import { useState } from "react"
function NewIncident() {
  const [incidentType, setIncidentType] = useState("")
  const [studentName, setStudentName] = useState("")
  const [eventName, setEventName] = useState("")
  const [filedBy, setFiledBy] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
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
    // Here you would typically send newIncident to your backend or update state in a parent component
    console.log(newIncident)
  }
  return <form action=""> 
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
}
export default NewIncident