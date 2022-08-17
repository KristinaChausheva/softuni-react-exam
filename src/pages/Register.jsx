import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"

import { setDoc, doc, serverTimestamp } from "firebase/firestore"

import { db } from "../firebase.config"

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

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user
      updateProfile(auth.currentUser, { displayName: name })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()
      await setDoc(doc(db, "users", user.uid), formDataCopy)

      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="container">
        <header>
          <p>Register!</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
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

            <button>Register</button>
          </form>

          <Link to="/login">Login</Link>
        </main>
      </div>
    </>
  )
}

export default Register
