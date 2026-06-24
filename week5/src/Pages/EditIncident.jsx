import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "../App.css"

function EditIncident() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    worker_initials: "",
    event_name: "",
    incident_type: "",
    incident_type_other: "",
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
      return
    }

    fetch(`http://localhost:3000/api/incidents/${id}`, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then(res => res.json())
      .then(data => {
        const knownTypes = ["Dress and Grooming", "Injury", "Unauthorized Entry", "Physical Altercation", "Property Damage"]
        const isOther = !knownTypes.includes(data.incident_type)
        setFormData({
          worker_initials: data.worker_initials || "",
          event_name: data.event_name || "",
          incident_type: isOther ? "Other" : data.incident_type || "",
          incident_type_other: isOther ? data.incident_type : "",
          description: data.description || "",
          action_taken: data.action_taken || "",
          status: data.status || "open",
          student_name: data.student_name || "",
          student_id: data.student_id || "",
        })
      })
      .catch(() => setError("Could not load incident."))
  }, [id, navigate])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setLoading(true)

    fetch(`http://localhost:3000/api/incidents/${id}`, {
      method: "PUT",
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
          navigate(`/incidents/${id}`)
        } else {
          setError(data.error || "Failed to update incident.")
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
        <h2 className="page-title">Edit Incident</h2>

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
                value={formData.incident_type_other}
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
              required
            />
          </div>

          <div className="field-group">
            <label>Action Taken</label>
            <textarea
              name="action_taken"
              value={formData.action_taken}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="open">Open</option>
              <option value="resolved">Resolved</option>
            </select>
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

          <div className="btn-row">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </button>
            <button type="button" className="btn-secondary" onClick={() => navigate(`/incidents/${id}`)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditIncident