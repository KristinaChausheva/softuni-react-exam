import styles from "./Team.module.css"

import person1 from "../assets/person1.png"
import person2 from "../assets/person2.png"
import person3 from "../assets/person3.png"

import Teacher from "../components/Teacher"

import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase.config"
import { useEffect, useState } from "react"

import { toast } from "react-toastify"

function Team() {
  const [loading, setLoading] = useState(true)
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teachersRef = collection(db, "teachers")
        const docSnap = await getDocs(teachersRef)
        setLoading(false)
        docSnap.forEach((doc) => {
          return teachers.push({
            id: doc.id,
            data: doc.data(),
          })
          // console.log(doc.data())
        })

        console.log(teachers)
        setLoading(false)
      } catch (error) {
        console.log(error)
        toast.error("Could not fetch listings")
      }
    }

    fetchTeachers()
  }, [])

  return (
    <div className={styles.teamContent}>
      <h1 className={styles.h1}>Meet Our Instructors</h1>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        teachers.map((teacher) => (
          <Teacher teachers={teacher.data} id={teacher.id} key={teacher.id} />
        ))
      )}
    </div>
  )
}

export default Team
