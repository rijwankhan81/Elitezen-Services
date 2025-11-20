import Head from "next/head";
import styles from "./about.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";
import Getapp from "@/components/getApp";
import { coreSecurity } from "@/contants/coreSecurity";
import { compliance } from "@/contants/compliance";
import { protect } from "@/contants/protect";
import { securityProtocols } from "@/contants/securityProtocols";
import { stand } from "@/contants/westand";
import { PiGlobeBold } from "react-icons/pi";
import { FaCoins } from "react-icons/fa";
import { responsibility } from "@/contants/responsibility";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Peddy Pay</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h1>Building the Future of Borderless Finance.</h1>
                  <p className={styles.desc}>
                    PeddyPay is a global digital wallet empowering millions to
                    send, receive, and manage money across borders—instantly,
                    securely, and affordably.
                  </p>
                  <div className={styles.btns}>
                    <a href="" className={styles.contact}>
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/aboutbanner.jpg"} alt={""} />
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.mission}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.head}>
                <h2>Our Mission</h2>
                <p>
                  To make global payments simple, fast, and accessible for
                  everyone— anywhere in the world.
                </p>
              </div>
              <div className={styles.row}>
                <div className={styles.image}>
                  <NextImage src={"/images/mission.jpg"} alt={""} />
                </div>
                <div className={styles.content}>
                  <h2>A Global Wallet for a Global Generation.</h2>
                  <p className={styles.desc}>
                    In a world where borders shouldn't limit opportunity,
                    PeddyPay was born from a simple belief: everyone deserves
                    access to fast, affordable, and secure financial services.
                  </p>
                  <p className={styles.desc}>
                    We saw the challenges faced by millions—complex
                    international payments, exorbitant fees, and slow transfer
                    times. So we built a solution that puts people first.
                  </p>
                  <p className={styles.desc}>
                    Today, PeddyPay serves millions of users across 100+
                    countries, processing billions in transactions and breaking
                    down financial barriers one payment at a time.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.stand}>
          <Container>
            <div className={styles.head}>
              <h2>What We Stand For</h2>
              <p>The principles that guide everything we do</p>
            </div>
            <div className={styles.row}>
              {stand.map((item) => {
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
        <section className={styles.worldwide}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.head}>
                <h2>A Worldwide Financial Network</h2>
                <p>Connecting millions across continents</p>
              </div>
              <div className={styles.row}>
                <div className={styles.image}>
                  <NextImage src={"/images/worldwide.jpg"} alt={""} />
                </div>
                <div className={styles.content}>
                  <div className={styles.countries}>
                    <div className={styles.icon}>
                      <PiGlobeBold />
                    </div>
                    <div className={styles.text}>
                      <h3>100+</h3>
                      <p>Countries Worldwide</p>
                    </div>
                  </div>
                  <div className={styles.Currencies}>
                    <div className={styles.icon}>
                      <FaCoins />
                    </div>
                    <div className={styles.text}>
                      <h3>50+</h3>
                      <p>Supported Currencies</p>
                    </div>
                  </div>
                  <div className={styles.major}>
                    <h4>Major Currencies:</h4>
                    <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>GBP</li>
                      <li>AED</li>
                      <li>INR</li>
                      <li>BDT</li>
                      <li>JPY</li>
                      <li>CNY</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.Responsibility}>
          <Container>
            <div className={styles.head}>
              <h2>Our Responsibility</h2>
              <p>Committed to ethical practices and positive impact</p>
            </div>
            <div className={styles.row}>
              {responsibility.map((item) => {
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

        <Getapp />
      </main>
      <Footer />
    </>
  );
}
