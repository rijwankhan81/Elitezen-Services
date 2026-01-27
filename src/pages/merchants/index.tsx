import Head from "next/head";
import styles from "./merchants.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";
import { FaShop } from "react-icons/fa6";
import Getapp from "@/components/getApp";
import { chooseus } from "@/contants/chooseus";
import { becomeMerchant } from "@/contants/becomeMerchant";
import { TbApi } from "react-icons/tb";

export default function Merchants() {
  return (
    <>
      <Head>
        <title>Merchants | Peddy Pay</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h1>Accept Payments From Anywhere in the World</h1>
                  <p className={styles.desc}>
                    Empower your business with global reach, instant
                    settlements, and powerful merchant tools.
                  </p>
                  <div className={styles.btns}>
                    <a href="" className={styles.merchant}>
                      <FaShop /> Become a Merchant
                    </a>
                    <a href="" className={styles.download}>
                      <TbApi />
                      Explore API
                    </a>
                  </div>
                  <div className={styles.merchants}>
                    <div className={styles.img}>
                      <NextImage src={"/images/user.svg"} alt={""} />
                      <NextImage src={"/images/user.svg"} alt={""} />
                      <NextImage src={"/images/user.svg"} alt={""} />
                      <NextImage src={"/images/user.svg"} alt={""} />
                    </div>
                    <div className={styles.data}>
                      <h4>10,000+ Merchants</h4>
                      <h5>Trust PeddyPay daily</h5>
                    </div>
                  </div>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/merchantsbanner.jpg"} alt={""} />
                  {/* <div className={styles.payment}>
                    <h5>
                      <FaCheckCircle /> Payment Received
                    </h5>
                    <h6>৳ 2,450</h6>
                  </div> */}
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.features}>
          <Container>
            <div className={styles.head}>
              <h2>Why Merchants Love PeddyPay</h2>
              <p>
                Everything you need to accept payments and grow your business
              </p>
            </div>
            <div className={styles.row}>
              {chooseus.map((item) => {
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

        <section className={styles.become}>
          <Container>
            <div className={styles.head}>
              <h2>Get Started in 3 Simple Steps</h2>
              <p>Start accepting payments in minutes, not days</p>
            </div>
            <div className={styles.row}>
              {becomeMerchant.map((item) => {
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
        <section className={styles.api}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h2>API & Developer Tools</h2>
                  <p className={styles.desc}>
                    Simple REST APIs, global payment processing, webhook alerts,
                    and scalable infrastructure for any platform.
                  </p>

                  <div className={styles.btns}>
                    <a href="" className={styles.download}>
                      View API Docs
                    </a>
                  </div>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/api.jpg"} alt={""} />
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
