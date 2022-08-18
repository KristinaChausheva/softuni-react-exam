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
          <form
            action="https://formsubmit.co/k.chausheva@gmail.com"
            className={styles.form}
            method="POST"
          >
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              placeholder="Name"
            />
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Email"
            />

            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Type your message here..."
            ></textarea>
            <button className={styles.sendBtn} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
