import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) { 
  console.log("BUTTON CLICKED")   
  e.preventDefault()
  console.log("Sending:", email, password)
  fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({email, password})
  })
    .then(res => res.json().then(data => ({ ok: res.ok, data })))
    .then(({ ok, data }) => {
      if (ok) {
        localStorage.setItem("token", data.token)
        setIsLoggedIn(true)
        navigate("/")
        alert("Logged in!")
      } else {
        alert("Login failed: " + data.error)
      }
    })
}
  return (
    <div>
      <h2>Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSubmit}>Log in</button>
    </div>
  )
}

export default Login