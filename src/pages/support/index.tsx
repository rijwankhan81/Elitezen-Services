import Head from "next/head";
import styles from "./support.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import Getapp from "@/components/getApp";
import { FaHeadset } from "react-icons/fa";
import { topics } from "@/contants/topics";
import { help } from "@/contants/help";
import { helpful } from "@/contants/helpful";
import { FaArrowRightLong } from "react-icons/fa6";
import { support } from "@/contants/m&d-support";
import { HiCodeBracketSquare } from "react-icons/hi2";

export default function Support() {
  return (
    <>
      <Head>
        <title>Support | Peddy Pay</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <FaHeadset />
                  </div>
                  <h1>We're Here to Help</h1>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.topics}>
          <Container>
            <div className={styles.head}>
              <h2>Browse Help Topics</h2>
            </div>
            <div className={styles.row}>
              {topics.map((item) => {
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
        <section className={styles.help}>
          <Container>
            <div className={styles.head}>
              <h2>Still Need Help?</h2>
              <p>Choose the best way to reach our support team</p>
            </div>
            <div className={styles.row}>
              {help.map((item) => {
                return (
                  <div key={item.id} className={styles.col}>
                    <div className={styles.wrapper}>
                      <div className={styles.icon}>{item.icon}</div>
                      <h3>{item.title}</h3>
                      <p className={styles.des}>{item.des}</p>
                      <p className={styles.contact}>{item.contact}</p>
                      <a className={styles.btn} href={item.contact}>
                        {item.btn}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
        <section className={styles.helpful}>
          <Container>
            <div className={styles.head}>
              <h2>Helpful Guides & Tutorials</h2>
            </div>
            <div className={styles.row}>
              {helpful.map((item) => {
                return (
                  <div key={item.id} className={styles.col}>
                    <div className={styles.wrapper}>
                      <div className={styles.icon}>{item.icon}</div>
                      <h3>{item.title}</h3>
                      <p>{item.des}</p>
                      <a className={styles.btn} href="">
                        Read More <FaArrowRightLong />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
        <section className={styles.support}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.head}>
                  <div className={styles.icon}>
                    <HiCodeBracketSquare />
                  </div>
                  <h2>Merchant & Developer Support</h2>
                  <p className={styles.desc}>
                    Build and integrate with confidence using our comprehensive
                    resources
                  </p>
                </div>
                <div className={styles.content}>
                  <ul>
                    {support.map((item) => {
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
