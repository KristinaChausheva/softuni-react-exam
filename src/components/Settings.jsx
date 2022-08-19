import { useEffect, useState } from "react"
import { getAuth, updateProfile } from "firebase/auth"
import { updateDoc, doc } from "firebase/firestore"
import { db } from "../firebase.config"

import { toast } from "react-toastify"

import styles from "./Settings.module.css"

function Settings() {
  const auth = getAuth()
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    userName: auth.currentUser.displayName,
    name: "",
    email: auth.currentUser.email,
    skills: [],
    goals: [],
    timestamp: auth.currentUser.metadata.creationTime,
  })

  const { userName, name, email, skills, goals, timestamp } = formData

  console.log(auth.currentUser.displayName)

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== userName) {
        await updateProfile(auth.currentUser, {
          displayName: userName,
        })
        console.log("here")
        const userRef = doc(db, "users", auth.currentUser.uid)
        await updateDoc(userRef, { ...formData })
        console.log("here1")
        toast.done()
      }
    } catch (error) {
      toast.error("Could not update profile details")
    }
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  console.log(formData)

  return (
    <div>
      <div className={styles.profileCard}>
        <input
          type="text"
          id="userName"
          placeholder="Username"
          //   disabled={!changeDetails}
          value={userName}
          onChange={onChange}
        />

        <input
          type="text"
          id="name"
          placeholder="name"
          //   disabled={!changeDetails}
          value={name}
          onChange={onChange}
        />

        <input
          type="email"
          id="email"
          placeholder="Email"
          disabled
          value={email}
          onChange={onChange}
        />
        <input
          type="text"
          id="skills"
          placeholder="Skills"
          value={skills}
          onChange={onChange}
        />
        <input
          type="text"
          id="goals"
          placeholder="Goals"
          value={goals}
          onChange={onChange}
        />
      </div>

      <div onClick={onSubmit}>Change settings</div>
    </div>
  )
}

export default Settings
