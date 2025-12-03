import Head from "next/head";
import styles from "./contact.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";
import Getapp from "@/components/getApp";
import { assistance } from "@/contants/assistance";
import { offices } from "@/contants/offices";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Peddy Pay</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h1>Get in Touch With PeddyPay.</h1>
                  <p className={styles.desc}>
                    Whether you have questions, feedback, or need assistance —
                    we're here to help, anytime.
                  </p>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/contact.svg"} alt={""} />
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.assistance}>
          <Container>
            <div className={styles.head}>
              <h2>Reach the Right Team</h2>
              <p>Choose the best way to connect with us</p>
            </div>
            <div className={styles.row}>
              {assistance.map((item) => {
                return (
                  <div key={item.id} className={styles.col}>
                    <div className={styles.wrapper}>
                      <div className={styles.icon}>{item.icon}</div>
                      <h3>{item.title}</h3>
                      <p>{item.des}</p>
                      <a href={item.contact}>{item.contact}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
        <section className={styles.message}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h2>Send Us a Message</h2>
                  <p className={styles.desc}>
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>
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
                        <label>Subject</label>
                        <select name="" id="">
                          <option value="">General Support</option>
                        </select>
                      </div>
                      <div className={styles.field}>
                        <label>Message</label>
                        <textarea
                          name=""
                          id=""
                          placeholder="Tell us how we can help..."
                        ></textarea>
                      </div>
                      <div className={styles.btn}>
                        <button>Submit Message</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/message.svg"} alt={""} />
                </div>
              </div>
            </Container>
          </div>
        </section>

        <section className={styles.offices}>
          <Container>
            <div className={styles.head}>
              <h2>Our Global Offices</h2>
              <p>Visit us at any of our worldwide locations</p>
            </div>
            <div className={styles.row}>
              {offices.map((item) => {
                return (
                  <div key={item.id} className={styles.col}>
                    <div className={styles.wrapper}>
                      <div className={styles.icon}>{item.icon}</div>
                      <h3>{item.title}</h3>
                      <p>{item.address}</p>
                      <p>{item.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <Getapp />
      </main>
      <Footer />
    </>
  );
}
