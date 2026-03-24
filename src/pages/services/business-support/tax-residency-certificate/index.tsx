import Head from "next/head";
import styles from "../../services.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import Servicesnav from "@/components/services";
import Appointment from "@/components/appointment";

export default function Services() {
  return (
    <>
      <Head>
        <title>Tax Residency Certificate in the UAE | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <section>
                  <h1>Tax Residency Certificate in the UAE</h1>

                  <p>
                    A Tax Residency Certificate (TRC), also known as a Tax
                    Domicile Certificate, is issued by the Federal Tax Authority
                    (FTA) in the UAE. It serves as official proof that an
                    individual or company is a tax resident of the UAE.
                  </p>

                  <p>
                    This certificate is especially important for businesses and
                    individuals looking to benefit from international tax
                    advantages and compliance requirements.
                  </p>
                </section>

                <section>
                  <h2>Why Do You Need a Tax Residency Certificate?</h2>

                  <ul>
                    <li>
                      <strong>
                        Access to Double Tax Avoidance Agreements (DTAA):
                      </strong>
                      Benefit from tax treaties between the UAE and other
                      countries to avoid double taxation.
                    </li>
                    <li>
                      <strong>Proof of Tax Residency:</strong>
                      Establish your official tax residency status in the UAE.
                    </li>
                    <li>
                      <strong>Regulatory Compliance:</strong>
                      Maintain proper registration and transparency with tax
                      authorities.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2>Tax Residency Certificate for Individuals</h2>

                  <p>
                    Individuals who have lived and worked in the UAE for at
                    least <strong>183 days</strong> are eligible to apply for a
                    Tax Residency Certificate.
                  </p>

                  <h3>Documents Required</h3>
                  <ul>
                    <li>Copy of passport and Emirates ID</li>
                    <li>Valid residence visa</li>
                    <li>
                      Certified tenancy contract or lease agreement (Ejari or
                      equivalent)
                    </li>
                    <li>Salary certificate or proof of income</li>
                    <li>Bank statement for the last 6 months</li>
                    <li>Immigration report</li>
                    <li>Tax forms (if required by the destination country)</li>
                  </ul>

                  <h3>Eligibility Criteria</h3>
                  <p>
                    The applicant must have resided in the UAE for at least 180
                    days and must provide a valid tenancy agreement registered
                    with the relevant authority (such as Ejari in Dubai or other
                    emirate authorities).
                  </p>
                </section>

                <section>
                  <h2>
                    Tax Residency Certificate for Companies (Legal Persons)
                  </h2>

                  <p>
                    Companies operating in the UAE for at least{" "}
                    <strong>one year</strong> are eligible to apply for a Tax
                    Residency Certificate.
                  </p>

                  <h3>Documents Required</h3>
                  <ul>
                    <li>Valid trade license copy</li>
                    <li>
                      Details of authorized signatory (passport, Emirates ID,
                      residence visa)
                    </li>
                    <li>Memorandum and Articles of Association (MOA & AOA)</li>
                    <li>Audited financial statements</li>
                    <li>Bank statement for the last 6 months</li>
                    <li>Certified tenancy agreement (Ejari)</li>
                    <li>Special certificate template (if required)</li>
                  </ul>

                  <h3>Eligibility Criteria</h3>
                  <p>
                    The company must be established in the UAE for at least one
                    year. Financial statements must be audited and certified by
                    an accredited audit firm and submitted along with the
                    application.
                  </p>
                </section>

                <section>
                  <h2>How We Can Assist You</h2>

                  <p>
                    At Elitezen Services, we provide complete assistance in
                    obtaining your Tax Residency Certificate. From document
                    preparation to application submission and follow-up, our
                    team ensures a smooth and hassle-free process.
                  </p>

                  <div className={styles.row}>
                    <div className={styles.col}>
                      <h3>Expert Guidance</h3>
                      <p>
                        We help you understand eligibility requirements and
                        prepare accurate documentation.
                      </p>
                    </div>

                    <div className={styles.col}>
                      <h3>End-to-End Support</h3>
                      <p>
                        We manage the entire process, saving you time and
                        effort.
                      </p>
                    </div>

                    <div className={styles.col}>
                      <h3>Compliance Assurance</h3>
                      <p>
                        We ensure your application meets all FTA requirements.
                      </p>
                    </div>

                    <div className={styles.col}>
                      <h3>Timely Processing</h3>
                      <p>
                        We follow up with authorities to ensure quick approval.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <Servicesnav />
            </div>
          </Container>
        </div>
        <Appointment />
      </main>
      <Footer />
    </>
  );
}
