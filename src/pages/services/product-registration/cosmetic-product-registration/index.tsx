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
        <title>Cosmetic Product Registration | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>A Definitive Guide</h1>
                <h2>Your Partner for Cosmetic Product Registration in Dubai</h2>
                <p>
                  Partner with Elitezen Services for a smooth and stress-free
                  cosmetic product registration experience in Dubai. We support
                  both local and international businesses in meeting regulatory
                  requirements and successfully entering the thriving UAE beauty
                  and cosmetics market.
                </p>
                <h2>What is Cosmetic Product Registration?</h2>
                <h3>Cosmetic Product Registration in Dubai Municipality</h3>
                <p>
                  The primary purpose of cosmetic product registration is to
                  ensure consumer safety. Dubai Municipality requires detailed
                  product information and documentation to evaluate safety,
                  ingredients, labeling, and regulatory compliance.
                </p>

                <p>
                  Cosmetic products cannot be imported, exported, sold, or
                  distributed in Dubai without official registration with Dubai
                  Municipality. This mandatory process ensures that only safe,
                  compliant products are available in the market.
                </p>
                <p>
                  Our expert team at Elitezen Services simplifies the
                  registration journey by managing documentation, regulatory
                  requirements, and approvals — helping you bring your products
                  to market efficiently while maintaining the highest safety
                  standards.
                </p>

                <h2>How to Register Cosmetic Products in Dubai Municipality</h2>
                <p>Estimated Timeframe: Approximately 22 days</p>
                <h3>Step 1: Obtain a UAE Commercial License</h3>
                <p>
                  The first requirement is a valid UAE-based commercial or
                  trading license. This may be a mainland or free zone license
                  from any of the seven emirates, provided the business activity
                  aligns with the cosmetic products being registered.
                </p>
                <h3>
                  Step 2: Register Your Company on the Dubai Municipality Portal
                </h3>
                <p>
                  Create and activate an account on the Dubai Municipality
                  portal. After activation, product registration services can be
                  accessed through the Montaji portal.
                </p>
                <h3>Step 3: Prepare Documentation & Submit Application</h3>
                <p>
                  Review product details and required documents, then create an
                  online application through the Montaji portal. Upload all
                  documents according to Dubai Municipality guidelines.
                </p>
                <h3>Step 4: Submission, Payment & Follow-up</h3>
                <p>
                  Submit the application, complete the payment process, and wait
                  for approval. Regular follow-up may be required to ensure
                  timely processing.
                </p>
                <h2>Product Registration Cost in Dubai Municipality</h2>
                <p>
                  Registration costs vary depending on the product category. For
                  example, the government fee for cosmetic product registration
                  is approximately AED 230 per product.
                </p>
                <h2>Registration Regulations in Dubai, UAE</h2>
                <p>
                  Dubai authorities regulate the manufacture, import, and sale
                  of cosmetic products to maintain safety and quality standards.
                  All cosmetic products must be registered before entering the
                  Dubai market, and businesses must hold a valid license related
                  to cosmetic activities.
                </p>
                <h2>Documents Required for Cosmetic Product Registration</h2>
                <ul>
                  <li>Clear product image</li>
                  <li>Product artwork/design files</li>
                  <li>Free Sale Certificate</li>
                  <li>Ingredients report (complete ingredient list)</li>
                  <li>Certificate of Analysis</li>
                  <li>GMP Certificate</li>
                  <li>
                    Additional supporting documents (e.g., Halal Certificate,
                    Organic Certificate, etc.)
                  </li>
                </ul>
                <h2>Label Requirements for Cosmetic Product Registration</h2>
                <p>
                  Product labeling is mandatory and must meet specific
                  regulatory standards. Labels are typically required in English
                  but may include bilingual or multilingual content, provided
                  the information remains consistent across all languages.
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
                  Our cosmetic product registration specialists review and
                  ensure that your documentation complies with Dubai
                  Municipality regulations. From initial consultation to final
                  approval, we manage the entire process to provide a
                  hassle-free and efficient experience.
                </p>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <h3>Expertise & Knowledge</h3>
                    <p>
                      Our dedicated team provides expert guidance throughout the
                      registration process, ensuring all documentation meets
                      regulatory standards and minimizing the risk of delays or
                      rejection.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Simplifying Compliance & Regulations</h3>
                    <p>
                      Dubai Municipality regulations can be complex. We
                      streamline the process by reviewing your product category,
                      labeling requirements, and compliance criteria to ensure
                      smooth registration.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Save Time & Cost</h3>
                    <p>
                      Elitezen Services manages the entire process from start to
                      finish, helping you reduce administrative burden, avoid
                      unnecessary delays, and achieve faster approvals.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Continuous Follow-up</h3>
                    <p>
                      Our team actively monitors your application through the
                      Montaji portal and maintains regular follow-ups with
                      authorities to ensure timely review and completion.
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
