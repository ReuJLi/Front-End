import { useState } from "react"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
  e.preventDefault()
  if (email === "janedoe@byuh.edu" && password === "password123") {
    localStorage.setItem("token", "fake-token-123")
    alert("Logged in!")
  } else {
    alert("Wrong credentials!")
  }
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