import styles from "./Footer.module.css"
import { useNavigate } from "react-router-dom"

function Footer() {
  const navigate = useNavigate()
  return (
    <div className={styles.footer}>
      <ul className={styles.topUl}>
        <ul className={styles.bottomUl}>
          <li>Account</li>
          <li onClick={() => navigate("/login")}>Login</li>
          <li onClick={() => navigate("/register")}>Register</li>
          <li onClick={() => navigate("/contact")}>Contact Us</li>
        </ul>
        <ul className={styles.bottomUl}>
          <li>Menu</li>
          <li onClick={() => navigate("/")}>Home</li>
          <li>
            <a href="#courses"> Courses</a>
          </li>
          <li onClick={() => navigate("/")}>Impressum</li>
        </ul>
        <ul className={styles.bottomUl}>
          <li>Courses</li>
          <li onClick={() => navigate("/live-courses")}>Live Courses</li>
          <li onClick={() => navigate("/video-courses")}>Video Courses</li>
        </ul>
      </ul>
    </div>
  )
}

export default Footer
