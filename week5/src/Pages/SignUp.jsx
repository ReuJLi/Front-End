import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState("") 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 function handleSubmit(e) {
  e.preventDefault()
  fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, role: "user" })
  })
    .then(res => res.json().then(data => ({ ok: res.ok, data })))
    .then(({ ok, data }) => {
      if (ok) {
        alert("Sign up successful! Please log in.")
        navigate("/login")
      } else {
        alert("Sign up failed: " + data.error)
      }
    })
}

  return (
    <div>
      <h2>Sign Up</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  )
}

export default SignUp 