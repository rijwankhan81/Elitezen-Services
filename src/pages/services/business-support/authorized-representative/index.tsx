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
          Authorized Representative (AR) Services in the UAE | Elitezen Services
        </title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <section>
                  <h1>Authorized Representative (AR) Services in the UAE</h1>

                  <p>
                    An <strong>Authorized Representative (AR)</strong> plays a
                    vital role in helping international businesses import and
                    register consumer products in the UAE. If you don’t have a
                    local entity or distributor, an AR acts as your official
                    representative, ensuring compliance with all UAE
                    regulations.
                  </p>

                  <p>
                    At Elitezen Services, we provide reliable AR services that
                    simplify the entire process—from product registration to
                    regulatory communication—allowing you to enter the UAE
                    market with confidence.
                  </p>
                </section>

                <section>
                  <h2>What Does an Authorized Representative Do?</h2>

                  <ul>
                    <li>
                      <strong>Regulatory Compliance:</strong>
                      Ensure all products meet UAE laws, standards, and safety
                      requirements.
                    </li>
                    <li>
                      <strong>Documentation Handling:</strong>
                      Manage all paperwork, including product registration and
                      customs documentation.
                    </li>
                    <li>
                      <strong>Communication:</strong>
                      Act as a bridge between foreign businesses and UAE
                      authorities, distributors, and retailers.
                    </li>
                    <li>
                      <strong>Legal Responsibility:</strong>
                      Take responsibility for product compliance and address any
                      regulatory issues.
                    </li>
                    <li>
                      <strong>Market Monitoring:</strong>
                      Stay updated with regulatory changes and ensure ongoing
                      compliance.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2>Product Categories We Support</h2>

                  <ul>
                    <li>Cosmetic products</li>
                    <li>Perfumes & fragrance products</li>
                    <li>Food products</li>
                    <li>Food supplements</li>
                    <li>Food contact materials</li>
                    <li>Detergents, disinfectants & biocides</li>
                    <li>Toys</li>
                  </ul>
                </section>

                <section>
                  <h2>Why Are AR Services Important in the UAE?</h2>

                  <p>
                    In the UAE, consumer products must be registered and
                    approved by local authorities (such as municipalities)
                    before they can be imported or sold. One of the key
                    requirements for product registration is having a valid UAE
                    trade license.
                  </p>

                  <p>
                    As your Authorized Representative, we use our local license
                    to register your products, ensuring full compliance without
                    the need for you to establish a company in the UAE.
                  </p>

                  <p>
                    We handle communication with authorities, oversee compliance
                    procedures, and take necessary actions in case of any
                    regulatory issues—making your market entry smooth and
                    risk-free.
                  </p>
                </section>

                <section>
                  <h2>Our AR Service Advantage</h2>

                  <div>
                    <div>
                      <h3>No Local Entity Required</h3>
                      <p>
                        Enter the UAE market without setting up a company or
                        finding a distributor.
                      </p>
                    </div>

                    <div>
                      <h3>End-to-End Compliance</h3>
                      <p>
                        Complete support for product registration and regulatory
                        approvals.
                      </p>
                    </div>

                    <div>
                      <h3>Expert Communication</h3>
                      <p>
                        Direct coordination with UAE authorities for faster
                        approvals.
                      </p>
                    </div>

                    <div>
                      <h3>Hassle-Free Process</h3>
                      <p>
                        We manage everything so you can focus on growing your
                        business.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2>Frequently Asked Questions</h2>

                  <h3>Who Needs Authorized Representative (AR) Services?</h3>
                  <p>
                    Foreign manufacturers and brand owners who want to sell
                    consumer products in the UAE but do not have a local
                    presence or distributor can benefit from AR services.
                  </p>

                  <h3>Is AR Service Mandatory in the UAE?</h3>
                  <p>
                    No, AR services are optional. However, they provide a
                    convenient way to manage product registration and import
                    processes without setting up a local entity.
                  </p>

                  <h3>
                    Do You Provide AR Services for Medical or Pharmaceutical
                    Products?
                  </h3>
                  <p>
                    No, our AR services are limited to consumer product
                    categories only. We do not handle medical or pharmaceutical
                    product registration in the UAE.
                  </p>
                </section>

                <section>
                  <h2>Start Your UAE Market Entry Today</h2>
                  <p>
                    Partner with Elitezen Services as your Authorized
                    Representative and simplify your expansion into the UAE.
                    Contact us today to get started.
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
