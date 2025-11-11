import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { features } from "@/contants/features";
import { works } from "@/contants/howitsworks";
import { security } from "@/contants/security";
import Testimonials from "@/components/testimonials";
import Getapp from "@/components/getApp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Peddy Pay</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h1>Simplifying Digital Payments for Everyone</h1>
                  <p className={styles.desc}>
                    Fast, secure, and rewarding — powered by PeddyPay.
                    Experience seamless transactions with instant payments and
                    exclusive cashback rewards.
                  </p>
                  <div className={styles.btns}>
                    <a href="" className={styles.download}>
                      <FaDownload /> Download App
                    </a>
                    <a href="" className={styles.merchant}>
                      <FaShop /> Become a Merchant
                    </a>
                  </div>
                  <div className={styles.stats}>
                    <div className={styles.col}>
                      <h3>10M+</h3>
                      <p>Active Users</p>
                    </div>
                    <div className={styles.col}>
                      <h3>500K+</h3>
                      <p>Merchants</p>
                    </div>
                    <div className={styles.col}>
                      <h3>₹50Cr+</h3>
                      <p>Daily Transactions</p>
                    </div>
                  </div>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/hmBanner.png"} alt={""} />
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
              {features.map((item) => {
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
        <section className={styles.works}>
          <Container>
            <div className={styles.head}>
              <h2>How It Works</h2>
              <p>Get started in three simple steps</p>
            </div>
            <div className={styles.row}>
              {works.map((item) => {
                return (
                  <div key={item.id} className={styles.col}>
                    <div className={styles.wrapper}>
                      <div className={styles.image}>
                        <NextImage src={item.image} alt={item.title} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.des}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section className={styles.solution}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h2>Powerful Solutions for Merchants</h2>
                  <p className={styles.desc}>
                    Accept payments from customers seamlessly. Get real- time
                    analytics, automated settlements, and tools to grow your
                    business faster.
                  </p>
                  <ul>
                    <li>
                      <FaCheckCircle />
                      <span>Zero setup fees and transparent pricing</span>
                    </li>
                    <li>
                      <FaCheckCircle />
                      <span>Instant settlement to your bank account</span>
                    </li>
                    <li>
                      <FaCheckCircle />
                      <span>Advanced analytics and reporting dashboard</span>
                    </li>
                    <li>
                      <FaCheckCircle />
                      <span>24/7 dedicated merchant support</span>
                    </li>
                  </ul>
                  <div className={styles.btns}>
                    <a href="" className={styles.download}>
                      Start Accepting Payments
                    </a>
                  </div>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/dashboard.jpg"} alt={""} />
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.security}>
          <Container>
            <div className={styles.head}>
              <h2>Bank-Grade Security</h2>
              <p>
                Your money and data are protected with industry-leading security
              </p>
            </div>
            <div className={styles.row}>
              {security.map((item) => {
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
