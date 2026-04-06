import Head from "next/head";
import styles from "./contact.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import { contactInfo } from "@/constants/contactInfo";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Stats from "@/components/stats";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h1>Get in Touch</h1>
                  <p className={styles.desc}>
                    We're here to help you navigate regulatory compliance,
                    business setup, and product registration in the UAE. Reach
                    out to our expert team today.
                  </p>
                  <div className={styles.btns}>
                    <a href="" className={styles.Appointment}>
                      Schedule Free Consultation
                    </a>
                    <a href="" className={styles.Explore}>
                      View Our Services
                    </a>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.contactInfo}>
          <Container>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.wrapper}>
                  <div className={styles.icon}>
                    <FaPhoneAlt />
                  </div>
                  <h3>Call Us Now</h3>
                  <p>
                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                  </p>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.wrapper}>
                  <div className={styles.icon}>
                    <FaWhatsapp />
                  </div>
                  <h3>Message Us</h3>
                  <p>{contactInfo.whatsapp}</p>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.wrapper}>
                  <div className={styles.icon}>
                    <FaEnvelope />
                  </div>
                  <h3>Email Us</h3>
                  <p>
                    <a href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.wrapper}>
                  <div className={styles.icon}>
                    <FaMapMarkerAlt />
                  </div>
                  <h3>Visit Our Office</h3>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.map}>
          <Container>
            <div className={styles.wrap}>
              <div className={styles.head}>
                <h2>Find Us Here</h2>
                <p className={styles.desc}>
                  Located in the heart of Dubai's business district
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3607.992766264584!2d55.31819462605598!3d25.270828778713074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s211%2C%20Al%20Qaizi%20Building%2C%20Fish%20Roundabout%2C%20Deira%2C%20Dubai%20-%20U.A.E.!5e0!3m2!1sen!2sin!4v1775471105095!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Container>
        </section>
        <Stats />
      </main>
      <Footer />
    </>
  );
}
