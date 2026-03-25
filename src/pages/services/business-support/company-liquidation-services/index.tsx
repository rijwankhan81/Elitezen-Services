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
                  <h1>Company Liquidation Services in Dubai</h1>

                  <p>
                    Elitezen Services provides professional assistance for
                    company liquidation in Dubai, including mainland, free zone,
                    and offshore company closures. Closing a business requires
                    following strict legal procedures, and our experienced team
                    ensures the entire process is handled smoothly and
                    compliantly.
                  </p>

                  <p>
                    We simplify complex procedures, reduce legal risks, and help
                    you close your business in a structured and stress-free
                    manner.
                  </p>
                </section>

                <section>
                  <h2>What is Company Liquidation?</h2>

                  <p>
                    Company liquidation is the formal process of closing a
                    business. It involves settling liabilities, distributing
                    assets among shareholders, and officially removing the
                    company from government records.
                  </p>

                  <p>
                    While the process can be complex, our expert team manages
                    every step to ensure compliance and minimize financial and
                    legal complications.
                  </p>

                  <p>
                    📞 For more information, call: +971234567890 📧 Email:
                    business@elitezenservices.ae
                  </p>
                </section>

                <section>
                  <h2>How to Close a Mainland Company in Dubai</h2>

                  <p>
                    We provide complete support to ensure all partners are
                    cleared of liabilities and that the company is closed
                    according to UAE regulations.
                  </p>

                  <h3>Closing a Sole Proprietorship</h3>
                  <ol>
                    <li>
                      Submit the Registration & Licensing Application form.
                    </li>
                    <li>Provide a copy of the trade license.</li>
                    <li>Cancel the Establishment Card (MOHRE).</li>
                    <li>Obtain activity-specific approvals (if required).</li>
                    <li>
                      Submit documents and receive license cancellation
                      certificate.
                    </li>
                  </ol>

                  <h3>Closing a Branch of a Company</h3>
                  <ol>
                    <li>
                      Submit application through approved service centres.
                    </li>
                    <li>Cancel Establishment Card (MOHRE).</li>
                    <li>
                      Provide parent company’s attested closure resolution.
                    </li>
                    <li>Obtain approvals (if required).</li>
                    <li>
                      Submit documents and receive cancellation certificate.
                    </li>
                  </ol>

                  <h3>Closing a Civil Works Company</h3>
                  <ol>
                    <li>Submit application form.</li>
                    <li>Cancel Establishment Card.</li>
                    <li>Cancel employee/partner visas.</li>
                    <li>Obtain required approvals.</li>
                    <li>
                      Prepare notarized partnership cancellation agreement.
                    </li>
                    <li>
                      Submit documents and obtain cancellation certificate.
                    </li>
                  </ol>
                </section>

                <section>
                  <h2>How to Close an LLC Company in Dubai</h2>

                  <h3>Phase 1: Company Dissolution & Liquidator Appointment</h3>
                  <ol>
                    <li>
                      Prepare notarized resolution for company liquidation.
                    </li>
                    <li>Appoint a liquidator and submit required documents.</li>
                    <li>Submit application and obtain initial approval.</li>
                    <li>Pay dissolution and liquidator appointment fees.</li>
                    <li>
                      Publish liquidation notice in two Arabic newspapers
                      (45-day claim period).
                    </li>
                  </ol>

                  <h3>Phase 2: Company Deregistration</h3>
                  <ol>
                    <li>Prepare final liquidation report.</li>
                    <li>Submit declaration of no objections.</li>
                    <li>Cancel Establishment Card and visas.</li>
                    <li>Obtain necessary government approvals.</li>
                    <li>Submit documents for final approval.</li>
                    <li>Pay deregistration fees and receive certificate.</li>
                  </ol>
                </section>

                <section>
                  <h2>Free Zone Company Closure</h2>
                  <p>
                    We assist in closing companies across all major UAE free
                    zones. Our strong connections with authorities ensure
                    efficient communication and faster processing.
                  </p>
                </section>

                <section>
                  <h2>Offshore Company Wind-Up</h2>
                  <p>
                    Offshore company closure requires specialized expertise. Our
                    team handles all procedures with offshore authorities,
                    ensuring a smooth and compliant wind-up process.
                  </p>
                </section>

                <section>
                  <h2>How Elitezen Services Can Help</h2>

                  <div className={styles.row}>
                    <div className={styles.col}>
                      <h3>Expert Handling</h3>
                      <p>
                        Experienced professionals manage every step of the
                        liquidation process.
                      </p>
                    </div>

                    <div className={styles.col}>
                      <h3>Reduced Legal Risk</h3>
                      <p>
                        We ensure compliance with UAE laws to avoid penalties
                        and complications.
                      </p>
                    </div>

                    <div className={styles.col}>
                      <h3>Time & Cost Efficiency</h3>
                      <p>
                        Streamlined processes help minimize delays and financial
                        losses.
                      </p>
                    </div>

                    <div className={styles.col}>
                      <h3>End-to-End Support</h3>
                      <p>
                        From documentation to final deregistration, we handle
                        everything for you.
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
