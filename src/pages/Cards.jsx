// import styles from "./Card.module.css"
import { getAuth, updateProfile } from "firebase/auth"
import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase.config"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

import styles from "./Cards.module.css"

function Cards() {
  const [loading, setLoading] = useState(true)
  const [courses, setCourses] = useState([])
  const navigate = useNavigate()
  // const courses = []

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const coursesRef = collection(db, "courses")
        const docSnap = await getDocs(coursesRef)
        setLoading(false)
        docSnap.forEach((doc) => {
          courses.push(doc.data())
        })

        // console.log(courses)
        // courses.forEach((doc) => {
        //   console.log(doc.title)
        //   console.log(doc.price)
        //   console.log(doc.link)
        //   console.log(doc._id)
        // })
      } catch (error) {
        console.log(error)
      }
    }

    fetchListings()
  }, [])

  return (
    <div className={styles.courses}>
      {courses.map((course) => (
        <div className={styles.card} key={course.title}>
          <div>
            <h5>{course.title}</h5>
            <p>
              {course.price} <span>&#8364;</span>{" "}
            </p>
          </div>
          <button
            className={styles.btn}
            onClick={() => navigate(`${course.link}`)}
          >
            Go!
          </button>
        </div>
      ))}
    </div>
  )
}

export default Cards
