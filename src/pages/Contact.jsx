import styles from "./Contact.module.css"
import envelope from "../assets/envelope.svg"

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
            <img src={envelope} alt="" width={30} />
            <div>englishteacher@gmail.com</div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <h3>White a message</h3>
          <form action="" className={styles.form}>
            <input
              type="text"
              id="name"
              className={styles.input}
              placeholder="Name"
            />
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="Email"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Type your message here..."
            ></textarea>
            <button className={styles.sendBtn}>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
