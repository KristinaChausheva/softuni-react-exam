import styles from "./Slider.module.css"
import { useState } from "react"

import arrowl from "../assets/arrowl.png"
import arrowr from "../assets/arrowr.png"

const Featured = () => {
  const [index, setIndex] = useState(0)
  const courses = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ]

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2)
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0)
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <img src={arrowl} alt="" width={100} />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {courses.map((course, i) => (
          <div className={styles.imgContainer} key={i}></div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <img src={arrowr} alt="" width={100} />
      </div>
    </div>
  )
}

export default Featured
