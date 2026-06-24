import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "../App.css"

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setError("")
    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json().then(data => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        if (ok) {
          localStorage.setItem("token", data.token)
          setIsLoggedIn(true)
          navigate("/")
        } else {
          setError(data.error || "Login failed.")
        }
      })
      .catch(() => setError("Network error. Please try again."))
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="page-eyebrow">Welcome Back</p>
        <h2>Login</h2>

        {error && <div className="error-box">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <label>Email</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              type="email"
              required
            />
          </div>
          <div className="field-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Your password"
              required
            />
          </div>
          <button type="submit" className="btn-primary">Log In</button>
        </form>

        <p className="auth-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login