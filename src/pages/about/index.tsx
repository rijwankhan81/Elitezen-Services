import Head from "next/head";
import styles from "./about.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";
import { FaBullseye } from "react-icons/fa";
import Clients from "@/components/clients";
import Stats from "@/components/stats";
import { IoEye } from "react-icons/io5";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h1>About Elitezen Services</h1>
                  <p className={styles.desc}>
                    Elitezen Services is a trusted partner for businesses
                    seeking regulatory compliance, product registration, and
                    business setup solutions in the UAE. With over 15 years of
                    expertise, we help companies navigate complex regulatory
                    landscapes with confidence and ease.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <Stats />
        <Clients />
        <section className={styles.services}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.rowWrapper}>
                <div className={styles.row}>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <FaBullseye />
                    </div>
                    <h2>Our Mission</h2>
                    <p className={styles.desc}>
                      To deliver seamless regulatory compliance and business
                      setup solutions that empower companies to operate
                      confidently in the UAE market. We strive to be the most
                      reliable partner for businesses navigating regulatory
                      requirements.
                    </p>
                  </div>
                  <div className={styles.image}>
                    <NextImage src={"/images/mission.jpg"} alt={""} />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <IoEye />
                    </div>
                    <h2>Our Vision</h2>
                    <p className={styles.desc}>
                      To be the leading regulatory compliance and business setup
                      consultancy in the UAE, recognized for our expertise,
                      integrity, and commitment to client success. We envision a
                      future where businesses can focus entirely on growth while
                      we handle compliance.
                    </p>
                  </div>
                  <div className={styles.image}>
                    <NextImage src={"/images/vision.jpg"} alt={""} />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
