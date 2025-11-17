import Head from "next/head";
import styles from "./features.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { features } from "@/contants/features";
import { security } from "@/contants/security";
import Getapp from "@/components/getApp";
import { PiBowlSteamFill } from "react-icons/pi";
import { IoMdCart } from "react-icons/io";

export default function Features() {
  return (
    <>
      <Head>
        <title>Features | Peddy Pay</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <p className={styles.title}>Global </p>
                  <h1>Everything You Need — Inside One Powerful Wallet</h1>
                  <p className={styles.desc}>
                    A global financial platform designed for speed, security,
                    and smart money management.
                  </p>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/featuresbanner.jpg"} alt={""} />
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.features}>
          <Container>
            <div className={styles.head}>
              <h2>Powerful Features</h2>
              <p>
                Experience the next generation of digital payments with
                cutting-edge technology
              </p>
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
        <section className={styles.payments}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h2>Smart Payments Everywhere</h2>
                  <p className={styles.desc}>
                    From tea stalls to taxis — PeddyPay makes every transaction
                    digital and effortless. Pay at local shops, bus counters,
                    online stores, and more.
                  </p>
                  <ul>
                    <li>
                      <div className={styles.icon}>
                        <PiBowlSteamFill />
                      </div>
                      <div className={styles.text}>
                        <h4>Local Shops & Tea Stalls</h4>
                        <p>Quick QR scan payments for everyday purchases</p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.icon}>
                        <FaTrainSubway />
                      </div>
                      <div className={styles.text}>
                        <h4>Transportation & Travel</h4>
                        <p>Pay for bus, train, and ride-sharing services</p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.icon}>
                        <IoMdCart />
                      </div>
                      <div className={styles.text}>
                        <h4>Online Shopping Checkout</h4>
                        <p>Seamless integration with e-commerce platforms</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/payments.jpg"} alt={""} />
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.solution}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.image}>
                  <NextImage src={"/images/dashboard.jpg"} alt={""} />
                </div>
                <div className={styles.content}>
                  <h2>Merchant Dashboard & Business Insights</h2>
                  <p className={styles.desc}>
                    Empower your business with instant settlements, detailed
                    reports, and seamless payment tracking. Get real-time
                    insights into your revenue.
                  </p>
                  <ul>
                    <li>
                      <FaCheckCircle />
                      <span>Real-time transaction monitoring</span>
                    </li>
                    <li>
                      <FaCheckCircle />
                      <span>Instant settlement to bank account</span>
                    </li>
                    <li>
                      <FaCheckCircle />
                      <span>Detailed sales analytics & reports</span>
                    </li>
                    <li>
                      <FaCheckCircle />
                      <span>Customer payment history tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.reward}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h2>Cashback Engine & Loyalty Rewards</h2>
                  <p className={styles.desc}>
                    Get exclusive cashback and loyalty points for every payment
                    — your rewards, your way. Redeem for mobile recharge,
                    shopping, and more.
                  </p>
                  <ul>
                    <li>
                      <h3>Available Rewards</h3>
                      <h4>৳2,450</h4>
                    </li>
                    <li>
                      <h3>Loyalty Points</h3>
                      <h4>8,920 pts</h4>
                    </li>
                    <li>
                      <a href="" className={styles.btn}>
                        Redeem Now
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/cashback.jpg"} alt={""} />
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
