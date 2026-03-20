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
          Pet & Animal Food Registration in Dubai | Elitezen Services
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
                  <h2>Pet & Animal Food Registration in Dubai</h2>
                  <p>
                    Elitezen Services offers Pet & Animal food product
                    registration services in Dubai. With our extensive knowledge
                    and proven track record, we ensure a smooth and reliable
                    registration experience for your business.
                  </p>
                </section>

                <section>
                  <h2>Why is Pet Food Registration Mandatory in UAE?</h2>
                  <p>
                    It is mandatory to register pet and animal food products
                    with the Ministry of Climate Change and Environment (MOCCAE)
                    before importing them into Dubai.
                  </p>

                  <ul>
                    <li>
                      <strong>Compliance with UAE Regulations:</strong> Ensures
                      products meet safety and quality standards.
                    </li>
                    <li>
                      <strong>Import Clearance:</strong> Registered products
                      allow smooth customs clearance.
                    </li>
                    <li>
                      <strong>Traceability:</strong> Enables tracking of product
                      origin and movement.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2>Categories of Animal Feed We Assist With</h2>
                  <ul>
                    <li>Manufactured animal feed</li>
                    <li>Feed additives</li>
                    <li>Nutritional supplements</li>
                    <li>Pet & animal food</li>
                    <li>Food for animals not included in the food chain</li>
                    <li>Honeybee food and supplements</li>
                    <li>Processed aquatic food</li>
                    <li>Unprocessed aquatic food</li>
                  </ul>
                </section>

                <section>
                  <h2>How to Register Pet & Animal Food in MOCCAE</h2>
                  <p>
                    <strong>Estimated Timeframe:</strong> Approximately 10 days
                  </p>

                  <ol>
                    <li>
                      <strong>Obtain a UAE Commercial License</strong>
                      <p>
                        A valid UAE-based license (mainland or free zone) with
                        relevant business activity is required.
                      </p>
                    </li>

                    <li>
                      <strong>Register on MOCCAE Portal</strong>
                      <p>
                        Create an account using UAE PASS and access product
                        registration services.
                      </p>
                    </li>

                    <li>
                      <strong>Create Product Registration Application</strong>
                      <p>
                        Submit product details and upload required documents as
                        per MOCCAE guidelines.
                      </p>
                    </li>

                    <li>
                      <strong>Submit Application and Payment</strong>
                      <p>
                        Complete submission, make payment, and wait for
                        approval.
                      </p>
                    </li>
                  </ol>
                </section>

                <section>
                  <h2>Documents Required for Pet Food Registration</h2>
                  <ul>
                    <li>Product label</li>
                    <li>Product image</li>
                    <li>Free sale certificate</li>
                    <li>
                      Manufacturer certificate (free from harmful substances)
                    </li>
                    <li>Animal protein source certificate (if applicable)</li>
                    <li>GMO declaration (if applicable)</li>
                  </ul>
                </section>

                <section>
                  <h2>Label Requirements for Pet & Animal Food</h2>
                  <p>
                    Product labels must comply with MOCCAE standards. Labels can
                    be bilingual or multilingual, but content must remain
                    consistent across all languages.
                  </p>

                  <ul>
                    <li>Product trade name</li>
                    <li>Ingredients and quantities</li>
                    <li>Animal type suitability</li>
                    <li>Manufacturer name and address</li>
                    <li>Storage conditions</li>
                    <li>Usage instructions</li>
                    <li>Warnings and precautions</li>
                    <li>Withdrawal period (if applicable)</li>
                    <li>Batch number, production & expiry date</li>
                    <li>“Veterinary use only” / “Pet food only” label</li>
                    <li>Net weight or volume</li>
                  </ul>
                </section>

                <section>
                  <h2>How Elitezen Services Can Assist You</h2>
                  <p>
                    Our specialists review and ensure that your pet and animal
                    food registration documents comply with MOCCAE regulations.
                    We handle the entire process from start to finish, ensuring
                    a hassle-free experience.
                  </p>

                  <div className={styles.row}>
                    <div className={styles.col}>
                      <h3>Expertise & Knowledge</h3>
                      <p>
                        Our experienced team provides complete guidance for pet
                        and animal food registration in Dubai.
                      </p>
                    </div>

                    <div className={styles.col}>
                      <h3>Simplified Compliance</h3>
                      <p>
                        We ensure your product labels meet MOCCAE requirements
                        through internal review.
                      </p>
                    </div>

                    <div className={styles.col}>
                      <h3>Save Time & Cost</h3>
                      <p>
                        We manage the entire process efficiently, reducing
                        delays and operational costs.
                      </p>
                    </div>

                    <div className={styles.col}>
                      <h3>Continuous Follow-up</h3>
                      <p>
                        Our team monitors your application and follows up
                        regularly to ensure timely approval.
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
