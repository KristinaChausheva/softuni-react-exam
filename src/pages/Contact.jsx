import styles from "./Contact.module.css"

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contact}>
        <div className={styles.info}>
          <h1>Contact Us</h1>
          <div className={styles.desc}>
            If you have questions, you can write me here
          </div>
          <div className={styles.emailInfo}>
            <img src="" alt="" />
            <div>englishteacher@gmail.com</div>
          </div>
        </div>

        <form action="" className={styles.form}>
          <input type="text" id="name" />
          <input type="email" id="email" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
      </div>
    </div>
  )
}

export default Contact
