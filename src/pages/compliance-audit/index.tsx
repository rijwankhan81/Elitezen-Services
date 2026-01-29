import Head from "next/head";
import styles from "./audit.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import NextImage from "@/hooks/NextImage";
import { FaBalanceScale, FaCheckCircle } from "react-icons/fa";
import { MdFactCheck } from "react-icons/md";
import { HiOutlineShieldCheck } from "react-icons/hi";
import Appointment from "@/components/appointment";

export default function Compliance() {
  return (
    <>
      <Head>
        <title>Compliance Audit | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h1>Compliance Audit</h1>
                  <p className={styles.desc}>
                    Our Regulatory Compliance Audit is a thorough review of your
                    product documents, formulations, and labeling to ensure
                    everything meets regulatory requirements. We identify gaps,
                    prohibited claims, missing information, and potential risks
                    early—so you can avoid delays, speed up approvals, and enter
                    the market with confidence.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>

        <section className={styles.auditCovers}>
          <div className={styles.head}>
            <h2>What Our Compliance Audit Covers</h2>
          </div>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.rowWrapper}>
                <div className={styles.row}>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <MdFactCheck />
                    </div>
                    <h2>Product Regulatory Assessment</h2>

                    <ul>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Review of product formulation and ingredients against
                          UAE restricted and prohibited substance lists
                        </span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Cross-verification with UAE, GSO, and EU regulatory
                          standards
                        </span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Assessment of halal compliance, where applicable
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.image}>
                    <NextImage
                      src={"/images/Product-Regulatory-Assessment.jpg"}
                      alt={""}
                    />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <HiOutlineShieldCheck />
                    </div>
                    <h2>Labeling & Packaging Review</h2>

                    <ul>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Verification of label content according to UAE
                          labeling guidelines
                        </span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Validation of nutritional and marketing claims and
                          language requirements
                        </span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Compliance check for ingredient declaration, net
                          weight, and expiry date format
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.image}>
                    <NextImage
                      src={"/images/Labeling-&-Packaging-Review.jpg"}
                      alt={""}
                    />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <FaBalanceScale />
                    </div>
                    <h2>Documentation & Registration Review</h2>
                    <p className={styles.desc}>
                      We review all required regulatory documentation,
                      including:
                    </p>

                    <ul>
                      <li>
                        <FaCheckCircle />
                        <span>Product labels</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Product composition certificates</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Halal certificates (if applicable)</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Free Sale Certificates</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>MSDS (Material Safety Data Sheets)</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>Laboratory test reports</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Other supporting regulatory documents (if applicable)
                        </span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Evaluation of product registration status with Dubai
                          Municipality (Montaji system)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.image}>
                    <NextImage
                      src={"/images/Documentation-&-Registration-Review.jpg"}
                      alt={""}
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.Methodology}>
          <div className={styles.head}>
            <h2>Our Methodology</h2>
          </div>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.rowWrapper}>
                <div className={styles.row}>
                  <div className={styles.content}>
                    <h2>Pre-Audit Preparation</h2>

                    <ul>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Collection of product list and available documentation
                        </span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Identification and prioritization of target products
                        </span>
                      </li>
                    </ul>
                    <h2>Compliance Audit</h2>

                    <ul>
                      <li>
                        <FaCheckCircle />
                        <span>Detailed review of all submitted documents</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Inspection of labels and regulatory documentation
                        </span>
                      </li>
                    </ul>
                    <h2>Reporting</h2>

                    <ul>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Preparation of a comprehensive summary of findings
                        </span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Review meeting with your compliance team or
                          stakeholders to discuss results
                        </span>
                      </li>
                    </ul>
                    <h2>Recommendations & Corrective Actions</h2>

                    <ul>
                      <li>
                        <FaCheckCircle />
                        <span>Clear guidance to address compliance gaps</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Support with label updates and regulatory application
                          submissions
                        </span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>
                          Timeline planning and priority matrix for corrective
                          actions
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.image}>
                    <NextImage src={"/images/Methodology.jpg"} alt={""} />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <Appointment />
      </main>
      <Footer />
    </>
  );
}
