import { getAuth, updateProfile } from "firebase/auth"
import { updateDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../firebase.config"
import { useEffect, useState } from "react"

import styles from "./Details.module.css"

function Details() {
  const auth = getAuth()

  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    skills: "",
    goals: "",
  })

  const fetchData = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid)
    const docSnap = await getDoc(docRef)
    setFormData(docSnap.data())
  }

  useEffect(() => {
    fetchData()
  }, [setFormData])

  const { userName, name, email, skills, goals, timestamp } = formData
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span className={styles.span}>Name</span>
        <span className={styles.span}>Username</span>
        <span className={styles.span}>Email</span>
        <span className={styles.span}>Skills/Occupation</span>
        <span className={styles.span}>Goals</span>
        <span className={styles.span}>Registration Date</span>
      </div>
      <div className={styles.left}>
        <span className={styles.span}>{name}</span>
        <span className={styles.span}>{userName}</span>
        <span className={styles.span}>{email}</span>
        <span className={styles.span}>{skills}</span>
        <span className={styles.span}>{goals}</span>
        <span className={styles.span}>{timestamp}</span>
      </div>
    </div>
  )
}

export default Details
