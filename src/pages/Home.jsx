import { ReactComponent as Un } from "../assets/un.svg"
import styles from "./Home.module.css"

import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()
  return (
    <div className={styles.homeContainer}>
      <Un></Un>
      <div className={styles.titles}>
        <h1>Learn English from the comfort of your Home!</h1>
        <h4>Live Courses, Live Exam Preparations and Video Courses</h4>
        <p> Our Courses</p>
        <div className={styles.courses}>
          <div className={styles.card}>
            <div>
              <h5>Live Courses</h5>
              <p>199 &#8364;</p>
            </div>
            <button
              className={styles.btn}
              onClick={() => navigate("/live-course")}
            >
              Go!
            </button>
          </div>

          <div className={styles.card}>
            <div>
              <h5>Live Exam Preparation</h5>
              <p>99 &#8364;</p>
            </div>
            <button
              className={styles.btn}
              onClick={() => navigate("/live-course")}
            >
              Go!
            </button>
          </div>

          <div className={styles.card}>
            <div>
              <h5>Video Course</h5>
              <p>49 &#8364;</p>
            </div>
            <button
              className={styles.btn}
              onClick={() => navigate("/video-course")}
            >
              Go!
            </button>
          </div>
        </div>

        <h1>Why you should Learn English with us?</h1>
        <div className={styles.reasons}></div>
      </div>
    </div>
  )
}

export default Home
