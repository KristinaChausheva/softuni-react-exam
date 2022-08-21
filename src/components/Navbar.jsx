import { useNavigate, useLocation } from "react-router-dom"
import styles from "./Navbar.module.css"
import LoginButton from "./LoginButton"

import { useAuthStatus } from "../hooks/useAuthStatus"
import hamburger from "../assets/hamburger.jpg"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { loggedIn, checkingStatus } = useAuthStatus()

  const onShowNav = () => {
    const ul = document.querySelector("ul")
    if (ul.style.display === "none") {
      ul.style.display = "block"
    } else {
      ul.style.display = "none"
    }

    console.log(ul.style.display)
  }

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

        {!loggedIn ? (
          <LoginButton />
        ) : (
          <li className={styles.li} onClick={() => navigate("/profile")}>
            Profile
          </li>
        )}
      </ul>
      <div className={styles.imgHolder} onClick={onShowNav}>
        <img src={hamburger} className={styles.hamburger} />
      </div>
    </nav>
  )
}

export default Navbar
