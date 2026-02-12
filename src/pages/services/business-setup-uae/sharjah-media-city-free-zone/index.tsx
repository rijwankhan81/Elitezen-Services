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
        <title>Sharjah Media City Free Zone (SHAMS) | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>Sharjah Media City Free Zone (SHAMS)</h1>
                <p>
                  Sharjah Media City, commonly known as SHAMS Free Zone, is a
                  dynamic and innovative business hub located in Sharjah —
                  widely recognized as the cultural capital of the UAE. Designed
                  to support creativity, media innovation, and digital
                  entrepreneurship, SHAMS has become a preferred destination for
                  startups, freelancers, and growing businesses seeking a
                  flexible and cost-effective company formation solution.
                </p>
                <p>
                  SHAMS aims to create a vibrant ecosystem that blends
                  technology, creativity, and collaboration, offering
                  entrepreneurs from all nationalities the opportunity to live,
                  learn, and build innovative businesses within a supportive
                  environment.
                </p>

                <h2>Why Choose SHAMS Free Zone?</h2>
                <p>
                  SHAMS Free Zone focuses on empowering entrepreneurs by
                  providing flexible business structures, simplified processes,
                  and affordable licensing options. Its forward-thinking
                  environment makes it especially attractive to young business
                  owners and creative professionals.
                </p>
                <p>
                  Elitezen Services is an authorized channel partner of SHAMS
                  Free Zone. With extensive experience in UAE company formation
                  since 2009, we act as a bridge between business owners and
                  free zone authorities, ensuring smooth setup processes and
                  accurate professional guidance.
                </p>
                <h2>Media License Package – Zero Visa Option</h2>
                <p>
                  Sharjah Media City offers flexible license packages suitable
                  for individual entrepreneurs, including media-focused licenses
                  ideal for digital businesses and creative industries.
                </p>
                <h3>Available Media Activities Include:</h3>
                <p>
                  E-commerce <br />
                  Advertising <br />
                  Digital Marketing <br />
                  Event Organizing <br />
                  Computer Programming & Consultancy <br />
                  Media Production <br />
                  Photography <br />
                  Web Portals <br />
                  Printing & Publishing <br />
                  Market Research <br />
                  Graphic Design <br />
                  Fashion Design <br />
                  Interior Design <br />
                  Translation Services
                </p>
                <h2>License Types in SHAMS Free Zone</h2>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <h3>Service License</h3>
                    <p>
                      Allows businesses to provide professional or service-based
                      activities, including consultancy, creative services, and
                      digital solutions.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Trading License</h3>
                    <p>
                      Permits import, export, wholesale, and retail trading
                      activities, along with services related to product sales.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Industrial License</h3>
                    <p>
                      Designed for manufacturing, processing, and industrial
                      production activities.
                    </p>
                  </div>
                </div>
                <h2>Benefits of Sharjah Media City Free Zone</h2>

                <ul>
                  <li>
                    No investor physical presence required for company
                    registration
                  </li>
                  <li>Affordable startup packages</li>
                  <li>No paid-up share capital requirement</li>
                  <li>100% foreign ownership</li>
                  <li>
                    Attractive tax environment (no personal income tax;
                    corporate tax subject to regulations)
                  </li>
                  <li>Flexible visa package options</li>
                  <li>
                    Fast documentation process (typically within 2–3 working
                    days)
                  </li>
                </ul>
                <h2>Frequently Asked Questions</h2>
                <h3>How can I work as a freelancer through SHAMS?</h3>
                <p>
                  While standalone freelancer permits may not be available,
                  entrepreneurs can obtain a standard SHAMS license that allows
                  them to operate as independent professionals.
                </p>
                <h3>How long does company formation take?</h3>
                <p>
                  The process is streamlined and can typically be completed
                  within 2–3 working days, with documentation issued
                  electronically.
                </p>
                <h3>
                  Can I register a company without being physically present in
                  the UAE?
                </h3>
                <p>
                  Yes. Company registration can be completed fully online
                  without requiring physical presence in the UAE.
                </p>
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
