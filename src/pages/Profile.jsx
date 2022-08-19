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
  // const [changeDetails, setChangeDetails] = useState(false)
  const [showDetails, setShowDetails] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  // const [formData, setFormData] = useState({
  //   name: auth.currentUser.displayName,
  //   email: auth.currentUser.email,
  //   timestamp: auth.currentUser.metadata.creationTime,
  // })

  // console.log(auth.currentUser)
  // console.log(auth.currentUser.metadata.creationTime)

  const userName = auth.currentUser.displayName

  const onLogout = () => {
    auth.signOut()
    navigate("/")
  }

  const onDetails = () => {
    if (!showDetails) {
      setShowDetails((prevState) => !prevState)
      setShowSettings((prevState) => !prevState)
    }
  }

  const onSettings = () => {
    if (!showSettings) {
      setShowSettings((prevState) => !prevState)
      setShowDetails((prevState) => !prevState)
    }
  }

  return (
    <div className={styles.profile}>
      <div className={styles.greet}>Hello, {userName}</div>
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
