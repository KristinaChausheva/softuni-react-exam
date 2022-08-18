import styles from "./Team.module.css"

import person1 from "../assets/person1.png"

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
    </div>
  )
}

export default Team
