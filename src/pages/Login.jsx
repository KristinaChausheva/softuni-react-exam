import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { async } from "@firebase/util"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      if (userCredential.user) {
        navigate("/")
      }
    } catch (error) {
      console.log(error)
      toast.error("Bad User Credentials")
    }
  }

  return (
    <>
      <div className="container">
        <header>
          <p>Welcome Back!</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
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

            <button>Login</button>
          </form>

          <Link to="/register">Register</Link>
        </main>
      </div>
    </>
  )
}

export default Login
