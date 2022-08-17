import { useNavigate, useLocation } from "react-router-dom"
import styles from "./Navbar.module.css"
import LoginButton from "./LoginButton"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
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
        <li className={styles.li} onClick={() => navigate("/profile")}>
          Profile
        </li>
      </ul>
      <LoginButton />
    </nav>
  )
}

export default Navbar
