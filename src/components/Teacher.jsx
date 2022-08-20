import styles from "./Teacher.module.css"
import person1 from "../assets/person1.png"

function Teacher({ id, teachers }) {
  console.log(teachers.img)
  console.log()
  const imgUrl = teachers.img
  // console.log(require(imgUrl))
  return (
    <div className={styles.instructor}>
      <div className={styles.text}>
        <h2 className={styles.h2}>{teachers.title}</h2>
        <div className={styles.desc}>{teachers.desc}</div>
      </div>
      <div
        className={styles.person}
        // style={{ backgroundImage: `${imgUrl}` }}
      >
        <img
          src={`/assets/${imgUrl}`}
          // src={`require(${imgUrl})`}
          // src={require("../assets/person1.png")}
          alt={teachers.title}
          className={styles.img}
        />
      </div>
    </div>
  )
}

export default Teacher
