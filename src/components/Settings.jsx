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
    const { userName, name, skills, goals } = docSnap.data()
    setFormData(docSnap.data())
    console.log(formData)
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
        console.log("here")
      }
      const userRef = doc(db, "users", auth.currentUser.uid)
      await updateDoc(userRef, { userName, name, skills, goals })
      console.log("here1")
      toast.success("Success Notification")
      setIsLoading(false)
    } catch (error) {
      toast.error("Could not update profile details")
      setIsLoading(false)
    }
  }

  console.log(isLoading)

  const onChange = (e) => {
    e.preventDefault()
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  //   console.log(formData)

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
        />
        <input
          type="text"
          id="goals"
          placeholder="Goals"
          value={goals}
          onChange={onChange}
        />
      </div>

      <button onClick={onSubmit} disabled={isLoading}>
        Change settings
      </button>
    </div>
  )
}

export default Settings
