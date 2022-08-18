import styles from "./Team.module.css"

import person1 from "../assets/person1.png"
import person2 from "../assets/person2.png"
import person3 from "../assets/person3.png"

function Team() {
  return (
    <div className={styles.teamContent}>
      <h1 className={styles.h1}>Meet Our Instructors</h1>

      <div className={styles.instructor}>
        <div className={styles.text}>
          <h2 className={styles.h2}>
            Hi, I am John Doe, your English teacher.
          </h2>
          <div className={styles.desc}>
            2007-2010 DaF-Studium Uni Greifswald, over 10 yeras of experience as
            an English language specialist at EALTS Exams
          </div>
        </div>
        <div className={styles.person}>
          <img src={person1} alt="" className={styles.img} />
        </div>
      </div>

      <div className={styles.instructor}>
        <div className={styles.text}>
          <h2 className={styles.h2}>
            Hi, I am Jane Doe, your English teacher.
          </h2>
          <div className={styles.desc}>
            2007-2010 DaF-Studium Uni Greifswald, over 10 yeras of experience as
            an English language specialist at EALTS Exams
          </div>
        </div>
        <div className={styles.person}>
          <img src={person2} alt="" className={styles.img} />
        </div>
      </div>

      <div className={styles.instructor}>
        <div className={styles.text}>
          <h2 className={styles.h2}>
            Hi, I am Joan Doe, your English teacher.
          </h2>
          <div className={styles.desc}>
            2007-2010 DaF-Studium Uni Greifswald, over 10 yeras of experience as
            an English language specialist at EALTS Exams
          </div>
        </div>
        <div className={styles.person}>
          <img src={person3} alt="" className={styles.img} />
        </div>
      </div>
    </div>
  )
}

export default Team
