import { useNavigate, useLocation } from "react-router-dom"
import styles from "./Navbar.module.css"
import LoginButton from "./LoginButton"

import { useAuthStatus } from "../hooks/useAuthStatus"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { loggedIn, checkingStatus } = useAuthStatus()

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>ELS</div>
      <ul className={styles.ul}>
        <li className={styles.li} onClick={() => navigate("/")}>
          Home
        </li>
        <li className={styles.li} onClick={() => navigate("/team")}>
          The Team
        </li>
        <li className={styles.li} onClick={() => navigate("/contact")}>
          Contact
        </li>
        <li className={styles.li} onClick={() => navigate("/live-course")}>
          Live Course
        </li>
        <li className={styles.li} onClick={() => navigate("/video-course")}>
          Video Course
        </li>
      </ul>
      {!loggedIn ? (
        <LoginButton />
      ) : (
        <li className={styles.li} onClick={() => navigate("/profile")}>
          Profile
        </li>
      )}
    </nav>
  )
}

export default Navbar
