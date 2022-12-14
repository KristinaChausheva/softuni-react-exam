import { ReactComponent as Un } from "../assets/un.svg"
import styles from "./Home.module.css"

import { useNavigate } from "react-router-dom"

import live from "../assets/live.png"
import video from "../assets/video.png"
import check from "../assets/check.svg"
import checkb from "../assets/checkb.svg"
import money from "../assets/money.svg"

function Home() {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <Un className={styles.svg}></Un>
      <div className={styles.titles}>
        <h1 className={styles.h1}>
          Learn English from the comfort of your Home!
        </h1>
        <h4>Live Courses, Live Exam Preparations and Video Courses</h4>
        <p> Our Courses</p>
      </div>

      <div className={styles.courses}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
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
          <div className={styles.cardContent}>
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
          <div className={styles.cardContent}>
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

      <h2 className={styles.h2}>Why you should Learn English with us?</h2>
      <div className={styles.reasons}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <img src={check} alt="check" width={80} height={80} />
            <h5>Native language teacher</h5>
            <p>We offer only motivated and professional teachers.</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent}>
            <img src={money} alt="check" width={80} height={80} />
            <h5>Reasonable prices + High Quality</h5>
            <p>
              It's important for us to offer high quality at reasonable prices.
              Experience it yourself today!
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent}>
            <img src={checkb} alt="checkb" width={80} height={80} />
            <h5>You are the priority</h5>
            <p>
              Your satisfication is highest priority for us. You can always
              contact us if you have any issues.
            </p>
          </div>
        </div>
      </div>

      <div id="courses"></div>
      <h2 className={styles.h2}>How would you like to learn?</h2>
      <div className={styles.questions}>
        <div className={styles.question}>
          <p>Do you like to learn live with other students?</p>
          <button
            className={styles.btn}
            onClick={() => navigate("/live-course")}
          >
            Go!
          </button>
        </div>
        <div className={styles.or}>OR</div>
        <div className={styles.question}>
          <p>Do you like to learn by yourself at your own pace?</p>
          <button
            className={styles.btn}
            onClick={() => navigate("/video-course")}
          >
            Go!
          </button>
        </div>
      </div>

      <div className={styles.advantages}>
        <div className={styles.liveAdv}>
          <div className={styles.text}>
            <h2>Advantage of the live course</h2>
            <ul>
              <li>You learn with other students</li>
              <li>Interactive learning</li>
              <li>Ask teacher questions in real-time</li>
            </ul>
          </div>
          <div className={styles.imgLive}>
            <img src={live} alt="" />
          </div>
        </div>
        <div className={styles.videoAdv}>
          <div className={styles.imgVideo}>
            <img src={video} alt="" />
          </div>
          <div className={styles.text}>
            <h2>Advantage of the video course</h2>
            <ul>
              <li>Learn anytime and anywhere</li>
              <li>Livetime access</li>
              <li>Cheaper than live courses</li>
            </ul>
          </div>
        </div>
      </div>

      <div>TODO TESTIMONIALS...</div>
      {/* </div> */}
    </div>
  )
}

export default Home
