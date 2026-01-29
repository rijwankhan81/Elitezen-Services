import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";
import {
  FaBriefcase,
  FaBuilding,
  FaCalculator,
  FaCheckCircle,
  FaRegCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { FaArrowRightLong, FaFileLines } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import Stats from "@/components/stats";
import Clients from "@/components/clients";
import { testimonials } from "@/contants/testimonials";
import { chooseus } from "@/contants/chooseus";
import { SlBadge } from "react-icons/sl";
import Appointment from "@/components/appointment";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <p className={styles.title}>
                    <IoIosStar />
                    Trusted by 5,000+ Businesses
                  </p>
                  <h1>
                    Your Trusted Partner for
                    <span> Business Setup</span> & Regulatory Compliance
                  </h1>
                  <p className={styles.desc}>
                    Expert business formation, PRO services, and compliance
                    solutions in UAE. We handle the complexity so you can focus
                    on growth.
                  </p>
                  <div className={styles.btns}>
                    <a href="" className={styles.Appointment}>
                      Book an Appointment <FaArrowRightLong />
                    </a>
                    <a href="" className={styles.Explore}>
                      Explore Services
                    </a>
                  </div>
                  <div className={styles.rating}>
                    <ul>
                      <li>
                        <NextImage
                          src={"/images/Ahmed Al-Mansoori.png"}
                          alt={""}
                        />
                      </li>
                      <li>
                        <NextImage
                          src={"/images/David Thompson.png"}
                          alt={""}
                        />
                      </li>
                      <li>
                        <NextImage src={"/images/Michael Chen.png"} alt={""} />
                      </li>
                      <li>
                        <NextImage src={"/images/Sarah Johnson.png"} alt={""} />
                      </li>
                    </ul>
                    <div className={styles.review}>
                      <div>
                        <ul>
                          <li>
                            <IoIosStar />
                          </li>
                          <li>
                            <IoIosStar />
                          </li>
                          <li>
                            <IoIosStar />
                          </li>
                          <li>
                            <IoIosStar />
                          </li>
                          <li>
                            <IoIosStar />
                          </li>
                        </ul>
                        <h6>4.9/5</h6>
                      </div>
                      <p>from 500+ reviews</p>
                    </div>
                  </div>
                </div>
                <div className={styles.image}>
                  <NextImage src={"/images/hm-banner.png"} alt={""} />
                  <div className={styles.success}>
                    <FaRegCheckCircle />

                    <div className={styles.content}>
                      <h4>100% Success Rate</h4>
                      <p>All applications approved</p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <Stats />
        <Clients />
        <section className={styles.services}>
          <div className={styles.head}>
            <p className={styles.title}>
              <FaBriefcase />
              Our Services
            </p>
            <h2>Comprehensive Business Solutions</h2>
            <p className={styles.desc}>
              End-to-end services for business setup, compliance, and growth in
              the UAE
            </p>
          </div>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.rowWrapper}>
                <div className={styles.row}>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <FaBuilding />
                    </div>
                    <h2>Company Formation & Business Setup</h2>
                    <p className={styles.desc}>
                      We simplify the entire company formation process in UAE,
                      from choosing the right jurisdiction to obtaining all
                      necessary licenses. Our experts guide you through
                      mainland, free zone, and offshore setup options tailored
                      to your business needs.
                    </p>
                    <ul>
                      <li>
                        <FaCheckCircle />
                        <span>Free zone and mainland company registration</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>License procurement and renewal</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Business plan development</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Office space solutions</span>
                      </li>
                    </ul>
                    <div className={styles.btns}>
                      <a href="" className={styles.Appointment}>
                        Book Appointment <FaArrowRightLong />
                      </a>
                    </div>
                    <div className={styles.review}>
                      {testimonials.slice(0, 1).map((t) => (
                        <div className={styles.card} key={t.id}>
                          <div className={styles.header}>
                            <img
                              src={t.image}
                              alt={t.name}
                              className={styles.avatar}
                            />
                            <div>
                              <div className={styles.rating}>
                                {"★".repeat(Math.floor(t.rating))}
                                {t.rating % 1 !== 0 ? "☆" : ""}
                              </div>
                              <p>"{t.review}"</p>
                              <h3>
                                {t.name}, {t.company}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.image}>
                    <NextImage src={"/images/setup.png"} alt={""} />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <FaFileLines />
                    </div>
                    <h2>PRO Services & Government Relations</h2>
                    <p className={styles.desc}>
                      Navigate UAE's regulatory landscape with ease. Our PRO
                      services handle all government-related documentation, visa
                      processing, and compliance requirements, saving you time
                      and ensuring accuracy.
                    </p>
                    <ul>
                      <li>
                        <FaCheckCircle />
                        <span>Visa applications and renewals</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Emirates ID processing</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Labor card and work permit services</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Document attestation and translation</span>
                      </li>
                    </ul>
                    <div className={styles.btns}>
                      <a href="" className={styles.Appointment}>
                        Book Appointment <FaArrowRightLong />
                      </a>
                    </div>
                    <div className={styles.review}>
                      {testimonials.slice(1, 2).map((t) => (
                        <div className={styles.card} key={t.id}>
                          <div className={styles.header}>
                            <img
                              src={t.image}
                              alt={t.name}
                              className={styles.avatar}
                            />
                            <div>
                              <div className={styles.rating}>
                                {"★".repeat(Math.floor(t.rating))}
                                {t.rating % 1 !== 0 ? "☆" : ""}
                              </div>
                              <p>"{t.review}"</p>
                              <h3>
                                {t.name}, {t.company}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.image}>
                    <NextImage src={"/images/relations.png"} alt={""} />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <FaShieldAlt />
                    </div>
                    <h2>Regulatory Compliance & Legal Support</h2>
                    <p className={styles.desc}>
                      Stay compliant with UAE regulations through our
                      comprehensive legal and compliance services. We ensure
                      your business meets all statutory requirements and
                      maintain good standing with authorities.
                    </p>
                    <ul>
                      <li>
                        <FaCheckCircle />
                        <span>Corporate compliance audits</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Legal documentation and contracts</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Regulatory filings and reporting</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Risk management advisory</span>
                      </li>
                    </ul>
                    <div className={styles.btns}>
                      <a href="" className={styles.Appointment}>
                        Book Appointment <FaArrowRightLong />
                      </a>
                    </div>
                    <div className={styles.review}>
                      {testimonials.slice(2, 3).map((t) => (
                        <div className={styles.card} key={t.id}>
                          <div className={styles.header}>
                            <img
                              src={t.image}
                              alt={t.name}
                              className={styles.avatar}
                            />
                            <div>
                              <div className={styles.rating}>
                                {"★".repeat(Math.floor(t.rating))}
                                {t.rating % 1 !== 0 ? "☆" : ""}
                              </div>
                              <p>"{t.review}"</p>
                              <h3>
                                {t.name}, {t.company}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.image}>
                    <NextImage src={"/images/legal.png"} alt={""} />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <FaCalculator />
                    </div>
                    <h2>Accounting & Tax Services</h2>
                    <p className={styles.desc}>
                      Professional accounting and tax services tailored for UAE
                      businesses. From bookkeeping to VAT compliance, we handle
                      your financial obligations so you can focus on growth.
                    </p>
                    <ul>
                      <li>
                        <FaCheckCircle />
                        <span>VAT registration and filing</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Bookkeeping and financial reporting</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Tax advisory and planning</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Financial audits and reviews</span>
                      </li>
                    </ul>
                    <div className={styles.btns}>
                      <a href="" className={styles.Appointment}>
                        Book Appointment <FaArrowRightLong />
                      </a>
                    </div>
                    <div className={styles.review}>
                      {testimonials.slice(3, 4).map((t) => (
                        <div className={styles.card} key={t.id}>
                          <div className={styles.header}>
                            <img
                              src={t.image}
                              alt={t.name}
                              className={styles.avatar}
                            />
                            <div>
                              <div className={styles.rating}>
                                {"★".repeat(Math.floor(t.rating))}
                                {t.rating % 1 !== 0 ? "☆" : ""}
                              </div>
                              <p>"{t.review}"</p>
                              <h3>
                                {t.name}, {t.company}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.image}>
                    <NextImage src={"/images/tax.png"} alt={""} />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.chooseus}>
          <Container>
            <div className={styles.head}>
              <p className={styles.title}>
                <SlBadge />
                Why Choose Us{" "}
              </p>
              <h2>Your Success is Our Priority</h2>
              <p className={styles.desc}>
                Experience the difference of working with UAE's most trusted
                business services provider
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
        <Appointment />
      </main>
      <Footer />
    </>
  );
}
