import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { toast } from "react-toastify"

import styles from "./Register.module.css"

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
    userName: "",
    timestamp: "",
    skills: "",
    goals: "",
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
      toast.error("Bad User Credentials")
    }
  }

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <p>Create an account</p>
          <form onSubmit={onSubmit} className={styles.form}>
            <input
              type="text"
              className={styles.emailInput}
              placeholder="Name"
              id="name"
              value={name}
              onChange={onChange}
            />
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

            <button className={styles.loginBtn}>Register</button>
          </form>
          <div className={styles.actions}>
            <p className={styles.acc}>Already an user?</p>
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </div>
        </main>
      </div>
    </>
  )
}

export default Register
