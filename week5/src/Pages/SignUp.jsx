import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "../App.css"

function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [supervisorCode, setSupervisorCode] = useState("")
  const [error, setError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setError("")
    fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, supervisorCode })
    })
      .then(res => res.json().then(data => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        if (ok) {
          navigate("/login")
        } else {
          setError(data.error || "Sign up failed.")
        }
      })
      .catch(() => setError("Network error. Please try again."))
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="page-eyebrow">Get Started</p>
        <h2>Sign Up</h2>

        {error && <div className="error-box">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <label>Name</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your full name"
              required
            />
          </div>
          <div className="field-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="field-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Choose a password"
              required
            />
          </div>
          <div className="field-group">
            <label>Supervisor Code <span className="optional-label">(optional)</span></label>
            <input
              type="password"
              value={supervisorCode}
              onChange={e => setSupervisorCode(e.target.value)}
              placeholder="Enter code if you are a supervisor"
            />
          </div>
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>

        <p className="auth-link">Already have an account? <Link to="/login">Log In</Link></p>
      </div>
    </div>
  )
}

export default SignUp