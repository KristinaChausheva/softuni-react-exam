import { useState, useEffect, useRef } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { doc, updateDoc, getDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.config"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

import { useAuthStatus } from "../hooks/useAuthStatus"
import styles from "./EditTeacher.module.css"

function TeacherPage() {
  const [loading, setLoading] = useState(false)
  const [teacher, setTeacher] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    img: "",
  })

  const { title, desc, img } = formData

  const auth = getAuth()
  const navigate = useNavigate()
  const params = useParams()
  const isMounted = useRef(true)

  // Redirect if logged user is not admin

  useEffect(() => {
    if (auth.currentUser.email !== "admin@admin.com") {
      toast.error("You can not edit that listing")
      navigate("/")
    }
  })

  // get data for the specific teacher

  useEffect(() => {
    setLoading(true)
    const fetchTeacher = async () => {
      try {
        const teacherRef = doc(db, "teachers", params.teacherId)
        const docSnap = await getDoc(teacherRef)
        setFormData(docSnap.data())
        setLoading(false)
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data())
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!")
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        toast.error("Could not fetch listings")
      }
    }

    fetchTeacher()
  }, [])

  console.log(params)
  console.log(params.teacherId)

  const onSubmit = async () => {
    setLoading(true)
    try {
      const teacherRef = doc(db, "teachers", params.teacherId)
      await updateDoc(teacherRef, { title, desc, img })

      toast.success("Success Notification")
      setLoading(false)
      navigate("/team")
    } catch (error) {
      console.log(error)
      toast.error("Could not update profile details")
      setLoading(false)
    }
  }

  const onChange = (e) => {
    e.preventDefault()
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Edit Teacher</div>

      <input
        type="text"
        placeholder="title"
        className={styles.input}
        id="title"
        value={title}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="description"
        className={styles.input}
        id="desc"
        value={desc}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="imgUrl"
        className={styles.input}
        id="img"
        value={img}
        onChange={onChange}
      />
      <button onClick={onSubmit} disabled={loading} className={styles.editBtn}>
        Edit teacher
      </button>
    </div>
  )
}

export default TeacherPage
