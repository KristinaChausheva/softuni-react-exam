import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Profile() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const onLogout = () => {
    auth.signOut()
    navigate("/")
  }

  return (
    <div className="profile">
      <p>My Profile</p>
      <button onClick={onLogout}>logout</button>
    </div>
  )
}

export default Profile
