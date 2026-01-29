import { Container } from "react-bootstrap";
import styles from "./appointment.module.scss";
import { FaBuilding, FaCheckCircle, FaLock } from "react-icons/fa";
import { testimonials } from "@/contants/testimonials";

export default function Appointment() {
  return (
    <>
      <section className={styles.bookAppointment}>
        <div className={styles.wrap}>
          <Container>
            <div className={styles.row}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FaBuilding /> Book Your Consultation
                </div>
                <h2>Ready to Start Your Business Journey?</h2>
                <p className={styles.desc}>
                  Schedule a free consultation with our experts. We'll discuss
                  your requirements, answer your questions, and create a
                  customized plan for your business setup.
                </p>
                <ul>
                  <li>
                    <FaCheckCircle />
                    <div>
                      <h4>Free Initial Consultation</h4>
                      <p>30-minute call with our business setup expert</p>
                    </div>
                  </li>
                  <li>
                    <FaCheckCircle />
                    <div>
                      <h4>Customized Solution</h4>
                      <p>Tailored plan based on your specific needs</p>
                    </div>
                  </li>
                  <li>
                    <FaCheckCircle />
                    <div>
                      <h4>Clear Roadmap</h4>
                      <p>Step-by-step timeline and pricing breakdown</p>
                    </div>
                  </li>
                </ul>

                <div className={styles.review}>
                  {testimonials.slice(4, 5).map((t) => (
                    <div className={styles.card} key={t.id}>
                      <div className={styles.header}>
                        <img
                          src={t.image}
                          alt={t.name}
                          className={styles.avatar}
                        />
                        <div>
                          <div className={styles.rating}>
                            {"★".repeat(Math.floor(t.rating))}
                            {t.rating % 1 !== 0 ? "☆" : ""}
                          </div>
                          <p>"{t.review}"</p>
                          <h3>
                            {t.name}, {t.company}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.appointmentForm}>
                <h3>Schedule Your Appointment</h3>

                <div className={styles.formWrapper}>
                  <form action="" className={styles.form}>
                    <div className={styles.field}>
                      <label>Full Name</label>
                      <input type="text" />
                    </div>
                    <div className={styles.field}>
                      <label>Email Address</label>
                      <input type="email" />
                    </div>
                    <div className={styles.field}>
                      <label>Phone Number </label>
                      <input type="number" />
                    </div>
                    <div className={styles.field}>
                      <label>Service Interested In </label>
                      <select name="" id="">
                        <option value="">Select a service</option>
                      </select>
                    </div>
                    <div className={styles.field}>
                      <label>Preferred Date</label>
                      <input type="date" />
                    </div>
                    <div className={styles.field}>
                      <label>Message (Optional)</label>
                      <textarea
                        name=""
                        id=""
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>
                    <div className={styles.btn}>
                      <button>Book Appointment </button>
                    </div>

                    <h6>
                      {" "}
                      <FaLock />
                      Your information is secure and confidential
                    </h6>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
