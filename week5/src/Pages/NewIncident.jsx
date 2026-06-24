import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../App.css"

function NewIncident() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    worker_initials: "",
    event_name: "",
    incident_type: "",
    description: "",
    action_taken: "",
    status: "open",
    student_name: "",
    student_id: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
    }
  }, [navigate])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

 function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setLoading(true)

    fetch("http://localhost:3000/api/incidents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        ...formData,
        incident_type: formData.incident_type === "Other"
          ? formData.incident_type_other
          : formData.incident_type
      })
    })
      .then(res => res.json().then(data => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        setLoading(false)
        if (ok) {
          navigate("/")
        } else {
          setError(data.error || "Failed to create incident.")
        }
      })
      .catch(() => {
        setLoading(false)
        setError("Network error. Please try again.")
      })
  }
  return (
    <div className="page">
      <div className="card">
        <p className="page-eyebrow">Incident Report</p>
        <h2 className="page-title">File a New Incident</h2>

        {error && <div className="error-box">{error}</div>}

        <div className="divider" />

        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <label>Worker Initials</label>
            <input
              name="worker_initials"
              value={formData.worker_initials}
              onChange={handleChange}
              placeholder="e.g. R.J.L"
              required
            />
          </div>

          <div className="field-group">
            <label>Event Name</label>
            <input
              name="event_name"
              value={formData.event_name}
              onChange={handleChange}
              placeholder="e.g. Campus Sports Day"
              required
            />
          </div>

         <div className="field-group">
            <label>Incident Type</label>
            <select
              name="incident_type"
              value={formData.incident_type}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Incident Type --</option>
              <option value="Dress and Grooming">Dress and Grooming</option>
              <option value="Injury">Injury</option>
              <option value="Unauthorized Entry">Unauthorized Entry</option>
              <option value="Physical Altercation">Physical Altercation</option>
              <option value="Property Damage">Property Damage</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {formData.incident_type === "Other" && (
            <div className="field-group">
              <label>Please specify</label>
              <input
                name="incident_type_other"
                value={formData.incident_type_other || ""}
                onChange={handleChange}
                placeholder="Describe the incident type..."
                required
              />
            </div>
          )}
          <div className="field-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what happened..."
              required
            />
          </div>

          <div className="field-group">
            <label>Action Taken</label>
            <textarea
              name="action_taken"
              value={formData.action_taken}
              onChange={handleChange}
              placeholder="Describe the action taken..."
              required
            />
          </div>

          <div className="field-group">
            <label>Student Name</label>
            <input
              name="student_name"
              value={formData.student_name}
              onChange={handleChange}
              placeholder="e.g. John Smith"
              required
            />
          </div>

          <div className="field-group">
            <label>Student ID</label>
            <input
              name="student_id"
              value={formData.student_id}
              onChange={handleChange}
              placeholder="e.g. 12345678"
              required
            />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Filing Report..." : "File Incident Report"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewIncident