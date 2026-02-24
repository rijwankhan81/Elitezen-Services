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
          Detergent and Disinfectant Product Registration in Dubai | Elitezen
          Services
        </title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>A Definitive Guide</h1>
                <h2>
                  Your Partner for Detergent and Disinfectant Product
                  Registration in Dubai
                </h2>
                <p>
                  Elitezen Services simplifies detergent and disinfectant
                  product registration with expert guidance and full regulatory
                  support. Our experienced team ensures compliance with Dubai
                  Municipality requirements, helping businesses complete the
                  registration process smoothly and efficiently.
                </p>
                <h2>
                  Detergent and Disinfectant Product Registration in Dubai
                  Municipality
                </h2>

                <p>
                  If you plan to import, trade, or distribute detergent and
                  disinfectant products in Dubai, registration with Dubai
                  Municipality is mandatory. This regulatory process ensures
                  that products meet safety standards and comply with UAE
                  regulations before entering the market.
                </p>

                <p>
                  With over 10 years of experience, Elitezen Services supports
                  businesses by managing the complete registration process —
                  from documentation review to application submission — ensuring
                  a hassle-free experience.
                </p>

                <h2>What is a Detergent?</h2>
                <p>
                  Detergents are surfactants with cleaning properties when
                  diluted in water. They are commonly categorized based on their
                  electrical charge, including:
                </p>
                <ul>
                  <li>Anionic detergents</li>
                  <li>Cationic detergents</li>
                  <li>Non-ionic detergents</li>
                </ul>
                <p>
                  While primarily used for cleaning, detergents may also be used
                  in industrial applications such as fuel additives or
                  biological research.
                </p>

                <h2>Common Uses of Detergents</h2>
                <ul>
                  <li>Dishwashing and laundry cleaning solutions</li>
                  <li>Industrial cleaning applications</li>
                  <li>Fuel additive formulations</li>
                  <li>Biological research and laboratory use</li>
                </ul>
                <h2>What are Disinfectant Products?</h2>
                <p>
                  Disinfectants are antimicrobial substances used on non-living
                  surfaces to eliminate microorganisms. They help neutralize
                  disease-causing organisms and play an important role in
                  maintaining hygiene and public health.
                </p>
                <h2>
                  How to Register Detergent and Disinfectant Products in Dubai
                  Municipality
                </h2>
                <p>
                  <b>Estimated Timeframe:</b> Approximately 22 days
                </p>
                <h3>Step 1: Obtain a UAE Trading License</h3>
                <p>
                  A valid UAE-based company license with relevant trading
                  activities is required.
                </p>
                <h3>Step 2: Register on Dubai Municipality Portal</h3>
                <p>
                  Create and activate your company account on the Dubai
                  Municipality (DM) portal.
                </p>
                <h3>Step 3: Create Product Registration Application</h3>
                <p>
                  Submit an online application through the Montaji portal with
                  product details and required documentation.
                </p>
                <h3>Step 4: Submit Application and Payment</h3>
                <p>
                  Complete submission, make payment, and wait for approval from
                  authorities.
                </p>
                <h2>Documents Required for Registration</h2>
                <ul>
                  <li>Clear product image</li>
                  <li>Product artwork/design files</li>
                  <li>Free Sale Certificate</li>
                  <li>Ingredients report (complete ingredient list)</li>
                  <li>Certificate of Analysis</li>
                  <li>GMP Certificate</li>
                  <li>MSDS / SDS / TDS report</li>
                  <li>
                    Additional supporting documents (e.g., Halal Certificate,
                    Organic Certificate, etc.)
                  </li>
                </ul>
                <h2>
                  Label Requirements for Detergent & Disinfectant Products
                </h2>
                <p>
                  Product labeling is mandatory and must comply with Dubai
                  Municipality guidelines. Labels may be bilingual or
                  multilingual, provided information is consistent across all
                  languages.
                </p>
                <h3>Minimum Label Requirements:</h3>
                <ul>
                  <li>Product name and brand name</li>
                  <li>Country of origin</li>
                  <li>Usage instructions</li>
                  <li>Storage conditions</li>
                  <li>Production and expiration dates</li>
                  <li>
                    Ingredients listed in descending order (by weight or volume)
                  </li>
                  <li>Allergy or safety warnings, if applicable</li>
                  <li>Product barcode</li>
                  <li>Net weight or volume</li>
                </ul>
                <h2>How We Can Assist You</h2>
                <p>
                  Our dedicated product registration team manages the entire
                  registration process, including label assessment within Dubai
                  Municipality systems. We ensure compliance with regulatory
                  standards and guide you through every step to achieve
                  successful approval.
                </p>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <h3>Expertise & Knowledge</h3>
                    <p>
                      With over 14 years of industry experience, our team
                      understands the detailed requirements for detergent and
                      disinfectant product registration in Dubai.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Simplifying Compliance & Regulations</h3>
                    <p>
                      We simplify complex regulatory requirements by reviewing
                      product categories, documentation, and labeling to ensure
                      smooth processing.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Save Time & Cost</h3>
                    <p>
                      Pre-evaluation of documentation and labels helps avoid
                      delays, reducing overall time and cost.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Continuous Follow-up</h3>
                    <p>
                      Our team actively monitors your application after
                      submission and maintains regular follow-ups with
                      authorities to ensure timely processing.
                    </p>
                  </div>
                </div>
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
