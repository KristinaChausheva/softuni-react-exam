import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.topUl}>
        <ul className={styles.bottomUl}>
          <li>Account</li>
          <li>Login</li>
          <li>Register</li>
          <li>Contact Us</li>
        </ul>
        <ul className={styles.bottomUl}>
          <li>Menu</li>
          <li>Home</li>
          <li>Courses</li>
          <li>Impressum</li>
        </ul>
        <ul className={styles.bottomUl}>
          <li>Courses</li>
        </ul>
      </ul>
    </div>
  )
}

export default Footer
