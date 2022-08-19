import { getAuth, updateProfile } from "firebase/auth"
import { updateDoc, doc } from "firebase/firestore"
import { db } from "../firebase.config"
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

import { toast } from "react-toastify"

import styles from "./Profile.module.css"

import Details from "../components/Details"
import Settings from "../components/Settings"

function Profile() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [changeDetails, setChangeDetails] = useState(false)
  const [showDetails, setShowDetails] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  // console.log(auth.currentUser)
  // console.log(auth.currentUser.metadata.creationTime)

  const { name, email } = formData

  const onLogout = () => {
    auth.signOut()
    navigate("/")
  }

  // const onSubmit = async () => {
  //   try {
  //     if (auth.currentUser.displayName !== name) {
  //       await updateProfile(auth.currentUser, {
  //         displayName: name,
  //       })

  //       const userRef = doc(db, "users", auth.currentUser.uid)
  //       await updateDoc(userRef, { name })
  //     }
  //   } catch (error) {
  //     toast.error("Could not update profile details")
  //   }
  // }

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.id]: e.target.value,
  //   }))
  // }

  const onDetails = (prevState) => {
    if (!showDetails) {
      setShowDetails((prevState) => !prevState)
      setShowSettings((prevState) => !prevState)
    }
  }

  const onSettings = (prevState) => {
    if (!showSettings) {
      setShowSettings((prevState) => !prevState)
      setShowDetails((prevState) => !prevState)
    }
  }

  return (
    <div className={styles.profile}>
      <div className={styles.greet}>Hello, {name}</div>
      <div className={styles.div}></div>
      <div className={styles.btns}>
        <div onClick={onDetails} className={styles.details}>
          My Profile
        </div>
        <div onClick={onSettings} className={styles.settings}>
          Settings
        </div>
        <div onClick={onLogout} className={styles.logout}>
          Logout
        </div>
      </div>
      {showDetails ? <Details /> : null}
      {showSettings ? <Settings /> : null}
    </div>
  )
}

export default Profile
