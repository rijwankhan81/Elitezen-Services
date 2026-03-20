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
        <title>
          Health Supplement Product Registration in Dubai | Elitezen Services
        </title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <section>
                  <h1>A Definitive Guide</h1>
                  <h2>Health Supplement Product Registration in Dubai</h2>

                  <p>
                    Elitezen Services simplifies health supplement product
                    registration by providing expert guidance and ensuring full
                    compliance with Dubai Municipality regulations. We support
                    businesses in bringing their products to market smoothly
                    while maintaining the highest safety and quality standards.
                  </p>
                </section>

                <section>
                  <h2>Health Supplement Product Registration in UAE</h2>
                  <p>
                    Health supplements are products intended for ingestion that
                    provide additional nutritional value to the diet, such as
                    vitamins, minerals, amino acids, fats, or herbs. These are
                    available in forms like tablets, capsules, powders, and
                    liquids.
                  </p>
                  <p>
                    In the UAE, all health supplement products must be
                    registered with Dubai Municipality before import,
                    distribution, or sale. This ensures consumer safety and
                    product compliance.
                  </p>
                </section>

                <section>
                  <h2>Why Health Supplement Registration is Mandatory</h2>
                  <ul>
                    <li>Ensures consumer safety and health protection</li>
                    <li>Verifies ingredients and compliance standards</li>
                    <li>Ensures accurate product labeling</li>
                    <li>Prevents misleading health claims</li>
                  </ul>
                </section>

                <section>
                  <h2>
                    How to Register Health Supplement Products in Dubai
                    Municipality
                  </h2>
                  <p>
                    <strong>Estimated Timeframe:</strong> Approximately 12 days
                  </p>

                  <ol>
                    <li>
                      <strong>Obtain a UAE Trading License</strong>
                      <p>
                        A valid UAE-based company with relevant trading activity
                        is required.
                      </p>
                    </li>
                    <li>
                      <strong>Register on Dubai Municipality Portal</strong>
                      <p>
                        Create and activate your account to access services.
                      </p>
                    </li>
                    <li>
                      <strong>Create Application on Montaji Portal</strong>
                      <p>
                        Submit product details and upload required documents.
                      </p>
                    </li>
                    <li>
                      <strong>Submit Application and Payment</strong>
                      <p>Complete submission and wait for approval.</p>
                    </li>
                  </ol>
                </section>

                <section>
                  <h2>Validity of Registration</h2>
                  <p>
                    Once approved, the registration certificate is valid for{" "}
                    <strong>5 years</strong>, subject to compliance with
                    regulations.
                  </p>
                </section>

                <section>
                  <h2>Documents Required for Health Supplement Registration</h2>
                  <ul>
                    <li>Clear product image</li>
                    <li>Product artwork/design</li>
                    <li>Free Sale Certificate</li>
                    <li>Ingredients report</li>
                    <li>Certificate of Analysis</li>
                    <li>GMP Certificate</li>
                    <li>Supporting documents (Halal, Organic, etc.)</li>
                  </ul>
                </section>

                <section>
                  <h2>Label Requirements for Health Supplement Products</h2>
                  <p>
                    Product labeling is mandatory and must comply with Dubai
                    Municipality standards. Labels can be bilingual or
                    multilingual, but the content must remain consistent.
                  </p>

                  <ul>
                    <li>Brand name</li>
                    <li>Product name</li>
                    <li>Manufacturer details</li>
                    <li>Product barcode</li>
                    <li>Usage instructions</li>
                    <li>Production & expiration dates</li>
                    <li>Net weight or volume</li>
                    <li>Batch number</li>
                    <li>Storage conditions</li>
                    <li>Ingredients list (including allergens)</li>
                    <li>Country of origin</li>
                    <li>
                      <strong>No unauthorized medical claims</strong>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2>How Elitezen Services Can Assist You</h2>
                  <p>
                    Elitezen Services has a proven track record in product
                    registration with Dubai Municipality. We manage the entire
                    process, from documentation review to final approval,
                    ensuring a smooth and hassle-free experience.
                  </p>

                  <div className={styles.row}>
                    <div className={styles.col}>
                      <h3>Expertise & Knowledge</h3>
                      <p>
                        Over 10+ years of experience in product registration and
                        compliance.
                      </p>
                    </div>

                    <div className={styles.col}>
                      <h3>Simplified Compliance</h3>
                      <p>
                        We review all documentation and labels to ensure full
                        compliance.
                      </p>
                    </div>

                    <div className={styles.col}>
                      <h3>Save Time & Cost</h3>
                      <p>
                        Pre-evaluation reduces delays and avoids unnecessary
                        expenses.
                      </p>
                    </div>

                    <div className={styles.col}>
                      <h3>Continuous Follow-up</h3>
                      <p>
                        We monitor and follow up with authorities for timely
                        approval.
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
