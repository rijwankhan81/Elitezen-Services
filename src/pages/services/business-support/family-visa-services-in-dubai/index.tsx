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
        <title>Family Visa Services in Dubai | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <section>
                  <h1>Family Visa Services in Dubai</h1>

                  <p>
                    Bringing your family to the UAE is an important step, and at
                    Elitezen Services, we make the process simple and
                    stress-free. We provide complete PRO support for family visa
                    applications in Dubai, handling everything from
                    documentation to final visa stamping.
                  </p>

                  <p>
                    Whether you are an employee or an investor, our team ensures
                    a smooth and efficient process so you can focus on settling
                    your family comfortably in the UAE.
                  </p>
                </section>

                <section>
                  <h2>Who Can Sponsor a Family in the UAE?</h2>

                  <p>
                    Any UAE resident holding a valid residence visa (employment
                    or investor visa) can sponsor their immediate family
                    members, including spouse and children, subject to
                    eligibility criteria.
                  </p>

                  <ul>
                    <li>
                      Minimum salary requirement: AED 4,000 or AED 3,000 +
                      accommodation
                    </li>
                    <li>Valid UAE residence visa</li>
                    <li>Proof of accommodation (Ejari)</li>
                  </ul>

                  <p>
                    Since 2019, profession is no longer a restriction for family
                    sponsorship. Eligibility is now primarily based on meeting
                    the income criteria set by UAE authorities.
                  </p>
                </section>

                <section>
                  <h2>Family Visa Process in Dubai</h2>

                  <ol>
                    <li>
                      <strong>Entry Permit Processing</strong> – Initial
                      approval for family entry
                    </li>
                    <li>
                      <strong>Medical Test</strong> – Mandatory health screening
                    </li>
                    <li>
                      <strong>Emirates ID Application</strong> – Typing and
                      biometric (fingerprint) registration
                    </li>
                    <li>
                      <strong>Medical Insurance</strong> – Required for visa
                      approval
                    </li>
                    <li>
                      <strong>Visa Stamping</strong> – Final residence visa
                      approval
                    </li>
                  </ol>
                </section>

                <section>
                  <h2>Sponsoring Family Members</h2>

                  <h3>Spouse & Children</h3>
                  <p>
                    Residents can sponsor their spouse and children by
                    submitting proof of relationship, such as an attested
                    marriage certificate (for spouse) and birth certificates
                    (for children).
                  </p>

                  <h3>Daughters</h3>
                  <p>
                    Daughters can be sponsored as long as they remain unmarried.
                  </p>

                  <h3>Sons</h3>
                  <p>
                    Sons can be sponsored up to the age of 18. If they are
                    studying, sponsorship can be extended up to the age of 21
                    with valid proof of education.
                  </p>

                  <h3>Sponsoring Two Wives</h3>
                  <p>
                    In specific cases, a Muslim resident may sponsor two wives,
                    subject to approval and conditions set by the authorities.
                  </p>
                </section>

                <section>
                  <h2>Women Sponsoring Family</h2>

                  <p>
                    Women can sponsor their husband and children if they meet
                    certain criteria:
                  </p>

                  <ul>
                    <li>
                      Profession in approved categories (e.g., doctor, engineer,
                      teacher, nurse)
                    </li>
                    <li>
                      Minimum salary of AED 10,000 or AED 8,000 + accommodation
                    </li>
                  </ul>

                  <p>
                    In Dubai, exceptions may apply if the salary exceeds AED
                    10,000, subject to special approval from immigration
                    authorities.
                  </p>

                  <p>
                    A single mother can sponsor her child, provided all required
                    documentation is submitted.
                  </p>

                  <p>
                    <strong>Note:</strong> If the father meets sponsorship
                    requirements, the mother cannot sponsor the children.
                  </p>
                </section>

                <section>
                  <h2>Required Documents for Family Visa</h2>

                  <ul>
                    <li>
                      Sponsor’s passport, residence visa, Emirates ID, and
                      photograph
                    </li>
                    <li>Family member’s passport copy and photograph</li>
                    <li>
                      Attested relationship certificates (marriage/birth
                      certificates)
                    </li>
                    <li>Labor contract (MOHRE) or salary certificate</li>
                    <li>Ejari (tenancy contract)</li>
                    <li>Latest DEWA bill</li>
                    <li>Bank statements (last 3 months)</li>
                  </ul>
                </section>

                <section>
                  <h2>How Elitezen Services Can Help</h2>

                  <p>
                    Our experienced PRO team manages the entire family visa
                    process, ensuring all requirements are met and documents are
                    correctly prepared. We aim to provide a smooth, transparent,
                    and hassle-free experience for every client.
                  </p>

                  <div>
                    <div>
                      <h3>Complete PRO Support</h3>
                      <p>
                        End-to-end assistance from application to visa stamping.
                      </p>
                    </div>

                    <div>
                      <h3>Expert Guidance</h3>
                      <p>
                        Clear advice on eligibility, documentation, and
                        requirements.
                      </p>
                    </div>

                    <div>
                      <h3>Fast Processing</h3>
                      <p>Efficient handling to minimize delays.</p>
                    </div>

                    <div>
                      <h3>Stress-Free Experience</h3>
                      <p>
                        We handle the process so you can focus on your family.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2>Disclaimer</h2>
                  <p>
                    The information provided is for general guidance only and
                    may vary depending on individual cases. We recommend
                    consulting our team or contacting the relevant authority
                    (GDRFA) for the most accurate and up-to-date information
                    before proceeding.
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
