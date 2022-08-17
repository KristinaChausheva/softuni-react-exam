import styles from "./LoginButton.module.css"
import { Navigate, useNavigate } from "react-router-dom"

function LoginButton() {
  const navigation = useNavigate()
  const onClick = () => {
    navigation("/login")
  }
  return (
    <div className={styles.loginBtn} onClick={onClick}>
      Login
    </div>
  )
}

export default LoginButton
