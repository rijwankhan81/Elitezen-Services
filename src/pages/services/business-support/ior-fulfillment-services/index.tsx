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
          IOR Services & E-Commerce Fulfillment in UAE | Elitezen Services
        </title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <section>
                  <h1>IOR Services & E-Commerce Fulfillment in UAE</h1>

                  <p>
                    Expand your business into the UAE without the need to
                    establish a local entity or find a distributor. At Elitezen
                    Services, we offer comprehensive{" "}
                    <strong>Importer of Record (IOR)</strong> and{" "}
                    <strong>E-commerce Fulfillment solutions</strong> designed
                    specifically for international businesses.
                  </p>

                  <p>
                    Entering a new market can be complex, time-consuming, and
                    expensive. From company setup to logistics and compliance,
                    multiple challenges can slow down your growth. Our
                    end-to-end solution eliminates these barriers, allowing you
                    to focus on selling while we handle the rest.
                  </p>
                </section>

                <section>
                  <h2>What We Offer</h2>

                  <p>
                    Our IOR and fulfillment services provide a complete
                    ecosystem to help you launch, manage, and scale your
                    business in the UAE market.
                  </p>

                  <ul>
                    <li>Product registration and compliance</li>
                    <li>Import handling under IOR</li>
                    <li>Customs clearance and logistics</li>
                    <li>Warehousing and storage</li>
                    <li>Marketplace listing and selling</li>
                    <li>Order fulfillment (pick & pack)</li>
                    <li>Last-mile delivery</li>
                    <li>Payment collection and remittance</li>
                  </ul>
                </section>

                <section>
                  <h2>How It Works</h2>

                  <div>
                    <div>
                      <h3>Step 1: Product Registration</h3>
                      <p>
                        We ensure your products are fully compliant with UAE
                        regulations and registered with the relevant
                        authorities.
                      </p>
                    </div>

                    <div>
                      <h3>Step 2: Import on Request (IOR)</h3>
                      <p>
                        We act as your Importer of Record, handling all legal
                        and customs requirements to bring your products into the
                        UAE.
                      </p>
                    </div>

                    <div>
                      <h3>Step 3: Storage</h3>
                      <p>
                        Your products are securely stored in our warehousing
                        facilities, ready for distribution.
                      </p>
                    </div>

                    <div>
                      <h3>Step 4: Marketplace Listing</h3>
                      <p>
                        We list your products on leading UAE marketplaces,
                        helping you reach your target customers quickly.
                      </p>
                    </div>

                    <div>
                      <h3>Step 5: Pick & Pack</h3>
                      <p>
                        Orders are processed efficiently with professional
                        pick-and-pack services to ensure accuracy and speed.
                      </p>
                    </div>

                    <div>
                      <h3>Step 6: Delivery</h3>
                      <p>
                        We manage last-mile delivery to customers across the UAE
                        with reliable logistics partners.
                      </p>
                    </div>

                    <div>
                      <h3>Step 7: Receiving Payments</h3>
                      <p>
                        Payments are collected securely from customers through
                        integrated payment systems.
                      </p>
                    </div>

                    <div>
                      <h3>Step 8: Remittance</h3>
                      <p>
                        Your earnings are transferred to you efficiently,
                        ensuring smooth financial operations.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2>Why Choose Our IOR & Fulfillment Services?</h2>

                  <div>
                    <div>
                      <h3>No Local Entity Required</h3>
                      <p>
                        Start selling in the UAE without setting up a company.
                      </p>
                    </div>

                    <div>
                      <h3>End-to-End Solution</h3>
                      <p>
                        From import to delivery, everything is handled under one
                        roof.
                      </p>
                    </div>

                    <div>
                      <h3>Cost-Effective Expansion</h3>
                      <p>
                        Avoid high setup and operational costs in a new market.
                      </p>
                    </div>

                    <div>
                      <h3>Faster Market Entry</h3>
                      <p>Launch your products quickly with minimal delays.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2>Start Selling in UAE Today</h2>
                  <p>
                    Let us handle the complexity while you focus on growing your
                    business. Get in touch with our team to explore how our IOR
                    and fulfillment services can help you expand into the UAE
                    market effortlessly.
                  </p>
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
