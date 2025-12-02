import Head from "next/head";
import styles from "./download.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";
import Getapp from "@/components/getApp";
import { available } from "@/contants/available";
import Testimonials from "@/components/testimonials";

export default function DownloadApp() {
  return (
    <>
      <Head>
        <title>Download App | Peddy Pay</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h1>Your Global Wallet — Always With You.</h1>
                  <p className={styles.desc}>
                    Send, receive, convert, and spend money worldwide with the
                    PeddyPay app.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.scandown}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.head}>
                <h2>Scan & Download Instantly</h2>
                <p>Get started in seconds with your mobile device</p>
              </div>
              <div className={styles.row}>
                <div className={styles.image}>
                  <NextImage src={"/images/qr.png"} alt={""} />
                </div>
                <div className={styles.content}>
                  <h2>Quick & Easy</h2>
                  <p className={styles.desc}>
                    Point your camera at the QR code and download PeddyPay
                    instantly. No app store searching needed.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>

        <section className={styles.available}>
          <Container>
            <div className={styles.head}>
              <h2>Available Everywhere</h2>
              <p>Use PeddyPay seamlessly across all your devices</p>
            </div>
            <div className={styles.row}>
              {available.map((item) => {
                return (
                  <div key={item.id} className={styles.col}>
                    <div className={styles.wrapper}>
                      <div className={styles.icon}>{item.icon}</div>
                      <h3>{item.title}</h3>
                      <p>{item.des}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
        <Testimonials />

        <Getapp />
      </main>
      <Footer />
    </>
  );
}
