import styles from "./VideoCourse.module.css"
import { ReactComponent as Un } from "../assets/un.svg"
import woman from "../assets/woman.jpg"
import common from "../assets/common.jpg"
import checkb from "../assets/checkb.svg"

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
        <ul className={styles.ulExpect}>
          <li>Learn anywhere and anytime</li>
          <li>Lifetime Access</li>
          <li>Cheaper than live courses</li>
        </ul>
      </div>

      <div className={styles.steps}>
        <div className={styles.stepsContainer}>
          <h1 className={styles.h1}>4 Steps</h1>
          <ul>
            <li>1. Watch a video</li>
            <li>2. Download the homework</li>
            <li>3. Correct your solutions</li>
            <li>4. Check your knowledge with the exercise video</li>
          </ul>
        </div>
        <img
          src={woman}
          alt=""
          width={350}
          height={250}
          className={styles.img}
        />
      </div>
      <div className={styles.prerequisities}>
        <div></div>
        <ul className={styles.prereq}>
          <li>All you need:</li>
          <li>
            <img src={checkb} alt="check" width={20} height={20} /> A phone or a
            laptop
          </li>
          <li>
            <img src={checkb} alt="check" width={20} height={20} /> Stable
            Internet connection
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <img src={common} alt="" />
      </div>
    </div>
  )
}

export default VideoCourse
