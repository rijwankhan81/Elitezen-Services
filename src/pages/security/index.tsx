import Head from "next/head";
import styles from "./security.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";
import Getapp from "@/components/getApp";
import { coreSecurity } from "@/contants/coreSecurity";
import { compliance } from "@/contants/compliance";
import { protect } from "@/contants/protect";
import { securityProtocols } from "@/contants/securityProtocols";

export default function Security() {
  return (
    <>
      <Head>
        <title>Security | Peddy Pay</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <p className={styles.title}>Bank-Grade Security</p>
                  <h1>
                    Your Money & Data Are Protected With Bank-Grade Security
                  </h1>
                  <p className={styles.desc}>
                    PeddyPay uses enterprise-level security, encryption, and
                    global compliance to ensure every transaction is safe,
                    verified, and protected
                  </p>
                  <div className={styles.btns}>
                    <a href="" className={styles.download}>
                      Learn More
                    </a>
                    <a href="" className={styles.merchant}>
                      View Compliance
                    </a>
                  </div>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/securitybanner.png"} alt={""} />
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.features}>
          <Container>
            <div className={styles.head}>
              <h2>Powerful Features</h2>
              <p>Everything you need for seamless digital payments</p>
            </div>
            <div className={styles.row}>
              {coreSecurity.map((item) => {
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
        <section className={styles.compliance}>
          <Container>
            <div className={styles.head}>
              <h2>Built to Meet Global Standards</h2>
              <p>
                PeddyPay follows strict international compliance regulations to
                ensure maximum safety across all regions.
              </p>
            </div>
            <div className={styles.row}>
              {compliance.map((item) => {
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
        <section className={styles.protect}>
          <Container>
            <div className={styles.head}>
              <h2>How PeddyPay Protects Your Account</h2>
              <p>
                A comprehensive approach to keeping your transactions secure at
                every stage.
              </p>
            </div>
            <div className={styles.row}>
              {protect.map((item) => {
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
        <section className={styles.securityProtocols}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h2>Enterprise-Grade Infrastructure</h2>
                  <p className={styles.desc}>
                    Built on a foundation of cutting-edge technology and
                    security protocols to protect your assets 24/7.
                  </p>
                  <ul>
                    {securityProtocols.map((item) => {
                      return (
                        <li key={item.id}>
                          <div className={styles.icon}>{item.icon}</div>
                          <div className={styles.text}>
                            <h3>{item.title}</h3>
                            <p>{item.des}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/protocol.png"} alt={""} />
                </div>
              </div>
            </Container>
          </div>
        </section>

        <Getapp />
      </main>
      <Footer />
    </>
  );
}
