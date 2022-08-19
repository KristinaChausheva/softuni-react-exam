import { useState } from "react"
import { Link } from "react-router-dom"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { toast } from "react-toastify"

import styles from "./ForgotPass.module.css"

function ForgotPass() {
  const [email, setEmail] = useState("")

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success("Email was sent")
    } catch (error) {
      toast.error("Could not send reset email")
    }
  }

  return (
    <div className={styles.pageContainer}>
      <main className={styles.main}>
        <div>Forgot Password</div>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />

          <button className={styles.resetBtn}>Send Reset Link</button>
        </form>
      </main>
    </div>
  )
}

export default ForgotPass
