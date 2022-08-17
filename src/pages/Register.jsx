import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  })
  const { email, password, name } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  return (
    <>
      <div className="container">
        <header>
          <p>Register!</p>
        </header>
        <main>
          <form>
            <input
              type="text"
              className="nameInput"
              placeholder="Name"
              id="name"
              value={name}
              onChange={onChange}
            />
            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />

            <input
              type="password"
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />

            <Link to="forgot-pass">Fotgot Password</Link>

            <button>Register</button>
          </form>

          <Link to="/login">Login</Link>
        </main>
      </div>
    </>
  )
}

export default Register
