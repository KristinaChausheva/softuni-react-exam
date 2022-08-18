import styles from "./VideoCourse.module.css"
import { ReactComponent as Un } from "../assets/un.svg"

function VideoCourse() {
  return (
    <div className={styles.liveContainer}>
      <Un className={styles.svg}></Un>
      <div className={styles.titles}>
        <div className={styles.h1}>Video Course:</div>
        <div className={styles.price}>49 &#8364; per course</div>
      </div>
      <div className={styles.expect}>
        <h1 className={styles.h1}>
          What can you expect from my video courses?
        </h1>
        <ul>
          <li>Learn anywhere and anytime</li>
          <li>Lifetime Access</li>
          <li>Cheaper than live courses</li>
        </ul>
      </div>
    </div>
  )
}

export default VideoCourse
