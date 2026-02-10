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
          Document Attestation Services in Dubai | Elitezen Services
        </title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>Document Attestation Services in Dubaie</h1>

                <p>
                  Elitezen Services provides reliable and professional document
                  attestation services in Dubai. With more than 10 years of
                  industry experience, we assist individuals and businesses in
                  authenticating their documents so they can be legally
                  recognized and used across the UAE and GCC countries.
                </p>
                <p>
                  Our streamlined and transparent approach ensures a fast,
                  efficient, and hassle-free attestation process, giving you
                  complete peace of mind.
                </p>
                <h2>Attestation Services in Dubai</h2>
                <p>
                  We provide comprehensive document attestation support through
                  various government authorities and international consulates,
                  including:
                </p>
                <ul>
                  <li>Ministry of Foreign Affairs (MOFA) Attestation</li>
                  <li>Ministry of Justice, Dubai</li>
                  <li>Indian Consulate Attestation in Dubai</li>
                  <li>Pakistan Consulate Attestation in Dubai</li>
                  <li>USA Consulate Attestation in Dubai</li>
                  <li>British Consulate Attestation in Dubai</li>
                  <li>Document Attestation from Home Country Authorities</li>
                </ul>
                <h2>Marriage Certificate Attestation</h2>
                <p>
                  A marriage certificate serves as official proof of a legal
                  marriage, including details such as the date, place, and
                  issuing authority. When using a marriage certificate outside
                  the country of issuance, attestation is required.
                </p>

                <h3>General Attestation Process:</h3>
                <ul>
                  <li>
                    Attestation by the issuing authority in the home country
                    where the marriage took place.
                  </li>
                  <li>
                    Attestation by the embassy or consulate of the destination
                    country.
                  </li>
                  <li>
                    Final attestation within the country where the document will
                    be used.
                  </li>
                </ul>
                <h3>Birth Certificate Attestation</h3>
                <p>
                  A birth certificate verifies essential information such as
                  date of birth, place of birth, and parental details. For
                  international use, the document must undergo an attestation
                  process.
                </p>
                <h3>General Attestation Process:</h3>
                <ul>
                  <li>
                    Attestation in the home country where the birth certificate
                    was issued.
                  </li>
                  <li>
                    Embassy or consulate attestation for the destination
                    country.
                  </li>
                  <li>
                    Final attestation in the country where the document will be
                    presented.
                  </li>
                </ul>
                <h3>Corporate Document Attestation in Dubai</h3>
                <p>
                  We also provide attestation services for business and
                  corporate documents, including:
                </p>
                <ul>
                  <li>Company Documents Attestation (MOFA)</li>
                  <li>Corporate Document Attestation</li>
                  <li>Power of Attorney (POA) Attestation</li>
                  <li>Board Resolution Attestation</li>
                  <li>Bank Statement Attestation</li>
                  <li>Other Corporate Documentation</li>
                </ul>
                <h3>Urgent Attestation Services</h3>
                <p>
                  We offer urgent and premium attestation services for clients
                  who require faster processing. Documents can be attested
                  through the Ministry of Foreign Affairs and Ministry of
                  Justice. Please note that international attestation timelines
                  may vary depending on country-specific procedures and working
                  schedules.
                </p>
                <h3>Transparent Process & Pricing</h3>
                <p>
                  At Elitezen Services, we maintain complete transparency in our
                  services and pricing. All attestation costs clearly include:
                </p>
                <ul>
                  <li>Government fees</li>
                  <li>Service charges for professional assistance</li>
                </ul>
                <p>
                  Elitezen Services is a trusted Business Setup Consultant and
                  PRO Services provider in Dubai, dedicated to delivering
                  reliable and efficient solutions.
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
