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
        <title>Employment Visa Services in Dubai | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <section>
                  <h1>Employment Visa Services in Dubai</h1>

                  <p>
                    Elitezen Services provides reliable and professional
                    employment visa services for mainland companies in Dubai.
                    Our experienced PRO team manages the entire process—from
                    documentation to final visa stamping—so you can focus on
                    your business while we handle the formalities.
                  </p>

                  <p>
                    We offer affordable, transparent pricing and tailored
                    support for both individuals and companies, ensuring a
                    smooth and hassle-free visa experience.
                  </p>
                </section>

                <section>
                  <h2>Our Employment Visa Services</h2>

                  <ul>
                    <li>Labour quota approval</li>
                    <li>Offer letter typing</li>
                    <li>Visa application typing</li>
                    <li>Labour card processing & payment</li>
                    <li>Bank guarantee deposit</li>
                    <li>Entry permit processing</li>
                    <li>Visa status change</li>
                    <li>Medical test typing</li>
                    <li>Emirates ID typing & biometrics</li>
                    <li>Labour contract typing & submission</li>
                    <li>Residence visa stamping</li>
                  </ul>
                </section>

                <section>
                  <h2>Investor Residence Visa Services</h2>

                  <ul>
                    <li>Entry visa processing</li>
                    <li>Status change (if inside UAE)</li>
                    <li>Medical test & typing</li>
                    <li>Emirates ID application</li>
                    <li>Residence visa stamping</li>
                  </ul>
                </section>

                <section>
                  <h2>Housemaid Visa Processing</h2>

                  <ul>
                    <li>Family file opening</li>
                    <li>Entry permit typing</li>
                    <li>Immigration (GDRFA) deposit processing</li>
                    <li>Emirates ID application</li>
                    <li>Medical typing (including pregnancy test)</li>
                    <li>Residence visa application typing</li>
                    <li>Salary agreement typing & submission</li>
                    <li>Residence visa stamping</li>
                  </ul>
                </section>

                <section>
                  <h2>Temporary Work Permit Processing</h2>

                  <ul>
                    <li>Offer letter preparation & submission</li>
                    <li>Temporary work permit application</li>
                    <li>Document submission</li>
                    <li>Work permit fee payment</li>
                    <li>Labour contract typing & submission</li>
                  </ul>
                </section>

                <section>
                  <h2>Why Choose Elitezen Services?</h2>

                  <div>
                    <div>
                      <h3>Complete PRO Support</h3>
                      <p>
                        End-to-end assistance for all visa-related processes.
                      </p>
                    </div>

                    <div>
                      <h3>Affordable Pricing</h3>
                      <p>
                        Transparent and competitive service charges with no
                        hidden fees.
                      </p>
                    </div>

                    <div>
                      <h3>Experienced Team</h3>
                      <p>
                        Professional PRO experts handling documentation and
                        approvals efficiently.
                      </p>
                    </div>

                    <div>
                      <h3>Time-Saving Process</h3>
                      <p>
                        We manage everything so you can focus on your business
                        operations.
                      </p>
                    </div>
                  </div>

                  <p>
                    Get the best PRO services in Dubai at affordable prices and
                    enjoy a smooth, efficient visa processing experience.
                  </p>
                </section>

                <section>
                  <p>
                    <strong>Note:</strong> You can check your Emirates ID status
                    online through official UAE portals.
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
