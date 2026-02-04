import Head from "next/head";
import styles from "./contact.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import { contactInfo } from "@/contants/contactInfo";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
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
              <div className={styles.col}>
                <div className={styles.wrapper}>
                  <div className={styles.icon}>
                    <FaClock />
                  </div>
                  <h3>Working Hours</h3>
                  <p>{contactInfo.timing}</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14442.468972107643!2d55.261498513683364!3d25.182398842038893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25f457%3A0x3dd4c4097970950e!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1770184645854!5m2!1sen!2sin"
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
