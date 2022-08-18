import styles from "./LiveCourse.module.css"
import { ReactComponent as Un } from "../assets/un.svg"
import woman from "../assets/woman.jpg"
import common from "../assets/common.jpg"

function LiveCourse() {
  return (
    <div className={styles.liveContainer}>
      <Un className={styles.svg}></Un>
      <div className={styles.titles}>
        <div className={styles.title}>
          <div className={styles.h1}>Exam Preparations:</div>
          <div className={styles.price}>99 &#8364; per course</div>
        </div>
        <div className={styles.title}>
          <div className={styles.h1}>Live Course:</div>
          <div className={styles.price}>199 &#8364; per course</div>
        </div>
      </div>
      <div className={styles.expect}>
        <h1 className={styles.h2}>What can you expect from my live courses?</h1>
        <ul>
          <li>Expert native language teachers</li>
          <li>Engaging in interactive sessions</li>
          <li>Max 10 participants</li>
          <li>Reasonable prices</li>
        </ul>
      </div>

      <div className={styles.important}>
        <div className={styles.info}>
          <h3 className={styles.h3}>Important Info</h3>
          <div>When?: Monday-Thursday</div>
          <div>Time: 18:00- 20:15</div>
          <div>Tenure: 3 sessions per days</div>
          <div>Total of 48 sessions</div>
          <div>Study material approx. 20 &#8364;</div>
        </div>
        <img src={woman} alt="" width={350} height={250} />
      </div>

      <div className={styles.bottom}>
        <img src={common} alt="" />
      </div>
    </div>
  )
}

export default LiveCourse
