import styles from "./Teacher.module.css"
import { useNavigate, useParams } from "react-router-dom"

import { useAuthStatus } from "../hooks/useAuthStatus"

import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"

function Teacher({ id, teachers }) {
  const params = useParams()
  const navigate = useNavigate()
  const { loggedIn, checkingStatus, isAdmin } = useAuthStatus()

  console.log(id)
  const imgUrl = teachers.img

  const onDelete = async () => {
    await deleteDoc(doc(db, "teachers", id))
    toast.success("teacher deleted!")
    window.location.reload(false)
  }
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
          <div className={styles.actions}>
            <button onClick={() => navigate(`/edit-teacher/${id}`)}>
              Edit
            </button>
            <button onClick={onDelete}>Detele</button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Teacher
