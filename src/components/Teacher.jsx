import styles from "./Teacher.module.css"
import { useNavigate } from "react-router-dom"

import { useAuthStatus } from "../hooks/useAuthStatus"

function Teacher({ id, teachers }) {
  const navigate = useNavigate()
  const { loggedIn, checkingStatus, isAdmin } = useAuthStatus()

  console.log(id)
  const imgUrl = teachers.img
  // console.log(require(imgUrl))
  return (
    <div className={styles.instructor}>
      <div className={styles.text}>
        <h2 className={styles.h2}>{teachers.title}</h2>
        <div className={styles.desc}>{teachers.desc}</div>
      </div>
      <div className={styles.person}>
        <img
          src={`/assets/${imgUrl}`}
          alt={teachers.title}
          className={styles.img}
        />

        {isAdmin ? (
          <button onClick={() => navigate(`/edit-teacher/${id}`)}>Edit</button>
        ) : null}
      </div>
    </div>
  )
}

export default Teacher
