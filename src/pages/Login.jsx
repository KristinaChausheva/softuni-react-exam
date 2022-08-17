import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import styles from "./Login.module.css"

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
    <div className="container">
      <main className={styles.main}>
        <p>Welcome Back!</p>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            type="email"
            className={styles.emailInput}
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />

          <input
            type="password"
            className={styles.passwordInput}
            placeholder="Password"
            id="password"
            value={password}
            onChange={onChange}
          />

          <button className={styles.loginBtn}>Login</button>
        </form>
        <div className={styles.actions}>
          <Link to="forgot-pass" className={styles.link}>
            Fotgot Password
          </Link>
          <p className={styles.acc}>Dont have an account?</p>
          <Link to="/register" className={styles.link}>
            Register Now
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Login
