import { useEffect, useState } from "react"
import { getAuth, updateProfile } from "firebase/auth"
import { updateDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../firebase.config"

import { toast } from "react-toastify"

import styles from "./Settings.module.css"

function Settings() {
  const auth = getAuth()

  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    skills: "",
    goals: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid)
    const docSnap = await getDoc(docRef)
    // const { userName, name, skills, goals } = docSnap.data()
    setFormData(docSnap.data())
  }

  useEffect(() => {
    fetchData()
  }, [setFormData])

  const { userName, name, skills, goals } = formData

  //   console.log(auth.currentUser.displayName)

  const onSubmit = async () => {
    setIsLoading(true)
    try {
      if (auth.currentUser.displayName !== userName) {
        await updateProfile(auth.currentUser, {
          displayName: userName,
        })
      }
      const userRef = doc(db, "users", auth.currentUser.uid)
      await updateDoc(userRef, { userName, name, skills, goals })

      toast.success("Success Notification")
      setIsLoading(false)
    } catch (error) {
      toast.error("Could not update profile details")
      setIsLoading(false)
    }
  }

  const onChange = (e) => {
    e.preventDefault()
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  //   console.log(formData)

  return (
    <div className={styles.profileCard}>
      <input
        type="text"
        id="userName"
        placeholder="Username"
        //   disabled={!changeDetails}
        value={userName}
        onChange={onChange}
        className={styles.input}
      />

      <input
        type="text"
        id="name"
        placeholder="name"
        //   disabled={!changeDetails}
        value={name}
        onChange={onChange}
        className={styles.input}
      />

      {/* <input
          type="email"
          id="email"
          placeholder="Email"
          disabled
          value={email}
          onChange={onChange}
        /> */}
      <input
        type="text"
        id="skills"
        placeholder="Skills"
        value={skills}
        onChange={onChange}
        className={styles.input}
      />
      <input
        type="text"
        id="goals"
        placeholder="Goals"
        value={goals}
        onChange={onChange}
        className={styles.input}
      />

      <button
        onClick={onSubmit}
        disabled={isLoading}
        className={styles.loginBtn}
      >
        Change settings
      </button>
    </div>
  )
}

export default Settings
